import { dbConnect } from './dbConnect';

export async function checkConnections() {
  try {
    await dbConnect();
    console.log('MongoDB connection is successful!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
}
