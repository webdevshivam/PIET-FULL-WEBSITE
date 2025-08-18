
import { Request, Response } from 'express';
import { Contact } from '../models/Contact';

export const contactController = {
  submitContactForm: async (req: Request, res: Response) => {
    try {
      console.log('Received contact form submission:', req.body);
      
      const { fullName, email, phoneNumber, subject, message } = req.body;
      
      // Basic validation
      if (!fullName || !email || !phoneNumber || !subject || !message) {
        return res.status(400).json({ 
          error: 'All fields are required: fullName, email, phoneNumber, subject, and message' 
        });
      }

      // Email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          error: 'Please provide a valid email address' 
        });
      }

      // Create new contact document
      const contactData = new Contact({
        fullName: fullName.trim(),
        email: email.toLowerCase().trim(),
        phoneNumber: phoneNumber.trim(),
        subject: subject.trim(),
        message: message.trim()
      });

      // Save to database
      const savedContact = await contactData.save();
      
      console.log('Contact form submission saved successfully:', savedContact._id);
      
      res.status(201).json({ 
        message: 'Thank you for your message! We will get back to you soon.',
        data: {
          id: savedContact._id,
          fullName: savedContact.fullName,
          email: savedContact.email,
          subject: savedContact.subject,
          submittedAt: savedContact.createdAt
        }
      });
      
    } catch (error) {
      console.error('Contact form submission error:', error);
      
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
