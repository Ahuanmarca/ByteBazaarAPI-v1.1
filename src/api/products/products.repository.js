import ProductsModel from './products.model.js';
import Platform from '../platforms/platforms.model.js';
import GameTitle from '../gameTitles/gameTitles.model.js';
import Genre from '../genres/genres.model.js';

async function getAll({ skip, limit }) {
  const products = await ProductsModel
    .find({})
    .select('stock price')
    .populate({
      path: 'gameTitle',
      select: '-_id -description -__v',
      populate: {
        path: 'genres',
        select: '-_id -__v',
      },
    })
    .populate({ path: 'platform', select: '-__v' })
    .sort({ listedDate: -1 })
    .skip(skip)
    .limit(limit)
    .lean();
  return products;
}

async function getById({ id }) {
  const product = await ProductsModel
    .findById(id)
    .populate({
      path: 'gameTitle',
      populate: {
        path: 'genres',
        select: '-__v',
      },
    })
    .populate('platform')
    .lean();
  return product;
}

async function getRecommended({ platformId, gameTitleIds }) {
  const recommendedProducts = await ProductsModel
    .find({
      platform: platformId,
      gameTitle: { $in: gameTitleIds },
    })
    .sort({ listedDate: -1 })
    .populate('platform')
    .populate('gameTitle')
    .lean();
  return recommendedProducts;
}

const getRelated = async ({ gameTitleIds, product, limit = 3 }) => {
  const relatedProducts = await ProductsModel
    .aggregate([
      { $match: { _id: { $ne: product }, gameTitle: { $in: gameTitleIds } } },
      { $sample: { size: limit } },
    ])
    .exec();
  await GameTitle.populate(relatedProducts, { path: 'gameTitle' });
  await Platform.populate(relatedProducts, { path: 'platform' });

  // TODO: Populate genres inside populated gameTitles (currently NOT WORKING!)
  // eslint-disable-next-line no-restricted-syntax
  for await (const prod of relatedProducts) {
    Genre.populate(prod.gameTitle, { path: 'genres' });
  }

  return relatedProducts;
};

async function getPricesAndStockById({ productIds }) {
  const pricesAndStock = await ProductsModel
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
  const res = await ProductsModel.bulkWrite(productsBulk);
  return res;
}

export {
  getAll,
  getById,
  getRecommended,
  getRelated,
  getPricesAndStockById,
  updateStock,
};
