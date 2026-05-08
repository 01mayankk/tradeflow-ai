// ============================================
// Import Required Packages
// ============================================

// Express framework for creating backend server
import express from "express";

// dotenv loads environment variables from .env file
import dotenv from "dotenv";

// cors allows frontend / external services
// to communicate with backend APIs
import cors from "cors";


// ============================================
// Import Database Connection
// ============================================

// MongoDB connection function
import connectDB from "./config/db.js";


// ============================================
// Import Routes
// ============================================

// Stock-related API routes
import stockRoutes from "./routes/stockRoutes.js";


// ============================================
// Load Environment Variables
// ============================================

// Loads variables from .env file into process.env
dotenv.config();


// ============================================
// Connect MongoDB Database
// ============================================

// Establish connection with MongoDB Atlas
connectDB();


// ============================================
// Initialize Express App
// ============================================

const app = express();


// ============================================
// Global Middleware
// ============================================

// Enable Cross-Origin Resource Sharing (CORS)
// Allows frontend, n8n, Postman, etc. to access backend APIs
app.use(cors());


// Parse incoming JSON request bodies
// Example:
// {
//   "symbol": "AAPL",
//   "price": 287.44
// }
app.use(express.json());


// ============================================
// API Routes
// ============================================

// All stock-related routes will use:
// /api/stocks
//
// Examples:
// POST /api/stocks
// GET  /api/stocks
app.use("/api/stocks", stockRoutes);


// ============================================
// Health Check Route
// ============================================

// Simple test route to verify backend is running
app.get("/", (req, res) => {
  res.send("TradeFlow AI Backend Running");
});


// ============================================
// Server Configuration
// ============================================

// Use PORT from .env file
// If PORT is not defined, use 3000
const PORT = process.env.PORT || 3000;


// ============================================
// Start Express Server
// ============================================

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});