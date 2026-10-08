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
  url: "https://pausaconjesus.com/",
  api: "https://restrategia-n8n.fcwppp.easypanel.host/webhook/pausa",
  calendario: [
    { fecha: "2026-10-02", leccion: "el-desierto" },
    { fecha: "2026-10-16", leccion: "la-amistad-con-jesus" }
  ]
};
