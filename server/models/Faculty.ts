
import mongoose from 'mongoose';

const facultySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  department: {
    type: String,
    required: true,
    trim: true
  },
  designation: {
    type: String,
    required: true,
    trim: true
  },
  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female', 'Other']
  },
  imageUrl: {
    type: String,
    default: null
  }
}, {
  timestamps: true
});

export const Faculty = mongoose.model('Faculty', facultySchema);
