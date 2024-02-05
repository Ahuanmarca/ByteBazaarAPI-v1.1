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

async function log({ userId, total }) {
  const order = await OrdersModel.create({ user: userId, total });
  const { _id } = order;
  return _id;
}

export {
  getOrdersByUserId,
  log,
};
