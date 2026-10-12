# Peregrinos por Querétaro

Sección pública de [Pausa con Jesús](https://pausaconjesus.com/iglesias/) para el grupo que visita iglesias católicas de los **municipios de Querétaro y Corregidora**.

## Archivos

- `index.html`: página pública (agenda, inventario, bitácora, búsqueda y filtros).
- `iglesias.json`: registro único de iglesias. Incluye nombre, tipo, municipio, zona, dirección, prioridad y fuente.
- `visitas.json`: **única fuente de verdad** para las reuniones programadas y realizadas. Contiene 12 jornadas quincenales **propuestas**, con 36 paradas, sin afirmarlas como confirmadas.

No se usa base de datos ni se exponen credenciales. El contenido es estático y compatible con GitHub Pages.

## Programar una visita

1. En GitHub, abrir `iglesias/iglesias.json`, buscar la iglesia y copiar su `id`.
2. Editar `iglesias/visitas.json` en una rama o directamente en GitHub, conservando el JSON válido.
3. Editar una jornada propuesta o agregar un objeto nuevo a `visitas` con los campos documentados abajo. Guardar el commit.

Ejemplo de **estructura, no una reunión real** (no dejar este ejemplo publicado):

```json
{
  "id": "visita-001",
  "iglesiaId": "ig-001",
  "fecha": "2027-01-16",
  "hora": "10:00",
  "duracionMin": 90,
  "puntoReunion": "Atrio del templo",
  "estado": "programada",
  "nota": "Llevar agua y llegar diez minutos antes."
}
```

- `fecha`: formato YYYY-MM-DD; `hora`: HH:mm de 24 horas, zona **America/Mexico_City**. La propuesta vigente comienza el **24 de octubre de 2026** y termina el **3 de abril de 2027**. Los sábados sugeridos son quincenales, salvo un descanso en Año Nuevo.
- `duracionMin`: duración aproximada para el enlace de Google Calendar (si falta, 90 minutos).
- `estado`: `propuesta` (tentativa), `programada` (confirmada), `realizada` o `cancelada`.
- `puntoReunion`: lugar exacto de reunión; es preferible a una dirección genérica.
- `nota`: instrucciones para los participantes.
- `reflexion`: texto opcional, visible en la bitácora cuando la visita se marca `realizada`.
- `fotos`: arreglo opcional de enlaces públicos HTTPS. No publicar fotos identificables de participantes sin autorización.

Una vez confirmada fecha, apertura y coordinación, cambiar `"estado": "propuesta"` a `"programada"`. Solo entonces se muestra como confirmada. Al terminar una visita, cambiar el mismo objeto a `"estado": "realizada"`; agregar `reflexion` si corresponde. El progreso y la bitácora se actualizarán automáticamente tras publicarse el cambio.

Una iglesia puede tener **varias visitas**. Las jornadas propuestas incluyen `jornada`, `numeroJornada`, `tituloJornada`, `zonaJornada` y `modalidad` para agrupar sus tres paradas en el calendario. El `ordenRecorrido` del inventario permite priorizar las 85 iglesias pendientes o programadas. Se cuenta como visitada una sola vez cuando al menos una visita figura como realizada. Las cancelaciones no cuentan como realizadas. Una visita pasada que sigue marcada como programada **no se marca automáticamente como realizada**.

## Agregar o corregir una iglesia

En `iglesias.json`, incluir un nuevo objeto con un `id` **único y estable**, `nombre`, `tipo` (`parroquia`, `templo`, `santuario`, `basílica` o `catedral`), `municipio` (`Querétaro` o `Corregidora`), `zona`, `direccion` (puede estar vacía), `imperdible` (booleano) y `fuente` (URL).

Evitar duplicar el mismo edificio cuando sea simultáneamente parroquia, santuario o templo. Mantener el `id` al corregir su nombre, porque las visitas usan esa referencia.

## Reglas editoriales

- El inventario de lanzamiento es **inicial, no exhaustivo**. Incluye iglesias tomadas de listados de la Cancillería, el INAH y fuentes para Corregidora. Verificar adscripción municipal, nombres y direcciones antes de cerrar el conteo definitivo.
- No inventar horarios de misa, apertura de templos ni recorridos guiados. Las fechas de las 12 jornadas son **propuestas editoriales**, no acuerdos con los templos. No anunciarlas como confirmadas hasta contar con validación.
- Confirmar disponibilidad con cada templo antes de publicar una reunión.
- El cronograma muestra **propuestas y visitas confirmadas futuras**, agrupadas por jornada; las realizadas se ven en la bitácora. Una fecha tentativamente vencida desaparece de la agenda hasta ser reprogramada, pero nunca cuenta como visita realizada.
- El contador público refleja **el inventario cargado**, no una cifra oficial del total de iglesias en cada municipio. El orden de visita es una prioridad editorial por valor religioso, histórico y logística, **no una jerarquía canónica oficial**.

## Fuentes iniciales

- Directorio por decanatos de la Diócesis: https://cancilleriadiocesisqro.org/decanatos/
- Relación institucional de parroquias: https://cancilleriadiocesisqro.org/circulares/
- Patrimonio religioso en el Centro de Querétaro, INAH: https://lugares.inah.gob.mx/es/node/4811
- Basílica de Nuestra Señora del Pueblito, Secretaría de Cultura: https://sitiosymonumentos.cultura.gob.mx/iii-estudios-monograficos/nuestra-senora-del-pueblito/

## Publicación

La sección vive en `/iglesias/` y aparece enlazada en el selector superior «Guía · Cronología · Iglesias» del sitio principal, con el mismo menú dentro de la nueva página. La publicación depende del merge de la rama en la rama desplegada en GitHub Pages.
