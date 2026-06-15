const Product = require("./../model/productModel");
const catchAsync = require("./../utils/catchAsync");
const APIFeatures = require("./../utils/appFeatures");
const AppError = require("../utils/appError");

exports.aliasBestSeller = (req, res, next) => {
  req.alias = {
    limit: "5",
    sort: "-rating,price",
    fields: "title,rating,price",
  };

  next();
};

exports.getProducts = catchAsync(async (req, res, next) => {
  const queryData = { ...req.query, ...(req.alias || {}) };

  const features = new APIFeatures(Product.find(), queryData)
    .filter()
    .sort()
    .fields()
    .paginate();

  const products = await features.query;

  res.status(200).json({
    status: "success",
    results: products.length,
    data: {
      products,
    },
  });
});

exports.getSingleProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new AppError("No product found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      product,
    },
  });
});

exports.addProducts = catchAsync(async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(200).json({
    status: "success",
    data: product,
  });
});

exports.updateProducts = catchAsync(async (req, res, next) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!product) {
    return next(new AppError("No product found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      product,
    },
  });
});

exports.deleteProducts = catchAsync(async (req, res, next) => {
  const product = await Product.findByIdAndDelete(req.params.id);

  if (!product) {
    return next(new AppError("No product found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      product,
    },
  });
});

exports.getProductStats = catchAsync(async (req, res, next) => {
  const stats = await Product.aggregate([
    {
      $match: { rating: { $gte: 4.7 } },
    },
    {
      $group: {
        _id: "$rating",
        numProducts: { $sum: 1 },
        ratingAvg: { $avg: "$rating" },
        priceAvg: { $avg: "$price" },
        minPrice: { $min: "$price" },
        maxPrice: { $max: "$price" },
      },
    },
    {
      $sort: { rating: -1 },
    },
  ]);

  res.status(200).json({
    status: "success",
    data: {
      stats,
    },
  });
});

exports.getFlowersUsed = catchAsync(async (req, res, next) => {
  const stats = await Product.aggregate([
    {
      $unwind: "$includes",
    },
    {
      $match: { rating: { $gte: 4.5 } },
    },
    {
      $group: {
        _id: "$includes",
        numProducts: { $sum: 1 },
        ratingAvg: { $avg: "$rating" },
        priceAvg: { $avg: "$price" },
      },
    },
    {
      $sort: { numProducts: -1 },
    },
    {
      $addFields: { flower: "$_id" },
    },
    {
      $project: { _id: 0 },
    },
    {
      $limit: 10,
    },
  ]);

  res.status(200).json({
    status: "success",
    data: {
      stats,
    },
  });
});
