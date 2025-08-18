
import { Request, Response } from 'express';
import { Complaint } from '../models/Complaint';

export const complaintController = {
  submitComplaint: async (req: Request, res: Response) => {
    try {
      console.log('Received complaint submission:', req.body);
      
      const { 
        fullName, studentId, email, phone, department, batch, 
        complaintCategory, subject, description, urgency, attachmentUrl 
      } = req.body;
      
      // Basic validation
      if (!fullName || !studentId || !email || !phone || !department || 
          !batch || !complaintCategory || !subject || !description || !urgency) {
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

      // Create new complaint document
      const complaintData = new Complaint({
        fullName: fullName.trim(),
        studentId: studentId.trim(),
        email: email.toLowerCase().trim(),
        phone: phone.trim(),
        department: department.trim(),
        batch: batch.trim(),
        complaintCategory: complaintCategory.trim(),
        subject: subject.trim(),
        description: description.trim(),
        urgency: urgency.trim(),
        ...(attachmentUrl && { attachmentUrl })
      });

      // Save to database
      const savedComplaint = await complaintData.save();
      
      console.log('Complaint submission saved successfully:', savedComplaint._id);
      
      res.status(201).json({ 
        message: 'Your complaint has been submitted successfully! We will review it shortly.',
        data: {
          id: savedComplaint._id,
          fullName: savedComplaint.fullName,
          subject: savedComplaint.subject,
          status: savedComplaint.status,
          submittedAt: savedComplaint.createdAt
        }
      });
      
    } catch (error) {
      console.error('Complaint submission error:', error);
      
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
  }
};
