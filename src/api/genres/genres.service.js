import * as genresRepository from './genres.repository.js';

async function getAll() {
  const genres = await genresRepository.getAll();
  return genres;
}

async function getById(id) {
  const genre = await genresRepository.getById(id);
  return genre;
}

async function getByNames(genres) {
  const foundGenres = await genresRepository.getByNames(genres);
  return foundGenres;
}

async function create(genres) {
  const createdGenres = await genresRepository.upsertMany(genres);
  return createdGenres;
}

export {
  getById,
  getAll,
  getByNames,
  create,
};
