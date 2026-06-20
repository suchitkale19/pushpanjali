const AppError = require("./../utils/appError");

const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path} : ${err.value}`;
  return new AppError(message, 404);
};

const handleDuplicateKeyErrorDB = (err) => {
  const value = err.message.match(/(["'])(\\?.)*?\1/)[0];
  console.log(value);
  const message = `Duplicate Key ${value} , Please use another one.`;
  return new AppError(message, 404);
};

const handleValidationErrorDB = (err) => {
  const errorMessages = Object.values(err.errors).map((el) => el.message);
  const message = `Invalid input data , ${errorMessages.join(" , ")}`;
  return new AppError(message, 400);
};

const handleJsonWebTokenError = () => {
  return new AppError("Invalid Token! Please try again", 401);
};

const handleTokenExpiredError = () => {
  return new AppError("Token has Expired! Please Log in again", 401);
};

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    err: err,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorProd = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    // console.log("ERROR ", err);
    res.status(500).json({
      status: "error",
      message: "Something went very wrong!",
    });
  }
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === "production") {
    let error = { ...err };
    error.message = err.message;
    error.name = err.name;
    console.log(error);
    if (error.name === "CastError") error = handleCastErrorDB(error);
    if (error.code === 11000) error = handleDuplicateKeyErrorDB(error);
    if (error.name === "ValidationError")
      error = handleValidationErrorDB(error);
    if (error.name === "JsonWebTokenError") error = handleJsonWebTokenError();
    if (error.name === "TokenExpiredError") error = handleTokenExpiredError();

    sendErrorProd(error, res);
  }
};
