/* eslint-disable no-console */
import PlatformModel from './platforms.model.js';

async function getById({ id }) {
  try {
    const platform = await PlatformModel.findById(id).lean();
    return platform;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export {
  // eslint-disable-next-line import/prefer-default-export
  getById,
};
