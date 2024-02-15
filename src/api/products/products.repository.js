import Product from './products.model.js';
import Platform from '../platforms/platforms.model.js';
import GameTitle from '../gameTitles/gameTitles.model.js';
import Genre from '../genres/genres.model.js';

/**
 * Rules:
 * - Return the object(s) queried from the database, as they come
 * - Don't alter them
 * - Should populate them when possible
 * - NOTE: Objects may be formatted in 'service', but not here
 */

async function getAll({ skip, limit }) {
  const products = await Product
    .find({})
    // .select('stock price')
    .populate({
      path: 'gameTitle',
      populate: {
        path: 'genres',
      },
    })
    .populate({ path: 'platform' })
    .sort({ listedDate: -1 })
    .skip(skip)
    .limit(limit)
    .lean();
  return products;
}

async function getById({ id }) {
  const product = await Product
    .findById(id)
    .populate({
      path: 'gameTitle',
      populate: {
        path: 'genres',
      },
    })
    .populate('platform')
    .lean();
  return product;
}

async function getRecommended({ platformId, gameTitleIds }) {
  const recommendedProducts = await Product
    .find({
      platform: platformId,
      gameTitle: { $in: gameTitleIds },
    })
    .sort({ listedDate: -1 })
    .populate('platform')
    .populate(
      {
        path: 'gameTitle',
        populate: {
          path: 'genres',
        },
      },
    )
    .lean();
  return recommendedProducts;
}

const getRelated = async ({ gameTitleIds, product, limit = 3 }) => {
  const relatedProducts = await Product
    .aggregate([
      { $match: { _id: { $ne: product }, gameTitle: { $in: gameTitleIds } } },
      { $sample: { size: limit } },
    ])
    .exec();
  await GameTitle.populate(relatedProducts, { path: 'gameTitle', populate: { path: 'genres' } });
  await Platform.populate(relatedProducts, { path: 'platform' });
  return relatedProducts;
};

async function getPricesAndStockById({ productIds }) {
  const pricesAndStock = await Product
    .find({ _id: { $in: productIds } })
    .select('price stock')
    .lean();
  return pricesAndStock;
}

async function updateStock({ products }) {
  const productsBulk = products.map((product) => ({
    updateOne: {
      filter: { _id: product.productId },
      update: { $inc: { stock: -product.quantity } },
    },
  }));
  const res = await Product.bulkWrite(productsBulk);
  return res;
}

async function findBy(data) {
  try {
    return await Product.findOne(data);
  } catch (e) {
    return null;
  }
}

async function create(data) {
  const newProduct = new Product(data);
  await GameTitle.populate(newProduct, { path: 'gameTitle' });
  await Platform.populate(newProduct, { path: 'platform' });
  await Genre.populate(newProduct, { path: 'gameTitle.genres' });
  newProduct.save();
  return newProduct;
}

export {
  getAll,
  getById,
  getRecommended,
  getRelated,
  getPricesAndStockById,
  updateStock,
  create,
  findBy,
};
