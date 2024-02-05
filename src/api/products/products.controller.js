import * as productsService from './products.service.js';

// DEBUG DATA
const debugUser = {
  _id: '65c092e67aaecf4937ffad30',
  firstName: 'Bob',
  lastName: 'Marley',
  isAdmin: false,
  email: 'bob@bob.bo',
  password: '$2b$05$wR9P9tH0fOQjnpCHmYN5jepdnr1bKhxnk.gN87tA.LjSyh9gONGo.',
  validated: true,
  credit: 500,
  points: 0,
  __v: 0,
};

async function getAll(req, res) {
  const { skip, limit } = req.query;
  const products = await productsService.getAll({ skip, limit });
  res.json({ products });
}

async function getById(req, res) {
  const { id } = req.params;
  const product = await productsService.getById({ id });
  res.json({ product });
}

async function getRecommended(req, res) {
  const userId = req.user?._id || '65c092e67aaecf4937ffad2f'; // DEBUG User with orders
  // const userId = req.user?._id || '65c092e67aaecf4937ffad31'; // DEBUG User without orders
  const products = await productsService.getRecommended({ userId });
  res.json({ products });
}

async function getRelated(req, res) {
  const { id } = req.params;
  const products = await productsService.getRelated({ id });
  res.json({ products });
}

async function buy(req, res) {
  const { body } = req;
  const user = req.body.user || debugUser; // Use DEBUG User if not logged
  // res.json({ body, user }); return;
  const result = await productsService.buy({ orderData: body, user });
  if (result.error) {
    res.status(400);
    return res.json(result);
  }
  return res.json(result);
}

export {
  getAll,
  getById,
  getRecommended,
  getRelated,
  buy,
};
