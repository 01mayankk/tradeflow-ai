import mongoose from "mongoose";

// Function to connect MongoDB Atlas
const connectDB = async () => {
  try {
    // Connect to MongoDB using connection string from .env
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    // Success message
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // Error message if connection fails
    console.error("MongoDB Connection Failed:", error.message);

    // Stop server if DB connection fails
    process.exit(1);
  }
};

export default connectDB;