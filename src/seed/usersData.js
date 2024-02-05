import mongoose from 'mongoose';

const { ObjectId } = mongoose.Types;

const usersData = [
  {
    _id: new ObjectId('65c0265c50334aba5e915c92'),
    firstName: 'Jona',
    lastName: 'Hidalgo',
    isAdmin: true,
    email: 'jona@mailFalso.com',
    password: '$2b$05$wR9P9tH0fOQjnpCHmYN5jepdnr1bKhxnk.gN87tA.LjSyh9gONGo.',
    validated: true,
    credit: 500,
    points: 0,
  },
  {
    _id: new ObjectId('65c092e67aaecf4937ffad2f'),
    firstName: 'Alice',
    lastName: 'Cooper',
    isAdmin: false,
    email: 'alice@alice.al',
    password: '$2b$05$wR9P9tH0fOQjnpCHmYN5jepdnr1bKhxnk.gN87tA.LjSyh9gONGo.',
    validated: true,
    credit: 500,
    points: 0,
  },
  {
    _id: new ObjectId('65c092e67aaecf4937ffad30'),
    firstName: 'Bob',
    lastName: 'Marley',
    isAdmin: false,
    email: 'bob@bob.bo',
    password: '$2b$05$wR9P9tH0fOQjnpCHmYN5jepdnr1bKhxnk.gN87tA.LjSyh9gONGo.',
    validated: true,
    credit: 500,
    points: 0,
  },
  {
    _id: new ObjectId('65c092e67aaecf4937ffad31'),
    firstName: 'Charlie',
    lastName: 'Parker',
    isAdmin: false,
    email: 'charlie@charlie.ch',
    password: '$2b$05$wR9P9tH0fOQjnpCHmYN5jepdnr1bKhxnk.gN87tA.LjSyh9gONGo.',
    validated: true,
    credit: 500,
    points: 0,
  },
];

export default usersData;
