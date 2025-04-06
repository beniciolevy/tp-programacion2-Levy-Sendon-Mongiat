const express = require("express");
const router = express.Router();
const productosController = require("../controller/productosController");

router.get("/", productosController.product);
router.get("/add", productosController.addProduct);

module.exports = router;