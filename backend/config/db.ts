import mongoose from "mongoose";
const connectDB = async () => {
  const response = await mongoose.connect(process.env.CONNECTION_STRING || "");

  if (!response) {
    console.error("Connection problem");
  }
  console.log("Connected to database");
};

export default connectDB;
