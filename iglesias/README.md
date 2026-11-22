# Peregrinos por Querétaro

Sección pública de [Pausa con Jesús](https://pausaconjesus.com/iglesias/) para conocer iglesias de los municipios de Querétaro y Corregidora mediante recorridos con fechas definidas manualmente por la coordinación.

## Modelo de actividad

- Cada jornada reúne **de dos a cinco iglesias cercanas**. No se completa el cupo de cinco si eso obliga a cruzar la ciudad.
- En el Centro Histórico los recorridos son peatonales. Las cuatro primeras rutas futuras fueron medidas en Google Maps el 19 de octubre de 2026: entre 1.4 y 3.6 km totales a pie.
- Fuera del Centro las jornadas se organizan por microzonas y se propone traslado en vehículo. El enlace «Ver ruta y distancia en Maps» recalcula el trayecto y el tráfico.
- La **última iglesia de cada jornada** conserva el rol `misa`. Su horario permanece pendiente hasta verificarlo directamente con el templo.
- Los recorridos pendientes conservan su orden por `numero`, sin avanzar automáticamente al pasar una semana.
- `fecha: null` se muestra como **Fecha por definir**. Solo se asigna una fecha cuando la coordinación la decide; `programada` requiere fecha.
- Para avanzar al siguiente recorrido, registrar la jornada actual como `realizada` o `cancelada`. Una fecha pasada no oculta la jornada ni la marca realizada.
- Una propuesta con fecha sigue siendo tentativa hasta comprobar apertura, celebraciones, acceso y tiempo real de traslado.

La primera jornada ocurrió el domingo 18 de octubre de 2026. Sus tres visitas y la asistencia a Misa en la Catedral están confirmadas y se conservan en la bitácora. Las fechas semanales de las demás propuestas se retiraron el 22 de noviembre de 2026; sus rutas se conservan sin fecha.

## Archivos

- `index.html`: interfaz pública, rutas desplegables, inventario, bitácora y contadores.
- `iglesias.json`: inventario inicial de 85 recintos únicos, con direcciones revisadas y enlaces de fuente.
- `visitas.json`: jornadas y paradas en formato compacto.

Todo funciona en GitHub Pages mediante JSON, sin servidor adicional ni credenciales.

## Estructura de `visitas.json`

Cada elemento de `jornadas` contiene:

- `id`, `numero`, `fecha` (YYYY-MM-DD o `null`), `titulo` y `zona`. `numero` define el orden de los recorridos pendientes.
- `modalidad`: `caminando` o `en vehículo`.
- `estado`: `propuesta`, `programada`, `realizada` o `cancelada`.
- `distanciaKm`, `trasladoMin` y `rutaVerificada`, cuando existe una medición guardada.
- `paradas`: lista ordenada de iglesias. La última debe tener `rol: "misa"`.

Cada parada puede contener `hora`, `horaMisa`, `estado`, `misaCelebrada`, `puntoReunion`, `nota`, `reflexion` y `fotos`. Si omite `estado`, hereda el de la jornada.

## Confirmar una jornada

1. Abrir `iglesias/visitas.json` y localizar la jornada.
2. Consultar con todos los templos su apertura y, especialmente, la hora exacta de la Misa en la última parada.
3. Abrir la ruta de Google Maps y comprobar el tiempo actualizado, cierres y accesibilidad.
4. Asignar `fecha` con el día acordado (por ejemplo, `"2026-12-06"`), añadir las horas, confirmar el punto de reunión y cambiar la jornada a `programada`.

Para posponerla sin nueva fecha, establecer `fecha: null` y `estado: "propuesta"`. La ruta permanece pendiente en su mismo orden. Para moverla dentro del orden, editar `numero`. No se necesita recorrer las fechas de las demás jornadas.

No se debe anunciar una propuesta como confirmada ni asignar una hora de Misa sin evidencia.

## Registrar una jornada realizada

1. Cambiar a `realizada` únicamente las paradas donde el grupo efectivamente estuvo.
2. En la última iglesia, usar `misaCelebrada: true` solo si el grupo asistió a la celebración.
3. Si no se completó toda la ruta, establecer el estado en cada parada en lugar de cambiar toda la jornada.
4. Una vez cerrado el recorrido, marcar la jornada `realizada`; en recorridos parciales, mantener en cada parada su resultado real (por ejemplo, `cancelada` si no se visitó). Las paradas que sigan `propuesta` o `programada` permanecen pendientes.
5. Agregar reflexión y fotografías únicamente cuando corresponda y exista autorización.

Los contadores se mantienen separados:

- **Iglesias del recorrido**: total único del inventario.
- **Iglesias visitadas**: iglesias únicas con al menos una parada `realizada`.
- **Con Misa compartida**: iglesias únicas con rol `misa`, estado `realizada` y `misaCelebrada: true`.
- **Por conocer**: total menos visitadas.

Una Misa cuenta también como visita, pero no duplica el templo. Una propuesta vencida nunca se convierte automáticamente en realizada.

## Precisión editorial

- Mantener estable el `id` de cada iglesia al corregir nombre o dirección.
- Evitar duplicados cuando un mismo recinto tenga varios títulos o funciones.
- Verificar horarios, acceso y celebraciones especiales antes de cada recorrido.
- Revisar el calendario litúrgico según la fecha elegida; no conservar notas de celebraciones ligadas a fechas descartadas.

Fuentes principales:

- https://cancilleriadiocesisqro.org/decanatos/
- https://cancilleriadiocesisqro.org/circulares/
- https://lugares.inah.gob.mx/es/node/4811
- https://sitiosymonumentos.cultura.gob.mx/iii-estudios-monograficos/nuestra-senora-del-pueblito/

## Publicación

La sección vive en `/iglesias/`. Los cambios a `main` se despliegan mediante GitHub Pages.

