const mongoose = require("mongoose");

// Define Schema
const FinanceSchema = new mongoose.Schema({
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    description: { type: String },
    date: { type: Date, default: Date.now }
});

// Create Model
const Finance = mongoose.model("Finance", FinanceSchema);

module.exports = Finance;
