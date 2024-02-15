import Genre from './genres.model.js';

async function getAll() {
  try {
    return await Genre.find({}).lean();
  } catch (e) {
    console.error(e);
    return null;
  }
}

async function getById(id) {
  try {
    return await Genre.findById(id).lean();
  } catch (e) {
    console.error(e);
    return null;
  }
}

async function getByNames(genresNames) {
  try {
    return await Genre.find({ name: { $in: genresNames } });
  } catch (e) {
    console.error(e);
    return null;
  }
}

async function upsertMany(genres) {
  const genresBulk = genres.map((g) => ({
    updateOne: {
      filter: { name: g },
      update: { name: g },
      upsert: true,
    },
  }));
  const res = await Genre.bulkWrite(genresBulk);
  return res;
}

export {
  getById,
  getAll,
  getByNames,
  upsertMany,
};
