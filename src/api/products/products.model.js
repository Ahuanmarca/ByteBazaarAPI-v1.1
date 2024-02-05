import { Schema, model } from 'mongoose';

const { ObjectId } = Schema.Types;

const productsSchema = new Schema({
  gameTitle: {
    type: ObjectId,
    required: true,
    ref: 'GameTitle',
  },
  platform: {
    type: ObjectId,
    required: true,
    ref: 'Platform',
  },
  stock: {
    type: Number,
    required: true,
  },
  listedDate: {
    type: Date,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const productModel = model('Product', productsSchema);
export default productModel;
