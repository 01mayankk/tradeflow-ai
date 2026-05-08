// Import mongoose
import mongoose from "mongoose";


// ============================================
// Stock Schema
// Defines structure of stock documents
// ============================================

const stockSchema = new mongoose.Schema(
  {
    // Stock Symbol
    // Example: AAPL, TSLA, MSFT
    symbol: {
      type: String,
      required: true,
      uppercase: true,
      trim: true,
    },

    // Current Stock Price
    price: {
      type: Number,
      required: true,
    },

    // Trading Volume
    volume: {
      type: Number,
      required: true,
    },

    // Timestamp from API
    timestamp: {
      type: String,
      required: true,
    },

    // Percentage Change
    change_percent: {
      type: Number,
      required: true,
    },
  },

  // Automatically adds:
  // createdAt
  // updatedAt
  {
    timestamps: true,
  }
);


// ============================================
// Export Stock Model
// ============================================

const Stock = mongoose.model("Stock", stockSchema);

export default Stock;