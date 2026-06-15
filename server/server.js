const express = require("express");
const mongoose = require("mongoose");

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION ! Shutting down the server...");
  console.log(err.name, err.message);
  process.exit(1);
});

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DB_PASSWORD);
mongoose.connect(DB).then(() => console.log("DB Connected Successfully"));

const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION ! Shutting down the server...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
