import express, { Request, Response } from "express";
import connectDB from "../config/db";
import UserRoutes from "../routes/User.Routes";
import dotenv from "dotenv";
dotenv.config();

// Create a new express application instance
const app = express();
connectDB();

// Set the network port
const port = process.env.PORT || 3000;

app.get("/api/auth", UserRoutes);

// Define the root path with a greeting message
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to the Express + TypeScript Server!" });
});

// Start the Express server
app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`);
});
