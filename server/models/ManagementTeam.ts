import mongoose from 'mongoose';

const managementTeamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  branch: {
    type: String,
    required: true,
    trim: true
  },
  designation: {
    type: String,
    required: true,
    trim: true
  },
  mobileNo: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
});

export const ManagementTeam = mongoose.model('ManagementTeam', managementTeamSchema);