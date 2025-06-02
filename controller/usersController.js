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
                // Aca compara la contraseña logueada con la de la base de datos, si son distintas (false) te returnea el error
                var passwordValida = bcrypt.compareSync(password, usuario.contrasenia);
                if (!passwordValida) {
                    return res.render("login", { error: "La contraseña es incorrecta" })
                }
                // Como es cascada si cumple los dos ifs te almacena la sesion del usuario en la variable usuario, 
                // dsp se usa en la cookie y en los otros lados para llenar por ejemplo el headerLogueado

                req.session.usuario = usuario;
                //si el usuario tilda "recordarme", se guarda una cookie con su email
                if (recordarme) {
                    res.cookie("usuario", usuario.email, { maxAge: 600000000 });
                }

                 //redirige al home
                return res.redirect("/");
            })
            .catch(function (error) {
                console.log(error);
            });

    },
    register: function (req, res) {
        res.render("register", { error: "" })
    },
     // procesa la creación de un nuevo usuario
    create: function (req, res) {

        //verifica que el email no esté ya registrado
        db.Usuario.findOne({ where: { email: req.body.email } })
            .then(function (usuarioExistente) {
                if (usuarioExistente) {
                    return res.render('register', { error: "el usuario ya existe" })
                }
                 //verifica que la contraseña tenga al menos 3 caracteres
                if (req.body.contrasenia.length<3){
                    return res.render("register", {error: "La contraseña debe tener al menos 3 caracteres"})
                }
                 //encripta la contraseña antes de guardarla
                let passEncriptada = bcrypt.hashSync(req.body.contrasenia, 10);
                //crea el nuevo usuario en la base de datos
                db.Usuario.create({
                    usuario: req.body.usuario,
                    email: req.body.email,
                    contrasenia: passEncriptada,
                    fechaNacimiento: req.body.fechaNacimiento,
                    dni: req.body.dni,
                    fotoPerfil: req.body.fotoPerfil
                })
                .then(function () {
                    // Redirige al login después del registro exitoso
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

    // muestra el perfil publico de un usuario por su ID (para ver perfiles ajenos)

    profileId: function (req, res) {
        let id = req.params.id;
        let usuarioLogueado = req.session.usuario
         // busca el usuario por su ID e incluye los productos que creo y sus comentarios
        db.Usuario.findByPk(id, {
            include: [{ association: "productos" , include: [ {association: 'comentarios' }]}]
        })
            .then(function (perfil) {
                if (!perfil){
                // si no encuentra el usuario muestra mensaje de error
                    return res.send("Usuario no encontrado");
                }
                //renderiza la vista del perfil con los productos del usuario
                res.render("profile", { usuario: usuarioLogueado, perfil: perfil, productos: perfil.productos });
    })
        .catch(function (error) {
        console.log(error);
    });
},
    //cierra la sesión del usuario
    logout: function (req, res) {
        req.session.destroy(function (error) {
            if (error) {
            // si hay error al cerrar sesion muestra mensaje de error
                console.log("Error al cerrar sesión:", error);
                return res.redirect("/users/profile");
            }
             //borra la cookie de "recordarme" si existia
            if (req.cookies.usuario != undefined) {
                res.clearCookie("usuario");
            }
             //redirige al login
            return res.redirect("/users/login");
        });
    }
}



module.exports = usersController;
