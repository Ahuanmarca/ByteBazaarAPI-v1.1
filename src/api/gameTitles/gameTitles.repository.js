/* eslint-disable no-param-reassign */
import GameTitleModel from './gameTitles.model.js';

async function getById({ id }) {
  const gameTitle = await GameTitleModel
    .findById(id)
    .populate('genresId')
    .lean();
  if (!gameTitle) return 'gameTitle not found!';
  gameTitle.genres = gameTitle.genresId.map((g) => g.name);
  delete gameTitle.genresId;
  return gameTitle;
}

async function getAll() {
  const gameTitles = await GameTitleModel
    .find()
    .populate('genresId')
    .lean();
  if (gameTitles.length === 0) return 'No gameTitles found!';
  // Manipulating the objects to return 'genres: ['genre1', 'genre2']' array,
  // instead of a 'genresId' array with objects. Can I do this on the query?
  gameTitles.forEach((game) => {
    game.genres = game.genresId.map((g) => g.name);
    delete game.genresId;
  });
  return gameTitles;
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

async function destroy(id) {
  const deletedTitle = await GameTitleModel.findByIdAndDelete(id);
  if (!deletedTitle) return 'GameTitle does not exist!';
  return { deleted: deletedTitle };
}

export {
  getById,
  getAll,
  getByTitle,
  create,
  updateGenres,
  destroy,
};
