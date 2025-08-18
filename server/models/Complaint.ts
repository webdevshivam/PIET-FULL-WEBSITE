
import mongoose from 'mongoose';

const complaintSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  studentId: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  department: {
    type: String,
    required: true,
    trim: true
  },
  batch: {
    type: String,
    required: true,
    trim: true
  },
  complaintCategory: {
    type: String,
    required: true,
    trim: true
  },
  subject: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  urgency: {
    type: String,
    required: true,
    enum: ['low', 'medium', 'high', 'critical']
  },
  status: {
    type: String,
    default: 'pending',
    enum: ['pending', 'in-progress', 'resolved', 'closed']
  },
  attachmentUrl: {
    type: String,
    default: null
  }
}, {
  timestamps: true
});

export const Complaint = mongoose.model('Complaint', complaintSchema);
