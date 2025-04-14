const datos = require("../db/index")

const paginasController = {
    login: function (req, res) {
        res.render("login") 
    },
    register: function (req, res) {
        res.render("register") 
    },
    profile: function (req, res) {
        res.render("profile", { usuario: datos.usuario, productos: datos.productos })
    },
    searchResults: function (req, res) {
        res.render('search-results', { usuario: datos.usuario}); 
    },
}

module.exports = paginasController;
