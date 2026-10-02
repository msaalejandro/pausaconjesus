# Cómo se organiza el contenido

La página ya no guarda las sesiones dentro del código. Todo el contenido vive en dos archivos de esta carpeta.

## `grupo.js`: el grupo y su calendario

Lo que hace distinto a cada grupo:

| Campo | Para qué sirve |
|---|---|
| `nombre` | Aparece en el encabezado, en el título de la pestaña y en la invitación por WhatsApp. |
| `subtitulo` | Acompaña al nombre en el título de la pestaña. |
| `ritmo` | Frase de la página Sesiones, por ejemplo «Un viernes sí y uno no.» |
| `url` | Dirección del sitio; se usa en el enlace de invitación. |
| `api` | Dirección del flujo de n8n que guarda reflexiones, intenciones, temas y preguntas. |
| `calendario` | Lista de sesiones: fecha y lección. |

Para programar una sesión se agrega una línea al calendario:

```js
{ fecha: "2026-10-16", leccion: "nombre-de-la-leccion" }
```

Si todavía no hay lección, se pone `leccion: null` y la sesión aparece como «Tema por definir».

Cada sesión recibe el identificador `s-AAAA-MM-DD` a partir de su fecha. Es el que se guarda en la hoja junto a cada reflexión y pregunta, así que **no conviene cambiar la fecha de una sesión que ya tiene reflexiones**. Si de verdad cambia, se le puede fijar el identificador viejo con `id: "s-2026-10-16"`.

## `lecciones.js`: el contenido de cada sesión

Cada lección tiene una clave (por ejemplo `"el-desierto"`) y estos campos:

- `tema`, `fuente`, `categoria`, `lectura`, `idea`: título, de dónde viene, tipo, tiempo de lectura e idea central.
- `puntos`: la guía de lectura, punto por punto (`t` título, `p` párrafos, `refs` citas, `a` «para aterrizar»).
- `dinamica`: duración, orden de la sesión (`agenda`), `rondas` de preguntas y `reglas` (acuerdos).
- `semana`: la pregunta, la práctica y el cierre para vivir los días siguientes.
- `audios`: audios de la sesión (título, lema, archivo y duración). Los archivos van en `/audio/`.
- `materiales`: el libro o documentos para leer antes (con su enlace).
- `biblia`: textos bíblicos con una frase que los resume.

Una lección se prepara una vez y puede usarse en cualquier fecha, o por cualquier grupo.
