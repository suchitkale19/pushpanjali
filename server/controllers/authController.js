const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const User = require("../model/userModel");

const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const sendEmail = require("../utils/email");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  });
  const token = signToken(newUser._id);

  res.status(200).json({
    status: "success",
    token,
    data: {
      user: newUser,
    },
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  //1) Check if the user has provided email or password

  if (!email || !password) {
    return next(new AppError("Please provide Email and Password", 400));
  }

  //2) Check if the provided password or email are valid
  const user = await User.findOne({ email }).select("+password");
  const correct = await user.checkPassword(password, user.password);

  if (!user || !correct) {
    return next(new AppError("Please provide valid email or password", 400));
  }
  //3) if everything is ok then send the token
  const token = signToken(user._id);

  res.status(200).json({
    status: "success",
    token,
  });
});

exports.protect = async (req, res, next) => {
  // 1)check if there is a token
  let token;
  if (
    req.headers.authorization ||
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(
      new AppError(
        "You haven't logged in yet! Please Log in to get access ",
        401,
      ),
    );
  }

  //2)Verification of the token

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  //3)check if the user still exists
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(
      new AppError(
        "The user belonging to this token does no longer exists, Please try again",
        401,
      ),
    );
  }

  //4)check if the password has not been changed after the token was created
  if (currentUser.checkPasswordUpdate(decoded.iat)) {
    return next(
      new AppError(
        "User has recently changed the password ! Please Log in again",
        401,
      ),
    );
  }

  req.user = currentUser;

  next();
};

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError("You have no permission to perform this action", 403),
      );
    }
    next();
  };
};

exports.forgotPassword = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new AppError("No user found with that email adddress", 404));
  }

  const resetToken = user.createResetToken();
  await user.save({ validateBeforeSave: false });

  const resetURL = `${req.protocol}://${req.get("host")}/api/v1/users/resetPassword/${resetToken}`;
  const message = `Forgot your Password? Submit a PATCH request with your new password and confirm password to : ${resetURL} . If you don't forgot your password please ignore this message`;

  await sendEmail({
    email: user.email,
    subject: "Your password reset token (valid for 10 min)",
    message,
  });

  res.status(200).json({
    status: "success",
    message: "The token has been send to you via mail",
  });
};

exports.resetPassword = async (req, res, next) => {
  const resetToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    passwordResetToken: resetToken,
    resetTokenExpiresIn: { $gt: Date.now() },
  });

  if (!user) {
    return next(new AppError("Token is invalid or has expired", 400));
  }

  user.password = req.body.password;
  user.confirmPassword = req.body.confirmPassword;
  user.passwordResetToken = undefined;
  user.resetTokenExpiresIn = undefined;
  user.save();

  const token = signToken(user._id);
  res.status(200).json({
    status: "success",
    token,
  });
};

exports.updatePassword = async (req, res, next) => {
  const user = await User.findById(req.params.id).select("+password");
  if (!user) {
    return next(new AppError("No user found with this ID!", 404));
  }

  const correct = await user.checkPassword(req.body.password, user.password);
  if (correct) {
    return next(new AppError("Please provide valid Password", 403));
  }

  user.password = req.body.password;
  user.confirmPassword = req.body.confirmPassword;
  user.save();

  const token = signToken(user._id);
  res.status(200).json({
    status: "success",
    token,
  });
};
