// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    photos: [String], // Array of URLs to handle multiple images
    title: { type: String, required: true },
    price: { type: Number, required: true },
    status: { type: String, enum: ['In Stock', 'Out of Stock', 'capturingking'], required: true },
    deliveryDays: { type: Number, required: true },
    description: { type: String, required: true },
});

module.exports = mongoose.model('Product', productSchema);
