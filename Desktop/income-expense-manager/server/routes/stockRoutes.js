const express = require('express');
const router = express.Router();
const Stock = require('../models/Stock');
const Transaction = require('../models/Transaction');

// Helper function to create transaction
const createTransaction = async (transactionData) => {
  try {
    const transaction = new Transaction(transactionData);
    await transaction.save();
    return transaction;
  } catch (error) {
    console.error('Transaction creation error:', error);
    throw new Error('Failed to create transaction record');
  }
};

// Add new stock item with transaction
router.post('/add', async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  
  try {
    const { vendorName, type, itemName, quantity, price } = req.body;

    // Validation
    if (!vendorName || !type || !itemName || !quantity || !price) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    // Check for existing item
    const existingItem = await Stock.findOne({ itemName }).session(session);
    if (existingItem) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({ 
        success: false, 
        message: 'Item already exists' 
      });
    }

    // Create new stock item
    const newStock = new Stock({
      vendorName,
      type,
      itemName,
      quantity: Number(quantity),
      price: parseFloat(price)
    });

    await newStock.save({ session });

    // Create transaction record
    await createTransaction({
      itemId: newStock._id,
      itemName: newStock.itemName,
      type: 'in',
      quantity: newStock.quantity,
      price: newStock.price,
      vendorName: newStock.vendorName,
      notes: 'Initial stock entry'
    });

    await session.commitTransaction();
    session.endSession();

    res.status(201).json({ 
      success: true, 
      message: 'Stock and transaction added successfully', 
      stock: newStock 
    });

  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    
    console.error("Error in /add:", error);
    res.status(500).json({ 
      success: false, 
      message: "Internal Server Error",
      error: error.message 
    });
  }
});

// Update stock with transaction
router.post('/update', async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { itemName, quantity, operation, vendorName, price } = req.body;

    // Validation
    if (!itemName || !quantity || !operation) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({ 
        success: false, 
        message: 'Item name, quantity and operation are required' 
      });
    }

    const stockItem = await Stock.findOne({ itemName }).session(session);
    if (!stockItem) {
      await session.abortTransaction();
      session.endSession();
      return res.status(404).json({ 
        success: false, 
        message: 'Item not found' 
      });
    }

    // Process operation
    const transactionType = operation === 'add' ? 'in' : 'out';
    let updatedQuantity = stockItem.quantity;

    if (operation === 'add') {
      updatedQuantity += Number(quantity);
    } else if (operation === 'subtract') {
      if (stockItem.quantity < quantity) {
        await session.abortTransaction();
        session.endSession();
        return res.status(400).json({ 
          success: false, 
          message: 'Insufficient stock' 
        });
      }
      updatedQuantity -= Number(quantity);
    } else {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid operation' 
      });
    }

    // Update stock
    stockItem.quantity = updatedQuantity;
    if (price) stockItem.price = parseFloat(price);
    if (vendorName) stockItem.vendorName = vendorName;
    
    await stockItem.save({ session });

    // Create transaction
    await createTransaction({
      itemId: stockItem._id,
      itemName: stockItem.itemName,
      type: transactionType,
      quantity: Number(quantity),
      price: price || stockItem.price,
      vendorName: vendorName || stockItem.vendorName,
      notes: `Stock ${operation} operation`
    });

    await session.commitTransaction();
    session.endSession();

    res.status(200).json({ 
      success: true, 
      message: 'Stock and transaction updated',
      stock: stockItem
    });

  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    
    console.error("Error in /update:", error);
    res.status(500).json({ 
      success: false, 
      message: "Internal Server Error",
      error: error.message 
    });
  }
});

module.exports = router;