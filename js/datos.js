/* ============================================================
   DATOS DE LA WEB DE LIMBO S.L.
   Este es el único archivo que hay que tocar para añadir
   capítulos, vídeos de presentación, fotos o productos.
   ============================================================ */

const CONFIG = {
  correo: "info@limbosl.com",
  // Los formularios se envían a este correo con FormSubmit (gratis, sin cuenta).
  // El primer envío manda un email de activación a info@limbosl.com que hay que confirmar una vez.
  formulario: "https://formsubmit.co/ajax/info@limbosl.com",
  // Boletín Interno: dirección del formulario de Brevo (Contactos > Formularios > Compartir > HTML, el "action" del form).
  // Vacío = las altas llegan por email a info@limbosl.com y hay que pasarlas a Brevo a mano.
  boletin: "",
  tiktok: "https://www.tiktok.com/@limbosl",
  instagram: "https://www.instagram.com/limbo.sl/",
  youtube: "", // Cuando abra el canal: "https://www.youtube.com/@..."
  // Imagen de Kiko asomándose (PNG con fondo transparente, cabeza y una mano, mirando hacia el centro).
  // Vacío = sale el dibujo provisional.
  kikoImg: "img/kiko-espia.png"
};

/* CAPÍTULOS
   Cuando un capítulo esté en YouTube, pon su código en "youtube".
   Ejemplo: para https://www.youtube.com/watch?v=AbC123xyz el código es "AbC123xyz". */
const EPISODIOS = [
  { n: 1, titulo: "Lunes 25", duracion: "2 min", youtube: "", resumen: "Un lunes cualquiera en Suministros Limbo. Inma presume, Anselmo oye cosas, Cayetano llega de una reunión, Kiko espía y Encarna mira el reloj. Todo normal. Demasiado normal." },
  { n: 2, titulo: "El perro final", duracion: "2 min", youtube: "", resumen: "Aparece un cachorro en la oficina y siembra el caos. Lo raro no es el caos: es que nadie recuerda haber visto nunca un animal por allí." },
  { n: 3, titulo: "El viaje a Villacándida", duracion: "2 min", youtube: "", resumen: "Hay que llevar un pedido a la sucursal y nadie quiere ir. Nadie, hasta que a Jonay le cuentan lo que le espera allí. Sus compañeros nunca le habían visto tan motivado." },
  { n: 4, titulo: "El sándwich maldito", duracion: "2 min", youtube: "", resumen: "Bienvenido a Villacándida: sol, merengue y una nevera con una norma que allí nadie se salta. Jonay viene con ganas de demostrar lo valiente que es." }
];

/* PLANTILLA
   foto: ruta de la imagen (img/plantilla/nombre.jpg) o enlace. Vacío = sale la silueta con iniciales.
   video: código de YouTube del vídeo de presentación. "grabado": true si ya está hecho pero aún no subido. */
const PLANTILLA = [
  // Sede central · El Páramo
  { nombre: "Doña Herminia", edad: 81, puesto: "Fundadora", sede: "paramo", antiguedad: "Desde que se fundó. Y no se jubila.", frase: "En mis tiempos primero trabajabas un año y después se veía lo de las vacaciones.", perfil: "La abuela que lo montó todo y no piensa jubilarse. Lleva contando tornillos desde 1987.", senas: "Llavero enorme, metro al cuello y libro de cuentas", foto: "img/plantilla/herminia.jpg", video: "", grabado: false },
  { nombre: "Don Evaristo", edad: 58, puesto: "Dirección", sede: "paramo", antiguedad: "Lunes 25", frase: "Aquí somos todos una gran familia.", perfil: "El jefe bueno. Firma todo sin leer, siempre para ayudar a un amigo.", senas: "Estilográfica en la mano y un folleto bajo el brazo", foto: "img/plantilla/evaristo.jpg", video: "", grabado: false },
  { nombre: "Cayetano", edad: 24, puesto: "Dirección (hijo del dueño)", sede: "paramo", antiguedad: "Lunes 25, desde las 11", frase: "Voy de culo.", perfil: "Llega a las once de una reunión, se va dos horas a comer y está siempre hasta arriba. Nadie sabe en qué trabaja.", senas: "Gafas de sol en la cabeza y llaves del BMW", foto: "img/plantilla/cayetano.jpg", video: "", grabado: true },
  { nombre: "Pelucifer", edad: "—", puesto: "Dirección (vive en la cabeza de Cayetano)", sede: "paramo", antiguedad: "Lo que tenga Cayetano", frase: "La verdadera felicidad son las criptomonedas.", perfil: "El peluquín con vida propia que se cree el verdadero jefe. Todos saben que está vivo y nadie lo comenta.", senas: "Un rizo grande delante y ojos de pillo", foto: "img/plantilla/pelucifer.jpg", video: "", grabado: false },
  { nombre: "Chema", edad: 45, puesto: "Responsable de la sucursal", sede: "paramo", antiguedad: "Lunes 25", frase: "Para habernos matao.", perfil: "Macarra reconvertido en padre abnegado.", senas: "Pendientes, rapado y camiseta de grupo de rock", foto: "img/plantilla/chema.jpg", video: "", grabado: false },
  { nombre: "Rafa", edad: 44, puesto: "Comercial", sede: "paramo", antiguedad: "Lunes 25", frase: "Tú puedes, jefe... yo no, pero tú sí.", perfil: "Coach de superación que no se aplica nada. Sus charlas terminan con él llorando.", senas: "Micrófono de diadema y gafas de espejo", foto: "img/plantilla/rafa.jpg", video: "", grabado: false },
  { nombre: "Ramiro", edad: 52, puesto: "Director de ventas (jefe de Rafa y Encarna)", sede: "paramo", antiguedad: "Lunes 25", frase: "Hoy me como el mundo.", perfil: "Entra en cada reunión como en el final de una telenovela. A los cinco minutos se derrumba con dignidad.", senas: "Sombrero vaquero y espuelas que se oyen antes que él", foto: "img/plantilla/ramiro.jpg", video: "", grabado: false },
  { nombre: "Anselmo", edad: 64, puesto: "Administración", sede: "paramo", antiguedad: "Se jubila la semana que viene", frase: "De aquí no te vas ni con los pies por delante.", perfil: "El veterano que cada mes anuncia que se va.", senas: "Mira siempre hacia arriba, como si oyera algo", foto: "img/plantilla/anselmo.jpg", video: "", grabado: true },
  { nombre: "Inma", edad: 32, puesto: "Jefa de Administración", sede: "paramo", antiguedad: "Lunes 25", frase: "Yo soy de campo, pero he estudiado.", perfil: "Elegancia extrema de oficina y el orgullo de quien lo consiguió todo con su esfuerzo. Cuando le toque la lotería no la volvéis a ver.", senas: "Pin de caña de azúcar en la solapa", foto: "img/plantilla/inma.jpg", video: "", grabado: true },
  { nombre: "Venancio", edad: 57, puesto: "Jefe de compras", sede: "paramo", antiguedad: "40 años en la casa", frase: "Esto con fe se arregla.", perfil: "Encomienda a un santo cada fallo de la impresora. Sabe dónde está todo porque llegó antes que los archivos.", senas: "Cruz pequeña en la solapa", foto: "img/plantilla/venancio.jpg", video: "", grabado: true },
  { nombre: "Remedios", edad: 50, puesto: "Administración", sede: "paramo", antiguedad: "Lunes 25", frase: "A mí no me vais a robar el mérito.", perfil: "Tiene un pero para todo y siempre ya lo dijo, aunque nunca dijo nada.", senas: "Gafas que baja para mirar mal y un tic en el ojo", foto: "img/plantilla/remedios.jpg", video: "", grabado: false },
  { nombre: "Encarna", edad: 60, puesto: "Responsable de ventas (media jornada)", sede: "paramo", antiguedad: "40 años vendiendo. Ni un minuto más", frase: "Son las dos.", perfil: "Cobra un plus por no tratar mal. A las 14:00 se levanta aunque esté a mitad de frase.", senas: "Reloj de pulsera enorme y bolso en el regazo", foto: "img/plantilla/encarna.jpg", video: "", grabado: true },
  { nombre: "Manolo", edad: 48, puesto: "Almacén", sede: "paramo", antiguedad: "Lunes 25", frase: "Yo me encargo.", perfil: "El alma de la oficina. Sabe cómo toma el café cada uno y la bolsa de bollos nunca se acaba.", senas: "Un café siempre en la mano", foto: "img/plantilla/manolo.jpg", video: "", grabado: true },
  { nombre: "Eladio", edad: 55, puesto: "Dependiente", sede: "paramo", antiguedad: "Hoy es su primer día (otra vez)", frase: "¿Esto ya lo he dicho?", perfil: "Se presenta cada mañana como si fuera su primer día.", senas: "Mirada perdida y sonrisa amable", foto: "img/plantilla/eladio.jpg", video: "", grabado: true },
  { nombre: "Josemi", edad: 42, puesto: "Dependiente", sede: "paramo", antiguedad: "Lunes 25", frase: "Apúntalo, ya me lo pagas el lunes.", perfil: "Fía a todo el mundo y siempre pide un adelanto de nada.", senas: "Libreta de deudas y boli detrás de la oreja", foto: "img/plantilla/josemi.jpg", video: "", grabado: false },
  { nombre: "Noelia", edad: 28, puesto: "Dependienta", sede: "paramo", antiguedad: "Lunes 25", frase: "Perdona, ¿te puedo ayudar? Es que me da cosa.", perfil: "La dulce que desarma a los brutos. Habla tan bajito que solo se oye un murmullo.", senas: "Uñas largas de colores y coletas", foto: "img/plantilla/noelia.jpg", video: "", grabado: false },
  { nombre: "Kiko", edad: 40, puesto: "Dependiente", sede: "paramo", antiguedad: "Lunes 25", frase: "Jefe, jefe, tengo que contarte algo.", perfil: "Se cree agente secreto y se esconde tras las estanterías para enterarse de todo.", senas: "Mochila infantil llena de monstruitos", foto: "img/plantilla/kiko.jpg", video: "", grabado: false },
  { nombre: "Yolanda", edad: 35, puesto: "Dependienta", sede: "paramo", antiguedad: "Lunes 25", frase: "La tengo más grande que todos estos.", perfil: "La dura en un mundo de hombres. Reta a pulsos a quien se descuide.", senas: "Brazos cruzados y barbilla alzada", foto: "img/plantilla/yolanda.jpg", video: "", grabado: false },
  { nombre: "Jonay", edad: 21, puesto: "Dependiente", sede: "paramo", antiguedad: "Lunes 25", frase: "Tío, me he enamorado.", perfil: "Cada lunes anuncia que esta vez es la definitiva. Actitud de campeón en cualquier situación.", senas: "Pecho fuera y sonrisa de anuncio", foto: "img/plantilla/jonay.jpg", video: "", grabado: false },
  { nombre: "Dylan", edad: 25, puesto: "Reparto", sede: "paramo", antiguedad: "Lunes 25", frase: "Tranqui, tranqui...", perfil: "Calmadísimo hasta que explota. Vive cada día como una tarde de domingo.", senas: "Llave de carretilla colgada del cuello", foto: "img/plantilla/dylan.jpg", video: "", grabado: false },
  { nombre: "Dani", edad: 30, puesto: "Reparto", sede: "paramo", antiguedad: "Vuelve en cinco minutos", frase: "Me quedan tres entregas.", perfil: "El repartidor que siempre vuelve en cinco minutos.", senas: "Casco roto y cigarro apagado", foto: "img/plantilla/dani.jpg", video: "", grabado: false },
  { nombre: "Wilson", edad: 52, puesto: "Reparto", sede: "paramo", antiguedad: "Esperando a que arreglen la furgoneta", frase: "Sí, señor, como usted diga.", perfil: "El conductor educadísimo. Dice que sí a todo, pero nunca hace nada. Si le miras de repente, se queda quieto como un muñeco. Y cada día tiene la nariz un poquito más larga.", senas: "Gorra en la mano al saludar y un termo plateado (dice que es café)", foto: "img/plantilla/wilson.jpg", video: "", grabado: false },
  { nombre: "Borja", edad: 23, puesto: "Reparto", sede: "paramo", antiguedad: "Lunes 25", frase: "Me voy a forrar, me he apuntado a...", perfil: "Cada mes empieza un curso nuevo y lo anuncia como su nueva vida.", senas: "Cara de perdido y mochila", foto: "img/plantilla/borja.jpg", video: "", grabado: false },
  { nombre: "Marcelo", edad: 50, puesto: "Pintura", sede: "paramo", antiguedad: "Nadie lo sabe", frase: "Yo soy artista, no empleado.", perfil: "El amigo del jefe al que nadie sabe qué hace. Vive entre humo y disolventes.", senas: "Cejas chamuscadas y un mechero", foto: "img/plantilla/marcelo.jpg", video: "", grabado: false },
  // Sucursal · Villacándida
  { nombre: "Rubén", edad: 46, puesto: "Responsable", sede: "villa", antiguedad: "Un lunes fluido", frase: "Todo fluye... pero antes de las cinco.", perfil: "Hippy reconvertido en padre de familia. Plantea reuniones en círculo y no llega a ninguna decisión.", senas: "Sandalias con calcetines y collar de conchas", foto: "img/plantilla/ruben.jpg", video: "", grabado: false },
  { nombre: "Karim", edad: 35, puesto: "Dependiente", sede: "villa", antiguedad: "Lunes 25", frase: "Prefiero no opinar.", perfil: "Expolicía introvertido y preciso. Trata cada tarea como un caso y es el único que termina todo lo que empieza.", senas: "Libreta de policía y gafas amarillas", foto: "img/plantilla/karim.jpg", video: "", grabado: false },
  { nombre: "Gianni", edad: 50, puesto: "Repartidor", sede: "villa", antiguedad: "Lunes 25 (y aperitivo)", frase: "Dopo lavoro, aperitivo!", perfil: "Italiano cincuentón que todo lo quiere celebrar. Convoca un aperitivo cada día, a cualquier hora.", senas: "Copa de espumoso permanente", foto: "img/plantilla/gianni.jpg", video: "", grabado: false },
  // Teletrabajo · desde el más acá (por videollamada)
  { nombre: "Don Ignacio", edad: 55, puesto: "Asesor financiero", sede: "remoto", antiguedad: "Conectado desde el más acá", frase: "Dios nos dio números para multiplicarlos.", perfil: "Asesor financiero muy católico y dueño de una discoteca. Reza el rosario mientras cuadra las cuentas.", senas: "Rosario en la mano y luces de neón de fondo", foto: "img/plantilla/ignacio.jpg", video: "", grabado: false },
  { nombre: "Ander", edad: 47, puesto: "Teletrabajo", sede: "remoto", antiguedad: "Conectado desde el más acá", frase: "Explícame el chiste.", perfil: "Vasco serio que no pilla las bromas. Mira el reloj y ni parpadea.", senas: "Camisa planchada y reloj de acero", foto: "img/plantilla/ander.jpg", video: "", grabado: false },
  { nombre: "Pablo", edad: 42, puesto: "Teletrabajo", sede: "remoto", antiguedad: "Conectado desde el más acá (desde el sofá)", frase: "Tranqui, tío, todo llega.", perfil: "Siempre flotando y siempre medio recostado. No tiene ninguna prisa.", senas: "Chanclas y camiseta vieja", foto: "img/plantilla/pablo.jpg", video: "", grabado: false },
  { nombre: "Luis", edad: 36, puesto: "Teletrabajo", sede: "remoto", antiguedad: "Conectado desde el más acá, a la carrera", frase: "¡Ahora no, que voy de culo!", perfil: "Estresado, siempre sudando y siempre corriendo a otra reunión. La cámara nunca deja de moverse.", senas: "Móvil en una mano y café en la otra", foto: "img/plantilla/luis.jpg", video: "", grabado: false }
];

/* TIENDA
   Por ahora los artículos son de prueba: el botón "¡Lo quiero!" no cobra nada,
   solo te manda un email con quién lo quiere. Cuando tengas Shopify,
   pon el id del producto en "shopify" y aparecerá el botón de compra real. */
const PRODUCTOS = [
  { ref: "LIMBO-CAL-25", nombre: "Calendario perpetuo «Lunes 25»", precio: "14,90 €", img: "img/calendario.jpg", texto: "Todas las hojas marcan lo mismo. Arranca una y mañana vuelve a ser lunes 25.", shopify: "" },
  { ref: "LIMBO-TAZA-ENC", nombre: "Taza de Encarna", precio: "14,90 €", img: "img/taza-encarna.jpg", texto: "Son las ocho. Faltan seis horas. Encarna lo sabe, y ahora tú también.", shopify: "" },
  { ref: "LIMBO-TAZA-GIA", nombre: "Taza de Gianni", precio: "14,90 €", img: "img/taza-gianni.jpg", texto: "Por la mañana es café. Después del trabajo, lo que surja.", shopify: "" },
  { ref: "LIMBO-LIB-JON", nombre: "Libreta «Mis conquistas» de Jonay", precio: "12,90 €", img: "img/libreta-jonay.jpg", texto: "Tapa dura, título en dorado y todas las páginas en blanco. Como la lista de Jonay.", shopify: "" },
  { ref: "LIMBO-TEL-CHO", nombre: "Teléfono de Atención al Cliente", precio: "9,90 €", img: "img/telefono-chocolate.jpg", texto: "De chocolate. Tranquilo: nunca suena. Y si te cansas de esperar, te lo comes.", shopify: "" },
  { ref: "LIMBO-CAM-LUN", nombre: "Camiseta «Hoy es lunes»", precio: "22,90 €", img: "img/camiseta-lunes.jpg", texto: "Azul marino. Hoy es lunes. Y mañana, también.", shopify: "" },
  { ref: "LIMBO-CAM-GIA", nombre: "Camiseta «Dopo lavoro, aperitivo!»", precio: "22,90 €", img: "img/camiseta-dopo.jpg", texto: "Blanco roto. La de Gianni, para cuando termina la jornada (o un poco antes).", shopify: "" },
  { ref: "LIMBO-JER-DOS", nombre: "Jersey «Son las dos»", precio: "39,90 €", img: "img/jersey-dos.jpg", texto: "Mostaza. El reloj de Encarna marca la única hora que importa.", shopify: "" },
  { ref: "LIMBO-JER-LIM", nombre: "Jersey «Empleado del mes»", precio: "39,90 €", img: "img/jersey-limbo.jpg", texto: "Verde pálido, como la luz de los fluorescentes. Con el logo y el halo, para que se sepa dónde trabajas.", shopify: "" },
  { ref: "LIMBO-PEG-01", nombre: "Pegatinas de la empresa", precio: "5,90 €", img: "img/pegatinas.jpg", texto: "El logo, las dos nubes y las frases del equipo para el portátil o el móvil.", shopify: "" }
];

/* CATÁLOGO DE SUMINISTROS (artículos de broma, todavía sin foto) */
const SUMINISTROS = [
  { ref: "000-0", nombre: "Tornillo invisible", nota: "Incluye instrucciones de montaje (también invisibles)" },
  { ref: "100-V", nombre: "Caja vacía", nota: "Su pedido. Gracias por confiar en Suministros Limbo" },
  { ref: "INM-08", nombre: "Perfume «Inmaculada»", nota: "Notas de salida: ninguna" },
  { ref: "ASC-01", nombre: "Ascenso enlatado", nota: "Abrir cuando proceda" },
  { ref: "CTR-∞", nombre: "Contrato indefinido de bolsillo", nota: "Se despliega. No termina nunca" },
  { ref: "VAC-PT", nombre: "Vacaciones en tarro", nota: "Edición puente. Pendiente de aprobación" }
];

const FRASES = [
  "Hoy es lunes. Y mañana, también.",
  "Son las dos.",
  "Dopo lavoro, aperitivo!",
  "¿Quién es Miguel?",
  "Esto con fe se arregla.",
  "¿Esto ya lo he dicho?",
  "Aquí somos todos una gran familia.",
  "Me quedan tres entregas.",
  "Yo me encargo.",
  "Prefiero no opinar."
];

/* SEDES (sección Visítanos). fotos: lista de imágenes; video: código de YouTube cuando haya recorrido. */
const SEDES = [
  { id: "paramo", nombre: "Sede central · El Páramo", tipo: "Sede central",
    texto: "Un pueblo costero de postal: palmeras, mar turquesa y turistas en bañador. En medio, un edificio gris con su propia nube de lluvia, que solo cubre el local. Dentro, fluorescentes, archivadores y un calendario que no se mueve.",
    datos: [["Horario", "De 8:00 a 14:00. Encarna, a las 14:00 en punto, ni un minuto más."], ["Cómo llegar", "Busque la única nube del pueblo."], ["Aparcamiento", "El sitio prohibido es de Cayetano."], ["Atención", "Siete dependientes. Con suerte, le atiende uno."]],
    postit: "Miguel ha pasado por aquí",
    fotos: ["img/sedes/paramo-exterior.jpg", "img/sedes/paramo-mostrador.jpg", "img/sedes/paramo-administracion.jpg"], video: "" },
  { id: "villa", nombre: "Sucursal · Villacándida", tipo: "Sucursal",
    texto: "Una ciudad de interior que es un paraíso tropical: palmeras, merengue sonando desde algún colmado y motos por todas partes. La luz entra en el local en haces dorados, como si estuviera bendecido. Aquí todos son felices y nadie sabe muy bien por qué.",
    datos: [["Horario", "Flexible. Todo fluye, pero antes de las cinco."], ["Equipo", "Rubén, Karim y Gianni. Nadie más."], ["Bienvenida", "Gianni organiza un aperitivo para recibirle. Y otro para despedirle."]],
    fotos: ["img/sedes/villa-exterior.jpg"], video: "" }
];

/* Lo que susurra Kiko y su informe secreto (sin destripes) */
const KIKO = {
  frases: ["Jefe, jefe, tengo que contarte algo.", "Yo no he visto nada.", "Encarna ya tiene el bolso en la mano.", "Cayetano ha llegado a las once.", "Venancio está rezándole a la impresora.", "Psst... pulsa aquí.", "Yolanda está haciendo un pulso con la cafetera.", "Manolo está otra vez comiendo.", "Dylan está haciendo drifting con la traspaleta."],
  informe: [
    "Cada capítulo dura unos dos minutos. Lo justo para un café de máquina.",
    "La serie la escribe Virginia. Claude, la nube, la ayuda con los prompts de cada escena.",
    "La sede central tiene su propia nube de lluvia. No se ha ido nunca.",
    "En Villacándida solo trabajan tres personas, y aun así nunca deciden nada.",
    "Encarna lleva 40 años en ventas y no se ha quedado ni un minuto más de su hora.",
    "Eladio se presenta cada mañana. A todos. Otra vez.",
    "Pelucifer, el peluquín de Cayetano, cree que el jefe es él.",
    "Gianni ha convocado un aperitivo para celebrar que es lunes.",
    "Yo, Kiko, me escondo detrás de las estanterías para enterarme de todo. Nadie me ha pillado nunca. Creo.",
    "¿Quién es Miguel?"
  ]
};
