import { Request, Response } from 'express';
import { Faculty } from '../models/Faculty';
import { Gallery } from '../models/Gallery';
import { CellsCommittees } from '../models/CellsCommittees';
import { ManagementTeam } from '../models/ManagementTeam';

export const publicController = {
  getAllFaculty: async (req: Request, res: Response) => {
    try {
      const faculty = await Faculty.find({}).sort({ createdAt: -1 });
      res.json({ success: true, data: faculty });
    } catch (error) {
      console.error('Get Faculty error:', error);
      res.status(500).json({ message: 'Error fetching faculty data' });
    }
  },

  getAllGallery: async (req: Request, res: Response) => {
    try {
      const gallery = await Gallery.find({}).sort({ createdAt: -1 });
      res.json({ data: gallery });
    } catch (error) {
      console.error('Get Gallery error:', error);
      res.status(500).json({ message: 'Error fetching gallery data' });
    }
  },

  getAllCellsCommittees: async (req: Request, res: Response) => {
    try {
      const cellsCommittees = await CellsCommittees.find({}).sort({ createdAt: -1 });
      res.json({ success: true, data: cellsCommittees });
    } catch (error) {
      console.error('Get Cells & Committees error:', error);
      res.status(500).json({ message: 'Error fetching cells & committees data' });
    }
  },

  getAllManagementTeam: async (req: Request, res: Response) => {
    try {
      const managementTeam = await ManagementTeam.find({}).sort({ createdAt: -1 });
      res.json({ success: true, data: managementTeam });
    } catch (error) {
      console.error('Get Management Team error:', error);
      res.status(500).json({ message: 'Error fetching management team data' });
    }
  },
};