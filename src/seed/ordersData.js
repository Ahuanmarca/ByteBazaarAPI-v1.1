// TODO: Update orders schemas and adjust this data set

const ordersData = [
  {
    date: '2024-01-16',
    total: 59.56,
    user: 'Jona',
  },
];

const ordersProductsData = [
  {
    product: {
      gameTitle: 'Elden Ring',
      platform: 'Playstation4',
    },
    order_id: '', // use id from order above
    quantity: 1,
    price_sold: 59.56,
  },
];

export {
  ordersData,
  ordersProductsData,
};
