const express = require("express");
const path = require("path");
const router = express.Router();
const productController = require("../controllers/products");
// const rootDir = require("../utils/path");

router.get("/", productController.getProducts);

module.exports = router;
