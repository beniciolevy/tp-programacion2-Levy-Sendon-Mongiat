const data = require("../db/index")

let productosController = {
    detalle: function (req, res) {
        res.render("product", {usuarioLogueado: data.usuarioLogueado, producto: data.productos});
    },

    addProduct: function (req, res) {
        res.render('product-add', { usuario: usuarioLogueado });
    }
};

module.exports = productosController;
