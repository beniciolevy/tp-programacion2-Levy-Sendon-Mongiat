const datos = require("../db/index");

const indexController = {

    //maneja la logica del home 
    
    index: function (req, res) {
        res.render("index", {
            productos: datos.productos,     // carga los productos
            usuario: req.session.usuario   //pasa el usuario logueado si es que esta logueado
        });
    }
};

module.exports = indexController;
