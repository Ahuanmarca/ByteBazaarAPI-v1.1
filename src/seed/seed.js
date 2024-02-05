/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
// import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Genre from '../api/genres/genres.model.js';
import GameTitle from '../api/gameTitles/gameTitles.model.js';
import Platform from '../api/platforms/platforms.model.js';
import User from '../api/users/users.model.js';
import Product from '../api/products/products.model.js';
import Order from '../api/orders/orders.model.js';

import genresData from './genresData.js';
import gameTitlesData from './gameTitlesData.js';
import platformsData from './platformsData.js';
import usersData from './usersData.js';
import productsData from './productsData.js';
import ordersData from './ordersData.js';

dotenv.config();

main().catch((err) => console.log(err));

async function main() {
  // const server = express();
  const { MONGO_URL, MONGO_DB_NAME } = process.env;

  await mongoose.connect(MONGO_URL, {
    dbName: MONGO_DB_NAME,
  });
  console.log(`Successfully connected to ${MONGO_DB_NAME}`);

  // SEEDING!!
  await Genre.deleteMany();
  await GameTitle.deleteMany();
  await Platform.deleteMany();
  await User.deleteMany();
  await Product.deleteMany();
  await Order.deleteMany();

  const newGenres = await Genre.insertMany(genresData);
  const newGameTitles = await GameTitle.insertMany(gameTitlesData);
  const newPlatforms = await Platform.insertMany(platformsData);
  const newUsers = await User.insertMany(usersData);
  const newProducts = await Product.insertMany(productsData);
  const newOrders = await Order.insertMany(ordersData);

  console.log({
    newGenres: newGenres.length,
    newGameTitles: newGameTitles.length,
    newPlatforms: newPlatforms.length,
    newUsers: newUsers.length,
    newProducts: newProducts.length,
    newOrders: newOrders.length,
  });

  mongoose.connection.close();
  console.log('Closed DB connection');
}
