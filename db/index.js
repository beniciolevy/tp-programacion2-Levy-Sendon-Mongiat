
//Base de datos de los productos
let producto = {
    imagen: '/images/products/img-cafetera-moulinex.jpg',
    nombre: 'Cafetera Moulinex',
    descripcion: 'Es una cafetera fácil de usar y express.',
    comentarios: [
        {
            nombre: 'Miguel',
            texto: 'Muy buena la cafetera, me encantaron los colores.',
            imagen: 'foto-miguel.png'
        },
        {
            nombre: 'Pato',
            texto: '¡Precio excesivo!',
            imagen: 'foto-pato.png'
        }
    ]
};

//Base de datos del usuario
let usuario = {
    email: 'genarogonzales@gmail.com',
    password: '1234',
    fecha: '08/04/2025',
    dni: 44123771,
    nombre: "Genaro",
    foto: "/images/users/foto-usuario.jpg"
}



module.exports = { usuario, producto };



