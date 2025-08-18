
import mongoose from 'mongoose';

const iprSchema = new mongoose.Schema({
  year: {
    type: String,
    required: true,
    trim: true
  },
  grantNo: {
    type: String,
    required: true,
    trim: true
  },
  affiliation: {
    type: String,
    required: true,
    trim: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
});

export const IPR = mongoose.model('IPR', iprSchema);
