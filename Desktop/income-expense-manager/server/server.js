const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./config/db"); // MongoDB connection
const financeRoutes = require("./routes/financeRoutes");
const transactionRoutes = require("./routes/transactions");
const stockRoutes = require("./routes/stockRoutes");
const invoiceRoutes = require("./routes/invoiceRoutes"); // Invoice routes

// Load environment variables first
dotenv.config();

const app = express();

// ✅ Middleware - Order matters!
app.use(cors()); // Enable CORS first
app.use(express.json()); // Then parse JSON bodies

// ✅ Database Connection
const startServer = async () => {
  try {
    await connectDB(); // Connect to MongoDB once

    // ✅ Routes
    app.use("/api/stock", stockRoutes);
    app.use("/api/finance", financeRoutes);
    app.use("/api/transactions", transactionRoutes);
    app.use("/api/invoices", invoiceRoutes); // Use invoice routes

    // ❌ Handle Undefined Routes
    app.use((req, res) => {
      res.status(404).json({
        success: false,
        message: "Route Not Found",
      });
    });

    // ✅ Error Handling Middleware
    app.use((err, req, res, next) => {
      console.error("❌ Server Error:", err.stack);
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
        error: process.env.NODE_ENV === "development" ? err.message : undefined,
      });
    });

    // 🚀 Start the Server
    const PORT = process.env.PORT || 5000;
    const server = app.listen(PORT, () =>
      console.log(`🚀 Server running on port ${PORT} in ${process.env.NODE_ENV || "development"} mode`)
    );

    // Handle unhandled promise rejections
    process.on("unhandledRejection", (err) => {
      console.error("❌ Unhandled Rejection:", err);
      server.close(() => process.exit(1));
    });

    // Handle uncaught exceptions
    process.on("uncaughtException", (err) => {
      console.error("❌ Uncaught Exception:", err);
      server.close(() => process.exit(1));
    });

  } catch (err) {
    console.error("❌ Database connection failed:", err);
    process.exit(1); // Exit if DB connection fails
  }
};

// Start the server
startServer();
