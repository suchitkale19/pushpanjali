const User = require("../model/userModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("./../utils/appError");

const filterObj = (obj, ...properties) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (properties.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.getUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    status: "success",
    data: {
      users,
    },
  });
});

exports.updateME = catchAsync(async (req, res, next) => {
  if (req.body.password || req.body.confirmPassword) {
    return next(
      new AppError(
        "You cannot update your password on this route use /updatePassword",
      ),
    );
  }

  const filteredBody = filterObj(req.body, "name", "email");

  const user = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });

  if (!user) {
    return next(new AppError("No user found", 404));
  }

  res.status(200).json({
    status: "success",
    user,
  });
});

exports.deleteMe = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.user.id, { isActive: false });

  res.status(204).json({
    status: "success",
    data: null,
  });
});

exports.getSingleUser = (req, res) => {
  res.status(200).json({
    status: "success",
    data: "The route hasn't set yet",
  });
};
exports.addUsers = (req, res) => {
  res.status(200).json({
    status: "success",
    data: "The route hasn't set yet",
  });
};
exports.updateUsers = (req, res) => {
  res.status(200).json({
    status: "success",
    data: "The route hasn't set yet",
  });
};
exports.deleteUsers = (req, res) => {
  res.status(200).json({
    status: "success",
    data: "The route hasn't set yet",
  });
};
