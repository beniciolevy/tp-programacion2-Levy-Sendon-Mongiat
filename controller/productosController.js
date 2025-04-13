const {productos, usuario } = require("../db/index"); 


const productosController = {
    product: function(req,res){
        res.render("product", {productos})
    },

    addProduct: function (req, res) {
        res.render('product-add', {usuario} );
      },

    productDetail: function(req,res){
        const id = req.params.id;
       
        let producto

        for (let i = 0; i < productos.length; i++) {
            if (productos[i].id == id) {
                producto = productos[i];
                break; 
            }
        }        res.render("product", {producto});
    }
}
module.exports = productosController;
