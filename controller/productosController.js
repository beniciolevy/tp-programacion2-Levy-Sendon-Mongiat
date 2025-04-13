const usuario = require("../db/index"); 
const productos = require("../db/index")

const productosController = {
    product: function(req,res){
        res.render("product", {producto: productos})
    },

    addProduct: function (req, res) {
        res.render('product-add', {usuario} );
      },
}
module.exports = productosController;
