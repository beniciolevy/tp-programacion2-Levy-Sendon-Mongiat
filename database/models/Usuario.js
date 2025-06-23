module.exports = function(sequelize, dataTypes){

    //Definir un alias.
    let alias = 'Usuario'; 
    //Describir la configuración de las columnas de la tabla
    let cols = {
        id:{
            type: dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        email:{
            type: dataTypes.STRING(100),
            allowNull: false,
            unique: true
        },

        usuario:{
            type: dataTypes.STRING(100),
            allowNull: false
        },

        contrasenia:{
            type: dataTypes.STRING(255),
            allowNull: false
        },
        fechaNacimiento:{
            type: dataTypes.DATE,
            allowNull: false
        },
        dni:{
            type: dataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        fotoPerfil:{
            type: dataTypes.STRING(255),
            allowNull: true
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
        tableName : "usuarios",
        timestamps: true,
        underscored: false
    }

   const Usuario = sequelize.define(alias, cols, config);


   Usuario.associate = function(models){
    Usuario.hasMany(models.Producto, {
        as: "productos",
        foreignKey: "idUsuario"
    });
      Usuario.hasMany(models.Comentario, {
        as: "comentarios",
        foreignKey: "idUsuario"
    });
   };


   return Usuario;
};
