const usuarioLogueado = require("../db/profile"); 
const productos = require("../db/product")

const productosController = {
    product: function(req,res){
        res.render("product", {producto: productos})
    },

    addProduct: function (req, res) {
        res.render('product-add', {usuario: usuarioLogueado} );
      },

}


module.exports = productosController;
