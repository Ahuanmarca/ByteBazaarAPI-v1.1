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
  }],
});

const gameTitleModel = model('GameTitle', gameTitlesSchema, 'gameTitles');

export default gameTitleModel;
