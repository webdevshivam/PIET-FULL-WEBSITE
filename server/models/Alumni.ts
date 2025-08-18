
import mongoose from 'mongoose';

const alumniSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  batch: {
    type: String,
    required: true,
    trim: true
  },
  fromCity: {
    type: String,
    required: true,
    trim: true
  },
  currentCity: {
    type: String,
    required: true,
    trim: true
  },
  companyName: {
    type: String,
    required: true,
    trim: true
  },
  position: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  achievements: {
    type: String,
    default: null
  },
  photoUrl: {
    type: String,
    default: null
  }
}, {
  timestamps: true
});

export const Alumni = mongoose.model('Alumni', alumniSchema);
