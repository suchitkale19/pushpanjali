const User = require("../model/userModel");
const catchAsync = require("../utils/catchAsync");

exports.getUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    status: "success",
    data: {
      users,
    },
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
