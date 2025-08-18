import { Request, Response, Router } from "express";
import { adminController } from "./controllers/admin.controller";
import { authController } from "./controllers/auth.controller";
import { contactController } from "./controllers/contact.controller";
import { authenticateToken } from "./middleware/auth";
import { v2 as cloudinary } from 'cloudinary';
import { complaintController } from './controllers/complaint.controller';
import { NextFunction } from 'express';
import { Contact } from './models/Contact';
import { Complaint } from './models/Complaint';
import { Alumni } from './models/Alumni';
import { News } from './models/News';
import { Banner } from './models/Banner';
import { CellsCommittees } from './models/CellsCommittees';
import { ManagementTeam } from './models/ManagementTeam';
import { Faculty } from './models/Faculty';
import { Gallery } from './models/Gallery';
import { IPR } from './models/IPR';
import { publicController } from './controllers/public.controller';

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'ddygzamv4',
  api_key: '865455367323563',
  api_secret: 'K3Tl1-sCKXUo7pOWLRexJuQk9DU'
});

export function registerRoutes(app: any) {
  const router = Router();
  const publicRoutes = Router(); // Create a separate router for public routes

  // Auth routes - register directly on app
  app.post('/api/auth/login', authController.login);

  // Cloudinary signature endpoint - authenticated
  router.post('/api/cloudinary-signature', authenticateToken, (req: Request, res: Response) => {
    try {
      console.log('Generating Cloudinary signature...');

      const timestamp = Math.round(new Date().getTime() / 1000);
      const parameters = {
        timestamp,
        folder: 'piet'
      };

      const signature = cloudinary.utils.api_sign_request(
        parameters,
        'K3Tl1-sCKXUo7pOWLRexJuQk9DU'
      );

      if (!signature) {
        throw new Error('Failed to generate signature');
      }

      const response = {
        signature,
        timestamp,
        cloud_name: 'ddygzamv4',
        api_key: '865455367323563',
        folder: 'piet'
      };

      console.log('Cloudinary signature generated successfully');
      res.json(response);
    } catch (error) {
      console.error('Cloudinary signature error:', error);
      res.status(500).json({ 
        message: 'Error generating signature',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  // Admin routes - all require authentication
  router.use('/api/admin', authenticateToken);

  // Faculty routes
  router.get('/api/admin/faculty', adminController.getAllFaculty);
  router.post('/api/admin/faculty', adminController.createFaculty);
  router.put('/api/admin/faculty/:id', adminController.updateFaculty);
  router.delete('/api/admin/faculty/:id', adminController.deleteFaculty);

  // Alumni management routes
  router.get('/api/admin/alumni', adminController.getAlumni);
  router.delete('/api/admin/alumni/:id', adminController.deleteAlumni);

  // Complaints management routes  
  router.get('/api/admin/complaints', adminController.getComplaints);
  router.put('/api/admin/complaints/:id/status', adminController.updateComplaintStatus);
  router.delete('/api/admin/complaints/:id', adminController.deleteComplaint);

  // Banner routes
  router.get('/api/admin/banners', (req, res, next) => {
    console.log('=== Banner GET route hit ===');
    console.log('Request method:', req.method);
    console.log('Request URL:', req.url);
    console.log('Request path:', req.path);
    next();
  }, adminController.getAllBanners);
  router.post('/api/admin/banners', adminController.createBanner);
  router.put('/api/admin/banners/:id', adminController.updateBanner);
  router.delete('/api/admin/banners/:id', adminController.deleteBanner);

  // News routes
  router.get('/api/admin/news', adminController.getAllNews);
  router.post('/api/admin/news', adminController.createNews);
  router.put('/api/admin/news/:id', adminController.updateNews);
  router.delete('/api/admin/news/:id', adminController.deleteNews);

  // Gallery routes
  router.get('/api/admin/gallery', adminController.getAllGallery);
  router.post('/api/admin/gallery', adminController.createGallery);
  router.put('/api/admin/gallery/:id', adminController.updateGallery);
  router.delete('/api/admin/gallery/:id', adminController.deleteGallery);

  // Contact routes
  router.get('/api/admin/contacts', adminController.getAllContacts);
  router.delete('/api/admin/contacts/:id', adminController.deleteContact);

  // IPR routes
  router.get('/api/admin/ipr', adminController.getAllIPR);
  router.post('/api/admin/ipr', adminController.createIPR);
  router.put('/api/admin/ipr/:id', adminController.updateIPR);
  router.delete('/api/admin/ipr/:id', adminController.deleteIPR);

  // Management Team routes
  router.get('/api/admin/management-team', adminController.getAllManagementTeam);
  router.post('/api/admin/management-team', adminController.createManagementTeam);
  router.put('/api/admin/management-team/:id', adminController.updateManagementTeam);
  router.delete('/api/admin/management-team/:id', adminController.deleteManagementTeam);

  // Cells & Committees routes
  router.get('/api/admin/cells-committees', adminController.getAllCellsCommittees);
  router.post('/api/admin/cells-committees', adminController.createCellsCommittees);
  router.put('/api/admin/cells-committees/:id', adminController.updateCellsCommittees);
  router.delete('/api/admin/cells-committees/:id', adminController.deleteCellsCommittees);

  // Public routes
  publicRoutes.post('/contact', contactController.submitContactForm);
  publicRoutes.post('/complaint', complaintController.submitComplaint);

  app.get('/api/banners', async (req: Request, res: Response) => {
    try {
      const banners = await Banner.find({ isActive: true }).sort({ priority: 1 });
      res.json({ success: true, data: banners });
    } catch (error) {
      console.error('Error fetching banners:', error);
      res.status(500).json({ success: false, message: 'Error fetching banners' });
    }
  });

  app.get('/api/news', async (req: Request, res: Response) => {
    try {
      const news = await News.find({}).sort({ publishDate: -1 }).limit(6);
      res.json(news);
    } catch (error) {
      console.error('Error fetching news:', error);
      res.status(500).json({ error: 'Failed to fetch news' });
    }
  });

  // Public endpoint for cells and committees
  app.get('/api/cells-committees', async (req: Request, res: Response) => {
    try {
      const cellsCommittees = await CellsCommittees.find({}).sort({ createdAt: -1 });
      res.json({ success: true, data: cellsCommittees });
    } catch (error) {
      console.error('Error fetching cells & committees:', error);
      res.status(500).json({ success: false, message: 'Error fetching cells & committees' });
    }
  });

  // Public endpoint for management team
  app.get('/api/management-team', async (req: Request, res: Response) => {
    try {
      const managementTeam = await ManagementTeam.find({}).sort({ order: 1, createdAt: -1 });
      res.json({ success: true, data: managementTeam });
    } catch (error) {
      console.error('Error fetching management team:', error);
      res.status(500).json({ success: false, message: 'Error fetching management team' });
    }
  });

  // Public endpoint for faculty
  publicRoutes.get('/faculty', async (req: Request, res: Response) => {
    try {
      const faculty = await Faculty.find({}).sort({ createdAt: -1 });
      res.json({ success: true, data: faculty });
    } catch (error) {
      console.error('Error fetching faculty:', error);
      res.status(500).json({ success: false, message: 'Error fetching faculty' });
    }
  });

  // Public endpoint for faculty by department
  publicRoutes.get('/faculty/:department', async (req: Request, res: Response) => {
    try {
      const { department } = req.params;
      const faculty = await Faculty.find({ department: department }).sort({ createdAt: -1 });
      res.json({ success: true, data: faculty });
    } catch (error) {
      console.error('Error fetching faculty by department:', error);
      res.status(500).json({ success: false, message: 'Error fetching faculty by department' });
    }
  });

  // Public endpoint for gallery
  app.get('/api/gallery', async (req: Request, res: Response) => {
    try {
      const gallery = await Gallery.find({}).sort({ year: -1, createdAt: -1 });
      res.json({ success: true, data: gallery });
    } catch (error) {
      console.error('Error fetching gallery:', error);
      res.status(500).json({ success: false, message: 'Error fetching gallery' });
    }
  });

  // Public endpoint for IPR
  app.get('/api/ipr', async (req: Request, res: Response) => {
    try {
      const ipr = await IPR.find({}).sort({ createdAt: -1 });
      res.json({ success: true, data: ipr });
    } catch (error) {
      console.error('Error fetching IPR:', error);
      res.status(500).json({ success: false, message: 'Error fetching IPR' });
    }
  });

  // Alumni registration (existing alumni route, make sure it's working)
  router.post('/api/alumni', async (req: Request, res: Response) => {
    try {
      console.log('Received alumni registration:', req.body);

      const { 
        name, batch, fromCity, currentCity, companyName, 
        position, email, phone, achievements, photoUrl 
      } = req.body;

      // Basic validation
      if (!name || !batch || !fromCity || !currentCity || 
          !companyName || !position || !email || !phone) {
        return res.status(400).json({ 
          error: 'All required fields must be provided' 
        });
      }

      // Email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          error: 'Please provide a valid email address' 
        });
      }

      const { Alumni } = await import('./models/Alumni');

      // Create new alumni document
      const alumniData = new Alumni({
        name: name.trim(),
        batch: batch.trim(),
        fromCity: fromCity.trim(),
        currentCity: currentCity.trim(),
        companyName: companyName.trim(),
        position: position.trim(),
        email: email.toLowerCase().trim(),
        phone: phone.trim(),
        ...(achievements && achievements.trim() && { achievements: achievements.trim() }),
        ...(photoUrl && { photoUrl })
      });

      // Save to database
      const savedAlumni = await alumniData.save();

      console.log('Alumni registration saved successfully:', savedAlumni._id);

      res.status(201).json({ 
        message: 'Alumni registration submitted successfully!',
        data: {
          id: savedAlumni._id,
          name: savedAlumni.name,
          email: savedAlumni.email,
          batch: savedAlumni.batch,
          submittedAt: savedAlumni.createdAt
        }
      });

    } catch (error) {
      console.error('Alumni registration error:', error);

      // Handle duplicate email error
      if (error.code === 11000) {
        return res.status(400).json({ 
          error: 'This email is already registered in our alumni database' 
        });
      }

      // Handle mongoose validation errors
      if (error.name === 'ValidationError') {
        const validationErrors = Object.values(error.errors).map((err: any) => err.message);
        return res.status(400).json({ 
          error: 'Validation failed',
          details: validationErrors
        });
      }

      res.status(500).json({ 
        error: 'Internal server error. Please try again later.' 
      });
    }
  });

  // Admin routes with authentication
  const adminRoutes = Router();
  adminRoutes.use(authenticateToken);

  // Global error handler for admin routes
  adminRoutes.use((error: any, req: Request, res: Response, next: NextFunction) => {
    console.error('Admin route error:', error);

    if (error.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        error: error.message
      });
    }

    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        message: 'Invalid ID format',
        error: 'The provided ID is not valid'
      });
    }

    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: 'Duplicate entry',
        error: 'This record already exists'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
    });
  });

  // Public routes
  app.use('/api', publicRoutes);

  // Main routes
  app.use('/', router);

  // Admin routes
  app.use('/api/admin', adminRoutes);

  return app;
}