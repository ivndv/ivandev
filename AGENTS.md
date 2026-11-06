# AGENTS.md — ivandev

Guía operativa y técnica para agentes de IA que colaboran en el desarrollo, mantenimiento y optimización del proyecto.

## 1. Visión general

**ivandev** es el portafolio web personal e interactivo de **Ivan Cruz**, diseñado para presentar su perfil, experiencia laboral, catálogo de proyectos técnicos y habilidades en Desarrollo Full Stack, DevOps y Cloud Computing.

- **Propósito:** experiencia fluida, rápida y accesible con navegación SPA, diseño responsive mobile-first, soporte bilingüe (inglés y español), modo oscuro/claro persistente y backend serverless en el Edge con formulario de contacto seguro.
- **Formato:** una sola página con scroll; las secciones se navegan por anclas y cada idioma tiene su propia URL.
- **Dominio en producción:** [https://portafolioweb.mgdc.site](https://portafolioweb.mgdc.site)
- **Repositorio:** [https://github.com/ivndv/ivandev](https://github.com/ivndv/ivandev)

### 1.1 Rutas

| Ruta                          | Contenido                  |
| :---------------------------- | :------------------------- |
| `/`                           | Página completa en inglés  |
| `/es`                         | Página completa en español |
| `/privacy` · `/es/privacidad` | Política de privacidad     |
| `/terms` · `/es/terminos`     | Términos y condiciones     |
| `*`                           | 404                        |

### 1.2 Anclas por idioma

| Sección     | Inglés        | Español        |
| :---------- | :------------ | :------------- |
| Hero        | `#home`       | `#inicio`      |
| Sobre mí    | `#about`      | `#sobre-mi`    |
| Skills      | `#skills`     | `#skills`      |
| Experiencia | `#experience` | `#experiencia` |
| Proyectos   | `#projects`   | `#proyectos`   |
| Formación   | `#education`  | `#formacion`   |
| Contacto    | `#contact`    | `#contacto`    |

Las anclas se derivan de una sola fuente: `SECCIONES` en `src/i18n/navigation.ts`. **No escribas anclas a mano.**

## 2. Antes de tocar código

**CodeGraph** (índice de símbolos del repo): usa `codegraph_explore` (`query`, `maxFiles`, `projectPath`) antes de un grep masivo o de leer varios archivos; devuelve fuente verbatim, rutas de llamada e impacto.

- `codegraph sync /home/ivan/software-dev/ivandev` tras editar, pull o cambiar de rama (incremental, uso normal).
- `codegraph index /home/ivan/software-dev/ivandev` solo al crear el índice, tras `codegraph upgrade` o si `status` avisa `built by vX` (rebuild completo).
- `codegraph status /home/ivan/software-dev/ivandev` para comprobar el estado.

- **Textos de la interfaz:** todo el copy vive en `messages/es.json` y `messages/en.json`. Nunca escribas texto visible directamente en el JSX; si falta una clave, agrégala en ambos idiomas.
- **Código generado:** `src/paraglide/` lo produce Paraglide al arrancar Vite o al compilar. No se edita ni se versiona.

## 3. Stack tecnológico

| Capa                   | Tecnología                     | Versión / Detalle                                                  |
| :--------------------- | :----------------------------- | :----------------------------------------------------------------- |
| **Runtime & Gestor**   | **Bun**                        | `1.4.4` (`bun.lock`)                                               |
| **Lenguaje**           | **TypeScript**                 | `^7.0.2` (estricto)                                                |
| **Frontend & UI**      | **React 19**                   | `react ^19.3.1`, `react-dom ^19.3.1`                               |
| **Bundler**            | **Vite 8**                     | `vite ^8.3.5`, `@vitejs/plugin-react-swc ^4.3.3`                   |
| **Enrutamiento**       | **React Router 7**             | `react-router-dom ^7.18.5`                                         |
| **Estilos**            | **Tailwind CSS 4**             | `@tailwindcss/vite ^4.3.3`, tokens en `src/index.css`              |
| **i18n**               | **Paraglide 2**                | `@inlang/paraglide-js ^2.29.3`, proyecto en `project.inlang/`      |
| **Iconos**             | **Lucide** + **Iconify (mdi)** | Lucide para UI, mdi solo para logos de marca                       |
| **Estado global**      | **Zustand 5**                  | `zustand ^5.0.16` (slice de tema)                                  |
| **Backend / Edge API** | **Hono 4** en Pages Functions  | `hono ^4.13.14` (`functions/api/[[route]].ts`)                     |
| **Validación**         | **Zod 4**                      | `zod ^4.6.7` (`functions/_validators/`)                            |
| **Anti-bot**           | **Cloudflare Turnstile**       | `@marsidev/react-turnstile ^1.6.3`                                 |
| **Email**              | **Resend**                     | `resend ^6.35.0`                                                   |
| **Linter/Formatter**   | **Biome 2**                    | `@biomejs/biome ^2.6.3`                                            |
| **Testing**            | **Vitest 5** + Testing Library | `vitest ^5.0.5`, `@testing-library/react ^16.3.3`, `jsdom ^30.1.3` |
| **Cobertura**          | **@vitest/coverage-v8**        | `^5.0.5` (script `test:coverage`)                                  |
| **Infraestructura**    | **Cloudflare Pages**           | `wrangler ^4.155.0` (`wrangler.jsonc`)                             |
| **CI/CD**              | **GitHub Actions**             | lint, tests con cobertura, build y deploy                          |

## 4. Estructura del código

```plaintext
ivandev/
├── .github/
│   ├── actions/setup/          → Acción compuesta para inicializar Bun y dependencias
│   └── workflows/ci-cd.yml     → Pipeline de CI/CD (lint, test, build, deploy)
│
├── functions/                  → Backend Edge (Cloudflare Pages Functions)
│   ├── _services/              → emailService (Resend) y turnstileService
│   ├── _validators/            → ContactSchema (Zod) y sanitizador HTML
│   └── api/[[route]].ts        → Entrypoint Hono con POST /api/contact
│
├── messages/                   → Traducciones (es.json, en.json) · fuente única del copy
├── project.inlang/             → Configuración del proyecto Paraglide
│
├── public/                     → Assets estáticos (favicon, robots.txt, sitemap.xml, llms.txt)
│
├── tests/functions/            → Tests del backend (validadores, servicios y handler)
│
├── src/                        → Frontend React 19 SPA
│   ├── components/
│   │   ├── Header/             → Nav con scroll-spy, LanguageSelector, ThemeSelector
│   │   ├── Footer/             → Pie de página con navegación y redes
│   │   ├── Layout/             → Header, skip-link, Outlet y Footer
│   │   └── ui/                 → Section, SectionHeader, Chip, Button, Field, RichText, SocialLinks
│   ├── data/                   → Datos estáticos (proyectos)
│   ├── hooks/                  → useScrollAnimation, useSeo, useHoraLocal
│   ├── i18n/                   → navigation.ts (rutas y anclas) y LocaleSync.tsx
│   ├── pages/                  → Home (single page), Legal y NotFound
│   ├── sections/               → Hero, About, Skills, Experience, Projects, Education, Contact
│   ├── router/                 → Rutas localizadas
│   ├── store/                  → Zustand (tema)
│   ├── index.css               → Tailwind 4, tokens y animaciones
│   └── main.tsx                → Entrada React con BrowserRouter y StrictMode
│
├── wrangler.jsonc              → Configuración de Cloudflare Pages
└── biome.json                  → Formateo y linting
```

## 5. Arquitectura y flujo de datos

- **Frontend:** SPA React 19 servida por Vite; React Router resuelve las rutas localizadas (`/`, `/es`, legales y 404). Las secciones de la única página se navegan por anclas derivadas de `SECCIONES`.
- **Estado y navegación:** el tema persiste en un slice de Zustand; el Header aplica scroll-spy y `LocaleSync` mantiene sincronizado el idioma.
- **Backend Edge:** `functions/api/[[route]].ts` monta Hono y expone `POST /api/contact`. El handler valida el cuerpo con `ContactSchema` (Zod), verifica el token de Turnstile mediante `turnstileService` y envía el correo con Resend a través de `emailService`.
- **Sanitización:** el sanitizador HTML de `functions/_validators/` acompaña a la validación del formulario antes del envío.

## 6. Variables de entorno

Definidas como bindings de Cloudflare Pages Functions:

| Variable                | Descripción                                                        |
| :---------------------- | :----------------------------------------------------------------- |
| `RESEND_API_KEY`        | Clave de API de Resend para el envío del correo de contacto.       |
| `RESEND_TO_EMAIL`       | Dirección destinataria que recibe los mensajes del formulario.     |
| `RESEND_FROM_EMAIL`     | Dirección remitente (opcional; si falta se usa la de Resend).      |
| `TURNSTILE_SECRET_KEY`  | Secreto usado para verificar el token de Cloudflare Turnstile.     |

## 7. Comandos

Todos los comandos se ejecutan con **Bun**:

```bash
# Desarrollo Frontend (Vite en localhost:5173)
bun run dev

# Desarrollo Fullstack (Build + Wrangler Pages Functions en localhost:4321)
bun run dev:full

# Regenerar los mensajes tipados de Paraglide (src/paraglide)
bun run i18n:compile

# Compilación de producción (i18n + typecheck + vite build)
bun run build

# Previsualización del build estático
bun run preview

# Verificación de formato/lint (read-only, igual que en CI)
bun run check

# Corrección automática de formato/lint (escribe archivos)
bun run lint
bun run format

# Pruebas (una sola pasada)
bun run test

# Pruebas con reporte de cobertura (texto + HTML en coverage/)
bun run test:coverage
```

## 8. Convenciones y reglas críticas

### 8.1 Ejecución de tests y checks

- **Prohibido ejecutar tests o linter de forma reactiva tras cada pequeño cambio.** Realiza todos los cambios de código primero; corre `bun run check` (read-only) o `bun run test` una sola vez al final, cuando todo el conjunto esté listo y verificado.

### 8.2 Restricción estricta de herramientas

- **Prohibido el uso de Playwright, Puppeteer o navegadores headless** en este proyecto. No lances herramientas ni scripts de navegación visual a menos que el usuario lo solicite explícitamente.

### 8.3 Estilo de código y comentarios

- **Lenguaje:** todo el código, comentarios y documentación técnica se redacta en **español**.
- **Comentarios de una sola línea:** concisos, directos y explicativos del porqué, sin bloques redundantes.
- **Tipado estricto:** prohibido `any`; define interfaces o types explícitos para props, modelos y respuestas de API.
- **Copy:** nunca escribas texto visible en el JSX; usa `m.clave()` desde `messages/`.
- **Iconos:** Lucide para UI; mdi (`icon-[mdi--...]`) solo para logos de marca.

### 8.4 Sistema de diseño

- **Componentes base:** usa `Section`, `SectionHeader`, `Chip`, `Button`, `Field`, `RichText` y `SocialLinks` antes de escribir markup nuevo.
- **Radios:** tarjetas `rounded-2xl`, tiles de Skills `rounded-lg`, chips `rounded-md`, botones e inputs `rounded-lg`.
- **Chips:** siempre en mono 11 px (`Chip`), con tono `default` o `accent`.
- **Acento:** solo en CTA, enlace activo, chip destacado y foco. Nunca en viñetas ni títulos completos.
- **Sombras:** una sola (`shadow-sm`). Prohibidos los glow y `shadow-xl`.
- **Foco visible:** todo elemento interactivo lleva `focus-visible:ring-2 ring-accent`.
- **Secciones:** una sección usa `Section`, que ya aplica contenedor, padding fluido, divisor y animación.

### 8.5 Responsive

- **Mobile-first:** los estilos base son móvil; se amplían con `sm:`, `md:` y `lg:`.
- **Dos columnas solo desde `lg`** (1024 px). En tablet todo va apilado.
- **Contenedor:** `max-w-6xl 2xl:max-w-7xl` con `px-4 sm:px-6 lg:px-8`.
- **Tipografía:** usa los tokens `text-h1`, `text-h2` y `py-section` de `index.css`; no repitas escalas con breakpoints.
- **Táctil:** interactivos con `min-h-11` (44 px) en móvil.

### 8.6 Tests

- Los tests de frontend viven junto al código (`*.test.tsx`) y usan Vitest + Testing Library con jsdom.
- Los tests de backend viven en `tests/functions/`, nunca dentro de `functions/`: cualquier archivo en ese directorio se despliega como ruta de Pages.
- Los tests de backend declaran `// @vitest-environment node`.
- Al agregar lógica en `functions/`, agrega su test: validadores, servicios y handler.
- La cobertura se revisa con `bun run test:coverage`; el reporte HTML queda en `coverage/` (ignorado por git).

## 9. Flujo de Git y despliegue

- **Prohibido realizar commits o push sin la confirmación y aprobación explícita del usuario.**
- **Ramas:** todo desarrollo se realiza en `develop`. El merge a `main` se hace únicamente tras aprobación del usuario y se despliega automáticamente vía CI/CD.
- **Mensajes de commit:** Conventional Commits en minúsculas y español (`feat: ...`, `fix: ...`, `chore: ...`, `docs: ...`, `refactor: ...`).

## 10. CI/CD

Pipeline en GitHub Actions (`.github/workflows/ci-cd.yml`), con la acción compuesta `.github/actions/setup` para inicializar Bun y dependencias:

- `lint` (`bun run check`), tests con cobertura (`bun run test:coverage`) y `build`.
- `deploy` a Cloudflare Pages cuando el cambio llega a `main`.
