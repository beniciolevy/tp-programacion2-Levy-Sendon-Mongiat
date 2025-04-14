
//Base de datos de los productos
let productos = [
    {
    id: 1,
    imagen: "/images/products/ferrari-purosangueferrari-pursosangue-test-2023-front-links-11677768729-8e1191c3.jpg", 
    nombre: "Ferrari purosangue",
    descripcion: "SUV deportivo, potente y lujoso.",
    comentarios: [
        {
            nombre: "Miguel",
            texto: "Increíble rendimiento con elegancia Ferrari.",
            imagen: "/images/users/foto-miguel.jpg"
        },
        {
            nombre: "Pato",
            texto: "Precio excesivo para un SUV.",
            imagen: "/images/users/foto-pato.jpg"
        }
    ]

},

{   id: 2,
    imagen: "/images/products/bmw-x6m.jpg",
    nombre: "BMW X6M",
    descripcion: "SUV coupé, potente y con un diseño agresivo.",
    comentarios: [
        {
            nombre: "Miguel",
            texto: "Prestaciones deportivas con lujo total.",
            imagen: "/images/users/foto-miguel.jpg",
        },
        {
            nombre: "Pato",
            texto: "Los acabados del interior no estan a la altura.",
            imagen: "/images/users/foto-pato.jpg"
        }
    ]

},
{   id: 3,
    imagen: "/images/products/Lamborghini_Urus_.jpg",
    nombre: "Lamborghini Urus",
    descripcion: "SUV Lamborghini, veloz y llamativo.",
    comentarios: [
        {
            nombre: "Miguel",
            texto: "Combina diseño con potencia, sin duda mi auto favorito.",
            imagen: "/images/users/foto-miguel.jpg"
        },
        {
            nombre: "Pato",
            texto: "Muy bueno!",
            imagen:"/images/users/foto-pato.jpg"
        }
    ]

},
{   id: 4,
    imagen: "/images/products/G-class-Rendez.jpg",
    nombre: "Mercedes Clase G",
    descripcion: "SUV icónico, robusto y elegante.",
    comentarios: [
        {
            nombre: "Miguel",
            texto: "Lujo extremo con presencia imponente.",
            imagen: "/images/users/foto-miguel.jpg"
        },
        {
            nombre: "Pato",
            texto: "Demasiado rígido para ciudad.",
            imagen: "/images/users/foto-pato.jpg"
        }
    ]

},

{   id: 5,
    imagen: "/images/products/ferrari-purosangueferrari-pursosangue-test-2023-front-links-11677768729-8e1191c3.jpg",
    nombre: "Ferrari purosangue",
    descripcion: "SUV deportivo, potente y lujoso.",
    comentarios: [
        {
            nombre: "Miguel",
            texto: "Increíble rendimiento con elegancia Ferrari.",
            imagen: "/images/users/foto-miguel.jpg"
        },
        {
            nombre: "Pato",
            texto: "Precio excesivo para un SUV.",
            imagen: "/images/users/foto-pato.jpg"
        }
    ]

},

{   id: 6,
    imagen: "/images/products/bmw-x6m.jpg",
    nombre: "BMW X6M",
    descripcion: "SUV coupé, potente y con un diseño agresivo.",
    comentarios: [
        {
            nombre: "Miguel",
            texto: "Prestaciones deportivas con lujo total.",
            imagen: "/images/users/foto-miguel.jpg"
        },
        {
            nombre: "Pato",
            texto: "Los acabados del interior no estan a la altura.",
            imagen: "/images/users/foto-pato.jpg"
        }
    ]

},
{   id: 7,
    imagen: "/images/products/Lamborghini_Urus_.jpg",
    nombre: "Lamborghini Urus",
    descripcion: "SUV Lamborghini, veloz y llamativo.",
    comentarios: [
        {
            nombre: "Miguel",
            texto: "Combina diseño con potencia, sin duda mi auto favorito",
            imagen: "/images/users/foto-miguel.jpg"
        },
        {
            nombre: "Pato",
            texto: "Muy bueno!",
            imagen:"/images/users/foto-pato.jpg"
        }
    ]

},
{   id: 8,
    imagen: "/images/products/G-class-Rendez.jpg",
    nombre: "Mercedes Clase G",
    descripcion: "SUV icónico, robusto y elegante.",
    comentarios: [
        {
            nombre: "Miguel",
            texto: "Lujo extremo con presencia imponente.",
            imagen: "/images/users/foto-miguel.jpg"
        },
        {
            nombre: "Pato",
            texto: "Demasiado rígido para ciudad.",
            imagen: "/images/users/foto-pato.jpg"
        }
    ]

},


{   id: 9,
    imagen: "/images/products/ferrari-purosangueferrari-pursosangue-test-2023-front-links-11677768729-8e1191c3.jpg",
    nombre: "Ferrari purosangue",
    descripcion: "SUV deportivo, potente y lujoso.",
    comentarios: [
        {
            nombre: "Miguel",
            texto: "Increíble rendimiento con elegancia Ferrari.",
            imagen: "/images/users/foto-miguel.jpg"
        },
        {
            nombre: "Pato",
            texto: "Precio excesivo para un SUV.",
            imagen: "/images/users/foto-pato.jpg"
        }
    ]

},

{   id: 10,
    imagen: "/images/products/bmw-x6m.jpg",
    nombre: "BMW X6M",
    descripcion: "SUV coupé, potente y con un diseño agresivo.",
    comentarios: [
        {
            nombre: "Miguel",
            texto: "Prestaciones deportivas con lujo total.",
            imagen: "/images/users/foto-miguel.jpg"
        },
        {
            nombre: "Pato",
            texto: "Los acabados del interior no estan a la altura.",
            imagen: "/images/users/foto-pato.jpg"
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
    foto: "/images/users/foto-miguel.jpg"
}




module.exports = {
    usuario,
    productos
}



