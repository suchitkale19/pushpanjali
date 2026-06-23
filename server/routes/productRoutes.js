const express = require("express");

const {
  aliasBestSeller,
  getProductStats,
  getFlowersUsed,
  getProducts,
  getSingleProduct,
  addProducts,
  updateProducts,
  deleteProducts,
} = require("./../controllers/productControllers");

const { protect, restrictTo } = require("./../controllers/authController");

const router = express.Router();

router.route("/best-seller").get(aliasBestSeller, getProducts);

router.route("/product-stats").get(getProductStats);
router.route("/flower-used").get(getFlowersUsed);

router.route("/").get(protect, getProducts).post(addProducts);
router
  .route("/:id")
  .get(getSingleProduct)
  .patch(updateProducts)
  .delete(protect, restrictTo("admin"), deleteProducts);

module.exports = router;
