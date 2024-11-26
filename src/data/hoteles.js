import HistoriaCultura from "../pages/HistoriaCultura.astro";

export const ciudades = [
  {
    nombre: "Cartagena",

    hoteles: [
      {
        id: "hotel-caribe",
        nombre: "Hotel Caribe",
        img: "/img/hotelCaribe.jpg",
        descripcion: "El Hotel Caribe, en Bocagrande, Cartagena, es un ícono de elegancia junto al mar. Con jardines tropicales, piscina y acceso directo a la playa, ofrece una experiencia única en el corazón del Caribe colombiano.",
        bento:["/img/hotelCaribe.jpg","/img/hotelCaribe2.jpg","/img/hotelCaribe3.jpg","/img/hotelCaribe4.jpg","/img/hotelCaribe5.jpg"],
        descripciongeneral: ["Cancelación gratuita",
                              "Reservar ahora y pagar después",
                              "Estadía 10.5 horas (con capacidad de extención)",
                              "Botones y servivio al cuarto",
                              "Servicio de recogida opcional"],
        descripciondetalles:["Cancela con hasta 24 horas de antelación y recibe un reembolso completo.",
                              "Planes flexibles: reserva tu plaza de inmediato, sin que se te haga el cargo.",
                              "Comprueba la disponibilidad para ver los horarios de inicio.",
                              "Español, Inglés.",
                              "Incluye el servicio de recogida en tu hotel en la zona de El Poblado. El tiempo máximo de espera en el hotel es de 5 minutos."],
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.4834565845715!2d-75.55579808471768!3d10.398763292568846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef62e5cbec569b7%3A0x104f74f7c27e5db0!2sHotel%20Caribe%20By%20Faranda%20Grand!5e0!3m2!1sen!2sco!4v1701183437394!5m2!1sen!2scohttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.4834565845715!2d-75.55579808471768!3d10.398763292568846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef62e5cbec569b7%3A0x104f74f7c27e5db0!2sHotel%20Caribe%20By%20Faranda%20Grand!5e0!3m2!1sen!2sco!4v1701183437394!5m2!1sen!2scohttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.726057678473!2d-75.531659!3d10.403060!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef62e4e2a1a61f3%3A0x5d08edb25c0bc177!2sCra.%201%20%232–87%2C%20Cartagena%20de%20Indias%2C%20Provincia%20de%20Cartagena%2C%20Bol%C3%ADvar!5e0!3m2!1sen!2sco!4v1701184871450!5m2!1sen!2sco",
        contentData: [
                      {
                        titulo: "Historia y Cultura del Hotel Caribe en Cartagena Colombia",
                        description: "El Hotel Caribe en Cartagena es un hito histórico y cultural que refleja la esencia de la ciudad. A continuacion te presentamos una breve descripción de su historia, cultura y algunos datos curiosos:",
                        historia: {
                          title: "Historia",
                          content: "Inaugurado en 1945, el Hotel Caribe fue uno de los primeros hoteles de lujo en Cartagena, diseñado para atraer tanto a turistas nacionales como internacionales. A lo largo de los años, el hotel ha sido testigo de la evolución de la ciudad y ha hospedado a importantes personalidades de la política, el entretenimiento y los negocios. Su arquitectura, que mezcla el estilo colonial con elementos modernos, ha sido restaurada y mantenida para preservar su encanto histórico. Durante más de 70 años, el Hotel Caribe ha sido un símbolo de hospitalidad y lujo en la costa caribeña colombiana."
                        },
                        cultura: {
                          title: "Cultura",
                          content: "El Hotel Caribe es parte integral de la cultura cartagenera, no solo por su historia como uno de los primeros grandes hoteles de la ciudad, sino también por su vinculación con eventos importantes. A lo largo de los años, ha sido escenario de encuentros sociales, empresariales y culturales, promoviendo la difusión del arte, la música y la gastronomía de la región. Además, su cercanía al centro histórico de Cartagena permite a los huéspedes sumergirse en la vibrante cultura local, que abarca desde su arquitectura colonial hasta sus tradiciones gastronómicas."
                        },
                        mitos: {
                          title: "Datos Curiosos",
                          content: "El Hotel Caribe se distingue por su ubicación privilegiada en el barrio de Bocagrande, una de las zonas más exclusivas y turísticas de Cartagena, conocida por sus playas y ambiente moderno. Su arquitectura histórica, que combina elementos coloniales con detalles contemporáneos, ha sido cuidadosamente preservada. Además, ofrece acceso directo a la playa, permitiendo a los huéspedes disfrutar del mar Caribe sin salir del hotel. A lo largo de los años, el hotel ha acogido a celebridades, políticos y artistas internacionales, convirtiéndose en un referente de lujo y hospitalidad en la ciudad. Su oferta gastronómica también es de renombre, con restaurantes que destacan los sabores del Caribe colombiano.",
                                    
                          
                        },
                        images: [
                          "/img/hotelCaribeH1.webp",
                          "/img/hotelCaribeH2.webp",
                          "/img/hotelCaribeH3.webp",
                          
                        ]
                      }
                  ],
        flyer: "/img/FlyerHotelCaribe.jpg",
      
      
            },
      {
        id: "hotel-las-americas",
        nombre: "Hotel las Americas Torre de Mar Cartagena",
        img: "/img/hotelAmericas.png",
        descripcion: "El Hostal Casa de las Américas ofrece habitaciones con aire acondicionado en el distrito Getsemaní de Cartagena de Indias.",
      },
    ],
  },
  {
    nombre: "Bogotá",
    hoteles: [
      {
        id: "hotel-bogota-plaza",
        nombre: "Hotel Bogotá Plaza",
        img: "/img/cartagena.png",
        descripcion: "Hotel de lujo con spa y restaurante.",
      },
      {
        id: "hotel-estelar",
        nombre: "Hotel Estelar",
        img: "/img/cartagena.png",
        descripcion: "Hotel moderno cerca del aeropuerto.",
      },
    ],
  },
];
