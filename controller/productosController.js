const datos = require("../db/index"); 


const productosController = {
    product: function(req,res){
        res.render("product", {productos: datos.productos})
    },

    addProduct: function (req, res) {
        res.render('product-add', {usuario: datos.usuario} );
      },

    productDetail: function(req,res){
        const id = req.params.id;
       
        let producto

        for (let i = 0; i < datos.productos.length; i++) {
            if (datos.productos[i].id == id) {
                producto = datos.productos[i];
                break; 
            }
        }        res.render("product", {producto});
    }
}
module.exports = productosController;
