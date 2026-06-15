const mongoose = require("mongoose");
const slugify = require("slugify");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "A Product Must Have A Title"],
      unique: true,
      trim: true,
    },
    slug: String,
    description: {
      type: String,
      trim: true,
    },
    category: {
      type: String,
      required: [true, "A Product Must Have A Category"],
      trim: true,
    },
    includes: [String],
    price: {
      type: Number,
      required: [true, "A product must have price"],
    },
    image: {
      type: String,
      required: [true, "A Product Must Have A Image"],
      trim: true,
    },
    discountPercentage: {
      type: Number,
      default: 5,
    },
    rating: {
      type: Number,
      default: 4.5,
      min: [1, "Rating must be 1 or above 1"],
      max: [5, "Rating must be 5 or below 5"],
    },
    shippingInformation: {
      type: String,
      default: "Arrives in 2 days",
      trim: true,
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

productSchema.pre("save", function () {
  this.slug = slugify(this.title);
});

// productSchema.post("save", function (docs) {
//   console.log(docs);
// });

productSchema.pre(/^find/, function () {
  this.requestTime = Date.now();
});
productSchema.post(/^find/, function () {
  console.log(`Query took ${Date.now() - this.requestTime} milliseconds`);
});
// productSchema.pre("aggregate", function () {
//   //aggregation fn
// });
// productSchema.post("aggregate", function (docs) {
//   //aggregation fn
// });

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
