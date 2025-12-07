import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MongoDB_URI = process.env.DATABASE_URI;

const connectDB = async (): Promise<void> => {
  if (!MongoDB_URI) {
    console.error("DATABASE_URI is not defined in .env file");
    process.exit(1);
  }
  try {
    await mongoose.connect(MongoDB_URI as string);
    console.log("DB connected successfully");
  } catch (error) {
    console.log("failed to connect DB", error);
    process.exit(1);
  }
};

export default connectDB;
