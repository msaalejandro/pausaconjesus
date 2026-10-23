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
    videos: [
      { t: "El desierto", tipo: "Cortometraje · Pausa con Jesús", d: "Una pausa de unos minutos para volver a la reflexión del desierto: dejar los apoyos de siempre y escuchar a Dios hablar al corazón.", yt: "wuQYBxMROLw", destacarHasta: "2026-10-23" }
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
    fuente: "Imitación de Cristo · Libro II, capítulos VII, VIII y XI",
    categoria: "Vida interior",
    lectura: "18 min de lectura",
    idea: "En el desierto descubrimos que necesitamos a Dios. Ahora descubrimos que Jesús nos llama amigos, y que su amistad es incondicional: no se gana y no se retira, ni siquiera cuando le fallamos. Pero no es barata. Ser su amigo es compartir su vida, también su cruz, y por eso, como decía santa Teresa, tiene tan pocos amigos.",
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
      { t: "El amigo que no se va",
        p: ["El capítulo VII empieza con una comparación sencilla: todo lo creado cambia y se nos escapa de las manos, mientras que Jesús es fiel y permanece. Toda carne es hierba, recuerda Kempis con Isaías. Y promete: cuando todos se vayan, Él no te dejará.",
            "Su fidelidad no depende de la nuestra. En el huerto, Jesús todavía llama «amigo» a Judas, que llega a entregarlo. Y a Pedro, que lo negó tres veces, no le pide explicaciones: le pregunta tres veces si lo ama y le confía a los suyos. San Pablo lo resume: Cristo murió por nosotros cuando todavía éramos pecadores."],
        refs: "Is 40,6-8 · Mt 26,50 · Jn 21,15-17 · Rm 5,8",
        ecos: [
          { tipo: "Biblia", t: "«Amigo, ¿a qué vienes?»", d: "Es lo que Jesús dice a Judas cuando llega con los guardias (Mt 26,50). No lo llama traidor: lo llama amigo. Y en la orilla del lago, después de la resurrección, prepara pescado asado para los mismos que lo habían abandonado (Jn 21,9-13)." },
          { tipo: "Santos", t: "Santa Teresa de Jesús", d: "Entre sus papeles se encontró un breve poema que dice: «Nada te turbe, nada te espante; todo se pasa, Dios no se muda». Es el mismo contraste de Kempis entre lo que cambia y Aquel que permanece. Y concluye: «Solo Dios basta»." }
        ],
        a: "Mi fidelidad puede fallar; la suya no. No tengo que ganarme de nuevo su amistad cada vez que caigo: solo volver." },
      { t: "Un corazón con un solo trono",
        p: ["Jesús, dice Kempis, no comparte el centro: quiere reinar en el corazón como en su casa. Cuando hacemos espacio, Él viene a vivir dentro.",
            "Y lo resume en una regla: quien busca a Jesús en todas las cosas lo encuentra; quien se busca a sí mismo, solo encuentra su propio daño. Es lo que Jesús decía: donde está tu tesoro, ahí está tu corazón."],
        refs: "Mt 6,21",
        ecos: [
          { tipo: "Santos", t: "San Agustín", d: "Abre sus Confesiones con una frase que resume este punto: «Nos hiciste, Señor, para ti, y nuestro corazón está inquieto hasta que descanse en ti» (Confesiones I,1). El trono del que habla Kempis es ese lugar que nada más logra llenar." }
        ],
        a: "¿Qué ocupa el centro de mi día cuando nadie me ve?" },
      { t: "Un tesoro que cuesta todo",
        p: ["Kempis lo dice con fuerza: encontrar a Jesús es encontrar un tesoro por encima de todo bien. El más pobre del mundo es el que vive sin Él, y el más rico, el que vive en su gracia. Jesús lo contó en una parábola: un hombre encuentra un tesoro en un campo y, lleno de alegría, vende todo lo que tiene para comprarlo.",
            "Ahí aparece el precio. Un joven rico le pregunta a Jesús qué le falta, y el Evangelio dice que Jesús lo miró con amor antes de responderle: deja lo que tienes y sígueme. El joven se fue triste, porque tenía muchos bienes. El amor de Jesús fue incondicional; la respuesta del joven, no."],
        refs: "Mt 13,44 · Mc 10,17-22",
        ecos: [
          { tipo: "Historia", t: "Un tesoro enterrado", d: "En tiempos de Jesús, lo más seguro para guardar algo valioso era esconderlo bajo tierra, como hace el siervo de la parábola de los talentos (Mt 25,25). Por eso no era raro que alguien, trabajando un campo, encontrara un tesoro que otro había olvidado." },
          { tipo: "Magisterio", t: "Benedicto XVI", d: "En la misa de inicio de su pontificado, en 2005, habló del miedo a que Cristo nos quite algo si lo dejamos entrar del todo, y respondió: «¡No tengáis miedo de Cristo! Él no quita nada, y lo da todo»." }
        ],
        a: "El precio no se paga para que Jesús me quiera: ya me quiere. Se paga porque yo lo quiero a Él, y lo que dejo vale menos que lo que encuentro." },
      { t: "«Por eso tienes tan pocos amigos»",
        p: ["Se cuenta que santa Teresa, en uno de sus viajes para fundar conventos, cayó al agua y al lodo cuando el carro cruzaba un río. Quejándose con el Señor, oyó: «Así trato yo a mis amigos». Y ella, con su buen humor de siempre, respondió: «¡Por eso tienes tan pocos!». La anécdota viene de la tradición, no de sus escritos, pero retrata bien su trato con Jesús: libre, confiado y sincero.",
            "Kempis dice lo mismo sin humor en el capítulo XI: Jesús tiene muchos que lo siguen hasta partir el pan, pero pocos hasta beber el cáliz de su pasión; muchos que lo aman mientras reciben consuelos, y pocos que lo aman por Él mismo. Cuando muchos lo dejaron, Jesús preguntó a los Doce si también querían irse. Pedro respondió: «Señor, ¿a quién iremos? Tú tienes palabras de vida eterna»."],
        refs: "Jn 6,66-68 · Mt 20,22 · Lc 9,23",
        ecos: [
          { tipo: "Santos", t: "Teresa de Jesús, 15 de octubre", d: "Carmelita de Ávila (1515-1582). Reformó el Carmelo y fundó diecisiete monasterios, viajando en carro por caminos difíciles y a menudo enferma. Es doctora de la Iglesia desde 1970 y su fiesta es el 15 de octubre, la víspera de esta sesión." },
          { tipo: "Biblia", t: "¿Pueden beber el cáliz?", d: "Santiago y Juan le pidieron a Jesús los primeros lugares en su Reino, y Él les preguntó si podían beber el cáliz que Él iba a beber (Mt 20,22). Dijeron que sí sin saber lo que pedían; años después, Santiago fue el primero de los Doce en morir por Él (Hch 12,2)." }
        ],
        a: "La pregunta de fondo de esta sesión: ¿busco a Jesús por lo que me da, o por quien es?" },
      { t: "Cuidar la amistad",
        p: ["Para Kempis, saber conversar con Jesús es un gran arte, y saber conservarlo, una gran sabiduría. No da técnicas: da actitudes. Sé humilde y pacífico, y Jesús estará contigo. Como toda amistad, esta se cuida con tiempo, confianza y conversación, como María a los pies de Jesús, que solo lo escuchaba.",
            "Y no nos aísla: Kempis pide amar a los amigos y a los enemigos por amor a Jesús. El capítulo VIII termina con una promesa para los días grises: la gracia viene y parece irse, pero después del invierno llega el verano, y después de la noche, el día. Ahí empezará nuestra próxima sesión: ¿qué pasa cuando no siento a Dios?"],
        refs: "Lc 10,38-42 · Jn 15,12.17",
        ecos: [
          { tipo: "Santos", t: "Santa Teresa y la oración", d: "Definió la oración mental como «tratar de amistad, estando muchas veces tratando a solas con quien sabemos nos ama» (Libro de la Vida 8,5). El Catecismo retoma esta definición (CCE 2709)." },
          { tipo: "Santos", t: "El campesino de Ars", d: "San Juan María Vianney, párroco de Ars, en Francia, se fijó en un campesino que pasaba largos ratos ante el sagrario. Cuando le preguntó qué hacía, respondió: «Yo lo miro y Él me mira» (CCE 2715). Es la amistad que ya no necesita muchas palabras." },
          { tipo: "Santos", t: "Elredo de Rievaulx", d: "Abad cisterciense inglés del siglo XII. Escribió un diálogo sobre la amistad espiritual que empieza diciendo a su amigo: aquí estamos tú y yo, y espero que Cristo esté entre nosotros como un tercero. Para él, la amistad humana empieza, crece y llega a su plenitud en Cristo." }
        ],
        a: "Orar puede ser tan sencillo como platicar con un amigo que ya me conoce. Y esa amistad me enseña a querer mejor a los demás." }
    ],
    dinamica: {
      duracion: 70,
      agenda: [
        { min: 5,  t: "Apertura en silencio", d: "Dos minutos de silencio total. Luego se lee en voz alta Juan 11,28-29 y se plantean las dos caras de la sesión: Jesús nos llama amigos sin condiciones, y esa amistad tiene un precio. ¿Cómo se vive una amistad así con alguien a quien no veo?" },
        { min: 20, t: "Exposición por puntos", d: "Dos movimientos: la amistad incondicional (puntos 1 a 4) y su precio (puntos 5 a 7). Por cada punto, un ejemplo de la amistad humana y uno de los textos de «Para profundizar». La víspera fue la fiesta de santa Teresa: buen pretexto para contar su anécdota en el punto 6." },
        { min: 30, t: "Grupos pequeños", d: "Grupos de 3 o 4 personas. Tres rondas de 10 minutos, una pregunta a la vez." },
        { min: 10, t: "Puesta en común", d: "Cada grupo comparte una sola frase o descubrimiento. Nada de lo personal sale del grupo sin permiso." },
        { min: 5,  t: "Cierre con oración", d: "Leer despacio Juan 15,9-17, «los llamo amigos». Un minuto de silencio para decirle a Jesús algo como se le dice a un amigo. Rezar juntos el Salmo 16 (15), que llama al Señor «mi copa»: el mismo cáliz del punto 6. Terminar con un Padre Nuestro." }
      ],
      rondas: [
        { t: "Me llama", sub: "Puntos 1 y 2", min: 10, q: [
          "María se levantó en cuanto supo que Jesús la llamaba. Recuerda un momento en que sentiste a Jesús cerca, o que te llamaba: ¿qué estaba pasando?",
          "Dios hablaba con Moisés como un hombre habla con su amigo. ¿Me sale hablarle así a Jesús, o lo siento más lejano: un juez, un maestro, alguien a quien acudo solo en apuros?" ] },
        { t: "Un amor que no se retira", sub: "Puntos 3 y 4", min: 10, q: [
          "Jesús llamó «amigo» a Judas, y a Pedro, después de que lo negó, solo le preguntó si lo amaba. ¿Me cuesta creer que su amistad sigue en pie cuando le fallo?",
          "Santa Teresa escribió: «todo se pasa, Dios no se muda». ¿Le estoy pidiendo a alguien, o a algo, lo que solo Dios me puede dar?" ] },
        { t: "El precio de la amistad", sub: "Puntos 5 a 7", min: 10, q: [
          "Santa Teresa le reclamó a Jesús: «por eso tienes tan pocos amigos». ¿Qué me ha costado, o me costaría hoy, ser de verdad su amigo?",
          "Kempis dice que muchos siguen a Jesús hasta partir el pan y pocos hasta beber el cáliz. ¿Hasta dónde lo sigo yo? ¿Lo busco por lo que me da, o por quien es?" ] }
      ],
      reglas: ["Cada quien habla sin ser interrumpido.", "Se vale decir «paso».", "Escuchar sin aconsejar ni corregir.", "Lo que se comparte en el grupo se queda en el grupo."]
    },
    preparar: {
      pregunta: "Si tuviera que describir mi relación con Jesús como una amistad, ¿cómo sería hoy?",
      practica: "Lee el capítulo VIII y, si puedes, el XI, «Cuán pocos son los que aman la cruz de Cristo». Quédate con una frase que te toque.",
      cierre: "Llévala a la sesión: puede ser tu punto de partida en la conversación."
    },
    semana: {
      pregunta: "Si Jesús me llama amigo, ¿qué lugar real le estoy dando en mis días, y qué estoy dispuesto a que me cueste?",
      practica: "Una vez al día, cuéntale a Jesús algo de tu día, bueno o malo, antes de contárselo a nadie más. Y elige en la quincena un gesto que te cueste —un perdón, una renuncia, una visita— y ofréceselo como se hace algo por un amigo.",
      cierre: "Cada noche pregúntate: ¿dónde estuviste hoy conmigo? Trae una frase de lo que descubriste a la próxima sesión."
    },
    audios: [
      { t: "Salmo 16 (15)", d: "«Tú eres mi bien»", src: "/audio/salmo-16.mp3", dur: "1:10" }
    ],
    videos: [
      { t: "La amistad con Jesús", tipo: "Cortometraje · Pausa con Jesús", d: "Una pausa en imágenes para preparar la sesión y volver a la reflexión sobre nuestra amistad con Jesús.", yt: "pK3men65aus", destacarHasta: "2026-10-30" }
    ],
    materiales: [
      { tipo: "Libro", h: "Lee los capítulos", t: "Imitación de Cristo", d: "Texto completo en textos.info, gratis. Lee en el Libro II los capítulos VII, «Del amor de Jesús sobre todas las cosas», VIII, «De la familiar amistad con Jesús», y XI, «Cuán pocos son los que aman la cruz de Cristo». Son cortos.", url: "https://www.textos.info/tomas-de-kempis/imitacion-de-cristo/ebook" }
    ],
    biblia: [
      ["Jn 11,28-29", "El Maestro está aquí y te llama"], ["Jn 15,9-17", "Los llamo amigos"],
      ["Ex 33,11", "Cara a cara, como un amigo"], ["Is 41,8", "Abraham, mi amigo"],
      ["Is 40,6-8", "Toda carne es hierba"], ["Mt 26,50", "«Amigo, ¿a qué vienes?»"],
      ["Jn 21,15-17", "¿Me amas?"], ["Rm 5,8", "Cuando aún éramos pecadores"],
      ["Mt 6,21", "Donde está tu tesoro"], ["Mt 13,44", "El tesoro escondido"],
      ["Mc 10,17-22", "El joven rico"], ["Jn 6,66-68", "¿A quién iremos?"],
      ["Mt 20,22", "¿Pueden beber el cáliz?"], ["Lc 9,23", "Tome su cruz y sígame"],
      ["Lc 10,38-42", "María a los pies de Jesús"], ["Sal 16", "Tú eres mi bien, mi copa"]
    ]
  },

  "la-amistad-que-ilumina": {
  "tema": "La amistad que ilumina",
  "fuente": "Evangelio · Juan 8,12 y Mateo 5,14-16",
  "categoria": "Vida interior",
  "lectura": "12 min de lectura",
  "idea": "Después del desierto y del encuentro con Jesús como amigo, descubrimos cómo su amistad transforma nuestra vida: recibimos su luz, aprendemos a mirar con Él y compartimos su amor en lo cotidiano.",
  "preguntaCentral": "¿Qué empieza a cambiar en mi manera de ver y de vivir cuando dejo que Jesús sea mi amigo?",
  "objetivo": "Reconocer a Jesús como la luz que recibimos y permitir que su amistad transforme nuestra mirada, nuestras decisiones y nuestro trato con los demás.",
  "lecturaBase": "Juan 8,12 y Mateo 5,14-16",
  "puntos": [
    {
      "id": "P1",
      "t": "Una luz nos encuentra",
      "refs": "Jn 1,4-9 · Ex 13,21-22",
      "p": [
        "En el desierto, la columna de fuego permitía al pueblo avanzar de noche. La oscuridad seguía alrededor, pero Dios ofrecía una presencia que orientaba el camino.",
        "Quizá todavía cargamos preguntas, dificultades o incertidumbre. La amistad con Jesús puede comenzar precisamente ahí, cuando le permitimos acompañarnos sin exigirnos haber resuelto primero toda nuestra vida.",
        "En el prólogo de Juan, la luz procede del Verbo. Antes de preguntarnos cuánto estamos haciendo por Dios, podemos reconocer cómo se ha acercado Él a nosotros."
      ],
      "a": "Reconoce con gratitud una forma concreta en la que has recibido ayuda para caminar.",
      "pregunta": "¿Recuerdas una persona, una palabra o un momento que te ayudó a encontrar dirección cuando no sabías cómo seguir?",
      "transicion": "Si Jesús se acerca para acompañarnos, ¿qué significa dejar que sea Él quien nos oriente?",
      "ecos": [
        {
          "tipo": "Magisterio",
          "t": "Lumen fidei, 4",
          "d": "Francisco explica que la fe nace del encuentro con Dios y con un amor que nos precede. Ese encuentro abre una nueva mirada sobre nuestra existencia."
        }
      ]
    },
    {
      "id": "P2",
      "t": "El amigo nos enseña a mirar",
      "refs": "Jn 8,12 · Jn 9,35-41",
      "p": [
        "La amistad nos permite conocer la mirada del otro: qué considera valioso, qué le duele y qué espera. En nuestra relación con Jesús también hay un aprendizaje: acercarnos a las personas desde lo que Él nos revela del Padre.",
        "En Juan 9, el encuentro del hombre que había sido ciego culmina en reconocer a Jesús y creer en Él. La visión física y el descubrimiento de quién es Jesús forman parte del relato, pero no son idénticos.",
        "Ser iluminados por Cristo implica revisar nuestros criterios. Quizá hemos medido a alguien por su utilidad, sus errores, su apariencia o su éxito. Conocer a Jesús nos invita a descubrir qué estamos dejando de ver."
      ],
      "a": "Detén un juicio apresurado y escucha antes de sacar una conclusión.",
      "pregunta": "¿Sobre qué persona o situación necesitas pedirle a Jesús que te ayude a mirar de otra manera?",
      "transicion": "Aprender a mirar también supone reconocer que nuestra propia mirada necesita cambiar.",
      "ecos": [
        {
          "tipo": "Padres de la Iglesia",
          "t": "San Agustín · Tratado sobre Juan 34,8-9",
          "d": "Agustín relaciona la promesa de la luz con seguir a Cristo y necesitar su ayuda para hacerlo. Es una interpretación espiritual que invita a caminar con Él."
        }
      ]
    },
    {
      "id": "P3",
      "t": "Dejarnos iluminar",
      "refs": "Mt 6,19-24",
      "p": [
        "Jesús habla del ojo como lámpara del cuerpo dentro de una enseñanza que incluye el tesoro, el corazón y el servicio a Dios o al dinero. Nuestra manera de mirar está relacionada con aquello a lo que damos valor.",
        "Podemos preguntarnos qué está orientando nuestras decisiones. El deseo de reconocimiento, la comparación o el miedo pueden ocupar tanto espacio que terminamos viendo todo desde ellos.",
        "La amistad con Jesús abre un espacio para hablar con verdad: reconocer lo que nos mueve, lo que nos cuesta y lo que necesita conversión. Esta es una aplicación pastoral del pasaje; no significa que cualquier confusión, tristeza o falta de emoción religiosa sea consecuencia de una culpa personal."
      ],
      "a": "Lleva a la oración una decisión concreta y pregúntate qué estás tratando de proteger o conseguir con ella.",
      "pregunta": "¿Qué suele pesar más en tus decisiones: la aprobación, la seguridad, el miedo, el amor, la confianza…?",
      "transicion": "Cuando permitimos que esa luz transforme nuestro interior, empieza a notarse en nuestra manera de vivir.",
      "ecos": [
        {
          "tipo": "Contexto bíblico",
          "t": "La mirada y el tesoro",
          "d": "Conviene leer Mateo 6,22-23 dentro de Mateo 6,19-24: la lámpara del cuerpo aparece entre la enseñanza sobre el tesoro y la advertencia sobre servir a dos señores."
        }
      ]
    },
    {
      "id": "P4",
      "t": "Una amistad que se vuelve visible",
      "refs": "Mt 5,14-16",
      "p": [
        "La lámpara está puesta para alumbrar a quienes se encuentran en la casa. Jesús vincula la luz de los discípulos con unas obras que llevan a reconocer al Padre.",
        "Podemos comenzar por nuestra propia casa: las relaciones y responsabilidades cercanas. ¿Qué ocurre con las personas cuando convivimos con ellas? ¿Encuentran escucha, honestidad, paciencia y disposición para ayudar?",
        "Recibimos de Cristo la luz que compartimos. Su amistad puede hacerse visible al cumplir una promesa, reconocer un error o tratar con dignidad a una persona que otros ignoran."
      ],
      "a": "Elige una respuesta concreta de escucha, honestidad, paciencia o reparación en una relación cercana.",
      "pregunta": "¿En qué relación cercana podría hacerse más visible tu amistad con Jesús?",
      "transicion": "Las obras que iluminan tienen una forma reconocible: el amor al otro.",
      "ecos": [
        {
          "tipo": "Catecismo",
          "t": "CCE 748 · Una luz recibida",
          "d": "El Catecismo explica que la Iglesia recibe de Cristo la luz que comunica y la compara con la luna que refleja la luz del sol. Nuestra aplicación personal parte de esa dependencia de Él."
        }
      ]
    },
    {
      "id": "P5",
      "t": "La luz toma forma de amor",
      "refs": "Is 58,6-10 · 1 Jn 2,9-11",
      "p": [
        "Isaías relaciona la luz con compartir el pan, acoger y liberar de la opresión. La primera carta de Juan vincula permanecer en la luz con amar al hermano.",
        "Podemos disfrutar mucho una reunión o una lectura espiritual; la pregunta posterior es cómo ese encuentro afecta nuestra disponibilidad para los demás.",
        "El amor puede tomar una forma sencilla y exigente: dedicar tiempo, atender una necesidad que habíamos ignorado, reparar un daño o acompañar a alguien sin pretender resolverle toda la vida. Ayudar requiere escuchar qué necesita la otra persona."
      ],
      "a": "Escoge una ayuda posible para esta semana, proporcionada y respetuosa de lo que la otra persona necesita.",
      "pregunta": "¿Qué necesidad cercana has visto, pero todavía no has atendido?",
      "transicion": "Para sostener esa disponibilidad también necesitamos cuidar nuestra relación con Jesús.",
      "ecos": [
        {
          "tipo": "Magisterio",
          "t": "Benedicto XVI · Ángelus del 6 de febrero de 2011",
          "d": "Relaciona Isaías 58 con Mateo 5: unidos a Cristo, los discípulos pueden comunicar el amor de Dios en medio de la indiferencia y del egoísmo."
        }
      ]
    },
    {
      "id": "P6",
      "t": "Cuidar el aceite",
      "refs": "Mt 25,1-13",
      "p": [
        "Las diez jóvenes esperan al esposo. Todas se adormecen; la diferencia es que cinco han llevado aceite de reserva. El centro de la parábola es la preparación para el encuentro.",
        "Desde ahí podemos relacionarla con la amistad que venimos trabajando: hay disposiciones que se cultivan con tiempo y no pueden improvisarse en el último momento.",
        "Francisco propone cuidar la vida interior mediante el silencio, la escucha de la Palabra y el tiempo dedicado al Señor. Seguimos esa aplicación pastoral; no afirmamos que el aceite tenga un único significado simbólico obligatorio.",
        "Cuidar esta relación puede incluir oración, sacramentos, comunidad y servicio. Cada uno puede reconocer qué espacio necesita recuperar, sin medir la cercanía con Dios por la intensidad de sus emociones."
      ],
      "a": "Elige una práctica pequeña y sostenible y un momento concreto para realizarla.",
      "pregunta": "¿Qué espacio de tu relación con Jesús quisieras cuidar con mayor constancia?",
      "transicion": "Esa amistad nos dispone a seguirlo también cuando amar se vuelve difícil.",
      "ecos": [
        {
          "tipo": "Aplicación pastoral",
          "t": "Francisco · Ángelus del 12 de noviembre de 2023",
          "d": "El comentario de Francisco invita a cuidar con constancia la vida interior, dando tiempo al silencio, a la Palabra y al Señor. La preparación para encontrarse con Jesús sigue siendo el centro."
        }
      ]
    },
    {
      "id": "P7",
      "t": "Seguir la luz hasta la entrega",
      "refs": "Jn 12,24-36 · Jn 15,13-15",
      "p": [
        "En Juan 12 aparecen, dentro de un mismo desarrollo, el grano que muere para dar fruto, el anuncio de Jesús elevado y la invitación a caminar en la luz. Esta cercanía ofrece un puente bíblico hacia la siguiente sesión sobre la Cruz.",
        "Aprender a amar como Jesús puede pedirnos tiempo, renuncias, reconciliación y fidelidad cuando desaparece la comodidad inicial.",
        "El mismo Jesús que llama amigos a sus discípulos habla de entregar la vida por ellos. En la próxima sesión contemplaremos con mayor profundidad qué nos revela su Cruz sobre ese amor.",
        "Seguir a Jesús no significa buscar el sufrimiento ni permanecer en una situación de violencia. La reflexión se dirige a la entrega amorosa y al seguimiento."
      ],
      "a": "Reconoce un paso posible de generosidad, sin imponerte una promesa pública.",
      "pregunta": "¿Qué te cuesta entregar cuando intentas amar de verdad?",
      "transicion": "Ahora vamos a conversar sobre lo que este recorrido toca en nuestra vida.",
      "ecos": [
        {
          "tipo": "Continuidad bíblica",
          "t": "De la luz a la Cruz",
          "d": "Juan 12,24-36 reúne el grano que muere, la elevación de Jesús y la invitación a creer en la luz. Luz y entrega pertenecen al mismo camino de seguimiento."
        }
      ]
    }
  ],
  "preparar": {
    "pregunta": "¿En qué parte de mi vida necesito que Jesús me ayude a ver con más claridad?",
    "practica": "Busca unos minutos de tranquilidad y lee Juan 8,12 y Mateo 5,14-16. Quédate con una palabra o imagen. Recuerda a una persona que te haya ayudado a descubrir algo de la cercanía de Dios.",
    "cierre": "Lleva una pregunta abierta al encuentro. No necesitas preparar una respuesta para compartir."
  },
  "semana": {
    "pregunta": "¿Qué empieza a cambiar en mi manera de ver y de vivir cuando dejo que Jesús sea mi amigo?",
    "practica": "Elige un gesto concreto de amor y un momento para encontrarte con Jesús. Procura que ambos sean posibles dentro de tu vida actual.",
    "cierre": "Vuelve al punto que más te acompañó. Puedes retomar estas preguntas personalmente o con alguien de confianza."
  },
  "dinamica": {
    "duracion": 60,
    "grupos": "En grupos de 3 a 5 personas. Conversen con calma; cada quien puede compartir hasta donde se sienta cómodo.",
    "agenda": [
      {
        "min": 7,
        "t": "Apertura y lectura",
        "d": "Recuperar el camino del desierto a la amistad con Jesús. Escuchar dos o tres intervenciones y leer Juan 8,12 y Mateo 5,14-16. Los tiempos son una propuesta ajustable."
      },
      {
        "min": 28,
        "t": "Exposición por puntos",
        "d": "Cuatro minutos por punto. Recibir la luz, aprender a mirar, dejarnos transformar, compartir el amor, cuidar la amistad y abrir el paso hacia la Cruz."
      },
      {
        "min": 15,
        "t": "Grupos pequeños",
        "d": "Grupos de 3 a 5 personas. Una sola ronda con cuatro preguntas; se puede pasar una pregunta y escuchar."
      },
      {
        "min": 4,
        "t": "Puesta en común",
        "d": "Una idea voluntaria por grupo. No relatar experiencias personales ajenas. Recoger dos o tres coincidencias sin comentar cada intervención."
      },
      {
        "min": 6,
        "t": "Cierre, oración y puente",
        "d": "Leer Salmo 27,1. Un minuto de silencio: Jesús, ¿qué parte de mi vida quiero poner hoy delante de ti? Rezar juntos y abrir la pregunta hacia la Cruz."
      }
    ],
    "rondas": [
      {
        "t": "La amistad que ilumina",
        "sub": "Puntos 1 a 7",
        "min": 15,
        "q": [
          "¿Qué parte del recorrido se parece más al momento que estás viviendo?",
          "¿Qué te gustaría aprender a mirar de otra manera con Jesús?",
          "¿Dónde podría convertirse esa nueva mirada en un gesto de amor esta semana?",
          "¿Qué te ayudaría a cuidar tu amistad con Él para sostener ese paso?"
        ]
      }
    ],
    "reglas": [
      "Cada quien comparte hasta donde se sienta cómodo.",
      "Se puede pasar una pregunta y simplemente escuchar.",
      "Escuchar sin juzgar ni ofrecer consejos que no se hayan pedido.",
      "Lo personal que alguien comparta se queda en el grupo."
    ]
  },
  "coordinacion": {
    "preparacion": [
      "Lee previamente Juan 8,12; Mateo 5,14-16; Isaías 58,6-10 y Mateo 25,1-13. Para comprender el cierre, revisa Juan 12,24-36.",
      "Intención: ayudar a descubrir cómo la amistad con Jesús transforma nuestra mirada y se expresa en amor concreto.",
      "Recibimos de Cristo la luz que compartimos (CCE 748). Las diez vírgenes hablan de prepararse para el encuentro; el cuidado de la vida interior es una aplicación pastoral.",
      "No interpretes las dificultades de los participantes como falta de fe. Ofrece preguntas y espacio para escuchar. Permite que alguien guarde silencio.",
      "Los 60 minutos y su reparto son una propuesta. Conserva espacio real para la conversación en pequeños grupos."
    ],
    "apertura": [
      "En el desierto reconocimos algunas de las cosas que cargamos y nuestra necesidad de Dios. Después nos encontramos con Jesús ofreciéndonos su amistad.",
      "Hoy queremos preguntarnos qué empieza a cambiar cuando lo dejamos acercarse: cómo vemos nuestra vida, cómo decidimos y cómo tratamos a quienes caminan con nosotros."
    ],
    "preguntaInicial": "¿Recuerdas una ocasión en la que alguien te ayudó a ver con más claridad una situación que no comprendías?",
    "indicacionLectura": "Escucha dos o tres intervenciones. Introduce las lecturas: hay personas cuya cercanía nos ayuda a mirar de otra manera; escuchemos cómo habla Jesús de la luz y qué nos invita a vivir. Lean Juan 8,12 y Mateo 5,14-16 en la Biblia que utilice la comunidad. Deja unos segundos de silencio.",
    "instruccionesGrupos": "Cada quien puede compartir hasta donde se sienta cómodo. También pueden pasar una pregunta y simplemente escuchar. Procuremos comprender a quien habla, sin juzgar ni ofrecer consejos que no nos haya pedido. Lo personal que alguien comparta se queda en el grupo.",
    "puestaComun": "Invita a cada grupo a compartir voluntariamente una idea del tema que les haya ayudado, sin relatar experiencias personales ajenas. Recoge dos o tres coincidencias; no hace falta comentar cada intervención.",
    "cierre": "Hoy hemos recorrido un camino: reconocer la luz que recibimos, permitir que transforme nuestra mirada y compartirla en nuestra manera de amar. Cada uno puede llevarse una pregunta y un paso pequeño para esta semana.",
    "silencio": "Lee Salmo 27,1. Deja un minuto de silencio con esta invitación: Jesús, ¿qué parte de mi vida quiero poner hoy delante de ti?"
  },
  "oracion": [
    "Jesús, amigo nuestro,",
    "gracias por acercarte a nuestra vida.",
    "Enséñanos a reconocer tu presencia,",
    "a mirar con verdad y con misericordia,",
    "y a recibir la ayuda que necesitamos.",
    "Que nuestra amistad contigo",
    "se haga visible en el cuidado de los demás.",
    "Ayúdanos a darte tiempo",
    "y a seguir caminando contigo",
    "también cuando amar nos cueste.",
    "Amén."
  ],
  "oracionPublica": [
    "Jesús, amigo nuestro,",
    "ilumina nuestra mirada.",
    "Ayúdanos a reconocer tu presencia,",
    "a escuchar con atención",
    "y a cuidar a quienes tenemos cerca.",
    "Que el amor que recibimos de ti",
    "encuentre lugar en nuestras decisiones",
    "y en nuestra manera de vivir.",
    "Amén."
  ],
  "puente": "La Cruz: ¿qué descubrimos de la amistad de Jesús cuando contemplamos hasta dónde llega su amor?",
  "audios": [],
  "videos": [],
  "materiales": [
    {
      "tipo": "Biblia",
      "h": "Lee los pasajes",
      "t": "Juan 8,12 y Mateo 5,14-16",
      "d": "Lectura base: busca ambos pasajes en tu Biblia. En el enlace puedes consultar Juan 8; Mateo 5 también está enlazado en las fuentes al final de la guía.",
      "url": "https://bible.usccb.org/bible/john/8",
      "boton": "Abrir Juan 8"
    }
  ],
  "biblia": [
    [
      "Jn 8,12",
      "Jesús, luz del mundo"
    ],
    [
      "Mt 5,14-16",
      "La lámpara que ilumina la casa"
    ],
    [
      "Jn 1,4-9",
      "Recibir la luz y dar testimonio"
    ],
    [
      "Ex 13,21-22",
      "Dios guía en el desierto"
    ],
    [
      "Jn 9,35-41",
      "Reconocer a Jesús y aprender a ver"
    ],
    [
      "Mt 6,19-24",
      "El tesoro y la mirada"
    ],
    [
      "Is 58,6-10",
      "La luz y el amor concreto"
    ],
    [
      "1 Jn 2,9-11",
      "Amar al hermano"
    ],
    [
      "Mt 25,1-13",
      "Prepararse para el encuentro"
    ],
    [
      "Jn 12,24-36",
      "La luz y la entrega"
    ],
    [
      "Jn 15,13-15",
      "Amigos y entrega de la vida"
    ],
    [
      "Sal 27,1",
      "El Señor, luz y salvación"
    ]
  ],
  "notaBiblia": "La lectura base es Juan 8,12 y Mateo 5,14-16. Los demás pasajes son apoyos; no hace falta leerlos todos durante el encuentro.",
  "fuentes": [
    {
      "t": "Biblia · Juan 8",
      "d": "Juan 8,12: Jesús se presenta como luz del mundo.",
      "url": "https://bible.usccb.org/bible/john/8"
    },
    {
      "t": "Biblia · Mateo 5",
      "d": "Mateo 5,14-16: lámpara, obras y gloria del Padre.",
      "url": "https://bible.usccb.org/bible/matthew/5"
    },
    {
      "t": "Biblia · Juan 12",
      "d": "Juan 12,24-36: grano, elevación y luz; puente hacia la Cruz.",
      "url": "https://bible.usccb.org/bible/john/12"
    },
    {
      "t": "Catecismo de la Iglesia Católica · 748",
      "d": "La Iglesia recibe de Cristo la luz que comunica.",
      "url": "https://www.vatican.va/archive/catechism_sp/p1s2c3a9_sp.html"
    },
    {
      "t": "Francisco · Lumen fidei, 4",
      "d": "29 de junio de 2013. El encuentro con Dios abre una mirada transformada.",
      "url": "https://www.vatican.va/content/francesco/es/encyclicals/documents/papa-francesco_20130629_enciclica-lumen-fidei.html"
    },
    {
      "t": "San Agustín · Tratados sobre Juan 34,8-9",
      "d": "Extracto reproducido por las Obras Misionales Pontificias, 16 de marzo de 2023. Interpretación patrística sobre la luz y el seguimiento.",
      "url": "https://www.ppoomm.va/es/documentazioni/documenti-pum/meditaciones-misioneras/cuaresma-2023/cuarto-domingo-cuaresma-2023.html"
    },
    {
      "t": "Benedicto XVI · Ángelus del 6 de febrero de 2011",
      "d": "Mateo 5, Isaías 58 y el testimonio cristiano.",
      "url": "https://www.vatican.va/content/benedict-xvi/es/angelus/2011/documents/hf_ben-xvi_ang_20110206.html"
    },
    {
      "t": "Francisco · Ángelus del 12 de noviembre de 2023",
      "d": "Preparación para el encuentro y cuidado de la vida interior: aplicación pastoral de las diez vírgenes.",
      "url": "https://www.vatican.va/content/francesco/es/angelus/2023/documents/20231112-angelus.html"
    }
  ]
}
};
