const mongoose = require('mongoose');

const invoiceItemSchema = new mongoose.Schema({
  description: { type: String, required: true },
  quantity: { type: Number, required: true, min: 1 },
  price: { type: Number, required: true, min: 0 }
});

const invoiceSchema = new mongoose.Schema({
  invoiceNumber: { type: String, required: true, unique: true },
  customerName: { type: String, required: true },
  customerAddress: String,
  customerPhone: String,
  items: [invoiceItemSchema],
  subtotal: { type: Number, required: true, min: 0 },
  tax: { type: Number, default: 0, min: 0 },
  discount: { type: Number, default: 0, min: 0 },
  total: { type: Number, required: true, min: 0 },
  date: { type: Date, default: Date.now },
  notes: String
});

// Pre-save hook to calculate subtotal, tax, discount, and total
invoiceSchema.pre('save', function (next) {
  this.subtotal = this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  this.tax = this.subtotal * 0.18; // assuming 18% tax
  this.discount = this.discount || 0; // use 0 if no discount is provided
  this.total = this.subtotal + this.tax - this.discount;
  next();
});

// Export the Invoice model after defining the schema and hook
module.exports = mongoose.model('Invoice', invoiceSchema);
