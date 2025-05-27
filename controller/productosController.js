const datos = require("../db/index");
let db = require("../database/models");
let op = db.Sequelize.Op;



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
    },

     // Controlador de barra de busqueda 
    searchResults: function (req, res) {
        // Defino lo que busco el usuario con la variable busqueda
        let busqueda = req.query.search
        // Esto busca en la base de datos los productos que se parezcan a lo que hay en "busqueda"
        db.Producto.findAll({
            where: [
                {nombreProducto: {[op.like] : "%" + busqueda + "%"}}]
        })

        .then(function(productos){
            return res.render("search-results", {productos: productos, usuario: req.session.usuario})
        })

    }



}
module.exports = productosController;


  