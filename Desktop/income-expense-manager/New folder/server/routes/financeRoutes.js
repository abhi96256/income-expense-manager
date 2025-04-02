const express = require("express");
const router = express.Router();
const Finance = require("../models/Finance");  // Import Model

// ✅ Test Route
router.get("/test", (req, res) => {
    return res.status(200).json({ message: "✅ Finance route is working!" });
});

// ✅ Add Finance Entry (MongoDB)
router.post("/add", async (req, res) => {
    try {
        const { amount, category, description } = req.body;

        if (!amount || !category) {
            return res.status(400).json({ message: "❌ Amount and category are required!" });
        }

        // Create and Save Entry
        const newEntry = new Finance({ amount, category, description });
        await newEntry.save();

        return res.status(201).json({ message: "✅ Finance entry added!", data: newEntry });
    } catch (error) {
        return res.status(500).json({ message: "❌ Server Error!", error: error.message });
    }
});

// ✅ Get All Finance Entries (MongoDB)
router.get("/get", async (req, res) => {
    try {
        const financeEntries = await Finance.find();
        return res.status(200).json({ message: "✅ Finance data fetched!", data: financeEntries });
    } catch (error) {
        return res.status(500).json({ message: "❌ Server Error!", error: error.message });
    }
});

// ✅ Delete Finance Entry (MongoDB)
router.delete("/delete/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await Finance.findByIdAndDelete(id);
        return res.status(200).json({ message: "✅ Finance entry deleted!" });
    } catch (error) {
        return res.status(500).json({ message: "❌ Server Error!", error: error.message });
    }
});

module.exports = router;
