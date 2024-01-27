import * as productsRepository from './products.repository.js';

async function getAll({ skip, limit }) {
  const products = await productsRepository.getAll({ skip, limit });
  return products;
}

async function getById({ id }) {
  const product = await productsRepository.getById({ id });
  return product;
}

async function getPriceById({ id }) {
  const price = await productsRepository.getPriceById({ id });
  return price;
}

async function updateStock({ id, quantity }) {
  const currentStock = await productsRepository.updateStock({ id, quantity });
  return currentStock;
}

export {
  getAll,
  getById,
  getPriceById,
  updateStock,
};
