let db = require("../database/models");
let op = db.Sequelize.Op;



const productosController = {
    product: function (req, res) {
        db.Producto.findAll({
            include: [{ association: 'usuario' }, { association: 'comentarios' }]
        })
        .then(function (productos) {
            res.render("index", { productos: productos, usuario: req.session.usuario })
        })
        .catch(function (error) {
                console.log(error);
            })

},

    addProduct: function (req, res) {
        res.render('product-add', { usuario: req.session.usuario });
      },

createProduct: function(req, res) {

    db.Producto.create({
        foto: req.body.imagen,
        nombreProducto: req.body.nombre,
        descripcionProducto: req.body.descripcion,
        idUsuario: req.session.usuario.id,

    })

        .then(function (producto) {
            let idLogueado = req.session.usuario.id;
            res.redirect(`/users/profile/${idLogueado}`)
        })

},

productDetail: function(req, res) {
    const id = req.params.id;

    db.Producto.findByPk(id, {
        include: [   {association: "usuario"},   {association: "comentarios", include: ["usuario"]} ]
    })
    
    .then(function(producto){
        res.render("product",{ producto: producto, usuario: req.session.usuario, idProduct: id } )
    })
},

searchResults: function (req, res) {
    let busqueda = req.query.search
    db.Producto.findAll({
        where: [
            { nombreProducto: { [op.like]: "%" + busqueda + "%" } }],
        include: [{ association: "usuario" }, { association: "comentarios" }]
    })

        .then(function (productos) {
            return res.render("search-results", { productos: productos, usuario: req.session.usuario, search: req.query.search })
        })

},
comentar: function(req, res) {
    db.Comentario.create({
        textoComentario: req.body.comentario,
        idProducto: req.body.idProduct,
        idUsuario: req.body.idUser,
    })
        .then(function () {
            res.redirect(`/product/id/${req.body.idProduct}`)
        })
}

}
module.exports = productosController;



