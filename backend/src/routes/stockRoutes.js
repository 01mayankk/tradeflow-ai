import express from "express";

const router = express.Router();

// POST /api/stocks
router.post("/", (req, res) => {
  // Log the incoming stock data to the console for debugging
  console.log("Incoming Stock Data:");
  console.log(req.body);

  // Send a success response back to the client
  res.status(200).json({
    success: true,
    message: "Stock data received successfully",
    data: req.body,
  });
});

export default router;