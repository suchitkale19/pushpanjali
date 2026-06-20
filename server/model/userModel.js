const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

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
    lowercase: true,
    required: [true, "A user must have email"],
    validate: [validator.isEmail, "Please provide a valid email."],
  },
  photo: {
    type: String,
  },
  password: {
    type: String,
    trim: true,
    required: [true, "A user must have password"],
    select: false,
  },
  confirmPassword: {
    type: String,
    trim: true,
    required: [true, "A user must repeate password"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "The Passwords are not the same",
    },
  },
  passwordChangedAt: {
    type: Date,
    default: Date.now(),
  },
});

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 12);

  this.confirmPassword = undefined;
});

userSchema.methods.checkPassword = async function (
  candidatePassword,
  userPassword,
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.checkPasswordUpdate = function (JWTTimeStamp) {
  if (this.passwordChangedAt) {
    const userTimeStamp = parseInt(this.passwordChangedAt.getTime() / 1000, 10);
    return userTimeStamp < JWTTimeStamp;
  }
  return false;
};

const User = mongoose.model("User", userSchema);

// productSchema.pre("save", function () {
//   this.slug = slugify(this.title);
// });

module.exports = User;
