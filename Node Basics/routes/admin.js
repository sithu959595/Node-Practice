const express = require("express");
const path = require("path");
const router = express.Router();
// const rootDir = require("../utils/path");
const productController = require("../controllers/products.js");

router.get("/add-product", productController.getAddProduct);
router.post("/add-product", productController.postAddProduct);

// module.exports = router;
exports.routes = router;
