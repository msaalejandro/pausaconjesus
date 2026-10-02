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
    ]
  }
};
