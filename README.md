# AMATL — Sitio web (Fase 1)

Aprender para trascender.

Este repo contiene el sitio completo de la Fase 1: inicio, sobre nosotros, programas,
recursos, blog, eventos, comunidad, equipo, alianzas, transparencia, contacto, lista de
espera, SEO básico (sitemap/robots/Open Graph) y Google Analytics.

Está construido para crecer: cuando quieras agregar cursos, mentorías reales o un blog con
contenido dinámico, ya tienes la base y el cliente de Sanity listo (`lib/sanity.js`).

---

## 1. Ábrelo en VSCode

1. Descarga esta carpeta y ábrela en VSCode.
   > Nota de seguridad: ya se fijó `next` en la versión parchada `14.2.35`. Cuando corras
   > `npm install`, evita bajarlo a `14.2.5` u otra versión anterior — tenía una
   > vulnerabilidad conocida.
2. Abre una terminal dentro de VSCode (`Ctrl + ñ` o menú Terminal → Nueva terminal).
3. Instala las dependencias:
   ```
   npm install
   ```
4. Crea tu archivo de variables de entorno local copiando el ejemplo:
   ```
   copy .env.example .env.local
   ```
   (En PowerShell también funciona `Copy-Item .env.example .env.local`)
5. Corre el sitio en modo desarrollo:
   ```
   npm run dev
   ```
6. Abre http://localhost:3000 — ya deberías ver AMATL funcionando (el formulario de lista
   de espera dará error hasta que conectes Brevo en el paso 5, es normal).

---

## 2. Sube el código a GitHub

1. Crea una cuenta en https://github.com si no tienes.
2. Crea un repositorio nuevo (botón verde "New"), llámalo `amatl`, y **no** marques
   "Add a README" (ya tenemos uno).
3. En la terminal de VSCode, dentro de la carpeta del proyecto:
   ```
   git init
   git add .
   git commit -m "Primer commit: sitio AMATL Fase 1"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/amatl.git
   git push -u origin main
   ```

---

## 3. Publícalo con Vercel

1. Crea una cuenta en https://vercel.com usando "Continue with GitHub" (así quedan
   conectados automáticamente).
2. En el dashboard de Vercel: "Add New… → Project" y elige el repo `amatl`.
3. Vercel detecta que es Next.js automáticamente. No cambies nada, dale "Deploy".
4. En unos minutos tendrás una URL tipo `amatl.vercel.app` funcionando.
5. Cuando tengas tu dominio (`amatl.org`), en el proyecto de Vercel ve a
   **Settings → Domains** y agrégalo; Vercel te dirá qué registros DNS configurar en tu
   proveedor de dominio.
6. Importante: agrega ahí también tus variables de entorno (**Settings → Environment
   Variables**), las mismas que pusiste en `.env.local`. Sin esto, el sitio en producción
   no podrá enviar correos a Brevo ni mostrar Analytics.

---

## 4. Correo: contacto@amatl.org con Google Workspace

1. Ve a https://workspace.google.com y elige el plan Business Starter (el más económico).
2. Sigue el asistente: te pedirá el dominio `amatl.org` y te dará registros MX que debes
   agregar en tu proveedor de dominio (los mismos donde configuraste Vercel).
3. Crea el usuario `contacto@amatl.org`.
4. Con eso ya puedes enviar y recibir correo real desde ese buzón.

---

## 5. Lista de espera y contacto: Brevo

El formulario de "Únete a la lista de espera" y el formulario de contacto ya están
programados (`app/api/waitlist/route.js` y `app/api/contacto/route.js`), solo les falta
la llave de Brevo para funcionar.

1. Crea una cuenta gratuita en https://www.brevo.com
2. Ve a **Contacts → Lists** y crea una lista llamada "Lista de espera AMATL". Anota el
   número de ID de la lista (aparece en la URL o en los detalles de la lista).
3. Ve a **Settings → SMTP & API → API Keys** y genera una nueva API key.
4. En **Senders & IP → Senders**, agrega y verifica `contacto@amatl.org` como remitente
   (necesitarás el correo ya creado en el paso 4).
5. Copia esos valores a tu `.env.local` (y también a Vercel, paso 3.6):
   ```
   BREVO_API_KEY=tu-api-key
   BREVO_LIST_ID=el-id-de-tu-lista
   ```
6. Reinicia `npm run dev` y prueba el formulario de la sección "Lista de espera" en inicio.

---

## 6. Analítica: Google Analytics

1. Ve a https://analytics.google.com y crea una propiedad para `amatl.org`.
2. Copia tu ID de medición (empieza con `G-...`).
3. Agrégalo a `.env.local` y a Vercel:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXX
   ```
4. Listo — el componente `components/GoogleAnalytics.js` ya lo carga automáticamente
   cuando esa variable existe.

---

## 7. Contenido dinámico con Sanity (cuando lo necesites)

Por ahora todo el texto vive directamente en el código (`app/*/page.js`), lo cual es
perfecto para la Fase 1. Cuando quieras que el blog o los recursos sean editables sin
tocar código:

1. Crea cuenta en https://www.sanity.io y un proyecto nuevo.
2. Copia el Project ID a `.env.local`:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=tu-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```
3. `lib/sanity.js` ya tiene el cliente listo para usarse — solo falta definir tus
   "schemas" (por ejemplo, un tipo `post` para el blog) y reemplazar el contenido estático
   de `app/blog/page.js` por una consulta a Sanity. Cuando llegues a este punto, puedo
   ayudarte a definir los schemas y conectar cada página.

---

## Estructura del proyecto

```
app/
  page.js                 → Inicio
  sobre-nosotros/page.js
  programas/page.js
  recursos/page.js
  blog/page.js
  eventos/page.js
  comunidad/page.js
  equipo/page.js
  alianzas/page.js
  transparencia/page.js
  contacto/page.js
  privacidad/page.js
  cookies/page.js
  api/waitlist/route.js   → recibe los correos de la lista de espera (Brevo)
  api/contacto/route.js   → recibe el formulario de contacto (Brevo)
  sitemap.js              → genera /sitemap.xml
  robots.js               → genera /robots.txt
  layout.js               → tipografías, metadatos SEO, header/footer globales
components/
  Header.js, Footer.js, Logo.js
  WaitlistForm.js, ContactForm.js
  PageHero.js             → encabezado reutilizable de las páginas internas
  GoogleAnalytics.js
lib/
  brevo.js                → helpers para hablar con la API de Brevo
  sanity.js                → cliente de Sanity, listo para cuando lo conectes
```

## Marca

- Verde principal: `#1e4d3a`
- Fondo: `#f6f1e7`
- Dorado: `#b79a5b`
- Tipografía de nombre/títulos: Libre Baskerville
- Tipografía de lema/cuerpo: Montserrat

Todo esto vive en `tailwind.config.js` como los colores `verde`, `fondo`, `dorado`, y las
familias `font-display` / `font-sans`.

## Pendientes antes de publicar

- [ ] Agregar `favicon.ico` y `og-image.jpg` reales en `public/` (ver `public/LEEME.md`)
- [ ] Reemplazar el logo provisional en `components/Logo.js` por tu SVG definitivo
- [ ] Revisar el texto de `app/privacidad/page.js` con criterio legal
- [ ] Llenar tu información real en `app/equipo/page.js`
- [ ] Confirmar los enlaces de redes sociales en `components/Footer.js` y `app/contacto/page.js`
