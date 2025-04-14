
//Base de datos de los productos
let productos = [
    {
    id: 1,
    imagen: "/images/products/bmw-x6m.jpg",
    nombre: "Cafetera Moulinex",
    descripcion: "Es una cafetera fácil de usar y express.",
    comentarios: [
        {
            nombre: "Miguel",
            texto: "Muy buena la cafetera, me encantaron los colores.",
            imagen: "foto-miguel.png"
        },
        {
            nombre: "Pato",
            texto: "Precio excesivo!",
            imagen: "foto-pato.png"
        }
    ]

},

{   id: 2,
    imagen: "/images/products/img-macbook-pro-2019.jpg",
    nombre: "Macbook pro 2019",
    descripcion: "Computadora para programar, navegar, eficiente.",
    comentarios: [
        {
            nombre: "Miguel",
            texto: "Muy buena compu, muy rapida",
            imagen: "/images/users/default-image.png"
        },
        {
            nombre: "Pato",
            texto: "Bastante cara",
            imagen: "/images/users/default-image.png"
        }
    ]

},
{   id: 3,
    imagen: "/images/products/img-samsung-galaxy-s10.jpg",
    nombre: "Samsung Galaxy S10",
    descripcion: "Telefono de ultima generacion con AI.",
    comentarios: [
        {
            nombre: "Miguel",
            texto: "Me encanto! Lo uso todos los dias",
            imagen: "/images/users/default-image.png"
        },
        {
            nombre: "Pato",
            texto: "Muy bueno!",
            imagen:"/images/users/default-image.png"
        }
    ]

},
{   id: 4,
    imagen: "/images/products/img-tv-samsung-smart.jpg",
    nombre: "Smart TV",
    descripcion: "Television Smart con resolucion 4k.",
    comentarios: [
        {
            nombre: "Miguel",
            texto: "Funciona muy bien.",
            imagen: "/images/users/default-image.png"
        },
        {
            nombre: "Pato",
            texto: "Bastante cara!",
            imagen: "/images/users/default-image.png"
        }
    ]

},

{   id: 5,
    imagen: "/images/products/img-cafetera-moulinex.jpg",
    nombre: "Cafetera Moulinex",
    descripcion: "Es una cafetera fácil de usar y express.",
    comentarios: [
        {
            nombre: "Miguel",
            texto: "Muy buena la cafetera, me encantaron los colores.",
            imagen: "foto-miguel.png"
        },
        {
            nombre: "Pato",
            texto: "Precio excesivo!",
            imagen: "foto-pato.png"
        }
    ]

},

{   id: 6,
    imagen: "/images/products/img-macbook-pro-2019.jpg",
    nombre: "Macbook pro 2019",
    descripcion: "Computadora para programar, navegar, eficiente.",
    comentarios: [
        {
            nombre: "Miguel",
            texto: "Muy buena compu, muy rapida",
            imagen: "/images/users/default-image.png"
        },
        {
            nombre: "Pato",
            texto: "Bastante cara",
            imagen: "/images/users/default-image.png"
        }
    ]

},
{   id: 7,
    imagen: "/images/products/img-samsung-galaxy-s10.jpg",
    nombre: "Samsung Galaxy S10",
    descripcion: "Telefono de ultima generacion con AI.",
    comentarios: [
        {
            nombre: "Miguel",
            texto: "Me encanto! Lo uso todos los dias",
            imagen: "/images/users/default-image.png"
        },
        {
            nombre: "Pato",
            texto: "Muy bueno!",
            imagen:"/images/users/default-image.png"
        }
    ]

},
{   id: 8,
    imagen: "/images/products/img-tv-samsung-smart.jpg",
    nombre: "Smart TV",
    descripcion: "Television Smart con resolucion 4k.",
    comentarios: [
        {
            nombre: "Miguel",
            texto: "Funciona muy bien.",
            imagen: "/images/users/default-image.png"
        },
        {
            nombre: "Pato",
            texto: "Bastante cara!",
            imagen: "/images/users/default-image.png"
        }
    ]

},


{   id: 9,
    imagen: "/images/products/img-cafetera-moulinex.jpg",
    nombre: "Cafetera Moulinex",
    descripcion: "Es una cafetera fácil de usar y express.",
    comentarios: [
        {
            nombre: "Miguel",
            texto: "Muy buena la cafetera, me encantaron los colores.",
            imagen: "foto-miguel.png"
        },
        {
            nombre: "Pato",
            texto: "Precio excesivo!",
            imagen: "foto-pato.png"
        }
    ]

},

{   id: 10,
    imagen: "/images/products/img-macbook-pro-2019.jpg",
    nombre: "Macbook pro 2019",
    descripcion: "Computadora para programar, navegar, eficiente.",
    comentarios: [
        {
            nombre: "Miguel",
            texto: "Muy buena compu, muy rapida",
            imagen: "/images/users/default-image.png"
        },
        {
            nombre: "Pato",
            texto: "Bastante cara",
            imagen: "/images/users/default-image.png"
        }
    ]

},




]

//Base de datos del usuario
let usuario = {
    email: "genarogonzales@gmail.com",
    password: "1234",
    fecha: "08/04/2025",
    dni: 44123771,
    nombre: "Genaro",
    foto: "/images/users/foto-usuario.jpg"
}




module.exports = {
    usuario,
    productos
}



