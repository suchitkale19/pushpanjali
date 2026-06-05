const express = require("express");

const {
  getUsers,
  getSingleUser,
  addUsers,
  updateUsers,
  deleteUsers,
} = require("./../controllers/userController");

const router = express.Router();

router.route("/").get(getUsers).post(addUsers);
router.route("/:id").get(getSingleUser).patch(updateUsers).delete(deleteUsers);

module.exports = router;
