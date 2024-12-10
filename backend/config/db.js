import mongoose from 'mongoose';

export const connectDB = async MONGODB_URI => {
  mongoose.set('strictQuery', true);

  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log('MongoDB connection error: ', error.message);
    process.exit(1);
  }
};
