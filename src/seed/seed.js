/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
// import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Genre from '../api/genres/genres.model.js';
import GameTitle from '../api/gameTitles/gameTitles.model.js';

import genresData from './genresData.js';
import gameTitlesData from './gameTitlesData.js';

dotenv.config();

main().catch((err) => console.log(err));

async function main() {
  // const server = express();
  const { MONGO_URL, MONGO_DB_NAME } = process.env;

  await mongoose.connect(MONGO_URL, {
    dbName: MONGO_DB_NAME,
  });
  console.log(`Successfully connected to ${MONGO_DB_NAME}`);

  // SEED!
  await Genre.deleteMany();
  const newGenres = await Genre.insertMany(genresData);
  await GameTitle.deleteMany();
  const newGameTitles = await GameTitle.insertMany(gameTitlesData);

  console.log({
    newGenres: newGenres.length,
    newGameTitles: newGameTitles.length,
  });

  mongoose.connection.close();
  console.log('Closed DB connection');
}
