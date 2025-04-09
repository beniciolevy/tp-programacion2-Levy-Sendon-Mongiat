const usuarioLogueado = require("../db/profile")

const paginasController = {
    index: function(req,res){
        res.render("index copy")
    },

  
    


      searchResults: function (req, res) {
        res.render('search-results');
      },
}

module.exports = paginasController;