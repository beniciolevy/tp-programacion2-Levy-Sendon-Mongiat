const datos = require("../db/index")



const indexController = { 
    index: function (req, res) {
    res.render("index", { productos: datos.productos }) 
},
}

module.exports = indexController