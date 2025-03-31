const paginasController = {
    index: function(req,res){
        res.render(indexCopy)
    },

    login: function(req,res){
        res.render(login)
    },

    product: function(req,res){
        res.render(product)
    },
    register: function(req,res){
        res.render(register)
    },

    profile: function(req,res){
        res.render(profile)
    },

}

module.exports = paginasController;