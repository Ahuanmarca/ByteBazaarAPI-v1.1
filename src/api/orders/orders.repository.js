import OrdersModel from './orders.model.js';

async function getOrdersByUserId({ userId }) {
  const orders = await OrdersModel
    .find({ user: userId })
    .sort({ date: -1 })
    .populate({
      path: 'products.product',
      populate: [
        {
          path: 'gameTitle',
          populate: {
            path: 'genres',
          },
        },
        {
          path: 'platform',
        },
      ],
    })
    .lean();
  return orders;
}

async function log({ userId, total, products }) {
  const order = await OrdersModel.create({ user: userId, total, products });
  return order;
}

export {
  getOrdersByUserId,
  log,
};
