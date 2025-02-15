import * as gameTitlesRepository from './gameTitles.repository.js';
import * as productsRepository from '../products/products.repository.js';
import * as genresRepository from '../genres/genres.repository.js';
import { formatGameTitle } from '../../utils/formatters.js';

async function getById({ id }) {
  const gameTitle = await gameTitlesRepository.getById({ id });
  return formatGameTitle(gameTitle);
}

async function getAll() {
  const gameTitles = await gameTitlesRepository.getAll();
  return gameTitles.map((g) => formatGameTitle(g));
}

async function getByProductId(productId) {
  const product = await productsRepository.getById({ id: productId });
  return formatGameTitle(product.gameTitle);
}

async function create(newTitleData) {
  const {
    title, description, image, genres,
  } = newTitleData;

  // Abort GameTitle creation if GameTitle already exists OR some genre does not exist
  const foundGameTitle = await gameTitlesRepository.getByTitle(title);
  if (foundGameTitle) return 'GameTitle aready exists';
  const foundGenres = await genresRepository.getByNames(genres);
  if (foundGenres.length !== genres.length) return 'One or more genres not found. GameTitle creation aborted.';

  const newGameTitle = await gameTitlesRepository.create({
    title,
    description,
    image,
    genres: foundGenres.map((genre) => genre._id),
  });
  return { created: formatGameTitle(newGameTitle) };
}

async function updateGenres(id, genres) {
  const foundGenres = await genresRepository.getByNames(genres);
  if (foundGenres.length !== genres.length) return 'Aborted: One or more genres not found.';
  const genresIds = foundGenres.map((g) => g._id);

  const updatedTitle = await gameTitlesRepository.updateGenres(id, genresIds);
  return formatGameTitle(updatedTitle);
}

async function softDelete(id) {
  const deletedTitle = await gameTitlesRepository.softDelete(id);
  if (!deletedTitle) return 'gameTitle not found';
  return formatGameTitle(deletedTitle);
}

export {
  getById,
  getAll,
  getByProductId,
  create,
  updateGenres,
  softDelete,
};
