
//Modulo de datos de los productos

let datos = {
    productos: [
        {
            id: 1,
            imagen: "/images/products/purosangue.jpg",
            nombre: "Ferrari purosangue",
            descripcion: "SUV deportivo, potente y lujoso.",
            comentarios: [
                {
                    nombre: "Miguel",
                    texto: "Tiene un increible rendimiento con la elegancia de Ferrari",
                    imagen: "/images/users/foto-miguel.jpg"
                },
                {
                    nombre: "Pato",
                    texto: "El precio me parecio bastante caro para ser SUV.",
                    imagen: "/images/users/foto-pato.jpg"
                },
                {
                    nombre: "Jose",
                    texto: "Muy buen motor",
                    imagen: "/images/users/foto-jose.jpg"
                }

            ]
        },
        {
            id: 2,
            imagen: "/images/products/bmw-x6m.jpg",
            nombre: "BMW X6M",
            descripcion: "SUV muy interesante, potente y con un diseño bastante agresivo.",
            comentarios: [
                {
                    nombre: "Miguel",
                    texto: "Me encanta, muy lujosa y de un hermoso interior.",
                    imagen: "/images/users/foto-miguel.jpg",
                },
                {
                    nombre: "Pato",
                    texto: "Le falta potencia para el precio que sale.",
                    imagen: "/images/users/foto-pato.jpg"
                },
                {
                    nombre: "Jose",
                    texto: "Muy buen motor",
                    imagen: "/images/users/foto-jose.jpg"
                }

            ]
        },
        {
            id: 3,
            imagen: "/images/products/Lamborghini_Urus_.jpg",
            nombre: "Lamborghini Urus",
            descripcion: "SUV Lamborghini, veloz y llamativo.",
            comentarios: [
                {
                    nombre: "Miguel",
                    texto: "Combina diseño con potencia, sin dudas mi auto favorito.",
                    imagen: "/images/users/foto-miguel.jpg"
                },
                {
                    nombre: "Pato",
                    texto: "Me encanto!",
                    imagen: "/images/users/foto-pato.jpg"
                },
                {
                    nombre: "Jose",
                    texto: "Muy buen motor",
                    imagen: "/images/users/foto-jose.jpg"
                }

            ]
        },
        {
            id: 4,
            imagen: "/images/products/gwagon.jpg",
            nombre: "Mercedes Clase G",
            descripcion: "SUV iconico, robusto y elegante.",
            comentarios: [
                {
                    nombre: "Miguel",
                    texto: "Mercedes se lucio con esta clase de auto.",
                    imagen: "/images/users/foto-miguel.jpg"
                },
                {
                    nombre: "Pato",
                    texto: "Puede ser bastante llamativo y duro para manejar en CABA.",
                    imagen: "/images/users/foto-pato.jpg"
                },
                {
                    nombre: "Jose",
                    texto: "Muy buen motor",
                    imagen: "/images/users/foto-jose.jpg"
                }

            ]
        },
        {
            id: 5,
            imagen: "/images/products/765lt.jpg",
            nombre: "McLaren 765LT",
            descripcion: "Super ligero, brutalmente rapido y enfocado en pista.",
            comentarios: [
                {
                    nombre: "Miguel",
                    texto: "Tiene un increíble rendimiento con el espíritu radical de McLaren.",
                    imagen: "/images/users/foto-miguel.jpg"
                },
                {
                    nombre: "Pato",
                    texto: "Ofrece potencia brutal con un diseño enfocado en pista.",
                    imagen: "/images/users/foto-pato.jpg"
                },
                {
                    nombre: "Jose",
                    texto: "Es una bestia de pista con gran precisión y velocidad.",
                    imagen: "/images/users/foto-jose.jpg"
                }

            ]
        },
        {
            id: 6,
            imagen: "/images/products/812competizione.jpg",
            nombre: "Ferrari 812 Competizione",
            descripcion: "Potente, exclusivo y diseñado para la perfección.",
            comentarios: [
                {
                    nombre: "Miguel",
                    texto: "Tiene un increíble rendimiento con la elegancia de Ferrari.",
                    imagen: "/images/users/foto-miguel.jpg",
                },
                {
                    nombre: "Pato",
                    texto: "Combina potencia V12 con refinamiento absoluto.",
                    imagen: "/images/users/foto-pato.jpg"
                },
                {
                    nombre: "Jose",
                    texto: "Un superdeportivo con clase, fuerza y precisión.",
                    imagen: "/images/users/foto-jose.jpg"
                }

            ]
        },
        {
            id: 7,
            imagen: "/images/products/ferraripista.jpg",
            nombre: "Ferrari 488 Pista",
            descripcion: "Aerodinamico, agresivo y pensado para el rendimiento.",
            comentarios: [
                {
                    nombre: "Miguel",
                    texto: "Tiene un increíble rendimiento con la deportividad pura de Ferrari.",
                    imagen: "/images/users/foto-miguel.jpg"
                },
                {
                    nombre: "Pato",
                    texto: "Un auto que transmite adrenalina en cada curva.",
                    imagen: "/images/users/foto-pato.jpg"
                },
                {
                    nombre: "Jose",
                    texto: "Potente, ágil y con el alma de un auto de carreras.",
                    imagen: "/images/users/foto-jose.jpg"
                }

            ]
        },
        {
            id: 8,
            imagen: "/images/products/koenigsegg.jpg",
            nombre: "Koenigsegg One:1",
            descripcion: "Hiperauto extremo, revolucionario y ultraligero.",
            comentarios: [
                {
                    nombre: "Miguel",
                    texto: "Tiene un increíble rendimiento con tecnología de otro nivel.",
                    imagen: "/images/users/foto-miguel.jpg"
                },
                {
                    nombre: "Pato",
                    texto: "Rompe los límites de la velocidad con estilo.",
                    imagen: "/images/users/foto-pato.jpg"
                },
                {
                    nombre: "Jose",
                    texto: "Una máquina extrema con diseño e innovación únicos.",
                    imagen: "/images/users/foto-jose.jpg"
                }

            ]
        },
        {
            id: 9,
            imagen: "/images/products/sf90.jpg",
            nombre: "Ferrari SF90 Stradale",
            descripcion: "Híbrido, innovador y con potencia sin igual.",
            comentarios: [
                {
                    nombre: "Miguel",
                    texto: "Tiene un increíble rendimiento con la elegancia futurista de Ferrari.",
                    imagen: "/images/users/foto-miguel.jpg"
                },
                {
                    nombre: "Pato",
                    texto: "Híbrido pero sin comprometer la emoción.",
                    imagen: "/images/users/foto-pato.jpg"
                },
                {
                    nombre: "Jose",
                    texto: "Revolucionario en potencia y diseño italiano.",
                    imagen: "/images/users/foto-jose.jpg"
                }

            ]
        },
        {
            id: 10,
            imagen: "/images/products/svj.jpg",
            nombre: "Lamborghini Aventador SVJ",
            descripcion: "Radical, imponente y diseñado para romper récords.",
            comentarios: [
                {
                    nombre: "Miguel",
                    texto: "Tiene un increíble rendimiento con la agresividad clásica de Lamborghini.",
                    imagen: "/images/users/foto-miguel.jpg",
                },
                {
                    nombre: "Pato",
                    texto: "Imponente, salvaje y brutal en cada aspecto.",
                    imagen: "/images/users/foto-pato.jpg"
                },
                {
                    nombre: "Jose",
                    texto: "Domina la pista con fuerza, diseño y sonido.",
                    imagen: "/images/users/foto-jose.jpg"
                }

            ]
        }
    ],
    usuario: {
        email: "genarogonzales@gmail.com",
        password: "1234",
        fecha: "08/04/2025",
        dni: 44123771,
        nombre: "Genaro",
        foto: "/images/users/foto-genaro.jpg"
    }
};

module.exports = datos;








