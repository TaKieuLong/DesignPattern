const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String
}, { discriminatorKey: 'category' });

const Product = mongoose.model('Product', productSchema);
module.exports = Product;