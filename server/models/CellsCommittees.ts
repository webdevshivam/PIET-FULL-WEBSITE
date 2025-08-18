
import mongoose from 'mongoose';

const cellsCommitteesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  pdfUrl: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

export const CellsCommittees = mongoose.model('CellsCommittees', cellsCommitteesSchema);
