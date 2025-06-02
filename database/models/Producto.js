module.exports = function(sequelize, dataTypes){


    let alias = 'Producto'; //Con este alias sequelize va a identificar internamente al archivo de modelo.

    //Describir la configuración de las columnas de la tabla
    let cols = {
        id:{
            type: dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        foto:{
            type: dataTypes.STRING(255),
            allowNull: true,
        },

        nombreProducto:{
            type: dataTypes.STRING(255),
        },
        descripcionProducto:{
            type: dataTypes.TEXT,
            allowNull: false
        },
        idUsuario:{
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
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
        tableName : "productos",
        timestamps: true,
        underscored: false
    }

   const Producto = sequelize.define(alias, cols, config);


   Producto.associate = function(models){
    
    // El producto pertenece a un usuario
    Producto.belongsTo(models.Usuario, {
        as: "usuario",
        foreignKey: "idUsuario"
    });
    // El producto tiene muchos comentarios
    Producto.hasMany(models.Comentario, {
        as: "comentarios",
        foreignKey: "idProducto"
    });
   }

   return Producto;
};