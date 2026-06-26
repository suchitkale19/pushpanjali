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

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000,
    ),
    httpOnly: true,
  };
  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  res.cookie("jwt", token, cookieOptions);
  res.status(200).json({
    status: "success",
    token,
    data: {
      user,
    },
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

  createSendToken(newUser, 201, res);
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  //1) Check if the user has provided email or password

  if (!email || !password) {
    return next(new AppError("Please provide Email and Password", 400));
  }

  //2) Check if the provided password or email are valid
  const user = await User.findOne({ email })
    .select("+password")
    .select("+passwordAttempted");

  if (user.failLoginDate > Date.now()) {
    return next(
      new AppError(
        "You Have got a password timeout Please wait for 10 minutes before login in",
        403,
      ),
    );
  }

  const correct = await user.checkPassword(password, user.password);

  if (!user || !correct) {
    // when the user is loggin in with wrong password again and again
    user.passwordAttempted =
      (user.passwordAttempted === undefined ? 0 : user.passwordAttempted) + 1;
    await user.save({ validateBeforeSave: false });
    if (user.passwordAttempted > 3) {
      user.failLoginDate = Date.now() + 1 * 60 * 1000;
      await user.save({ validateBeforeSave: false });
      return next(
        new AppError(
          "You have exceded the login limit ! Please try again after 10 minutes",
          403,
        ),
      );
    }

    return next(new AppError("Please provide valid email or password", 400));
  }

  user.passwordAttempted = undefined;
  user.failLoginDate = undefined;
  user.save({ validateBeforeSave: false });

  //3) if everything is ok then send the token
  createSendToken(user, 200, res);
});

exports.protect = async (req, res, next) => {
  // 1)check if there is a token
  let token;
  if (
    req.headers.authorization &&
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

  createSendToken(user, 200, res);
};

exports.updatePassword = async (req, res, next) => {
  const user = await User.findById(req.user.id).select("+password");
  if (!user) {
    return next(new AppError("No user found with this ID!", 404));
  }

  const correct = await user.checkPassword(
    req.body.currentPassword,
    user.password,
  );
  if (!correct) {
    return next(new AppError("Please provide valid Password", 403));
  }

  user.password = req.body.password;
  user.confirmPassword = req.body.confirmPassword;
  user.save();

  createSendToken(user, 200, res);
};
