import { Schema, model } from 'mongoose';

const { ObjectId } = Schema.Types;

const gameTitlesSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  genresId: [{
    type: ObjectId,
    ref: 'Genre',
    /**
     * ! CAREFUL
     * ! Please don't use 'unique: true' restriction here
     * It casues error when inserting repeated ObjectIds (as foreign keys)
     * in different documents, but the real problem is that you can't just
     * delete the restriction to fix the problem because it creates an 'index'
     * on MongoDb that you need to delete manually (I don't know how).
     */
  }],
});

const gameTitleModel = model('GameTitle', gameTitlesSchema, 'gameTitles');

export default gameTitleModel;
