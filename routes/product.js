const express = require("express");
const router = express.Router();
const productosController = require("../controller/productosController");

router.get("/", productosController.product);

router.get("/add", productosController.addProduct);
router.get('/search-results', productosController.searchResults);
router.get("/id/:id", productosController.productDetail)
router.post("/createProduct", productosController.createProduct)
router.post("/comentar",productosController.comentar)

module.exports = router;