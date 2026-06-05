const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A Product Must Have Name"],
    unique: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, "A product must have price"],
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
