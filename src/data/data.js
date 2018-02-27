// datos de artículos en venta
// obtener imagen: dataArticle.Deportes.ciclismo['Correa de Estiramiento para Yoga'].img
// $('#content').html(`<img src="${dataArticle.Deportes.ciclismo['Correa de Estiramiento para Yoga'].img}">`)
let dataArticle = {
	'Tecnologia': {
		'notebooks': {
			'MACBOOK AIR APPLE': {
				'desc': 'El MacBook Air de Apple cuenta con una pantalla 13 pulgadas y viene con 8 GB de memoria, un procesador Intel Core de quinta generación, Thunderbolt 2, increíbles apps integradas y una batería que dura todo el día.',
				'new': true,
				'precio': '$649.990',
				'disponible': true,
				'img': 'https://home.ripley.cl/store/Attachment/WOP/D113/2000364253232/2000364253232_2.jpg'
			},
			'LENOVO YOGA 910': {
				'desc': '¡El Notebook YOGA 910 de Lenovo te sorprenderá! Cuenta con una Memoria RAM de 8GB DDR4, un potente procesador Intel® Core™ i7-7500U Dual-Core 7ma Generación y una gran pantalla multitouch de 13.3 pulgadas UHD IPS con resolución de 3480 x 2160.',
				'new': true,
				'precio': '$1.399.990',
				'disponible': true,
				'img': 'https://home.ripley.cl/store/Attachment/WOP/D113/2000363736156/2000363736156_2.jpg'
			},
			'ACER CLOUDBOOK AO1': {
				'desc': 'Para trabajar en la nube, lo que realmente necesitas es velocidad. Por eso, nuestro notebook Cloudbook dispone de las últimas conexiones de red inalámbricas que admiten altas velocidades de conexión nunca vistas.',
				'new': false,
				'precio': '$199.990',
				'disponible': true,
				'img': 'https://home.ripley.cl/store/Attachment/WOP/D113/2000364702662/2000364702662_2.jpg'
			}
		},
		'smartphones': {
			'SAMSUNG GALAXY J2 PRIME DORADO 5"': {
				'desc': 'Con un diseño de vanguardia, el J2 Prime tiene una parte trasera rugosa para que no se escape de tu mano.',
				'new': true,
				'precio': '$439.990',
				'disponible': false,
				'img': 'https://home.ripley.cl/store/Attachment/WOP/D191/2000361946991/2000361946991_2.jpg'
			},
			'LG K10 LTE NEGRO MOVISTAR 5.3"': {
				'desc': 'LG K10 con pantalla HD 5,3" con tecnología IPS LCD, con cámara 13MP, cristal curvo y diseño redondeado LG_K10 K10 LTE - K420N',
				'new': true,
				'precio': '$169.990',
				'disponible': true,
				'img': 'https://home.ripley.cl/store/Attachment/WOP/D191/2000363277826/2000363277826_2.jpg'
			},
			'HUAWEI P9 GRIS': {
				'desc': 'El Huawei P9 cuenta con Sistema Operativo Android 6.0, una pantalla de 5.2 Full HD con una resolución de 1920 x 1080 y cámaras de 8 MP (frontal) y 12 MP (trasera), que te brindarán nuevas oportunidades para tomar increíbles fotografías, inmejorables videos, y te garantizarán que todas tus capturas sean de la mejor calidad.',
				'new': true,
				'precio': '$459.990',
				'disponible': true,
				'img': 'https://home.ripley.cl/store/Attachment/WOP/D191/2000358886637/2000358886637_2.jpg'
			}
		},
		'accesorios': {
			'BOLA DISCO URBANO TO GO': {
				'desc': 'Entretenida Bola Disco Urbano sensible al movimiento, por lo que detecta objetos cercanos y está programado para alejarse de ellos. La idea es que la lances y luego sostienes la mano por debajo para mantenerla en el aire.',
				'new': true,
				'precio': '$6.990',
				'disponible': true,
				'img': 'https://home.ripley.cl/store/Attachment/WOP/D347/2000366053601/2000366053601_2.jpg'
			},
			'Pokebola cargador externo de celular': {
				'desc': 'No te quedes sin ir de CAZA!!! Con tu batería Pokémon Go Ball podrás cargar tu celular en cualquier lado que estés cazando y en cualquier momento.',
				'new': false,
				'precio': '$19.990',
				'disponible': true,
				'img': 'https://ripleycl.imgix.net/https%3A%2F%2Fs3.amazonaws.com%2Fimagenes-sellers-mercado-ripley%2FImagenes-MIRAKL%2F2017%2F01%2FMPM00000006004-F.jpg?w=750&h=555&ch=Width&auto=format&cs=strip&q=60&ixlib=js-1.1.0&s=0f4a8221083c76db5baf529324a9e5e2'
			},
			'CABLE APPLE LIGHTNING A USB': {
				'desc': 'El cable conecta tu iPhone, iPad o iPod de Apple con conector Lightning al puerto USB de tu computadora para cargarlo y sincronizarlo.',
				'new': true,
				'precio': '$9.990',
				'disponible': false,
				'img': 'https://home.ripley.cl/store/Attachment/WOP/D345/2000361925583/2000361925583_2.jpg'
			}
		}
	},
	'Moda': {
		'blusas': {
			'POLERA AC/DC': {
				'desc': 'Polera 100% algodon, hermosa y bella.',
				'new': true,
				'precio': '$14.990',
				'disponible': true,
				'img': 'https://home.ripley.cl/store/Attachment/WOP/D129/2000365937490/2000365937490_2.jpg'
			},
			'BLUSA florecillas': {
				'desc': 'Blusa 100% algodon, hermosa y bella.',
				'new': true,
				'precio': '$19.990',
				'disponible': true,
				'img': 'https://home.ripley.cl/store/Attachment/WOP/D141/2000365873125/2000365873125_2.jpg'
			},
			'BLUSA negra': {
				'desc': 'Blusa negra 80% Algodón / 20% Poliéster, bella bella',
				'new': false,
				'precio': '$24.990',
				'disponible': true,
				'img': 'https://home.ripley.cl/store/Attachment/WOP/D330/2000365990679/2000365990679_2.jpg'
			}
		},
		'pantalones': {
			'JEANS PEPE JEANS': {
				'desc': '73% Algodón / 25% Poliéster / 2% Spandex GUAU QUEDE MARAVILLADA',
				'new': false,
				'precio': '$24.990',
				'disponible': true,
				'img': 'https://home.ripley.cl/store/Attachment/WOP/D349/2000360599310/2000360599310_2.jpg'
			},
			'JEANS bordado': {
				'desc': '98% Algodón / 2% Spandex beautiful',
				'new': false,
				'precio': '$34.990',
				'disponible': true,
				'img': 'https://home.ripley.cl/store/Attachment/WOP/D321/2000365175731/2000365175731_2.jpg'
			},
			'LEGGINS cuero': {
				'desc': '67% Viscosa / 20% Nylon / 5% Spandex',
				'new': true,
				'precio': '$19.990',
				'disponible': true,
				'img': 'https://home.ripley.cl/store/Attachment/WOP/D321/2000364830433/2000364830433_2.jpg'
			}
		},
		'calzado': {
			'ZAPATO GACEL IVY': {
				'desc': 'Hermoso zapato animal print, super elegante, como para ir a una entrevista',
				'new': false,
				'precio': '$59.990',
				'disponible': true,
				'img': 'https://home.ripley.cl/store/Attachment/WOP/D309/2000367433044/2000367433044_2.jpg'
			},
			'ZAPATILLA PALLADIUM': {
				'desc': 'Zapatilla linda',
				'new': false,
				'precio': '$59.990',
				'disponible': true,
				'img': 'https://home.ripley.cl/store/Attachment/WOP/D309/2000365499721/2000365499721_2.jpg'
			},
			'ZAPATILLA PALLADIUM': {
				'desc': 'Negra y cómoda',
				'new': true,
				'precio': '$62.990',
				'disponible': true,
				'img': 'https://home.ripley.cl/store/Attachment/WOP/D309/2000365498380/2000365498380_2.jpg'
			}
		}
	},
	'Hogar': {
		'comedores': {
			'JUEGO DE COMEDOR RIPLEY HOME AVALON EXTENSIBLE 6 SILLAS': {
				'desc': 'El juego de Comedor Avalon de Ripley Home es el complemento ideal para tu hogar, brindando comodidad y gran espacio al sentarse. Éste es un producto funcional con moderno diseño y calidad.',
				'new': false,
				'precio': '$999.990',
				'disponible': true,
				'img': 'https://home.ripley.cl/store/Attachment/WOP/D359/2000357180293/2000357180293_2.jpg'
			},
			'JUEGO DE COMEDOR FAVATEX DONET': {
				'desc': 'Convoca a tu familia y amigos a un espacio que mezcla a la perfección sobriedad con calidez. Otórgale estilo a tu hogar con el comedor Favatex en su modelo Donet',
				'new': false,
				'precio': '$579.990',
				'disponible': true,
				'img': 'https://home.ripley.cl/store/Attachment/WOP/D359/2000368195286/2000368195286_2.jpg'
			},
			'JUEGO DE COMEDOR FAVATEX TAJAMAR 6 SILLAS': {
				'desc': 'Convoca a tu familia y amigos a un espacio acogedor. Otórgale estilo a tu hogar con el comedor Favatex en su modelo Tajamar. ',
				'new': true,
				'precio': '$899.990',
				'disponible': true,
				'img': 'https://home.ripley.cl/store/Attachment/WOP/D359/2000366138926/2000366138926_2.jpg'
			}
		},
		'living': {
			'COMBO JGO. LIVING 3-2 HEARNE ASHLEY': {
				'desc': 'El living es la primera impresión que las personas se llevan de una casa, es por esto que Ripley siempre te trae los mejores muebles para que puedas amoblarlo como siempre los has soñado.',
				'new': false,
				'precio': '$879.990',
				'disponible': true,
				'img': 'https://home.ripley.cl/store/Attachment/WOP/D359/3000000001027/3000000001027_2.jpg'
			},
			'JUEGO DE LIVING RIPLEY HOME NEW BELLINI 3 -2 CUERPOS': {
				'desc': 'Disfruta tu espacios exteriores con la línea de terraza que trae Ripley Home para ti. Podrás lucrite con elegantes y espectaculares diseños.',
				'new': false,
				'precio': '$1.259.990',
				'disponible': true,
				'img': 'https://home.ripley.cl/store/Attachment/WOP/D359/2000360085325/2000360085325_2.jpg'
			},
			'JUEGO LIVING RIPLEY HOME EMA 3-1-1 TURQUESA': {
				'desc': 'Aporta modernidad a tu sala con una comodísima colección Ripley Home dándole elegancia a todo el ambiente gracias a sus perfectos tapizados.',
				'new': false,
				'precio': '$799.990',
				'disponible': true,
				'img': 'https://home.ripley.cl/store/Attachment/WOP/D359/2000362368259/2000362368259_2.jpg'
			}
		},
		'cocina': {
			'HORNO ELECTRICO CUISINART TOB-60NCPXA': {
				'desc': 'Horno eléctrico tostador a convección TOB-60NPCXA de Cuisinart. Cuenta con una potencia de 1500 watts, un interior antiadherente, selector de temperatura y es libre de BPA.',
				'new': false,
				'precio': '$99.990',
				'disponible': true,
				'img': 'https://home.ripley.cl/store/Attachment/WOP/D122/2000359537613/2000359537613_2.jpg'
			},
			'HORNO KUBLI NEU 5725': {
				'desc': 'Horno Kubli empotrable, con capacidad útil de 52 lts. Posee 3 programas. Diseño con mando mecánicos e iluminación interior.',
				'new': false,
				'precio': '$189.990',
				'disponible': true,
				'img': 'https://home.ripley.cl/store/Attachment/WOP/D136/2000356987626/2000356987626_2.jpg'
			},
			'PARRILLA ELECTRICA BOSCH TFB4431V': {
				'desc': '¡Prepara la mejor carne con la parrilla eléctrica TFB4431V de Bosch!',
				'new': false,
				'precio': '$89.990',
				'disponible': true,
				'img': 'https://home.ripley.cl/store/Attachment/WOP/D122/2000359806436/2000359806436_2.jpg'
			}
		}
	},
	'Deportes': {
		'futbol': {
			'PELOTA DE FÚTBOL PUMA FINAL 6': {
				'desc': 'Pelota de entrenamiento Puma. Apta tanto para entrenamientos como para divertidos juegos con amigos. La combinación de la carcasa de TPU, la espuma TPE y el respaldo de poliéster le dan a este balón una sensación suave.',
				'new': false,
				'precio': '$12.990',
				'disponible': true,
				'img': 'https://home.ripley.cl/store/Attachment/WOP/D170/2000367178778/2000367178778_2.jpg'
			},
			'ZAPATO DE FÚTBOL PUMA FUTURE 18.1 NETFIT': {
				'desc': 'El modelo FUTURE 18.1 NETFIT es donde NETFIT se encuentra con el fútbol. Genial zapato de fútbol Puma de atractivo aspecto. ',
				'new': true,
				'precio': '$149.990',
				'disponible': true,
				'img': 'https://ripleycl.imgix.net/https%3A%2F%2Fs3.amazonaws.com%2Fimagenes-sellers-mercado-ripley%2FImagenes-MIRAKL%2F2018%2F02%2FMPM00000457735-1-F.jpg?w=750&h=555&ch=Width&auto=format&cs=strip&q=60&ixlib=js-1.1.0&s=44d9eaedaf9de1b9b9af74cd4aaf369d'
			},
			'GUANTES DE FÚTBOL PUMA FUTURE': {
				'desc': 'Guante de Fútbol Puma modelo Future. Su palma de látex te entregará un mejor agarre y confort de cara a tus entrenamientos y partidos de fútbol.',
				'new': false,
				'precio': '$14.990',
				'disponible': true,
				'img': 'https://home.ripley.cl/store/Attachment/WOP/D170/2000367178235/2000367178235_2.jpg'
			}
		},
		'ciclismo': {
			'Bolso Táctico Delantero para Bicicleta': {
				'desc': 'Útiles para ciclismo. caracteristicas: material de poliester de alta calidad, durable para usar. dos bolsillos principales en ambos lados y bolso de un telefono en la parte superior.',
				'new': false,
				'precio': '$$19.032',
				'disponible': true,
				'img': 'https://ripleycl.imgix.net/https%3A%2F%2Fs3.amazonaws.com%2Fimagenes-sellers-mercado-ripley%2FImagenes-MIRAKL%2F2018%2F02%2FMPM00000457615-1-F.jpg?w=750&h=555&ch=Width&auto=format&cs=strip&q=60&ixlib=js-1.1.0&s=bbf2378bba32d8b376fa1ac6883254d9'
			},
			'BICICLETA TREK SKYE ARO 29 24V': {
				'desc': 'El Modelo Marlin de Trek cumple con las prestaciones necesarias para una expedición outdoor cómoda, segura y llena de aventuras.',
				'new': false,
				'precio': '$399.990',
				'disponible': true,
				'img': 'https://home.ripley.cl/store/Attachment/WOP/D192/2000364367649/2000364367649_2.jpg'
			},
			'Bomba de aire para alta presión': {
				'desc': 'Esta bomba de piso de aleacion de acero se adapta a las valvulas Presta y Schrader. Se ha diseñado con una manguera larga. caracteristicas: Alta presion, alta potencia, presion maxima a 150psi (8bar)',
				'new': true,
				'precio': '$39.351',
				'disponible': true,
				'img': 'https://ripleycl.imgix.net/https%3A%2F%2Fs3.amazonaws.com%2Fimagenes-sellers-mercado-ripley%2FImagenes-MIRAKL%2F2018%2F02%2FMPM00000458171-1-F.jpg?w=750&h=555&ch=Width&auto=format&cs=strip&q=60&ixlib=js-1.1.0&s=36b2c30069c38a94363c88d1279beb37'
			}
		},
		'fitness': {
			'Correa de Estiramiento para Yoga': {
				'desc': 'La correa de estiramiento perfecta para principiantes e incluso mejor para usuarios experimentados.',
				'new': false,
				'precio': '$21.990',
				'disponible': true,
				'img': 'https://ripleycl.imgix.net/https%3A%2F%2Fs3.amazonaws.com%2Fimagenes-sellers-mercado-ripley%2FImagenes-MIRAKL%2F2018%2F02%2FMPM00000457735-1-F.jpg?w=750&h=555&ch=Width&auto=format&cs=strip&q=60&ixlib=js-1.1.0&s=44d9eaedaf9de1b9b9af74cd4aaf369d'
			},
			'BANDA CON AURICULARES PARA DEPORTES': {
				'desc': 'ESTA DIADEMA DE MÚSICA ES UN GADGET PERFECTO MANOS LIBRES BT PARA YOGA, CORRER, TROTAR, ENTRENAMIENTO, ENTRENAMIENTO, CARRERAS, CAMINAR PERROS, BALONCESTO, TENIS, FÚTBOL',
				'new': false,
				'precio': '$21.990',
				'disponible': true,
				'img': 'https://ripleycl.imgix.net/https%3A%2F%2Fs3.amazonaws.com%2Fimagenes-sellers-mercado-ripley%2FImagenes-MIRAKL%2F2018%2F02%2FMPM00000422789-1-F.jpg?w=750&h=555&ch=Width&auto=format&cs=strip&q=60&ixlib=js-1.1.0&s=399c42a741244075af8accb5cffae90e'
			},
			'RUEDA PARA ABDOMINALES': {
				'desc': 'LA RUEDA PARA ANDOMINALES TONIFICA TODOS LOS GRUPOS MUSCULARES DE LA PARTE SUPERIOR DEL CUERPO, INCLUIDOS LOS HOMBROS, LOS BRAZOS, LA ESPALDA Y LOS ABDOMINALES.',
				'new': true,
				'precio': '$27.317',
				'disponible': true,
				'img': 'https://ripleycl.imgix.net/https%3A%2F%2Fs3.amazonaws.com%2Fimagenes-sellers-mercado-ripley%2FImagenes-MIRAKL%2F2018%2F02%2FMPM00000421477-1-F.jpg?w=750&h=555&ch=Width&auto=format&cs=strip&q=60&ixlib=js-1.1.0&s=88a4411d570b6d0e91c9dfd711e2ad04'
			}
		}
	}
}