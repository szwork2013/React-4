import mongoose from 'mongoose';
import Session from './session';
const Schema = mongoose.Schema;

const modelSchema = new Schema({
  name: {
    first: { type: 'String', required: true },
    last: { type: 'String', required: true },
    middle: { type: 'String' },
    stage: { type: 'String' }
  },
  dob: { type: 'Date' },
  age: { type: 'Number' },
  isMinor: { type: 'Boolean', default: false },
  gender: { type: 'String' },
  sessions: [{ type: 'ObjectId'}]
});

export default mongoose.model('Model', modelSchema);
