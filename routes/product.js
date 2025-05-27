const express = require("express");
const router = express.Router();
const productosController = require("../controller/productosController");

router.get("/", productosController.product);

router.get("/add", productosController.addProduct);
router.get('/search-results', productosController.searchResults);
router.get("/id/:id", productosController.productDetail)


module.exports = router;