let db = require("../database/models");
let bcrypt = require('bcryptjs');


const usersController = {
    login: function (req, res) {
        if (req.session.usuario != undefined) {
            return res.redirect("/")
        }
        res.render("login", { error: null })
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
                var passwordValida = bcrypt.compareSync(password, usuario.contrasenia);
                if (!passwordValida) {
                    return res.render("login", { error: "La contraseña es incorrecta" })
                }

                req.session.usuario = usuario;
                if (recordarme) {
                    res.cookie("usuario", usuario.email, { maxAge: 600000000 });
                }

                return res.redirect("/");
            })
            .catch(function (error) {
                console.log(error);
            });

    },
    register: function (req, res) {
        res.render("register", { error: "" })
    },
    create: function (req, res) {

        db.Usuario.findOne({ where: { email: req.body.email } })
            .then(function (usuarioExistente) {
                if (usuarioExistente) {
                    return res.render('register', { error: "el usuario ya existe" })
                }
                if (req.body.contrasenia.length<3){
                    return res.render("register", {error: "La contraseña debe tener al menos 3 caracteres"})
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
        res.render("profile", { usuario: req.session.usuario, productos: [] })
    },


    profileId: function (req, res) {
        let id = req.params.id;
        let usuarioLogueado = req.session.usuario
        db.Usuario.findByPk(id, {
            include: [{ association: "productos" , include: [ {association: 'comentarios' }]}]
        })
            .then(function (perfil) {
                if (!perfil){
                    return res.send("Usuario no encontrado");
                }
                res.render("profile", { usuario: usuarioLogueado, perfil: perfil, productos: perfil.productos });
    })
        .catch(function (error) {
        console.log(error);
    });
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
