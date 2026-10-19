# Peregrinos por Querétaro

Sección pública de [Pausa con Jesús](https://pausaconjesus.com/iglesias/) para conocer iglesias de los municipios de Querétaro y Corregidora mediante recorridos dominicales.

## Modelo de actividad

- Cada jornada reúne **de dos a cinco iglesias cercanas**. No se completa el cupo de cinco si eso obliga a cruzar la ciudad.
- En el Centro Histórico los recorridos son peatonales. Las cuatro primeras rutas futuras fueron medidas en Google Maps el 19 de octubre de 2026: entre 1.4 y 3.6 km totales a pie.
- Fuera del Centro las jornadas se organizan por microzonas y se propone traslado en vehículo. El enlace «Ver ruta y distancia en Maps» recalcula el trayecto y el tráfico.
- La **última iglesia de cada jornada** conserva el rol `misa`. Su horario permanece pendiente hasta verificarlo directamente con el templo.
- Todas las fechas futuras permanecen como `propuesta` hasta comprobar apertura, celebraciones, acceso y tiempo real de traslado.

La primera jornada ocurrió el domingo 18 de octubre de 2026. El archivo conserva su propuesta original, pero no marca ninguna iglesia como visitada ni ninguna Misa como celebrada: falta confirmar con el grupo qué ocurrió realmente.

## Archivos

- `index.html`: interfaz pública, rutas desplegables, inventario, bitácora y contadores.
- `iglesias.json`: inventario inicial de 85 recintos únicos, con direcciones revisadas y enlaces de fuente.
- `visitas.json`: jornadas y paradas en formato compacto.

Todo funciona en GitHub Pages mediante JSON, sin servidor adicional ni credenciales.

## Estructura de `visitas.json`

Cada elemento de `jornadas` contiene:

- `id`, `numero`, `fecha`, `titulo` y `zona`.
- `modalidad`: `caminando` o `en vehículo`.
- `estado`: `propuesta`, `programada`, `realizada` o `cancelada`.
- `distanciaKm`, `trasladoMin` y `rutaVerificada`, cuando existe una medición guardada.
- `paradas`: lista ordenada de iglesias. La última debe tener `rol: "misa"`.

Cada parada puede contener `hora`, `horaMisa`, `estado`, `misaCelebrada`, `puntoReunion`, `nota`, `reflexion` y `fotos`. Si omite `estado`, hereda el de la jornada.

## Confirmar una jornada

1. Abrir `iglesias/visitas.json` y localizar la jornada.
2. Consultar con todos los templos su apertura y, especialmente, la hora exacta de la Misa en la última parada.
3. Abrir la ruta de Google Maps y comprobar el tiempo actualizado, cierres y accesibilidad.
4. Añadir las horas, confirmar el punto de reunión y cambiar la jornada a `programada`.

No se debe anunciar una propuesta como confirmada ni asignar una hora de Misa sin evidencia.

## Registrar una jornada realizada

1. Cambiar a `realizada` únicamente las paradas donde el grupo efectivamente estuvo.
2. En la última iglesia, usar `misaCelebrada: true` solo si el grupo asistió a la celebración.
3. Si no se completó toda la ruta, establecer el estado en cada parada en lugar de cambiar toda la jornada.
4. Agregar reflexión y fotografías únicamente cuando corresponda y exista autorización.

Los contadores se mantienen separados:

- **Iglesias del recorrido**: total único del inventario.
- **Iglesias visitadas**: iglesias únicas con al menos una parada `realizada`.
- **Con Misa compartida**: iglesias únicas con rol `misa`, estado `realizada` y `misaCelebrada: true`.
- **Por conocer**: total menos visitadas.

Una Misa cuenta también como visita, pero no duplica el templo. Una propuesta vencida nunca se convierte automáticamente en realizada.

## Precisión editorial

- Mantener estable el `id` de cada iglesia al corregir nombre o dirección.
- Evitar duplicados cuando un mismo recinto tenga varios títulos o funciones.
- Verificar horarios, acceso y celebraciones especiales antes de cada domingo.
- El 21 de marzo de 2027 coincide con Domingo de Ramos; esa propuesta requiere revisión pastoral especial.

Fuentes principales:

- https://cancilleriadiocesisqro.org/decanatos/
- https://cancilleriadiocesisqro.org/circulares/
- https://lugares.inah.gob.mx/es/node/4811
- https://sitiosymonumentos.cultura.gob.mx/iii-estudios-monograficos/nuestra-senora-del-pueblito/

## Publicación

La sección vive en `/iglesias/`. Los cambios a `main` se despliegan mediante GitHub Pages.
