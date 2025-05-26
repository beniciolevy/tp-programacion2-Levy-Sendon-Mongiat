var express = require('express');
var router = express.Router();
let usersController = require("../controller/usersController")

router.get('/profile', usersController.profile);
router.get('/login', usersController.login);
router.post('/processLogin', usersController.processLogin);
router.get('/register', usersController.register);
router.post('/newuser', usersController.create);
router.get('/search-results', usersController.searchResults);
router.post('/logout', usersController.logout);


module.exports = router;
