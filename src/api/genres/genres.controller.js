import * as genresService from './genres.service.js';

async function getAll(req, res) {
  const genres = await genresService.getAll();
  res.json(genres);
}

async function getById(req, res) {
  const { id } = req.params;
  const genre = await genresService.getById(id);
  res.json(genre);
}

async function getByNames(req, res) {
  const { genres } = req.body;
  const foundGenres = await genresService.getByNames(genres);
  res.json(foundGenres);
}

export {
  getById,
  getAll,
  getByNames,
};
