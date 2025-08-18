
import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://helloyourwebsitedesign:NQMOEQPEOynSzjNk@cluster0.0bhjtbu.mongodb.net/myDatabase?retryWrites=true&w=majority&appName=Cluster0';

export const connectDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB Atlas successfully');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
};

// Handle connection events
mongoose.connection.on('connected', () => {
  console.log('🔗 Mongoose connected to MongoDB Atlas');
});

mongoose.connection.on('error', (err) => {
  console.error('❌ Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('📴 Mongoose disconnected from MongoDB Atlas');
});
