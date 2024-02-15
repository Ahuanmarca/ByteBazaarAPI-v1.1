import * as genresRepository from './genres.repository.js';
import { formatGenres } from '../../utils/formatters.js';

async function getAll() {
  const genres = await genresRepository.getAll();
  return formatGenres(genres);
}

async function getById(id) {
  const genre = await genresRepository.getById(id);
  return formatGenres([genre]);
}

async function getByNames(genres) {
  const foundGenres = await genresRepository.getByNames(genres);
  if (!foundGenres) return 'Genres not found';
  return formatGenres(foundGenres);
}

async function create(genres) {
  const createdGenres = await genresRepository.upsertMany(genres);
  return formatGenres(createdGenres);
}

export {
  getById,
  getAll,
  getByNames,
  create,
};
