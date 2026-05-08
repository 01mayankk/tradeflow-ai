// Import required packages
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// Import routes
import stockRoutes from "./routes/stockRoutes.js";

// Load environment variables from .env file
dotenv.config();

// Initialize Express application
const app = express();


// =============================
// Middleware
// =============================

// Enable Cross-Origin Resource Sharing
// Allows frontend and external services (like n8n)
// to communicate with the backend
app.use(cors());

// Parse incoming JSON request bodies
// Example:
// {
//   "symbol": "AAPL",
//   "price": 287.44
// }
app.use(express.json());


// =============================
// Routes
// =============================

// Stock API routes
// Base Route:
// /api/stocks
app.use("/api/stocks", stockRoutes);


// =============================
// Health Check / Test Route
// =============================

// Simple route to verify server is running
app.get("/", (req, res) => {
  res.send("TradeFlow AI Backend Running");
});


// =============================
// Server Configuration
// =============================

// Use PORT from .env
// If not available, fallback to 3000
const PORT = process.env.PORT || 3000;


// =============================
// Start Server
// =============================

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});