/* eslint-disable camelcase */
import GenreModel from './genres.model.js';
import Genres_GameTitlesModel from '../genres_gameTitles/genres_gameTitles.model.js';

async function getAll() {
  const genres = await GenreModel.find({}).lean();
  return genres;
}

async function getById(id) {
  const genre = await GenreModel.findById(id).lean();
  return genre;
}

async function getByNames(genresNames) {
  const genres = await GenreModel.find({ name: { $in: genresNames } });
  return genres;
}

async function upsertMany(genres) {
  const genresBulk = genres.map((g) => ({
    updateOne: {
      filter: { name: g },
      update: { name: g },
      upsert: true,
    },
  }));
  const res = await GenreModel.bulkWrite(genresBulk);
  return res;
}

async function getByTitleId(id) {
  const genres = await Genres_GameTitlesModel
    .find({ gameTitle_id: id })
    .populate('genre_id')
    .lean();
  const genresArray = genres.map((genre) => genre.genre_id.name);
  return genresArray;
}

export {
  getById,
  getAll,
  getByNames,
  upsertMany,
  getByTitleId,
};
