import mongoose from 'mongoose';
import Model from './model';
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  name: { type: 'String', required: true },
  date: { type: 'Date', default: Date.now, required: true },
  models: [{ type: 'ObjectId', ref: 'Model', required: true }]
});

export default mongoose.model('Session', sessionSchema);
