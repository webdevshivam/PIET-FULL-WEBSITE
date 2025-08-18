
import mongoose from 'mongoose';
import { User } from '../models/User';

const MONGODB_URI = 'mongodb+srv://helloyourwebsitedesign:NQMOEQPEOynSzjNk@cluster0.0bhjtbu.mongodb.net/myDatabase?retryWrites=true&w=majority&appName=Cluster0';

async function createAdminUser() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Check if admin user already exists
    const existingAdmin = await User.findOne({ email: 'admin@example.com' });
    if (existingAdmin) {
      console.log('Admin user already exists');
      return;
    }

    // Create admin user
    const adminUser = new User({
      email: 'admin@example.com',
      password: 'admin123', // This will be hashed automatically
      name: 'Admin User',
      role: 'admin'
    });

    await adminUser.save();
    console.log('✅ Admin user created successfully');
    console.log('Email: admin@example.com');
    console.log('Password: admin123');

  } catch (error) {
    console.error('❌ Error creating admin user:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

createAdminUser();
