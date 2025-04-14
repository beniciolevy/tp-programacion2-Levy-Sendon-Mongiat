CREATE SCHEMA proyecto_db;

USE proyecto_db;

CREATE TABLE usuarios (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100) NOT NULL UNIQUE,
    contrasenia VARCHAR(255) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    dni INT NOT NULL UNIQUE,
    foto_perfil VARCHAR(255),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE productos(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    foto VARCHAR(255),
    nombre_producto VARCHAR(255),
    descripcion_producto TEXT NOT NULL,
    id_usuario INT UNSIGNED NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);


CREATE TABLE comentarios(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    texto_comentario VARCHAR(250) NOT NULL,
    id_producto INT UNSIGNED NOT NULL,
    id_usuario INT UNSIGNED NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
	FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
    FOREIGN KEY (id_producto) REFERENCES productos(id)
);

INSERT INTO usuarios
VALUES (DEFAULT, "genarogonzales@gmail.com", "1234", "2005-05-05", '44123771',"/images/users/foto-genaro.jpg",DEFAULT,DEFAULT,DEFAULT),
(DEFAULT, "miguel@gmail.com", "12345", "1985-08-20", "30222333", "/images/users/foto-miguel.jpg", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "pato@gmail.com", "123456", "1992-01-15", "30333444", "/images/users/foto-pato.jpg", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "jose@gmail.com", "1234567", "1988-07-30", "30444555", "/images/users/foto-jose.jpg", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "evasosa@gmail.com", "12345678", "1995-03-10", "30555666", "/images/users/foto-eva.jpg", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO productos
VALUES (DEFAULT, "/images/products/purosangue.jpg", "Ferrari purosangue", "SUV deportivo, potente y lujoso.",1,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT, "/images/products/bmw-x6m.jpg", "BMW X6M", "SUV coupé, potente y con un diseño agresivo.",2,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT, "/images/products/Lamborghini_Urus_.jpg", "Lamborghini Urus", "SUV Lamborghini, veloz y llamativo.",3,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT, "/images/products/gwagon.jpg", "Mercedes Clase G", "SUV icónico, robusto y elegante.",4,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT, "/images/products/765lt.jpg", "McLaren 765LT", "Super ligero, brutalmente rapido y enfocado en pista.",5,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT, "/images/products/812competizione.jpg", "Ferrari 812 Competizione", "Potente, exclusivo y diseñado para la perfección.",1,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT, "/images/products/ferraripista.jpg", "Ferrari 488 Pista", "Aerodinamico, agresivo y pensado para el rendimiento.",2,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT, "/images/products/koenigsegg.jpg", "Koenigsegg One:1", "Hiperauto extremo, revolucionario y ultraligero.",3,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT, "/images/products/sf90.jpg", "Ferrari SF90 Stradale", "Híbrido, innovador y con potencia sin igual.",4,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT, "/images/products/svj.jpg", "Lamborghini Aventador SVJ", "Radical, imponente y diseñado para romper récords.",5,DEFAULT,DEFAULT,DEFAULT);


INSERT INTO comentarios
VALUES (DEFAULT, "Tiene un increible rendimiento con la elegancia de Ferrari", 1, 1 ,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT, "El precio me parecio bastante caro para ser SUV.", 1, 2 ,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT, "Muy buen motor.", 1, 3 ,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT, "Me encanta, muy lujosa y de un hermoso interior.", 2, 1 ,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT, "Le falta potencia para el precio que sale.", 2, 2 ,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT, "Muy comoda", 2, 3 ,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT, "Combina diseño con potencia, sin dudas mi auto favorito.", 3, 1 ,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT, "Me encanto!", 3, 2 ,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT, "Muy buena combinacion de colores.", 3, 3 ,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT, "Mercedes se lucio con esta clase de auto.", 4, 1 ,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT, "Puede ser bastante llamativo y duro para manejar en CABA.", 4, 2 ,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT, "Excelente vehiculo.", 4, 3 ,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT, "Tiene un increíble rendimiento con el espíritu radical de McLaren.", 5, 1 ,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT, "Ofrece potencia brutal con un diseño enfocado en pista.", 5, 2 ,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT, "Es una bestia de pista con gran precisión y velocidad.", 5, 3 ,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT, "Tiene un increíble rendimiento con la elegancia de Ferrari.", 6, 1 ,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT, "Combina potencia V12 con refinamiento absoluto.", 6, 2 ,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT, "Un superdeportivo con clase, fuerza y precisión.", 6, 3 ,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT, "Tiene un increíble rendimiento con la deportividad pura de Ferrari.", 7, 1 ,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT, "Un auto que transmite adrenalina en cada curva.", 7, 2 ,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT, "Potente, ágil y con el alma de un auto de carreras.", 7, 3 ,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT, "Tiene un increíble rendimiento con tecnología de otro nivel.", 8, 1 ,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT, "Rompe los límites de la velocidad con estilo.", 8, 2 ,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT, "Una máquina extrema con diseño e innovación únicos.", 8, 3 ,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT, "Tiene un increíble rendimiento con la elegancia futurista de Ferrari.", 9, 1 ,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT, "Híbrido pero sin comprometer la emoción.", 9, 2 ,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT, "Revolucionario en potencia y diseño italiano.", 9, 3 ,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT, "Tiene un increíble rendimiento con la agresividad clásica de Lamborghini.", 10, 1 ,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT, "Imponente, salvaje y brutal en cada aspecto.", 10, 2 ,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT, "Domina la pista con fuerza, diseño y sonido.", 10, 3 ,DEFAULT,DEFAULT,DEFAULT);

