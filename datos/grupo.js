/* =====================================================================
   GRUPO: lo que hace distinto a cada grupo (nombre, ritmo, dirección,
   conexión con su hoja de Google) y su CALENDARIO de sesiones.
   Para programar una sesión basta agregar una línea al calendario con la
   fecha y la clave de la lección (de datos/lecciones.js). Si todavía no hay
   lección, se pone leccion: null y aparece como «Tema por definir».
   ===================================================================== */
window.GRUPO = {
  nombre: "Pausa con Jesús",
  subtitulo: "Guía para sesiones grupales",
  ritmo: "Un viernes sí y uno no.",
  // Para «Conoce el grupo». Mientras estén vacíos no se muestran.
  hora: "",          // p. ej. "A las 8 de la noche."
  lugar: "",         // p. ej. "Capilla de …, Querétaro."
  // «Quiero ir a la próxima»: abre WhatsApp con un mensaje ya escrito. El número no se muestra en la página.
  // Con whatsapp vacío y enlaceGrupo vacío, WhatsApp pide elegir a quién enviarlo.
  contacto: { whatsapp: "", enlaceGrupo: "" },
  url: "https://pausaconjesus.com/",
  api: "https://automatizaciones.restrategia.com/webhook/pausa",
  calendario: [
    { fecha: "2026-10-02", leccion: "el-desierto" },
    { fecha: "2026-10-16", leccion: "la-amistad-con-jesus" },
    { fecha: "2026-11-06", leccion: "la-amistad-que-ilumina", id: "s-2026-10-25" },  // se recorrió del domingo 25 de octubre; conserva su id para no perder reflexiones ni enlaces
    { fecha: "2026-11-20", leccion: "la-amistad-que-se-entrega" }
  ]
};
