var express = require('express');
var router = express.Router();

const productosController = require('../controller/productosController');

router.get('/', productosController.product);

module.exports = router;