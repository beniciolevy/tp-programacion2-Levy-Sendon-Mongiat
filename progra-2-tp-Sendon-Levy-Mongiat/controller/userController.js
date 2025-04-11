let userController = {
    login: function(req,res){
        res.render("login")
    },

    register: function(req,res){
        res.render("register")
    },

    profile: function(req,res){
        res.render("profile", {usuario: usuarioLogueado})
    },








}
  
  
module.exports = userController
  