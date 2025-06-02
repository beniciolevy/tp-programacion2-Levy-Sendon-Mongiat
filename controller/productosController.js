let db = require("../database/models");
let op = db.Sequelize.Op;



const productosController = {
     // Muestra todos los productos en la página de inicio
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
    //Renderiza el formulario para agregar un producto (solo para usuarios logueados)
    addProduct: function (req, res) {
        res.render('product-add', { usuario: req.session.usuario });
      },

     // Procesa el formulario para crear un nuevo producto
createProduct: function(req, res) {
     // Crea un nuevo producto con los datos enviados desde el formulario

    db.Producto.create({
        foto: req.body.imagen,
        nombreProducto: req.body.nombre,
        descripcionProducto: req.body.descripcion,
        idUsuario: req.session.usuario.id, // Lo asocia al usuario logueado


    })

        .then(function (producto) {
             // Luego de crear la publicacion, redirige al perfil del usuario que lo publicó
            let idLogueado = req.session.usuario.id;
            res.redirect(`/users/profile/${idLogueado}`)
        })

},

    // Muestra el detalle de un producto en base a su ID
productDetail: function(req, res) {
    const id = req.params.id; // Obtiene el ID desde la URL

    db.Producto.findByPk(id, {
        // Trae el producto y también al usuario dueño y los comentarios (con el usuario que comentó)
        include: [   {association: "usuario"},   {association: "comentarios", include: ["usuario"]} ]
    })
    
    .then(function(producto){
        // Renderiza la vista con los detalles del producto, usuario logueado e ID del producto
        res.render("product",{ producto: producto, usuario: req.session.usuario, idProduct: id } )
    })
},
// Realiza una búsqueda de productos por nombre
searchResults: function (req, res) {
    let busqueda = req.query.search // Toma el texto del buscador
    db.Producto.findAll({
        where: [
            //filtra productos cuyo nombre contenga el texto buscado
            { nombreProducto: { [op.like]: "%" + busqueda + "%" } }],
              //incluye relaciones para mostrar info del usuario y comentarios
        include: [{ association: "usuario" }, { association: "comentarios" }]
    })

        .then(function (productos) {

            // Renderiza la vista de resultados de búsqueda con los datos necesarios
            return res.render("search-results", { productos: productos, usuario: req.session.usuario, search: req.query.search })
        })

},
 //agrega un comentario a un producto
comentar: function(req, res) {
    db.Comentario.create({
        textoComentario: req.body.comentario, // texto del comentario
        idProducto: req.body.idProduct,  // ID del producto comentado
        idUsuario: req.body.idUser,  // ID del usuario que comenta
    })
    // Luego de comentar, redirige al detalle del producto
        .then(function () {
            res.redirect(`/product/id/${req.body.idProduct}`)
        })
}

}
module.exports = productosController;



