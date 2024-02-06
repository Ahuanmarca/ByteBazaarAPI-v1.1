/* eslint-disable no-param-reassign */
import GameTitleModel from './gameTitles.model.js';

async function getById({ id }) {
  const gameTitle = await GameTitleModel
    .findById(id)
    .populate({ path: 'genres', select: '-_id -__v' })
    .lean();
  if (!gameTitle) return 'gameTitle not found!';
  return gameTitle;
}

async function getAll() {
  const gameTitles = await GameTitleModel
    .find()
    .populate({ path: 'genres', select: '-__v' })
    .lean();
  if (gameTitles.length === 0) return 'No gameTitles found!';
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

async function updateGenres(id, genresIds) {
  const updatedTitle = await GameTitleModel.findByIdAndUpdate(
    { _id: id },
    { $addToSet: { genresIds } },
    { new: true },
  );
  return updatedTitle;
}

async function softDelete(id) {
  let deletedTitle;
  try {
    deletedTitle = await GameTitleModel.findOneAndUpdate(
      { _id: id },
      { deleted: true },
      { new: true },
    );
  } catch (e) {
    deletedTitle = null;
  }
  return deletedTitle;
}

// TODO: Complete this route!
async function getByGenreIds(genreIds) {
  const gameTitles = await GameTitleModel.find({
    genres: { $in: genreIds },
  }).populate('genres');
  return gameTitles;
}

export {
  getById,
  getAll,
  getByTitle,
  create,
  updateGenres,
  softDelete,
  getByGenreIds,
};
