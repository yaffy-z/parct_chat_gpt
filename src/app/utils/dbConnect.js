import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

let isConnected = false;

export async function dbConnect() {
  if (isConnected) {
    console.log('Already connected to MongoDB');
    return;
  }

  try {
    // Connect to MongoDB without the deprecated options
    await mongoose.connect(MONGODB_URI);
    isConnected = true;
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    throw new Error('Failed to connect to MongoDB');
  }
}
