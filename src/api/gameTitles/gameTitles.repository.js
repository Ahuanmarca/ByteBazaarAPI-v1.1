/* eslint-disable no-param-reassign */
import GameTitle from './gameTitles.model.js';

async function getById({ id }) {
  try {
    const gameTitle = await GameTitle
      .findById(id)
      .populate({ path: 'genres', select: '-_id -__v' })
      .lean();
    return gameTitle;
  } catch (e) {
    console.log(e);
    return null;
  }
}

async function getAll() {
  const gameTitles = await GameTitle
    .find()
    .populate({ path: 'genres', select: '-__v' })
    .lean();
  if (gameTitles.length === 0) return 'No gameTitles found!';
  return gameTitles;
}

async function getByTitle(title) {
  const gameTitle = GameTitle.findOne({ title });
  return gameTitle;
}

async function create(newTitleData) {
  const newTitle = new GameTitle(newTitleData);
  await newTitle.save();
  return newTitle;
}

async function updateGenres(id, genresIds) {
  const updatedTitle = await GameTitle.findByIdAndUpdate(
    { _id: id },
    { $addToSet: { genresIds } },
    { new: true },
  );
  return updatedTitle;
}

async function softDelete(id) {
  let deletedTitle;
  try {
    deletedTitle = await GameTitle.findOneAndUpdate(
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
  const gameTitles = await GameTitle.find({
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
