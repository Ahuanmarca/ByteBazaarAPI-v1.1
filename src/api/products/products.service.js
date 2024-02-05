import * as productsRepository from './products.repository.js';
import * as ordersRepository from '../orders/orders.repository.js';
import * as gameTitlesRepository from '../gameTitles/gameTitles.repository.js';
import * as usersService from '../users/users.service.js';

async function getAll({ skip, limit }) {
  const products = await productsRepository.getAll({ skip, limit });
  return products;
}

async function getById({ id }) {
  const product = await productsRepository.getById({ id });
  return product;
}

async function getRecommended({ userId }) {
  const userOrders = await ordersRepository.getOrdersByUserId({ userId });

  // Return the most recent products if no orders have been placed yet
  if (!(userOrders && userOrders.length >= 1)) {
    const products = await productsRepository.getAll({ skip: 0, limit: 10 });
    return products;
  }
  const lastOrder = userOrders.slice(0, 1)[0]; // TODO: Why .slice ??

  // TODO: Investigate WHY do I need to select products[0].product 😵‍💫
  const platformId = lastOrder.products[0].product.platform._id;
  const genreIds = lastOrder.products[0].product.gameTitle.genres.map((g) => g._id);
  const gameTitles = await gameTitlesRepository.getByGenreIds(genreIds);
  const gameTitleIds = gameTitles.map((item) => item._id);

  const recommended = await productsRepository.getRecommended({ platformId, gameTitleIds });
  return recommended;
}

//! BUG: App crashes when product is not found (i.e. invalid id)
async function getRelated({ id }) {
  const product = await productsRepository.getById({ id });
  const { gameTitle } = product;
  const { genres } = gameTitle;
  const genreIds = genres.map((g) => g._id); // BUG FIX 🐛
  const gameTitles = await gameTitlesRepository.getByGenreIds(genreIds);
  const gameTitleIds = gameTitles.map((item) => item._id); // BUG FIX 🐛
  const related = await productsRepository.getRelated({ gameTitleIds, product });
  return related;
}

function addDataToProducts({ products, pricesAndStock }) {
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    for (let j = 0; j < pricesAndStock.length; j++) {
      const priceAndStock = pricesAndStock[j];
      if (product.product === priceAndStock._id.valueOf()) {
        product.price = priceAndStock.price;
        product.stock = priceAndStock.stock;
      }
    }
  }
  return products;
}

async function buy({ orderData, user }) {
  const { products } = orderData;
  const productIds = products.map((product) => product.product);

  const pricesAndStock = await productsRepository.getPricesAndStockById({ productIds });
  addDataToProducts({ products, pricesAndStock });
  const isInsufficentStock = products.filter((product) => product.quantity > product.stock);
  if (isInsufficentStock.length) {
    const result = {
      msg: 'There is not enough stock of the following item/s to complete your order:',
      error: isInsufficentStock,
    };
    return result;
  }
  const { paymentMethod } = orderData;
  let total = 0;
  products.forEach((product) => {
    const productTotal = product.price * product.quantity;
    total += productTotal;
  });

  // TODO: Don't go to usersService, should go to usersRepository to avoid circular dependencies
  const updatedCredit = await usersService.updateCredit({ user, paymentMethod, total });
  if (updatedCredit.error) {
    return updatedCredit;
  }

  await productsRepository.updateStock({ products });
  const userId = user._id;
  const order = await ordersRepository.log({ userId, total, products });

  const result = {
    order,
    [paymentMethod]: updatedCredit,
  };

  return result;
}

// TODO: 'product.product' is very confusing (55 and 65). Improve it!

export {
  getAll,
  getById,
  getRecommended,
  getRelated,
  buy,
};
