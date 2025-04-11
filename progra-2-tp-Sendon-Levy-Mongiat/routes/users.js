var express = require('express');
var router = express.Router();
let userController = require('../controller/userController')

router.get('/profile', userController.profile);
router.get('/login', userController.login);
router.get('/register', userController.register);

module.exports = router;
