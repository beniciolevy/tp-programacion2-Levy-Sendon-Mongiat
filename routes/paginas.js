var express = require('express');
var router = express.Router();
let paginasController = require("../controller/paginasController")

router.get('/', paginasController.index);
router.get('/profile', paginasController.profile);
router.get('/login', paginasController.login);
router.get('/register', paginasController.register);
router.get('/product', paginasController.product);

module.exports = router;
