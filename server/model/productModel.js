const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "A Product Must Have A Title"],
      unique: true,
    },
    description: String,
    category: {
      type: String,
      required: [true, "A Product Must Have A Category"],
    },
    includes: [String],
    price: {
      type: Number,
      required: [true, "A product must have price"],
    },
    image: {
      type: String,
      required: [true, "A Product Must Have A Image"],
    },
    discountPercentage: {
      type: Number,
      default: 5,
    },
    rating: {
      type: Number,
      default: 4.5,
    },
    shippingInformation: {
      type: String,
      default: "Arrives in 2 days",
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

productSchema.virtual("discountedPrice").get(function () {
  return Math.round(this.price - (this.discountPercentage / 100) * this.price);
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
