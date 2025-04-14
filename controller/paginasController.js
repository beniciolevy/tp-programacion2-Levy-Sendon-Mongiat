const {productos, usuario} = require("../db/index")

const paginasController = {
    index: function (req, res) {
        res.render("index", { productos }) 
    },
    login: function (req, res) {
        res.render("login") 
    },
    register: function (req, res) {
        res.render("register") 
    },
    profile: function (req, res) {
        res.render("profile", { usuario, productos })
    },
    searchResults: function (req, res) {
        res.render('search-results', { usuario }); 
    },
}

module.exports = paginasController;
