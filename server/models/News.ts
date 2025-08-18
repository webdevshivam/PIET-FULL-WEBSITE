
import mongoose from 'mongoose';

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  importance: {
    type: String,
    required: true,
    enum: ['Low', 'Medium', 'High', 'Critical']
  },
  link: {
    type: String,
    default: null
  },
  publishDate: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

export const News = mongoose.model('News', newsSchema);
