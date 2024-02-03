import mongoose from 'mongoose';

const { ObjectId } = mongoose.Types;

const platformsData = [
  {
    _id: new ObjectId('65be7c6ad525bda9b2ee3fb8'),
    name: 'PlayStation4',
  },
  {
    _id: new ObjectId('65be7c6ad525bda9b2ee3fb9'),
    name: 'PlayStation5',
  },
  {
    _id: new ObjectId('65be7c6ad525bda9b2ee3fba'),
    name: 'XBoxOne',
  },
  {
    _id: new ObjectId('65be7c6ad525bda9b2ee3fbb'),
    name: 'XBoxSeries',
  },
  {
    _id: new ObjectId('65be7c6ad525bda9b2ee3fbc'),
    name: 'NintendoSwitch',
  },
  {
    _id: new ObjectId('65be7c6ad525bda9b2ee3fbd'),
    name: 'PC',
  },
];

export default platformsData;
