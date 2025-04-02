const Stock = require('../models/Stock');

exports.getAllStock = async (req, res) => {
  try {
    const stock = await Stock.find().sort({ date: -1 });
    res.json({ status: 'success', data: stock });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
};

exports.addStock = async (req, res) => {
  try {
    const newStock = new Stock(req.body);
    const savedStock = await newStock.save();
    res.status(201).json({ status: 'success', data: savedStock });
  } catch (err) {
    res.status(400).json({ status: 'error', message: err.message });
  }
};