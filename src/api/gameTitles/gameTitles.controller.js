import * as gameTitlesService from './gameTitles.service.js';

async function getById(req, res) {
  const { id } = req.params;
  const gameTitles = await gameTitlesService.getById({ id });
  res.json(gameTitles);
}

async function getAll(req, res) {
  const gameTitles = await gameTitlesService.getAll();
  res.json(gameTitles);
}

async function getByProductId(req, res) {
  const productId = req.params.id;
  const gameTitles = await gameTitlesService.getByProductId(productId);
  res.json(gameTitles);
}

async function create(req, res) {
  const newGameTitle = await gameTitlesService.create(req.body);
  res.json(newGameTitle);
}

async function updateGenres(req, res) {
  const { id } = req.params;
  const { genres } = req.body;
  const updatedTitle = await gameTitlesService.updateGenres(id, genres);
  res.json(updatedTitle);
}

async function destroy(req, res) {
  const { id } = req.params;
  const deletedTitle = await gameTitlesService.destroy(id);
  res.json(deletedTitle);
}

export {
  getById,
  getAll,
  getByProductId,
  create,
  updateGenres,
  destroy,
};
