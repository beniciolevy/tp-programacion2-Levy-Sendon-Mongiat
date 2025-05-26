let db = require("../database/models");
let bcrypt = require('bcryptjs');


const usersController = {
    login: function (req, res) {
        if (req.session.usuario != undefined) {
            return res.redirect("/")
        }
        res.render("login")
    },
    processLogin: function (req, res) {
        var email = req.body.emailLog;
        var password = req.body.passLog;
        var recordarme = req.body.recordarme;

        db.Usuario.findOne({ where: { email: email } })
            .then(function (usuario) {
                if (usuario == undefined) {
                    return res.render("login", { error: "El email no está registrado." });
                }
                if (usuario.email == email) {
                    var passwordValida = bcrypt.compareSync(password, usuario.contrasenia);
                    if (passwordValida == true) {
                        req.session.usuario = usuario;

                        if (recordarme) {
                            res.cookie("usuario", usuario.email, { maxAge: 60000000 });
                        }
                    }
                }
                return res.redirect("/");
            })
            .catch(function (error) {
                console.log(error);
            });

    },
    register: function (req, res) {
        res.render("register")
    },
    create: function (req, res) {
        db.Usuario.findOne({ where: { email: req.body.email } })
            .then(function (usuarioExistente) {
                if (usuarioExistente) {
                    res.render('register', { error: "el usuario ya existe" })
                }
                let passEncriptada = bcrypt.hashSync(req.body.contrasenia, 10);
                db.Usuario.create({
                    usuario: req.body.usuario,
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
                    });
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    profile: function (req, res) {
        res.render("profile", { usuario: null, productos: [] })
    },
    searchResults: function (req, res) {
        res.render('search-results', { usuario: null });
    },
    logout: function (req, res) {
        req.session.destroy(function (error) {
            if (error) {
                console.log("Error al cerrar sesión:", error);
                return res.redirect("/users/profile");
            }

            if (req.cookies.usuario != undefined) {
                res.clearCookie("usuario");
            }

            return res.redirect("/users/login");
        });
    }
}



module.exports = usersController;
