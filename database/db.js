import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const Connection = () => {
  const DB_URI = process.env.DB_URL;
  try {
    mongoose.connect(DB_URI, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connection with the database", error.message);
  }
};

export default Connection;
