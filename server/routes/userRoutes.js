const express = require("express");

const {
  getUsers,
  getSingleUser,
  addUsers,
  updateUsers,
  deleteUsers,
} = require("./../controllers/userController");

const { signup, login } = require("./../controllers/authController");

const router = express.Router();

router.route("/signup").post(signup);
router.route("/login").post(login);

router.route("/").get(getUsers).post(addUsers);
router.route("/:id").get(getSingleUser).patch(updateUsers).delete(deleteUsers);

module.exports = router;
