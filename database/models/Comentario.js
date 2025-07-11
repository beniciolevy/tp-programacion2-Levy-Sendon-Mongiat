module.exports = function(sequelize, dataTypes){

    //Definir un alias.
    let alias = 'Comentario'; 

    //Describir la configuración de las columnas de la tabla
    let cols = {
        id:{
            type: dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        textoComentario:{
            type: dataTypes.TEXT,
            allowNull: false,
        },

        idUsuario:{
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        idProducto:{
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        
        createdAt : {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        },

        deletedAt: {
            type: dataTypes.DATE
        }
    }

    let config = {
        tableName : "comentarios",
        timestamps: true,
        underscored: false
    }

   const Comentario = sequelize.define(alias, cols, config);


   Comentario.associate = function(models){

    Comentario.belongsTo(models.Usuario, {
        as: "usuario",
        foreignKey: "idUsuario"
    });
    Comentario.belongsTo(models.Producto, {
        as: "producto",
        foreignKey: "idProducto"
    });
   };


   return Comentario;
};

