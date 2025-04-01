const Finance = require("../models/Finance");

exports.addTransaction = async (req, res) => {
    try {
        const { type, amount, category } = req.body;
        const transaction = new Finance({ user: req.user.id, type, amount, category });
        await transaction.save();
        res.status(201).json(transaction);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

exports.getTransactions = async (req, res) => {
    try {
        const transactions = await Finance.find({ user: req.user.id });
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};
