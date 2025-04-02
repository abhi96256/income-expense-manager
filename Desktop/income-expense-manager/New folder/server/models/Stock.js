const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  vendorName: { type: String, required: true },
  type: { type: String, required: true },
  itemName: { type: String, required: true, unique: true },
  quantity: { type: Number, required: true, min: 0 },
  price: { type: Number, required: true, min: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Update the updatedAt field before saving
stockSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Stock', stockSchema);