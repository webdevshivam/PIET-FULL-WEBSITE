import { Request, Response } from 'express';

interface AuthRequest extends Request {
  session?: any;
}

export const authController = {
  login: async (req: AuthRequest, res: Response) => {
    try {
      const { email, password } = req.body;
      console.log('Login attempt for email:', email);

      if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
      }

      // For demo purposes, using hardcoded admin credentials
      if (email !== 'admin@example.com' || password !== 'admin123') {
        console.log('Invalid credentials provided');
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Store user in session
      req.session.user = {
        id: 'admin',
        email: 'admin@example.com',
        role: 'admin'
      };

      console.log('Login successful, session created');

      // Generate a simple token for frontend compatibility
      const token = Buffer.from(`${email}:${Date.now()}`).toString('base64');

      res.json({
        user: {
          id: 'admin',
          email: 'admin@example.com',
          role: 'admin'
        },
        token: token
      });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ message: 'Server error during login' });
    }
  },

  logout: async (req: AuthRequest, res: Response) => {
    req.session.destroy((err: any) => {
      if (err) {
        console.error('Session destroy error:', err);
        return res.status(500).json({ message: 'Logout error' });
      }
      res.json({ message: 'Logout successful' });
    });
  },

  getUser: async (req: AuthRequest, res: Response) => {
    try {
      if (!req.session.user) {
        return res.status(401).json({ message: 'Not authenticated' });
      }

      res.json({
        user: req.session.user
      });
    } catch (error) {
      console.error('Get user error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};