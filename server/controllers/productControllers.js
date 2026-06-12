const Product = require("./../model/productModel");

const APIFeatures = require("./../utils/appFeatures");

exports.aliasBestSeller = (req, res, next) => {
  req.alias = {
    limit: "5",
    sort: "-rating,price",
    fields: "title,rating,price",
  };

  next();
};

exports.getProducts = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err.message,
    });
  }
};
exports.getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        product,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err,
    });
  }
};
exports.addProducts = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);

    res.status(200).json({
      status: "success",
      data: newProduct,
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err,
    });
  }
};
exports.updateProducts = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        product,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err,
    });
  }
};
exports.deleteProducts = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        product,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err,
    });
  }
};

exports.getProductStats = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err.message,
    });
  }
};

exports.getFlowersUsed = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err.message,
    });
  }
};
