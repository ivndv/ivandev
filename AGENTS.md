# AGENTS.md — Guía para Agentes en Portafolio Web (ivandev)

Guía operativa y técnica para agentes de Inteligencia Artificial que colaboren en el desarrollo, mantenimiento y optimización del proyecto **ivandev**.

---

## 1. Visión General del Proyecto

**ivandev** es el portafolio web personal e interactivo de **Ivan Cruz**, diseñado para presentar su perfil, experiencia laboral, catálogo de proyectos técnicos y habilidades en Desarrollo Full Stack, DevOps y Cloud Computing.

- **Propósito:** Ofrecer una experiencia fluida, rápida y accesible con navegación SPA, **diseño responsive mobile-first**, soporte bilingüe (inglés y español), modo oscuro/claro persistente y backend serverless en el Edge con formulario de contacto seguro.
- **Formato:** **una sola página con scroll**; las secciones se navegan por anclas y cada idioma tiene su propia URL.
- **Dominio en Producción:** [https://portafolioweb.mgdc.site](https://portafolioweb.mgdc.site)
- **Repositorio en GitHub:** [https://github.com/ivndv/ivandev](https://github.com/ivndv/ivandev)

### Rutas

| Ruta                          | Contenido                  |
| :---------------------------- | :------------------------- |
| `/`                           | Página completa en inglés  |
| `/es`                         | Página completa en español |
| `/privacy` · `/es/privacidad` | Política de privacidad     |
| `/terms` · `/es/terminos`     | Términos y condiciones     |
| `*`                           | 404                        |

### Anclas por idioma

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

---

## 2. Antes de Tocar Código (Contexto con CodeGraph)

- **Uso del MCP CodeGraph:** Antes de hacer búsquedas masivas de texto (`grep`), listar directorios o leer múltiples archivos a ciegas, invoca la herramienta MCP `codegraph_explore` indicando `projectPath: "/home/ivan/software-dev/ivandev"`. Te proveerá el grafo de llamadas, impacto y código verbatim de los símbolos en una sola llamada eficiente.
- **Textos de la interfaz:** todo el copy vive en `messages/es.json` y `messages/en.json`. **Nunca escribas texto visible directamente en el JSX**; si falta una clave, agrégala en ambos idiomas.
- **Código generado:** `src/paraglide/` lo produce Paraglide al arrancar Vite o al compilar. No se edita ni se versiona.
- **Estado y Sincronización:**

  ```bash
  # Verificar el estado del índice
  codegraph status /home/ivan/software-dev/ivandev

  # Sincronizar cambios en el árbol de archivos
  codegraph sync /home/ivan/software-dev/ivandev
  ```

---

## 3. Stack Tecnológico

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
| **Estado Global**      | **Zustand 5**                  | `zustand ^5.0.16` (slice de tema)                                  |
| **Backend / Edge API** | **Hono 4** en Pages Functions  | `hono ^4.13.14` (`functions/api/[[route]].ts`)                     |
| **Validación**         | **Zod 4**                      | `zod ^4.6.7` (`functions/_validators/`)                            |
| **Anti-Bot**           | **Cloudflare Turnstile**       | `@marsidev/react-turnstile ^1.6.3`                                 |
| **Email**              | **Resend**                     | `resend ^6.35.0`                                                   |
| **Linter/Formatter**   | **Biome 2**                    | `@biomejs/biome ^2.6.3`                                            |
| **Testing**            | **Vitest 5** + Testing Library | `vitest ^5.0.5`, `@testing-library/react ^16.3.3`, `jsdom ^30.1.3` |
| **Cobertura**          | **@vitest/coverage-v8**        | `^5.0.5` (script `test:coverage`)                                  |
| **Infraestructura**    | **Cloudflare Pages**           | `wrangler ^4.155.0` (`wrangler.jsonc`)                             |
| **CI/CD**              | **GitHub Actions**             | lint, tests con cobertura, build y deploy                          |

---

## 4. Estructura del Código

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

---

## 5. Comandos de Desarrollo y Tooling

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

---

## 6. Convenciones Obligatorias para Agentes

### 6.1 Regla de Oro en Ejecución de Tests y Checks

- **PROHIBIDO ejecutar tests o linter de forma reactiva tras cada pequeño cambio.** Realiza todos los cambios de código primero; corre `bun run check` (read-only) o `bun run test` **una sola vez al final** cuando todo el conjunto esté listo y verificado.

### 6.2 Restricción Estricta de Herramientas

- **PROHIBIDO el uso de Playwright, Puppeteer o navegadores headless** en este proyecto. No lances herramientas ni scripts de navegación visual a menos que el usuario lo solicite explícitamente.

### 6.3 Uso de CodeGraph

- Antes de realizar búsquedas a ciegas, utiliza el MCP `codegraph` (`codegraph_explore`).
- Si creas nuevos módulos o rutas, sincroniza el índice ejecutando:

  ```bash
  codegraph sync /home/ivan/software-dev/ivandev
  ```

### 6.4 Estilo de Código y Comentarios

- **Lenguaje:** Todo el código, comentarios y documentación técnica deben redactarse en **español**.
- **Comentarios de 1 sola línea:** Concisos, directos y explicativos del _por qué_, sin bloques redundantes.
- **Tipado estricto:** Prohibido el uso de `any`; definir interfaces o types explícitos para props, modelos y respuestas de API.
- **Copy:** nunca escribas texto visible en el JSX; usa `m.clave()` desde `messages/`.
- **Iconos:** Lucide para UI; mdi (`icon-[mdi--...]`) solo para logos de marca.

### 6.5 Sistema de Diseño

- **Componentes base:** usa `Section`, `SectionHeader`, `Chip`, `Button`, `Field`, `RichText` y `SocialLinks` antes de escribir markup nuevo.
- **Radios:** tarjetas `rounded-2xl`, tiles de Skills `rounded-lg`, chips `rounded-md`, botones e inputs `rounded-lg`.
- **Chips:** siempre en mono 11 px (`Chip`), con tono `default` o `accent`.
- **Acento:** solo en CTA, enlace activo, chip destacado y foco. Nunca en viñetas ni títulos completos.
- **Sombras:** una sola (`shadow-sm`). Prohibidos los glow y `shadow-xl`.
- **Foco visible:** todo elemento interactivo lleva `focus-visible:ring-2 ring-accent`.
- **Radios de sección:** una sección usa `Section`, que ya aplica contenedor, padding fluido, divisor y animación.

### 6.6 Responsive

- **Mobile-first:** los estilos base son móvil; se amplían con `sm:`, `md:` y `lg:`.
- **Dos columnas solo desde `lg`** (1024 px). En tablet todo va apilado.
- **Contenedor:** `max-w-6xl 2xl:max-w-7xl` con `px-4 sm:px-6 lg:px-8`.
- **Tipografía:** usa los tokens `text-h1`, `text-h2` y `py-section` de `index.css`; no repitas escalas con breakpoints.
- **Táctil:** interactivos con `min-h-11` (44 px) en móvil.

### 6.7 Tests

- Los tests de frontend viven junto al código (`*.test.tsx`) y usan Vitest + Testing Library con jsdom.
- Los tests de backend viven en **`tests/functions/`**, nunca dentro de `functions/`: cualquier archivo en ese directorio se despliega como ruta de Pages.
- Los tests de backend declaran `// @vitest-environment node`.
- Al agregar lógica en `functions/`, agrega su test: validadores, servicios y handler.
- La cobertura se revisa con `bun run test:coverage`; el reporte HTML queda en `coverage/` (ignorado por git).

### 6.8 Flujo de Git y Despliegues

- **PROHIBIDO realizar commits o push sin la confirmación y aprobación explícita del usuario.**
- **Flujo de ramas:** Todo desarrollo se realiza en la rama `develop`. El merge a `main` se realiza únicamente tras aprobación del usuario, desplegándose automáticamente vía CI/CD.
- **Mensajes de commit:** Seguir _Conventional Commits_ en minúsculas y español (`feat: ...`, `fix: ...`, `chore: ...`, `docs: ...`, `refactor: ...`).
