const express = require("express");
const router = express.Router();
const productosController = require("../controller/productosController");

router.get("/detalle", productosController.detalle);
router.get("/addProduct", productosController.addProduct);

module.exports = router;