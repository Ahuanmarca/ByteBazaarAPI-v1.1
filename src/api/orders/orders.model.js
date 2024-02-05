import { Schema, model } from 'mongoose';

const { ObjectId } = Schema.Types;

const ordersSchema = new Schema({
  user: {
    type: ObjectId,
    required: true,
  },
  products: [
    {
      product: {
        type: ObjectId,
        ref: 'Product',
      },
      quantity: {
        type: Number,
      },
      soldPrice: {
        type: Number,
        required: true,
      },
    },
  ],
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  total: {
    type: Number,
    required: true,
  },
});

const orderModel = model('Order', ordersSchema, 'orders');
export default orderModel;
