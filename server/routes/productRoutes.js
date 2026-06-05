const express = require("express");

const {
  getProducts,
  getSingleProduct,
  addProducts,
  updateProducts,
  deleteProducts,
} = require("./../controllers/productControllers");

const router = express.Router();

router.route("/").get(getProducts).post(addProducts);
router
  .route("/:id")
  .get(getSingleProduct)
  .patch(updateProducts)
  .delete(deleteProducts);

module.exports = router;
