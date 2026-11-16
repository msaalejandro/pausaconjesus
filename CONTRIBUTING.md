# Guía para contribuir

Gracias por tu interés en mejorar Pausa con Jesús. El proyecto busca mantener una experiencia sencilla, accesible y respetuosa para una comunidad real.

## Antes de abrir un issue

- Comprueba si el problema ya fue reportado.
- Describe qué intentabas hacer, qué ocurrió y qué esperabas que ocurriera.
- Incluye navegador, dispositivo y pasos para reproducir el problema.
- Si adjuntas capturas, elimina nombres, teléfonos, intenciones personales y cualquier dato que identifique a participantes.

Para proponer una función nueva, explica primero qué necesidad de la comunidad resolvería y cuál sería el cambio mínimo útil.

## Enviar un pull request

1. Crea una rama a partir de `main` con un nombre descriptivo.
2. Mantén el cambio enfocado y evita reformatear archivos que no necesitas modificar.
3. Explica el problema que resuelve y resume las decisiones relevantes.
4. Prueba la experiencia en móvil y escritorio.
5. Revisa navegación con teclado, contraste, enlaces, formularios y comportamiento con la preferencia de movimiento reducido.
6. Incluye capturas cuando el cambio modifique la interfaz.
7. Indica qué comprobaciones manuales realizaste y qué quedó pendiente.

El proyecto es actualmente una aplicación estática y no declara un comando de pruebas automatizadas. Para una revisión local puedes iniciar un servidor con `python3 -m http.server 8000` desde la raíz del repositorio.

## Contenido, imágenes y derechos

- Envía únicamente contenido propio o materiales cuya licencia permita expresamente su uso y distribución.
- Incluye la fuente, autoría, atribución y licencia de cualquier recurso externo que propongas incorporar.
- No copies libros, PDFs, fotografías, ilustraciones, música, videos ni otros materiales protegidos sin autorización.
- El contenido editorial de `datos/lecciones.js` y los recursos visuales y audiovisuales están excluidos de la licencia MIT. Consulta [ASSET-LICENSING.md](ASSET-LICENSING.md).
- No cambies la licencia de materiales excluidos ni los incorpores a una contribución como si fueran código MIT.

## Privacidad y seguridad

- Nunca incluyas contraseñas, tokens, claves API, archivos `.env`, variables privadas ni credenciales en commits.
- No publiques datos personales, mensajes privados, fotografías de participantes ni intenciones de oración identificables.
- Mantén las credenciales en el backend. La configuración JavaScript del navegador es pública.
- Si detectas una vulnerabilidad, no publiques detalles explotables en un issue público. Contacta al mantenedor de forma privada.

## Criterios de revisión

Se priorizan cambios pequeños, claros y fáciles de mantener. Las contribuciones deben preservar la identidad del proyecto, la accesibilidad móvil, el respeto por la privacidad y la separación entre código reutilizable y contenido comunitario.
