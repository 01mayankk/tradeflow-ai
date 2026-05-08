import express from "express";

// Import controller functions
import {
  createStock,
  getStocks,
} from "../controllers/stockController.js";

const router = express.Router();


// ============================================
// Routes
// ============================================

// Store stock data
// POST /api/stocks
router.post("/", createStock);


// Fetch all stock data
// GET /api/stocks
router.get("/", getStocks);


export default router;