const usuarioLogueado = require("../db/profile")

const paginasController = {
    index: function(req,res){
        res.render("index copy")
    },

    login: function(req,res){
        res.render("login")
    },

    register: function(req,res){
        res.render("register")
    },

    profile: function(req,res){
        res.render("profile", {usuario: usuarioLogueado})
    },
    

     

      searchResults: function (req, res) {
        res.render('search-results');
      },
}

module.exports = paginasController;