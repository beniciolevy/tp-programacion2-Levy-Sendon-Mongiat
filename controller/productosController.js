const datos = require("../db/index");
let db = require("../database/models");
const { Association } = require("sequelize");
const { search } = require("../routes");
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
                break;  //hacer find one y relaciones//
            }
        }        res.render("product", {producto, usuario: req.session.usuario,idProduct: id});
    },

     // Controlador de barra de busqueda 
    searchResults: function (req, res) {
        // Defino lo que busco el usuario con la variable busqueda
        let busqueda = req.query.search
        // Esto busca en la base de datos los productos que se parezcan a lo que hay en "busqueda"
        db.Producto.findAll({
            where: [
                {nombreProducto: {[op.like] : "%" + busqueda + "%"}}],
                include:[{association:"usuario"},{association:"comentarios"}]
        })

        .then(function(productos){
            return res.render("search-results", {productos: productos, usuario: req.session.usuario, search:req.query.search})
        })

    },
    comentar:function(req,res ){
       // res.send (req.body)//
        db.Comentario.create({
            textoComentario: req.body.comentario ,
            idProducto: req.body.idProduct ,
            idUsuario: req.body.idUser ,
        })
        .then(function(){
            res.redirect(`/product/id/${req.body.idProduct}`)
        })
    }



}
module.exports = productosController;


  
