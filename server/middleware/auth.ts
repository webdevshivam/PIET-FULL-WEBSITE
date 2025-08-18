
import { Request, Response, NextFunction } from 'express';

interface AuthRequest extends Request {
  user?: any;
  session?: any;
}

export const authenticateToken = (req: AuthRequest, res: Response, next: NextFunction) => {
  console.log('=== Auth middleware called ===');
  console.log('Request URL:', req.url);
  console.log('Request method:', req.method);

  // First, check for session authentication
  if (req.session && req.session.user) {
    console.log('Session authenticated for user:', req.session.user.email);
    req.user = req.session.user;
    next();
    return;
  }

  // Then check for token in Authorization header
  const authHeader = req.headers['authorization'];
  console.log('Auth header:', authHeader);

  const token = authHeader && authHeader.split(' ')[1];
  console.log('Extracted token:', token ? 'Present' : 'Missing');

  if (token && token !== 'null') {
    // Simple token validation - decode and check if it contains admin email
    try {
      const decoded = Buffer.from(token, 'base64').toString();
      if (decoded.includes('admin@example.com')) {
        console.log('Token authenticated for admin user');
        req.user = {
          id: 'admin',
          email: 'admin@example.com',
          role: 'admin'
        };
        next();
        return;
      }
    } catch (error) {
      console.log('Token decode error:', error);
    }
  }

  console.log('No valid session or token found');
  return res.status(401).json({ message: 'Access token required' });
};

export const requireAdmin = (req: AuthRequest, res: Response, next: NextFunction) => {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Admin access required' });
  }
  next();
};
