const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "A user must have name"],
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: [true, "A user must have email"],
  },
  photo: {
    type: String,
  },
  password: {
    type: String,
    trim: true,
    required: [true, "A user must have password"],
  },
  confirmPassword: {
    type: String,
    trim: true,
    required: [true, "A user must repeate password"],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
