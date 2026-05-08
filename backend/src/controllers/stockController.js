// Import Stock model
import Stock from "../models/Stock.js";


// ============================================
// Save Incoming Stock Data
// POST /api/stocks
// ============================================

export const createStock = async (req, res) => {
  try {
    // Extract stock data from request body
    const {
      symbol,
      price,
      volume,
      timestamp,
      change_percent,
    } = req.body;

    // Create new stock document
    const stock = await Stock.create({
      symbol,
      price,
      volume,
      timestamp,
      change_percent,
    });

    // Send success response
    res.status(201).json({
      success: true,
      message: "Stock data stored successfully",
      data: stock,
    });

  } catch (error) {

    // Handle server/database errors
    res.status(500).json({
      success: false,
      message: "Failed to store stock data",
      error: error.message,
    });

  }
};


// ============================================
// Get All Stored Stocks
// GET /api/stocks
// ============================================

export const getStocks = async (req, res) => {
  try {

    // Fetch latest stock records
    const stocks = await Stock.find()
      .sort({ createdAt: -1 });

    // Send response
    res.status(200).json({
      success: true,
      count: stocks.length,
      data: stocks,
    });

  } catch (error) {

    // Handle errors
    res.status(500).json({
      success: false,
      message: "Failed to fetch stock data",
      error: error.message,
    });

  }
};