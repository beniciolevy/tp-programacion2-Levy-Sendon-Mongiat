var express = require('express');
var router = express.Router();
let usersController = require("../controller/usersController")

router.get('/profile', usersController.profile);
router.get("/profile/:id", usersController.profileId)
router.get('/login', usersController.login);
router.post('/processLogin', usersController.processLogin);
router.get('/register', usersController.register);
router.post('/newuser', usersController.create);
router.post('/logout', usersController.logout);


module.exports = router;
