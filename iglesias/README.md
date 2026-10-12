# Peregrinos por Querétaro

Sección pública de [Pausa con Jesús](https://pausaconjesus.com/iglesias/) para descubrir iglesias de los **municipios de Querétaro y Corregidora**, con visitas dominicales y Misa al terminar cada jornada.

## Modelo de actividad

- Un recorrido **cada domingo** a partir del 18 de octubre de 2026. Primera propuesta: 29 domingos consecutivos, hasta el 2 de mayo de 2027, abarcando los 85 recintos del inventario inicial.
- Normalmente se visitan dos iglesias para conocerlas y se termina en una **tercera iglesia para asistir juntos a la Santa Misa**.
- Dos jornadas tienen solo dos iglesias para completar el total sin repetir templos.
- La **primera y segunda visita** tienen horarios de referencia tentativos (09:00 y 10:00 h, o 09:30 h si son dos paradas). **La última parada no tiene hora asignada**: se debe consultar la Misa dominical antes de confirmar o ajustar los horarios de las visitas.
- La última parada fue elegida entre recintos registrados como catedral, parroquia, santuario o basílica. No hay una confirmación expresa con ninguno de los templos. En domingos de celebraciones especiales, puede ser necesario ajustar rutas o actividades.
- La priorización atiende importancia religiosa y patrimonial más logística; **no expresa jerarquía canónica oficial**.

## Archivos

- `index.html`: interfaz pública, jornadas desplegables, inventario filtrable, bitácora y contadores.
- `iglesias.json`: 85 recintos únicos iniciales. El inventario aún **no está auditado ni cerrado**.
- `visitas.json`: agenda por domingo y por iglesia, estado y constancia de asistencia a Misa.

Todo funciona en GitHub Pages mediante JSON, sin servidor adicional ni credenciales.

## Confirmar una jornada

1. En GitHub, abrir `iglesias/visitas.json` y encontrar los registros que comparten `jornada`.
2. Consultar con la parroquia o santuario final la **hora exacta de la Misa dominical**. Comprobar también apertura de las iglesias anteriores, tiempo de traslado y celebraciones especiales.
3. Ajustar el `hora` de las primeras paradas, colocar la hora de la Misa en `hora` y `horaMisa` del último registro, confirmar el `puntoReunion` y cambiar `estado` de `propuesta` a `programada` en **todas las paradas** de esa jornada.
4. Publicar la edición mediante commit. La web se actualizará con el siguiente despliegue.

**Importante:** no pasar el estado de una jornada a `programada` antes de verificar los horarios. Mientras sea `propuesta`, la página mostrará claramente que la fecha y la Misa son tentativas.

Los campos principales de cada visita:

- `jornada`: identificador común de las paradas de un domingo.
- `numeroJornada`: índice consecutivo en el calendario.
- `ordenEnJornada`: determina el orden lógico de paradas, independientemente de que la hora de Misa no esté confirmada.
- `iglesiaId`: identificador estable del recinto en `iglesias.json`.
- `fecha`: fecha local YYYY-MM-DD (zona `America/Mexico_City`).
- `rol`: `visita` o `misa`. **Solo la última parada** tiene `rol: "misa"`.
- `hora`: HH:mm de 24 horas, o `null` mientras no se confirme la hora.
- `horaMisa`: HH:mm para la Misa cuando esté confirmada; `null` en cualquier otro caso.
- `estado`: `propuesta`, `programada`, `realizada` o `cancelada`.
- `misaCelebrada`: `true` **solo** si el grupo asistió realmente a Misa en ese templo.
- `reflexion` y `fotos`: opcionales para la bitácora. Las fotografías de participantes deben publicarse únicamente con autorización.

## Registrar una actividad realizada y actualizar los contadores

1. Una vez celebrada la jornada, cambiar a `"estado": "realizada"` únicamente los templos donde el grupo efectivamente estuvo.
2. Para la iglesia final, marcar además `"misaCelebrada": true` **únicamente si el grupo asistió a la Misa**. Si solo se visitó ese templo o la celebración se canceló, dejar `false`.
3. Agregar una reflexión o enlaces a fotografías si se desea.

Los contadores de la portada son:

- **Iglesias del recorrido**: todas las iglesias únicas presentes en el inventario.
- **Iglesias visitadas**: iglesias únicas con al menos un registro `realizada`, incluyendo la iglesia donde hubo Misa.
- **Con Misa compartida**: iglesias únicas con `rol: "misa"`, `estado: "realizada"` y `misaCelebrada: true`.
- **Por conocer**: total del inventario menos iglesias visitadas.

La Misa cuenta también como visita, sin duplicar el templo en el inventario ni el contador de visitadas. Repetir la Misa en una misma iglesia no infla el número de **iglesias** con Misa. Las visitas tentativas o ya vencidas nunca se convierten automáticamente en realizadas.

## Inventario y precisión editorial

- Verificar direcciones, municipio, nomenclatura, duplicados y adscripción de parroquias antes de presentar el listado como definitivo.
- Si un templo comparte los títulos de santuario y parroquia se registra **una sola vez**.
- Mantener estable el `id` de cada iglesia cuando se corrija su nombre.
- Confirmar con anticipación la Misa y las condiciones de acceso. Evitar programar paseos dentro de templos durante liturgias.
- El recorrido semanal comprende Navidad, Cuaresma y Semana Santa/Pascua de 2027; esas jornadas requieren especial sensibilidad pastoral y pueden adaptarse al calendario litúrgico.
- No anunciar asistencia, reserva de lugares, actividades guiadas ni horarios confirmados sin evidencia.

## Fuentes del inventario inicial

- https://cancilleriadiocesisqro.org/decanatos/
- https://cancilleriadiocesisqro.org/circulares/
- https://lugares.inah.gob.mx/es/node/4811
- https://sitiosymonumentos.cultura.gob.mx/iii-estudios-monograficos/nuestra-senora-del-pueblito/

## Publicación

La sección vive en `/iglesias/` y está enlazada desde el selector «Guía · Cronología · Iglesias». Los cambios a `main` se despliegan por GitHub Pages.
