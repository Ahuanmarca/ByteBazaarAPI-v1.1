import mongoose from 'mongoose';

const { ObjectId } = mongoose.Types;

const ordersData = [
  {
    date: '2024-01-16',
    total: 100,
    user: new ObjectId('65c092e67aaecf4937ffad2f'), // Alice
    products: [
      {
        product: new ObjectId('65c092e67aaecf4937ffad34'), // EldenRing PS4
        quantity: 1,
        price: 50,
      },
      {
        product: new ObjectId('65c092e67aaecf4937ffad37'), // God of War PS4
        quantity: 1,
        price: 50,
      },
    ],
  },
  {
    date: '2023-12-24',
    total: 50,
    user: new ObjectId('65c092e67aaecf4937ffad30'), // Bob
    products: [
      {
        product: new ObjectId('65c092e67aaecf4937ffad41'), // Metroid Prime Switch
        quantity: 1,
        price: 50,
      },
    ],
  },
];

export default ordersData;
