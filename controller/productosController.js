const { producto, usuario } = require("../db/index");

const productosController = {
    product: function(req,res){
        res.render("product", { producto });
    },

    addProduct: function (req, res) {
        res.render('product-add', {usuario} );
      },
};
module.exports = productosController;
