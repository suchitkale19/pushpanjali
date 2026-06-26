const mongoose = require("mongoose");
const validator = require("validator");
const crypto = require("crypto");
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
  role: {
    type: String,
    default: "user",
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
  passwordChangedAt: Date,
  passwordResetToken: String,
  resetTokenExpiresIn: Date,

  isActive: {
    type: Boolean,
    default: true,
    select: false,
  },

  passwordAttempted: {
    type: Number,
    select: false,
  },
  failLoginDate: Date,
});

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 12);

  this.confirmPassword = undefined;
});

userSchema.pre(/^find/, function () {
  this.find({ isActive: { $ne: false } });
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
    console.log(userTimeStamp);
    return userTimeStamp < JWTTimeStamp;
  }
  return false;
};

userSchema.methods.createResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetTokenExpiresIn = Date.now() + 10 * 60 * 1000;
  return resetToken;
};

const User = mongoose.model("User", userSchema);

// productSchema.pre("save", function () {
//   this.slug = slugify(this.title);
// });

module.exports = User;
