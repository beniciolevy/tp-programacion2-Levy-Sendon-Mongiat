const datos = require("../db/index"); 


const productosController = {
    product: function(req,res){
        res.render("product", {productos: datos.productos, usuario: req.session.usuario})
    },

    addProduct: function (req, res) {
        res.render('product-add', {usuario: req.session.usuario} );
      },

    productDetail: function(req,res){
        const id = req.params.id;
       
        let producto

        for (let i = 0; i < datos.productos.length; i++) {
            if (datos.productos[i].id == id) {
                producto = datos.productos[i];
                break; 
            }
        }        res.render("product", {producto, usuario: req.session.usuario});
    }
}
module.exports = productosController;
