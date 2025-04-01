const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Transaction = require('../models/Transaction');

// Helper function for error handling
const handleError = (res, error, context) => {
  console.error(`[${new Date().toISOString()}] Error in ${context}:`, error);
  
  if (error.name === 'ValidationError') {
    const errors = Object.values(error.errors).map(err => err.message);
    return res.status(400).json({
      success: false,
      message: 'Validation Error',
      errors
    });
  }

  if (error.kind === 'ObjectId') {
    return res.status(400).json({
      success: false,
      message: 'Invalid ID format'
    });
  }

  res.status(500).json({
    success: false,
    message: 'Server Error',
    error: process.env.NODE_ENV === 'development' ? error.message : undefined
  });
};

// @route   GET /api/transactions
// @desc    Get all transactions
// @access  Public
router.get('/', async (req, res) => {
  try {
    console.log('Fetching all transactions...');
    const transactions = await Transaction.find().sort({ createdAt: -1 });
    
    res.json({
      success: true,
      count: transactions.length,
      data: transactions
    });
  } catch (error) {
    handleError(res, error, 'GET /');
  }
});

// @route   POST /api/transactions
// @desc    Add a transaction
// @access  Public
router.post('/', async (req, res) => {
  const { text, amount, category, type } = req.body;
  
  // Validate input
  if (!text || !amount) {
    return res.status(400).json({
      success: false,
      message: 'Text and amount are required fields'
    });
  }

  if (typeof amount !== 'number') {
    return res.status(400).json({
      success: false,
      message: 'Amount must be a number'
    });
  }

  try {
    console.log('Creating new transaction:', { text, amount });
    
    const transaction = new Transaction({
      text,
      amount,
      category: category || 'Uncategorized',
      type: type || (amount >= 0 ? 'income' : 'expense')
    });

    const savedTransaction = await transaction.save();
    
    console.log('Transaction saved successfully:', savedTransaction._id);
    
    res.status(201).json({
      success: true,
      data: savedTransaction
    });
  } catch (error) {
    handleError(res, error, 'POST /');
  }
});

// @route   GET /api/transactions/:id
// @desc    Get single transaction
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid transaction ID'
      });
    }

    console.log(`Fetching transaction with ID: ${req.params.id}`);
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({
        success: false,
        message: 'Transaction not found'
      });
    }

    res.json({
      success: true,
      data: transaction
    });
  } catch (error) {
    handleError(res, error, `GET /${req.params.id}`);
  }
});

// @route   PUT /api/transactions/:id
// @desc    Update transaction
// @access  Public
router.put('/:id', async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid transaction ID'
      });
    }

    const { text, amount, category, type } = req.body;
    const updateData = {};

    if (text) updateData.text = text;
    if (amount) updateData.amount = amount;
    if (category) updateData.category = category;
    if (type) updateData.type = type;

    console.log(`Updating transaction ${req.params.id} with:`, updateData);
    
    const transaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!transaction) {
      return res.status(404).json({
        success: false,
        message: 'Transaction not found'
      });
    }

    res.json({
      success: true,
      data: transaction
    });
  } catch (error) {
    handleError(res, error, `PUT /${req.params.id}`);
  }
});

// @route   DELETE /api/transactions/:id
// @desc    Delete transaction
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid transaction ID'
      });
    }

    console.log(`Deleting transaction with ID: ${req.params.id}`);
    const transaction = await Transaction.findByIdAndDelete(req.params.id);

    if (!transaction) {
      return res.status(404).json({
        success: false,
        message: 'Transaction not found'
      });
    }

    res.json({
      success: true,
      data: {},
      message: 'Transaction deleted successfully'
    });
  } catch (error) {
    handleError(res, error, `DELETE /${req.params.id}`);
  }
});

// @route   GET /api/transactions/summary
// @desc    Get financial summary
// @access  Public
router.get('/summary', async (req, res) => {
  try {
    console.log('Generating financial summary...');
    
    const pipeline = [
      {
        $group: {
          _id: null,
          totalIncome: {
            $sum: {
              $cond: [{ $eq: ['$type', 'income'] }, '$amount', 0]
            }
          },
          totalExpenses: {
            $sum: {
              $cond: [{ $eq: ['$type', 'expense'] }, '$amount', 0]
            }
          },
          count: { $sum: 1 }
        }
      },
      {
        $project: {
          _id: 0,
          totalIncome: 1,
          totalExpenses: 1,
          netBalance: { $subtract: ['$totalIncome', '$totalExpenses'] },
          count: 1
        }
      }
    ];

    const summary = await Transaction.aggregate(pipeline);
    
    if (!summary.length) {
      return res.json({
        success: true,
        data: {
          totalIncome: 0,
          totalExpenses: 0,
          netBalance: 0,
          count: 0
        }
      });
    }

    res.json({
      success: true,
      data: summary[0]
    });
  } catch (error) {
    handleError(res, error, 'GET /summary');
  }
});

module.exports = router;