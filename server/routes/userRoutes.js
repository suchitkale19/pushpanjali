const express = require("express");

const {
  getUsers,
  getSingleUser,
  addUsers,
  updateUsers,
  deleteUsers,
} = require("./../controllers/userController");

const {
  signup,
  login,
  forgotPassword,
  resetPassword,
} = require("./../controllers/authController");

const router = express.Router();

router.route("/signup").post(signup);
router.route("/login").post(login);

router.route("/forgotPassword").post(forgotPassword);
router.route("/resetPassword/:token").patch(resetPassword);

router.route("/").get(getUsers).post(addUsers);
router.route("/:id").get(getSingleUser).patch(updateUsers).delete(deleteUsers);

module.exports = router;
