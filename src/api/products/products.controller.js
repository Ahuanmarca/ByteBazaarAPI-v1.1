import * as productsService from './products.service.js';

async function getAll(req, res) {
  const { skip, limit } = req.query;
  const products = await productsService.getAll({ skip, limit });
  res.json(products);
}

async function getById(req, res) {
  const { id } = req.params;
  const product = await productsService.getById({ id });
  res.json(product);
}

async function getRecommended(req, res) {
  const userId = req.user?._id || '65c092e67aaecf4937ffad2f'; // DEBUG User with orders
  // const userId = req.user?._id || '65c092e67aaecf4937ffad31'; // DEBUG User without orders
  const products = await productsService.getRecommended({ userId });
  res.json(products);
}

async function getRelated(req, res) {
  const { id } = req.params;
  const products = await productsService.getRelated({ id });
  res.json(products);
}

async function buy(req, res) {
  const { body } = req;
  const { user } = req;
  const result = await productsService.buy({ orderData: body, user });
  if (result.error) {
    res.status(400);
    return res.json(result);
  }
  return res.json(result);
}

async function create({ body }, res) {
  const {
    gameTitle, platform, stock, price,
  } = body;
  if (!gameTitle || !platform || !stock || !price) {
    return res.json('Missing data to create Product.');
  }
  const newProduct = await productsService.create(body);
  return res.json(newProduct);
}

export {
  getAll,
  getById,
  getRecommended,
  getRelated,
  buy,
  create,
};
