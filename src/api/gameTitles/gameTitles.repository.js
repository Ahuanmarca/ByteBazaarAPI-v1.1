/* eslint-disable no-param-reassign */
import GameTitleModel from './gameTitles.model.js';

async function getById({ id }) {
  const gameTitle = await GameTitleModel
    .findById(id)
    .populate('genresId')
    .lean();
  gameTitle.genres = gameTitle.genresId.map((g) => g.name);
  delete gameTitle.genresId;
  return gameTitle;
}

async function getAll() {
  const gameTitles = await GameTitleModel
    .find()
    .populate('genresId')
    .lean();
  // Manipulating the objects to return 'genres: ['genre1', 'genre2']' array,
  // instead of a 'genresId' array with objects. Can I do this on the query?
  gameTitles.forEach((game) => {
    game.genres = game.genresId.map((g) => g.name);
    delete game.genresId;
  });
  return gameTitles;
}

async function getByProductId({ gameTitleId }) {
  const gameTitle = await GameTitleModel.findById(gameTitleId).lean();
  return gameTitle;
}

async function getByTitle(title) {
  const gameTitle = GameTitleModel.findOne({ title });
  return gameTitle;
}

async function create(newTitleData) {
  const newTitle = new GameTitleModel(newTitleData);
  await newTitle.save();
  return newTitle;
}

async function updateGenres(id, genresId) {
  const updatedTitle = await GameTitleModel.findByIdAndUpdate(
    { _id: id },
    { $addToSet: { genresId } },
    { new: true },
  );
  return updatedTitle;
}

export {
  getById,
  getAll,
  getByProductId,
  getByTitle,
  create,
  updateGenres,
};
