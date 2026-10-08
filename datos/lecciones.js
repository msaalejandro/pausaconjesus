/* =====================================================================
   LECCIONES: el contenido de cada sesión (guía, preguntas, dinámica, audio).
   Se preparan una vez y cualquier grupo las puede usar en sus propias fechas.
   La clave (por ejemplo "el-desierto") es la que se pone en el calendario
   del grupo, en datos/grupo.js.
   ===================================================================== */
window.LECCIONES = {
  "el-desierto": {
    tema: "El desierto",
    fuente: "Apuntes sobre la oración · Capítulo VI",
    categoria: "Oración",
    lectura: "12 min de lectura",
    idea: "El desierto es el lugar donde Dios, quitándonos los apoyos de siempre, nos habla al corazón y nos muestra su verdadero rostro: no el de un amo, sino el de un esposo que tiene sed de nosotros.",
    puntos: [
      { t: "Donde se caen los apoyos",
        p: ["La palabra misma lo dice: el desierto es un lugar abandonado, donde falta el pan, el agua y la compañía que normalmente nos sostienen. Ahí nadie sobrevive por sí mismo.",
            "Por eso el desierto revela nuestra verdad: somos frágiles, dependientes y mortales. El Apocalipsis describe al que se creía rico y en realidad estaba pobre, ciego y desnudo."],
        refs: "Ap 3,17",
        a: "Un desierto puede ser una enfermedad, una pérdida, una soledad que no elegimos o una etapa de sequedad en la oración." },
      { t: "No se va por cuenta propia",
        p: ["Nadie busca el desierto por gusto. Es el Espíritu quien lleva, como llevó a Jesús; san Marcos llega a decir que lo empujó.",
            "El profeta Oseas lo presenta como iniciativa de un Dios enamorado: Él conduce a su esposa al desierto para hablarle al corazón, y ahí la alimenta con su Palabra."],
        refs: "Mt 4,1 · Lc 4,1 · Mc 1,12 · Os 2,16 · Ap 12,6",
        a: "El desierto no es castigo ni señal de que Dios se fue. Puede ser su manera de llevarnos aparte." },
      { t: "Del amo al esposo",
        p: ["Arrastramos, desde Adán, una imagen deformada de Dios: un señor que vigila, exige y castiga. En el desierto esa imagen se rompe.",
            "Oseas lo dice con una imagen fuerte: Dios quiere que dejemos de llamarlo «mi amo» y lo llamemos «esposo mío». Su rostro verdadero es el de alguien enamorado, no el de un déspota."],
        refs: "Os 2,18",
        a: "Cuando fallo, ¿me acerco a Dios con miedo a su reacción o con la confianza de quien se sabe amado?" },
      { t: "El pozo escondido",
        p: ["El autor recuerda a El Principito: lo bello del desierto es que esconde un pozo. Junto a ese pozo está Jesús, sentado y esperando, y es Él quien pide: «Dame de beber». San Agustín ve en la samaritana una figura de toda la Iglesia.",
            "La sorpresa es que Dios también tiene sed: sed de nosotros, una sed que lo lleva hasta la cruz. También Dios tiene su desierto, y es la ausencia del hombre que no responde a su amor."],
        refs: "Jn 4,5-26 · Jn 4,23 · Jn 19,28",
        a: "La oración no empieza por lo que yo le pido, sino por la sed que Él tiene de mí." },
      { t: "Frente a nuestras fieras",
        p: ["Sin los apoyos de siempre salen a la luz lo que escondíamos: vicios, heridas, inclinaciones torcidas. Y sobre todo el orgullo espiritual, ese esfuerzo constante por salvarnos con nuestras propias fuerzas.",
            "Solo cuando ese ruido se apaga podemos oír a Dios como lo oyó Elías: no en el viento ni en el fuego, sino en una brisa suave, una voz hecha de silencio."],
        refs: "1 Re 19,9-13",
        a: "El silencio incomoda porque nos muestra lo que evitamos ver. Ahí mismo es donde Dios habla." },
      { t: "Todo es misericordia",
        p: ["Reconocer nuestra miseria no es para hundirnos. La única razón por la que Dios nos lleva al desierto es que su misericordia es eterna, como repite el salmo. Ahí aprendemos a esperarlo todo de ella y nada de nuestros méritos.",
            "Como Moisés en el Horeb, descalzos y con el rostro cubierto ante la zarza ardiente, recibimos la revelación de su Nombre."],
        refs: "Sal 136 · Ex 3,1-6",
        a: "La humildad no es despreciarse: es aceptar la verdad sobre uno mismo y dejar que Dios la abrace." },
      { t: "La Pascua sucede en silencio",
        p: ["La zarza que arde sin consumirse apunta a la cruz y a la resurrección: Cristo arde en el fuego del Espíritu, en el amor al Padre y a nosotros. Y nadie vio el instante en que resucitó; el pregón pascual dice que solo aquella noche lo supo.",
            "La Iglesia entrará en la gloria siguiendo a su Señor en una última Pascua. El capítulo concluye que toda la vida de oración se resume en dejar que Cristo viva en nosotros su alabanza y su ofrenda al Padre."],
        refs: "Ex 3,2 · CCE 677 · Pregón pascual (Exsultet)",
        a: "Orar es menos hacer cosas para Dios y más dejar que Él haga en mí." }
    ],
    dinamica: {
      duracion: 70,
      agenda: [
        { min: 5,  t: "Apertura en silencio", d: "Dos minutos de silencio total. Luego se lee en voz alta Oseas 2,16-18 (en algunas Biblias es 2,14-16)." },
        { min: 20, t: "Exposición por puntos", d: "Recorrer los 7 puntos de la guía. Idea central primero; un ejemplo concreto por punto." },
        { min: 30, t: "Grupos pequeños", d: "Grupos de 3 o 4 personas. Tres rondas de 10 minutos, una pregunta a la vez." },
        { min: 10, t: "Puesta en común", d: "Cada grupo comparte una sola frase o descubrimiento. Nada de lo personal sale del grupo sin permiso." },
        { min: 5,  t: "Cierre con oración", d: "Leer juntos el Salmo 63 (62), «mi alma tiene sed de ti», y terminar con un Padre Nuestro." }
      ],
      rondas: [
        { t: "Mi desierto", sub: "Puntos 1 y 2", min: 10, q: [
          "¿Qué desierto estoy viviendo, o he vivido? ¿Qué apoyo se me cayó?",
          "¿Lo viví como castigo, como abandono, o como un lugar donde Dios me llevó aparte?" ] },
        { t: "El rostro de Dios", sub: "Puntos 3 y 4", min: 10, q: [
          "Cuando fallo, ¿a qué Dios me dirijo: al amo o al esposo? ¿De dónde me viene esa imagen?",
          "Jesús me dice «dame de beber». ¿Qué creo que me está pidiendo hoy?" ] },
        { t: "El silencio", sub: "Puntos 5 a 7", min: 10, q: [
          "¿Qué ruidos uso para no quedarme en silencio?",
          "¿En qué parte de mi vida sigo intentando salvarme con mis propias fuerzas?" ] }
      ],
      reglas: ["Cada quien habla sin ser interrumpido.", "Se vale decir «paso».", "Escuchar sin aconsejar ni corregir.", "Lo que se comparte en el grupo se queda en el grupo."]
    },
    semana: {
      pregunta: "¿Qué me está diciendo Dios al corazón en el desierto que hoy estoy viviendo?",
      practica: "Cada día, diez minutos de silencio sin teléfono. Sin pedir nada: solo quedarte con Él, como junto al pozo.",
      cierre: "Al final de la semana, escribe una frase con lo que descubriste. La compartimos en la próxima sesión."
    },
    audios: [
      { t: "Salmo 63 (62)", d: "«Mi alma tiene sed de ti»", src: "/audio/salmo-63.mp3", dur: "1:21" }
    ],
    materiales: [
      { tipo: "PDF", t: "Apuntes sobre la oración", d: "Libro completo en Google Drive. Lee el Capítulo VI, «El desierto».", url: "https://drive.google.com/file/d/1NQtbZ2IEXHPJmRNAeYyOb8HkknZFlrjJ/view?usp=drivesdk" }
    ],
    biblia: [
      ["Os 2,16-18", "Te llevaré al desierto"], ["Mc 1,12-13", "Jesús en el desierto"],
      ["Jn 4,5-26", "La samaritana en el pozo"], ["Jn 19,28", "«Tengo sed»"],
      ["1 Re 19,9-13", "Elías y la brisa suave"], ["Ex 3,1-6", "La zarza ardiente"],
      ["Sal 136", "Eterna es su misericordia"], ["Sal 63", "Mi alma tiene sed de ti"],
      ["CCE 677", "La última Pascua de la Iglesia"]
    ],
    notaBiblia: "La numeración de Oseas cambia según la edición."
  },

  "la-amistad-con-jesus": {
    tema: "La amistad con Jesús",
    fuente: "Imitación de Cristo · Libro II, capítulos VII y VIII",
    categoria: "Vida interior",
    lectura: "15 min de lectura",
    idea: "En el desierto descubrimos que necesitamos a Dios. Ahora descubrimos que Jesús no solo nos ayuda: nos llama amigos. Es el único amigo que no se va cuando todo lo demás pasa, y su amistad no se gana: se recibe y se cuida.",
    puntos: [
      { t: "El Maestro está aquí y te llama",
        p: ["Tomás de Kempis abre el capítulo VIII con una escena del Evangelio: María llora por la muerte de su hermano Lázaro, y Marta se le acerca para decirle en voz baja que el Maestro está ahí y la llama. María se levanta de inmediato y va a su encuentro.",
            "Kempis dice que es una hora feliz aquella en que Jesús nos llama de las lágrimas al gozo. Es el paso que da esta sesión: el desierto no termina con nuestro esfuerzo, sino con alguien que pronuncia nuestro nombre."],
        refs: "Jn 11,28-29",
        ecos: [
          { tipo: "Historia", t: "Quién fue Tomás de Kempis", d: "Monje de los Países Bajos (hacia 1380-1471) que pasó la mayor parte de su vida en el monasterio de Monte Santa Inés, cerca de Zwolle. Formó parte de la Devotio Moderna, un movimiento que buscaba una fe sencilla, interior y vivida en lo cotidiano. Su Imitación de Cristo es uno de los libros cristianos más leídos de la historia." },
          { tipo: "Biblia", t: "Betania, la casa de los amigos", d: "Betania estaba a unos tres kilómetros de Jerusalén (Jn 11,18). Ahí vivían Marta, María y Lázaro, y el Evangelio dice sin rodeos que Jesús los amaba (Jn 11,5). Era también el lugar donde se quedaba a pasar la noche en sus últimos días (Mt 21,17)." }
        ],
        a: "Después del desierto, Jesús no me pide que me levante solo. Me llama, y basta con ir." },
      { t: "Ya no siervos, sino amigos",
        p: ["En la última cena Jesús cambia el nombre de la relación: el siervo no sabe lo que hace su señor; al amigo se le cuenta todo. Y aclara de quién fue la iniciativa: no lo elegimos nosotros a Él, Él nos eligió.",
            "Es la continuación de lo que vimos en el desierto, cuando Dios dejaba de ser «mi amo». Ahora Jesús nos llama amigos, y la prueba que da es que entrega la vida por nosotros."],
        refs: "Jn 15,13-16",
        ecos: [
          { tipo: "Biblia", t: "Amigos de Dios desde antes", d: "La Escritura ya conocía esta palabra: Abraham es llamado amigo de Dios (Is 41,8; St 2,23), y el Señor hablaba con Moisés cara a cara, como un hombre habla con su amigo (Ex 33,11). Jesús abre esa amistad a todos sus discípulos." },
          { tipo: "Historia", t: "«Amigo del César»", d: "En el Imperio romano, «amigo del César» era un título de honor para personas cercanas al poder; el Evangelio lo menciona en el juicio a Jesús (Jn 19,12). Jesús, en cambio, llama amigos a pescadores y gente sencilla." },
          { tipo: "Magisterio", t: "Benedicto XVI", d: "En la Misa Crismal de 2006 explicó que la amistad es comunión de pensamiento y de voluntad: llegar a querer lo que el otro quiere. Y que a Jesús se le conoce escuchándolo en su Palabra y estando con Él en la oración." }
        ],
        a: "No tengo que ganarme la amistad de Jesús. Ya me la ofreció; me toca recibirla y cuidarla." },
      { t: "Lo que cambia y lo que permanece",
        p: ["El capítulo VII empieza con una comparación sencilla: todo lo creado cambia y se nos escapa de las manos, mientras que Jesús es fiel y permanece. Quien se apoya en lo que se cae, cae con ello; quien se abraza a Jesús queda firme.",
            "Kempis recuerda a Isaías: toda carne es hierba, y su gloria se marchita como la flor del campo. Las personas, dice, son como una caña que mueve el viento. No lo dice por desprecio, sino porque nadie puede sostenernos del todo, y tarde o temprano todo se separa de nosotros."],
        refs: "Is 40,6-8",
        ecos: [
          { tipo: "Santos", t: "Santa Teresa de Jesús", d: "Entre sus papeles se encontró un breve poema que dice: «Nada te turbe, nada te espante; todo se pasa, Dios no se muda». Es el mismo contraste de Kempis entre lo que cambia y Aquel que permanece. Y concluye: «Solo Dios basta»." }
        ],
        a: "No se trata de querer menos a los demás, sino de no pedirles que sean Dios para mí." },
      { t: "Un corazón con un solo trono",
        p: ["Jesús, dice Kempis, no comparte el centro: quiere reinar en el corazón como en su casa. Cuando hacemos espacio, Él viene a vivir dentro.",
            "Y lo resume en una regla: quien busca a Jesús en todas las cosas lo encuentra; quien se busca a sí mismo, solo encuentra su propio daño. Es lo que Jesús decía: donde está tu tesoro, ahí está tu corazón."],
        refs: "Mt 6,21",
        ecos: [
          { tipo: "Santos", t: "San Agustín", d: "Abre sus Confesiones con una frase que resume este punto: «Nos hiciste, Señor, para ti, y nuestro corazón está inquieto hasta que descanse en ti» (Confesiones I,1). El trono del que habla Kempis es ese lugar que nada más logra llenar." }
        ],
        a: "¿Qué ocupa el centro de mi día cuando nadie me ve?" },
      { t: "Cuando Él está y cuando parece ausente",
        p: ["Con Jesús presente todo es bueno y nada parece difícil; cuando parece ausente, todo pesa. Pero basta una palabra suya para que el alma se consuele.",
            "Kempis lo dice con fuerza: encontrar a Jesús es encontrar un tesoro por encima de todo bien. El más pobre del mundo es el que vive sin Él, y el más rico, el que vive en su gracia."],
        refs: "Mt 13,44",
        ecos: [
          { tipo: "Biblia", t: "El salmista", d: "El Salmo 73 lo dice a su manera: estando con Dios, nada en la tierra le hace falta; aunque el cuerpo y el corazón desfallezcan, Dios es su porción para siempre (Sal 73,25-26)." },
          { tipo: "Historia", t: "Un tesoro enterrado", d: "En tiempos de Jesús, lo más seguro para guardar algo valioso era esconderlo bajo tierra, como hace el siervo de la parábola de los talentos (Mt 25,25). Por eso no era raro que alguien, trabajando un campo, encontrara un tesoro que otro había olvidado." }
        ],
        a: "Pocas veces sentimos esa riqueza. Pero el tesoro sigue ahí, aunque esté escondido en el campo." },
      { t: "El arte de tratar con Él",
        p: ["Para Kempis, saber conversar con Jesús es un gran arte, y saber conservarlo, una gran sabiduría. No da técnicas: da actitudes. Sé humilde y pacífico, y Jesús estará contigo; vive con devoción y en calma, y se quedará.",
            "Como toda amistad, esta se construye con tiempo, confianza y conversación. María, sentada a los pies de Jesús, no hacía nada especial: lo escuchaba. Jesús dijo que había elegido la mejor parte."],
        refs: "Lc 10,38-42",
        ecos: [
          { tipo: "Santos", t: "Santa Teresa y la oración", d: "Definió la oración mental como «tratar de amistad, estando muchas veces tratando a solas con quien sabemos nos ama» (Libro de la Vida 8,5). El Catecismo retoma esta definición (CCE 2709)." },
          { tipo: "Santos", t: "El campesino de Ars", d: "San Juan María Vianney, párroco de Ars, en Francia, se fijó en un campesino que pasaba largos ratos ante el sagrario. Cuando le preguntó qué hacía, respondió: «Yo lo miro y Él me mira» (CCE 2715). Es la amistad que ya no necesita muchas palabras." }
        ],
        a: "Orar puede ser tan sencillo como platicar con un amigo que ya me conoce." },
      { t: "Amar a todos en Él",
        p: ["Darle a Jesús el primer lugar no nos aísla. Kempis pide amar a los amigos y a los enemigos por amor a Jesús, y rezar para que todos lo conozcan. También advierte no querer ser el centro del cariño de nadie: ese lugar es de Dios.",
            "El capítulo termina con una promesa para los días grises: la gracia viene y parece irse, pero después del invierno llega el verano, después de la noche el día y después de la tormenta la calma. Ahí empezará nuestra próxima sesión."],
        refs: "Jn 15,12.17 · Mt 5,44",
        ecos: [
          { tipo: "Santos", t: "Elredo de Rievaulx", d: "Abad cisterciense inglés del siglo XII. Escribió un diálogo sobre la amistad espiritual que empieza diciendo a su amigo: aquí estamos tú y yo, y espero que Cristo esté entre nosotros como un tercero. Para él, la amistad humana empieza, crece y llega a su plenitud en Cristo." }
        ],
        a: "La amistad con Jesús no me encierra: me enseña a querer mejor a los demás." }
    ],
    dinamica: {
      duracion: 70,
      agenda: [
        { min: 5,  t: "Apertura en silencio", d: "Dos minutos de silencio total. Luego se lee en voz alta Juan 11,28-29 y se plantea la pregunta de la sesión: ¿cómo se vive una amistad con alguien a quien no veo?" },
        { min: 20, t: "Exposición por puntos", d: "Recorrer los 7 puntos de la guía. Idea central primero; por cada punto, un ejemplo de la amistad humana y uno de los textos de «Para profundizar»." },
        { min: 30, t: "Grupos pequeños", d: "Grupos de 3 o 4 personas. Tres rondas de 10 minutos, una pregunta a la vez." },
        { min: 10, t: "Puesta en común", d: "Cada grupo comparte una sola frase o descubrimiento. Nada de lo personal sale del grupo sin permiso." },
        { min: 5,  t: "Cierre con oración", d: "Leer despacio Juan 15,9-17, «los llamo amigos». Un minuto de silencio para decirle a Jesús algo como se le dice a un amigo. Rezar juntos el Salmo 16 (15), «tú eres mi bien», y terminar con un Padre Nuestro." }
      ],
      rondas: [
        { t: "Me llama", sub: "Puntos 1 y 2", min: 10, q: [
          "María se levantó en cuanto supo que Jesús la llamaba. Recuerda un momento en que sentiste a Jesús cerca, o que te llamaba: ¿qué estaba pasando?",
          "Dios hablaba con Moisés como un hombre habla con su amigo. ¿Me sale hablarle así a Jesús, o lo siento más lejano: un juez, un maestro, alguien a quien acudo solo en apuros?" ] },
        { t: "Dónde me apoyo", sub: "Puntos 3 a 5", min: 10, q: [
          "Santa Teresa escribió: «todo se pasa, Dios no se muda». Cuando las cosas se mueven, ¿en qué o en quién me apoyo primero?",
          "San Agustín habla de un corazón inquieto. ¿Le estoy pidiendo a alguien, o a algo, lo que solo Dios me puede dar?" ] },
        { t: "La amistad en lo cotidiano", sub: "Puntos 6 y 7", min: 10, q: [
          "Piensa en tu mejor amistad: ¿qué la hace real? ¿Qué de eso vivo con Jesús y qué no?",
          "Elredo hablaba de amistades donde Cristo está presente como un tercero. ¿Tengo alguna amistad así, o una en la que me gustaría que Él estuviera?" ] }
      ],
      reglas: ["Cada quien habla sin ser interrumpido.", "Se vale decir «paso».", "Escuchar sin aconsejar ni corregir.", "Lo que se comparte en el grupo se queda en el grupo."]
    },
    preparar: {
      pregunta: "Si tuviera que describir mi relación con Jesús como una amistad, ¿cómo sería hoy?",
      practica: "Lee el capítulo VIII y quédate con una frase que te toque.",
      cierre: "Llévala a la sesión: puede ser tu punto de partida en la conversación."
    },
    semana: {
      pregunta: "Si Jesús me llama amigo, ¿qué lugar real le estoy dando en mis días?",
      practica: "Una vez al día, cuéntale a Jesús algo de tu día, bueno o malo, antes de contárselo a nadie más. Sin fórmulas: como se le habla a un amigo.",
      cierre: "Cada noche pregúntate: ¿dónde estuviste hoy conmigo? Trae una frase de lo que descubriste a la próxima sesión."
    },
    audios: [
      { t: "Salmo 16 (15)", d: "«Tú eres mi bien»", src: "/audio/salmo-16.mp3", dur: "1:10" }
    ],
    materiales: [
      { tipo: "Libro", h: "Lee los capítulos", t: "Imitación de Cristo", d: "Texto completo en textos.info, gratis. Lee en el Libro II los capítulos VII, «Del amor de Jesús sobre todas las cosas», y VIII, «De la familiar amistad con Jesús». Son cortos.", url: "https://www.textos.info/tomas-de-kempis/imitacion-de-cristo/ebook" }
    ],
    biblia: [
      ["Jn 11,28-29", "El Maestro está aquí y te llama"], ["Jn 15,9-17", "Los llamo amigos"],
      ["Ex 33,11", "Cara a cara, como un amigo"], ["Is 41,8", "Abraham, mi amigo"],
      ["Sal 73,25-26", "Dios es mi porción"], ["Sal 16", "Tú eres mi bien"],
      ["Is 40,6-8", "Toda carne es hierba"], ["Mt 6,21", "Donde está tu tesoro"],
      ["Mt 13,44", "El tesoro escondido"], ["Lc 10,38-42", "María a los pies de Jesús"],
      ["Mt 5,44", "Amen a sus enemigos"]
    ]
  }
};
