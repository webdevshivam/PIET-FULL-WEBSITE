
import mongoose from 'mongoose';

const gallerySchema = new mongoose.Schema({
  year: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  imageUrl: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

export const Gallery = mongoose.model('Gallery', gallerySchema);
