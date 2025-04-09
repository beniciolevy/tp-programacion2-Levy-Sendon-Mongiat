var express = require('express');
var router = express.Router();
let paginasController = require("../controller/paginasController")

router.get('/', paginasController.index);
router.get('/search-results', paginasController.searchResults);


module.exports = router;
