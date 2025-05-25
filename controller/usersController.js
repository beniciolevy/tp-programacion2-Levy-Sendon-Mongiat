let db = require("../database/models");
let bcrypt = require('bcryptjs');


const usersController = {
    login: function (req, res) {
        res.render("login")
    },
    register: function (req, res) {
        res.render("register")
    },
    create: function (req, res) {
        db.Usuario.findOne({ where: { email: req.body.email } })
            .then(function (usuarioExistente) {
                if (usuarioExistente) {
                    return res.render("register", { error: "El email ya está registrado." });
                }
                let passEncriptada = bcrypt.hashSync(req.body.contrasenia, 10);
                db.Usuario.create({
                    email: req.body.email,
                    contrasenia: passEncriptada,
                    fechaNacimiento: req.body.fechaNacimiento,
                    dni: req.body.dni,
                    fotoPerfil: req.body.fotoPerfil
                })
                .then(function () {
                    res.redirect("/users/login");
                })
                .catch(function (error) {
                    console.log(error);
                    res.render("register", { error: "Error al crear el usuario." });
                });
            })
            .catch(function (error) {
                console.log(error);
                return res.render("register", { error: "Error en la base de datos." });
            });
    },
    profile: function (req, res) {
        res.render("profile", { usuario: null, productos: [] })
    },
    searchResults: function (req, res) {
        res.render('search-results', { usuario: null });
    },
}

module.exports = usersController;
