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

export {
  getById,
  getAll,
  getByNames,
};
