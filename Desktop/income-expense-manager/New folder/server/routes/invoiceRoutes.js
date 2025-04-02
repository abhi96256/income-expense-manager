const express = require('express');
const router = express.Router();
const Invoice = require('../models/Invoice'); // Invoice model

// Create a new invoice
router.post('/', async (req, res) => {
  try {
    const { invoiceNumber, customerName, customerAddress, customerPhone, items, discount, notes } = req.body;

    const newInvoice = new Invoice({
      invoiceNumber,
      customerName,
      customerAddress,
      customerPhone,
      items,
      discount,
      notes
    });

    await newInvoice.save();
    res.status(201).json({
      message: 'Invoice created successfully!',
      invoice: newInvoice
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating invoice', error });
  }
});

// Get all invoices
router.get('/', async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.status(200).json(invoices);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching invoices', error });
  }
});

// Get a single invoice by invoiceNumber
router.get('/:invoiceNumber', async (req, res) => {
  try {
    const invoice = await Invoice.findOne({ invoiceNumber: req.params.invoiceNumber });
    if (!invoice) {
      return res.status(404).json({ message: 'Invoice not found' });
    }
    res.status(200).json(invoice);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching invoice', error });
  }
});

// Update an invoice by invoiceNumber
router.put('/:invoiceNumber', async (req, res) => {
  try {
    const updatedInvoice = await Invoice.findOneAndUpdate(
      { invoiceNumber: req.params.invoiceNumber },
      req.body,
      { new: true }
    );

    if (!updatedInvoice) {
      return res.status(404).json({ message: 'Invoice not found' });
    }

    res.status(200).json({
      message: 'Invoice updated successfully',
      invoice: updatedInvoice
    });
  } catch (error) {
    res.status(500).json({ message: 'Error updating invoice', error });
  }
});

// Delete an invoice by invoiceNumber
router.delete('/:invoiceNumber', async (req, res) => {
  try {
    const deletedInvoice = await Invoice.findOneAndDelete({ invoiceNumber: req.params.invoiceNumber });
    if (!deletedInvoice) {
      return res.status(404).json({ message: 'Invoice not found' });
    }
    res.status(200).json({
      message: 'Invoice deleted successfully',
      invoice: deletedInvoice
    });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting invoice', error });
  }
});

module.exports = router;
