import { Request, Response } from 'express';
import { CellsCommittees } from '../models/CellsCommittees';
import { ManagementTeam } from '../models/ManagementTeam';
import { IPR } from '../models/IPR';
import { Contact } from '../models/Contact';
import { Gallery } from '../models/Gallery';
import { Banner } from '../models/Banner';
import { News } from '../models/News';
import { Faculty } from '../models/Faculty';
import { Complaint } from '../models/Complaint';
import { Alumni } from '../models/Alumni';

export const adminController = {
  /* ===== FACULTY MANAGEMENT ===== */
  getAllFaculty: async (req: Request, res: Response) => {
    try {
      const faculty = await Faculty.find({}).sort({ createdAt: -1 });
      res.json({ 
        success: true,
        data: faculty || [],
        count: faculty?.length || 0
      });
    } catch (error) {
      console.error('Get faculty error:', error);
      res.status(500).json({ 
        success: false,
        message: 'Error fetching faculty data',
        data: [],
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  },

  createFaculty: async (req: Request, res: Response) => {
    try {
      const facultyData = new Faculty(req.body);
      const savedFaculty = await facultyData.save();
      res.status(201).json({ 
        message: 'Faculty created successfully', 
        data: savedFaculty 
      });
    } catch (error) {
      console.error('Create faculty error:', error);
      if (error.code === 11000) {
        res.status(400).json({ message: 'Faculty ID already exists' });
      } else {
        res.status(500).json({ message: 'Error creating faculty' });
      }
    }
  },

  updateFaculty: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const updatedFaculty = await Faculty.findByIdAndUpdate(
        id, 
        req.body, 
        { new: true, runValidators: true }
      );

      if (!updatedFaculty) {
        return res.status(404).json({ message: 'Faculty not found' });
      }

      res.json({ 
        message: 'Faculty updated successfully', 
        data: updatedFaculty 
      });
    } catch (error) {
      console.error('Update faculty error:', error);
      res.status(500).json({ message: 'Error updating faculty' });
    }
  },

  deleteFaculty: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const faculty = await Faculty.findById(id);

      if (!faculty) {
        return res.status(404).json({ message: 'Faculty not found' });
      }

      // Delete image from Cloudinary if it exists
      if (faculty.imageUrl && faculty.imageUrl.includes('cloudinary.com')) {
        try {
          const { v2: cloudinary } = require('cloudinary');

          // Extract public_id from Cloudinary URL
          const urlParts = faculty.imageUrl.split('/');
          const publicIdWithExtension = urlParts[urlParts.length - 1];
          const publicId = publicIdWithExtension.split('.')[0];

          await cloudinary.uploader.destroy(publicId);
        } catch (cloudinaryError) {
          console.error('Error deleting image from Cloudinary:', cloudinaryError);
          // Continue with faculty deletion even if image deletion fails
        }
      }

      await Faculty.findByIdAndDelete(id);
      res.json({ message: 'Faculty deleted successfully' });
    } catch (error) {
      console.error('Delete faculty error:', error);
      res.status(500).json({ message: 'Error deleting faculty' });
    }
  },

  /* ===== BANNER MANAGEMENT ===== */
  getAllBanners: async (req: Request, res: Response) => {
    try {
      console.log('=== getAllBanners API called ===');
      console.log('Request headers:', req.headers);
      console.log('Request user:', req.user);
      console.log('Fetching banners from database...');

      const banners = await Banner.find({}).sort({ priority: 1, createdAt: -1 });
      console.log(`Found ${banners.length} banners in database`);
      console.log('Banner data:', banners);

      const response = { 
        data: banners,
        count: banners.length,
        message: 'Banners fetched successfully'
      };

      console.log('Sending response:', response);
      res.json(response);
    } catch (error) {
      console.error('Get banners error:', error);
      res.status(500).json({ 
        message: 'Error fetching banners',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  },

  createBanner: async (req: Request, res: Response) => {
    try {
      console.log('Creating banner with data:', req.body);

      // Validate required fields
      const { title, imageUrl, priority, isActive } = req.body;

      if (!title || title.trim() === '') {
        return res.status(400).json({ message: 'Title is required' });
      }

      if (!imageUrl || imageUrl.trim() === '') {
        return res.status(400).json({ message: 'Image URL is required' });
      }

      if (!priority || priority < 1) {
        return res.status(400).json({ message: 'Valid priority is required (minimum 1)' });
      }

      const bannerData = new Banner({
        title: title.trim(),
        imageUrl: imageUrl.trim(),
        priority: parseInt(priority),
        isActive: isActive !== undefined ? Boolean(isActive) : true
      });

      const savedBanner = await bannerData.save();
      console.log('Banner created successfully:', savedBanner._id);

      res.status(201).json({ 
        message: 'Banner created successfully', 
        data: savedBanner 
      });
    } catch (error) {
      console.error('Create banner error:', error);

      if (error.name === 'ValidationError') {
        return res.status(400).json({ 
          message: 'Validation error', 
          details: error.message 
        });
      }

      res.status(500).json({ 
        message: 'Error creating banner',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  },

  updateBanner: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const updatedBanner = await Banner.findByIdAndUpdate(
        id, 
        req.body, 
        { new: true, runValidators: true }
      );

      if (!updatedBanner) {
        return res.status(404).json({ message: 'Banner not found' });
      }

      res.json({ 
        message: 'Banner updated successfully', 
        data: updatedBanner 
      });
    } catch (error) {
      console.error('Update banner error:', error);
      res.status(500).json({ message: 'Error updating banner' });
    }
  },

  deleteBanner: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const banner = await Banner.findById(id);

      if (!banner) {
        return res.status(404).json({ message: 'Banner not found' });
      }

      // Delete image from Cloudinary if it exists
      if (banner.imageUrl && banner.imageUrl.includes('cloudinary.com')) {
        try {
          const { v2: cloudinary } = require('cloudinary');

          // Extract public_id from Cloudinary URL
          const urlParts = banner.imageUrl.split('/');
          const publicIdWithExtension = urlParts[urlParts.length - 1];
          const publicId = publicIdWithExtension.split('.')[0];

          await cloudinary.uploader.destroy(`piet/${publicId}`);
        } catch (cloudinaryError) {
          console.error('Error deleting image from Cloudinary:', cloudinaryError);
          // Continue with banner deletion even if image deletion fails
        }
      }

      await Banner.findByIdAndDelete(id);
      res.json({ message: 'Banner deleted successfully' });
    } catch (error) {
      console.error('Delete banner error:', error);
      res.status(500).json({ message: 'Error deleting banner' });
    }
  },

  /* ===== NEWS MANAGEMENT ===== */
  getAllNews: async (req: Request, res: Response) => {
    try {
      const news = await News.find({}).sort({ publishDate: -1, createdAt: -1 });
      res.json({ data: news });
    } catch (error) {
      console.error('Get news error:', error);
      res.status(500).json({ message: 'Error fetching news' });
    }
  },

  createNews: async (req: Request, res: Response) => {
    try {
      const newsData = new News(req.body);
      const savedNews = await newsData.save();
      res.status(201).json({ 
        message: 'News created successfully', 
        data: savedNews 
      });
    } catch (error) {
      console.error('Create news error:', error);
      res.status(500).json({ message: 'Error creating news' });
    }
  },

  updateNews: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const updatedNews = await News.findByIdAndUpdate(
        id, 
        req.body, 
        { new: true, runValidators: true }
      );

      if (!updatedNews) {
        return res.status(404).json({ message: 'News not found' });
      }

      res.json({ 
        message: 'News updated successfully', 
        data: updatedNews 
      });
    } catch (error) {
      console.error('Update news error:', error);
      res.status(500).json({ message: 'Error updating news' });
    }
  },

  deleteNews: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const deletedNews = await News.findByIdAndDelete(id);

      if (!deletedNews) {
        return res.status(404).json({ message: 'News not found' });
      }

      res.json({ message: 'News deleted successfully' });
    } catch (error) {
      console.error('Delete news error:', error);
      res.status(500).json({ message: 'Error deleting news' });
    }
  },

  /* ===== GALLERY MANAGEMENT ===== */
  getAllGallery: async (req: Request, res: Response) => {
    try {
      const gallery = await Gallery.find({}).sort({ year: -1, createdAt: -1 });
      res.json({ data: gallery });
    } catch (error) {
      console.error('Get gallery error:', error);
      res.status(500).json({ message: 'Error fetching gallery' });
    }
  },

  createGallery: async (req: Request, res: Response) => {
    try {
      const galleryData = new Gallery(req.body);
      const savedGallery = await galleryData.save();
      res.status(201).json({ 
        message: 'Gallery item created successfully', 
        data: savedGallery 
      });
    } catch (error) {
      console.error('Create gallery error:', error);
      res.status(500).json({ message: 'Error creating gallery item' });
    }
  },

  updateGallery: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const updatedGallery = await Gallery.findByIdAndUpdate(
        id, 
        req.body, 
        { new: true, runValidators: true }
      );

      if (!updatedGallery) {
        return res.status(404).json({ message: 'Gallery item not found' });
      }

      res.json({ 
        message: 'Gallery item updated successfully', 
        data: updatedGallery 
      });
    } catch (error) {
      console.error('Update gallery error:', error);
      res.status(500).json({ message: 'Error updating gallery item' });
    }
  },

  deleteGallery: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const gallery = await Gallery.findById(id);

      if (!gallery) {
        return res.status(404).json({ message: 'Gallery item not found' });
      }

      // Delete image from Cloudinary if it exists
      if (gallery.imageUrl && gallery.imageUrl.includes('cloudinary.com')) {
        try {
          const { v2: cloudinary } = require('cloudinary');

          // Extract public_id from Cloudinary URL
          const urlParts = gallery.imageUrl.split('/');
          const publicIdWithExtension = urlParts[urlParts.length - 1];
          const publicId = publicIdWithExtension.split('.')[0];

          await cloudinary.uploader.destroy(`piet/${publicId}`);
        } catch (cloudinaryError) {
          console.error('Error deleting image from Cloudinary:', cloudinaryError);
          // Continue with gallery deletion even if image deletion fails
        }
      }

      await Gallery.findByIdAndDelete(id);
      res.json({ message: 'Gallery item deleted successfully' });
    } catch (error) {
      console.error('Delete gallery error:', error);
      res.status(500).json({ message: 'Error deleting gallery item' });
    }
  },

  /* ===== CONTACT MANAGEMENT ===== */
  getAllContacts: async (req: Request, res: Response) => {
    try {
      const contacts = await Contact.find({}).sort({ createdAt: -1 });
      res.json({ data: contacts });
    } catch (error) {
      console.error('Get contacts error:', error);
      res.status(500).json({ message: 'Error fetching contacts' });
    }
  },

  deleteContact: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const deletedContact = await Contact.findByIdAndDelete(id);

      if (!deletedContact) {
        return res.status(404).json({ message: 'Contact not found' });
      }

      res.json({ message: 'Contact deleted successfully' });
    } catch (error) {
      console.error('Delete contact error:', error);
      res.status(500).json({ message: 'Error deleting contact' });
    }
  },

  /* ===== IPR MANAGEMENT ===== */
  getAllIPR: async (req: Request, res: Response) => {
    try {
      const iprs = await IPR.find({}).sort({ createdAt: -1 });
      res.json({ data: iprs });
    } catch (error) {
      console.error('Get IPR error:', error);
      res.status(500).json({ message: 'Error fetching IPR data' });
    }
  },

  createIPR: async (req: Request, res: Response) => {
    try {
      const iprData = new IPR(req.body);
      const savedIPR = await iprData.save();
      res.status(201).json({ 
        message: 'IPR created successfully', 
        data: savedIPR 
      });
    } catch (error) {
      console.error('Create IPR error:', error);
      res.status(500).json({ message: 'Error creating IPR' });
    }
  },

  updateIPR: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const updatedIPR = await IPR.findByIdAndUpdate(
        id, 
        req.body, 
        { new: true, runValidators: true }
      );

      if (!updatedIPR) {
        return res.status(404).json({ message: 'IPR not found' });
      }

      res.json({ 
        message: 'IPR updated successfully', 
        data: updatedIPR 
      });
    } catch (error) {
      console.error('Update IPR error:', error);
      res.status(500).json({ message: 'Error updating IPR' });
    }
  },

  deleteIPR: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const deletedIPR = await IPR.findByIdAndDelete(id);

      if (!deletedIPR) {
        return res.status(404).json({ message: 'IPR not found' });
      }

      res.json({ message: 'IPR deleted successfully' });
    } catch (error) {
      console.error('Delete IPR error:', error);
      res.status(500).json({ message: 'Error deleting IPR' });
    }
  },

  /* ===== MANAGEMENT TEAM MANAGEMENT ===== */
  getAllManagementTeam: async (req: Request, res: Response) => {
    try {
      const managementTeam = await ManagementTeam.find({}).sort({ order: 1, createdAt: -1 });
      res.json({ data: managementTeam });
    } catch (error) {
      console.error('Get Management Team error:', error);
      res.status(500).json({ message: 'Error fetching management team data' });
    }
  },

  createManagementTeam: async (req: Request, res: Response) => {
    try {
      const managementData = new ManagementTeam(req.body);
      const savedManagement = await managementData.save();
      res.status(201).json({ 
        message: 'Management team member created successfully', 
        data: savedManagement 
      });
    } catch (error) {
      console.error('Create Management Team error:', error);
      res.status(500).json({ message: 'Error creating management team member' });
    }
  },

  updateManagementTeam: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const updatedManagement = await ManagementTeam.findByIdAndUpdate(
        id, 
        req.body, 
        { new: true, runValidators: true }
      );

      if (!updatedManagement) {
        return res.status(404).json({ message: 'Management team member not found' });
      }

      res.json({ 
        message: 'Management team member updated successfully', 
        data: updatedManagement 
      });
    } catch (error) {
      console.error('Update Management Team error:', error);
      res.status(500).json({ message: 'Error updating management team member' });
    }
  },

  deleteManagementTeam: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const deletedManagement = await ManagementTeam.findByIdAndDelete(id);

      if (!deletedManagement) {
        return res.status(404).json({ message: 'Management team member not found' });
      }

      res.json({ message: 'Management team member deleted successfully' });
    } catch (error) {
      console.error('Delete Management Team error:', error);
      res.status(500).json({ message: 'Error deleting management team member' });
    }
  },

  /* ===== CELLS & COMMITTEES MANAGEMENT ===== */
  getAllCellsCommittees: async (req: Request, res: Response) => {
    try {
      const cellsCommittees = await CellsCommittees.find({}).sort({ createdAt: -1 });
      res.json({ data: cellsCommittees });
    } catch (error) {
      console.error('Get Cells & Committees error:', error);
      res.status(500).json({ message: 'Error fetching cells & committees data' });
    }
  },

  createCellsCommittees: async (req: Request, res: Response) => {
    try {
      const cellData = new CellsCommittees(req.body);
      const savedCell = await cellData.save();
      res.status(201).json({ 
        message: 'Cell/Committee created successfully', 
        data: savedCell 
      });
    } catch (error) {
      console.error('Create Cells & Committees error:', error);
      res.status(500).json({ message: 'Error creating cell/committee' });
    }
  },

  updateCellsCommittees: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const updatedCell = await CellsCommittees.findByIdAndUpdate(
        id, 
        req.body, 
        { new: true, runValidators: true }
      );

      if (!updatedCell) {
        return res.status(404).json({ message: 'Cell/Committee not found' });
      }

      res.json({ 
        message: 'Cell/Committee updated successfully', 
        data: updatedCell 
      });
    } catch (error) {
      console.error('Update Cells & Committees error:', error);
      res.status(500).json({ message: 'Error updating cell/committee' });
    }
  },

  deleteCellsCommittees: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const deletedCell = await CellsCommittees.findByIdAndDelete(id);

      if (!deletedCell) {
        return res.status(404).json({ message: 'Cell/Committee not found' });
      }

      res.json({ message: 'Cell/Committee deleted successfully' });
    } catch (error) {
      console.error('Delete Cells & Committees error:', error);
      res.status(500).json({ message: 'Error deleting cell/committee' });
    }
  },
  // News management
  getNews: async (req: Request, res: Response) => {
    try {
      const news = await News.find().sort({ createdAt: -1 });
      res.json({ data: news });
    } catch (error) {
      console.error('Error fetching news:', error);
      res.status(500).json({ error: 'Failed to fetch news' });
    }
  },

  // Complaints management
  getComplaints: async (req: Request, res: Response) => {
    try {
      const complaints = await Complaint.find().sort({ createdAt: -1 });
      res.json({ data: complaints });
    } catch (error) {
      console.error('Error fetching complaints:', error);
      res.status(500).json({ error: 'Failed to fetch complaints' });
    }
  },

  updateComplaintStatus: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { status } = req.body;

      const complaint = await Complaint.findByIdAndUpdate(
        id, 
        { status }, 
        { new: true }
      );

      if (!complaint) {
        return res.status(404).json({ error: 'Complaint not found' });
      }

      res.json({ data: complaint });
    } catch (error) {
      console.error('Error updating complaint status:', error);
      res.status(500).json({ error: 'Failed to update complaint status' });
    }
  },

  deleteComplaint: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const complaint = await Complaint.findByIdAndDelete(id);

      if (!complaint) {
        return res.status(404).json({ error: 'Complaint not found' });
      }

      res.json({ message: 'Complaint deleted successfully' });
    } catch (error) {
      console.error('Error deleting complaint:', error);
      res.status(500).json({ error: 'Failed to delete complaint' });
    }
  },

  // Alumni management
  getAlumni: async (req: Request, res: Response) => {
    try {
      const alumni = await Alumni.find().sort({ createdAt: -1 });
      res.json({ data: alumni });
    } catch (error) {
      console.error('Error fetching alumni:', error);
      res.status(500).json({ error: 'Failed to fetch alumni' });
    }
  },

  deleteAlumni: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const alumni = await Alumni.findByIdAndDelete(id);

      if (!alumni) {
        return res.status(404).json({ error: 'Alumni not found' });
      }

      res.json({ message: 'Alumni deleted successfully' });
    } catch (error) {
      console.error('Error deleting alumni:', error);
      res.status(500).json({ error: 'Failed to delete alumni' });
    }
  },
};