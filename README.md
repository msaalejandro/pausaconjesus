# Pausa con Jesús

> A Spanish-language community web app for prayer, guided reflection, shared participation, and discovering local church heritage.
>
> Un espacio para hacer una pausa, orar y volver al corazón.

**Sitio:** [pausaconjesus.com](https://pausaconjesus.com/)

## Qué es

Pausa con Jesús es una plataforma web creada para acompañar a una comunidad cristiana local. Reúne en un solo lugar materiales para los encuentros, recursos de oración y espacios sencillos de participación.

El proyecto busca que una comunidad pequeña pueda organizar sus sesiones y mantener accesibles sus materiales sin depender de conversaciones, documentos y enlaces dispersos.

## Funcionalidades

- **Sesiones guiadas:** materiales para preparar, vivir y retomar cada encuentro.
- **Oración y participación:** intenciones, reflexiones y temas compartidos por la comunidad.
- **Recursos de lectura:** preguntas, referencias bíblicas y materiales complementarios.
- **Patrimonio local:** catálogo de iglesias y propuestas de recorridos por Querétaro y Corregidora.
- **Experiencia móvil:** interfaz adaptable, controles accesibles y respeto por la preferencia de movimiento reducido del dispositivo.

## Tecnología y estructura

El sitio es una aplicación web estática construida con HTML, CSS y JavaScript. No requiere un proceso de compilación para visualizarse localmente.

| Archivo | Propósito |
| --- | --- |
| `index.html` | Interfaz principal, estilos y comportamiento del sitio. |
| `datos/grupo.js` | Configuración pública del grupo, calendario y endpoint de integración. |
| `datos/lecciones.js` | Contenido editorial de las sesiones. Este archivo está excluido de la licencia MIT; consulta [ASSET-LICENSING.md](ASSET-LICENSING.md). |
| `wrangler.jsonc` | Configuración de Cloudflare Workers Static Assets. |
| `.assetsignore` | Archivos que Wrangler debe excluir de los recursos públicos desplegados. |

## Ejecutar localmente

Se necesita Python 3 para iniciar un servidor estático local. Desde la raíz del repositorio:

```bash
python3 -m http.server 8000
```

En Windows también puedes usar:

```powershell
py -m http.server 8000
```

Abre [http://localhost:8000](http://localhost:8000).

La vista local permite revisar la interfaz y los recursos estáticos. Las funciones compartidas que dependen del backend pueden requerir que el endpoint configurado esté disponible y acepte el origen local.

## Configuración e integración

La configuración pública del grupo se encuentra en `datos/grupo.js`. El valor `GRUPO.api` apunta al backend que atiende las funciones compartidas.

Ese archivo se entrega al navegador y, por tanto, **no debe contener contraseñas, tokens privados, claves API ni otros secretos**. Los secretos y credenciales deben permanecer en el backend o en variables de entorno del servicio correspondiente.

## Despliegue

El repositorio incluye una configuración para publicar los archivos estáticos mediante Cloudflare Workers Static Assets.

Con Node.js instalado y una cuenta de Cloudflare:

```bash
npx wrangler login
npx wrangler deploy
```

La configuración de publicación se encuentra en `wrangler.jsonc`. La lista `.assetsignore` evita que archivos de configuración, documentación y variables locales se publiquen como recursos del sitio. Consulta la [guía oficial de Cloudflare](https://developers.cloudflare.com/workers/static-assets/get-started/) para más información.

## Contribuir

Las contribuciones al código son bienvenidas. Antes de enviar cambios, revisa [CONTRIBUTING.md](CONTRIBUTING.md). No envíes información personal de participantes, credenciales ni materiales de terceros sin autorización.

## Licencia

El código fuente original está disponible bajo la licencia MIT, sujeto a las exclusiones descritas en [ASSET-LICENSING.md](ASSET-LICENSING.md).

La licencia MIT **no concede derechos sobre el contenido editorial de las sesiones, las fotografías, ilustraciones, audio, video, identidad visual ni materiales de terceros**. Revisa el aviso de alcance antes de reutilizar cualquier recurso.
