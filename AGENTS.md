# AGENTS.md — Guía para Agentes en Portafolio Web (ivandev)

Guía operativa y técnica para agentes de Inteligencia Artificial que colaboren en el desarrollo, mantenimiento y optimización del proyecto **ivandev**.

---

## 1. Visión General del Proyecto

**ivandev** es el portafolio web personal e interactivo de **Ivan Cruz**, diseñado para presentar su perfil, experiencia laboral, catálogo de proyectos técnicos y habilidades en Desarrollo Full Stack, DevOps y Cloud Computing.

* **Propósito:** Ofrecer una experiencia fluida, rápida y accesible con navegación SPA instantánea, soporte multiidioma bilingüe (español e inglés), modo oscuro/claro persistente y backend serverless en el Edge con formulario de contacto seguro.
* **Dominio en Producción:** [https://portafolioweb.mgdc.site](https://portafolioweb.mgdc.site)
* **Repositorio en GitHub:** [https://github.com/ivndv/ivandev](https://github.com/ivndv/ivandev)

---

## 2. Antes de Tocar Código (Contexto con CodeGraph)

* **Uso del MCP CodeGraph:** Antes de hacer búsquedas masivas de texto (`grep`), listar directorios o leer múltiples archivos a ciegas, invoca la herramienta MCP `codegraph_explore` indicando `projectPath: "/home/ivan/software-dev/ivandev"`. Te proveerá el grafo de llamadas, impacto y código verbatim de los símbolos en una sola llamada eficiente.
* **Estado y Sincronización:**
  ```bash
  # Verificar el estado del índice
  codegraph status /home/ivan/software-dev/ivandev

  # Sincronizar cambios en el árbol de archivos
  codegraph sync /home/ivan/software-dev/ivandev
  ```

---

## 3. Stack Tecnológico

| Capa | Tecnología | Versión / Detalle |
| :--- | :--- | :--- |
| **Runtime & Gestor** | **Bun** | `v1.4.x` (`bun.lock`) |
| **Lenguaje** | **TypeScript** | `^7.0.2` (Modo estricto con `tsconfig.json`) |
| **Frontend & UI** | **React 19** | `react ^19.3.1`, `react-dom ^19.3.1` |
| **Bundler** | **Vite 8** | `vite ^8.3.4`, `@vitejs/plugin-react-swc ^4.3.3` |
| **Enrutamiento** | **React Router 7** | `react-router-dom ^7.18.4` (Lazy loading por vista) |
| **Estilos** | **Tailwind CSS 4** | `@tailwindcss/vite ^4.3.3`, `tailwindcss ^4.3.3` |
| **Iconos** | **Lucide React** + **Iconify** | `lucide-react ^1.58.0`, `@iconify/tailwind4 ^1.2.3` |
| **Estado Global** | **Zustand 5** | `zustand ^5.0.15` (Slices de tema e idioma en `src/store/`) |
| **Backend / Edge API** | **Hono 4** en Cloudflare Pages Functions | `hono ^4.13.13` (`functions/api/[[route]].ts`) |
| **Validación & Sanitización** | **Zod 4** | `zod ^4.6.7` (`functions/_validators/`) |
| **Anti-Bot / Captcha** | **Cloudflare Turnstile** | `@marsidev/react-turnstile ^1.6.2` (Validación server-side) |
| **Servicio de Email** | **Resend** | `resend ^6.34.1` (Envío transaccional) |
| **Linter & Formatter** | **Biome 2** | `@biomejs/biome ^2.5.15` (`biome.json`) |
| **Testing** | **Vitest 5** + **Testing Library** | `vitest ^5.0.5`, `@testing-library/react ^16.3.3`, `jsdom ^30.1.3` |
| **Infraestructura & Edge** | **Cloudflare Pages** | `wrangler ^4.151.1` (`wrangler.jsonc`) |
| **CI/CD** | **GitHub Actions** | Workflow `.github/workflows/ci-cd.yml` (lint read-only, unit tests y deploy) |

---

## 4. Estructura del Código

```plaintext
ivandev/
├── .github/
│   ├── actions/setup/          → Acción compuesta para inicializar Bun y dependencias
│   └── workflows/ci-cd.yml     → Pipeline de CI/CD (lint, test, build, deploy)
│
├── functions/                  → Backend Edge (Cloudflare Pages Functions)
│   ├── _services/              → Servicios desacoplados (emailService, turnstileService)
│   ├── _validators/            → Esquemas Zod y sanitizadores de entrada (contactSchema)
│   └── api/
│       └── [[route]].ts        → Entrypoint Hono con endpoint POST /api/contact
│
├── public/                     → Assets estáticos públicos (logo, favicon, robots.txt, sitemap.xml)
│
├── src/                        → Frontend React 19 SPA
│   ├── components/             → Componentes comunes reutilizables
│   │   ├── Footer/             → Pie de página con enlaces y redes
│   │   ├── Header/             → Barra de navegación, selectores de idioma y tema
│   │   └── Layout/             → Estructura base con Header, Outlet y Footer
│   ├── data/                   → Datos estáticos estructurados (proyectos, etc.)
│   ├── hooks/                  → Custom hooks (i18n, useScrollAnimation)
│   ├── i18n/                   → Diccionarios bilingües (`es.ts`, `en.ts`) y contexto
│   ├── pages/                  → Vistas principales (Lazy loaded)
│   │   ├── Contacto/           → Formulario de contacto con Turnstile y feedback
│   │   ├── Experiencia/        → Línea de tiempo profesional
│   │   ├── Formacion/          → Certificaciones y estudios
│   │   ├── Hero/               → Landing presentation con dos columnas y CTA
│   │   ├── Legal/              → Términos y Privacidad
│   │   ├── NotFound/           → Manejo de 404
│   │   ├── Proyectos/          → Galería interactiva de proyectos
│   │   ├── Skills/             → Cuadrícula técnica por categorías
│   │   └── SobreMi/            → Biografía y filosofía de trabajo
│   ├── router/                 → Definición de rutas (`Router.tsx`)
│   ├── store/                  → Zustand stores (tema, idioma)
│   ├── index.css               → Directivas de Tailwind CSS v4 y tokens de tema
│   └── main.tsx                → Punto de entrada React con BrowserRouter y StrictMode
│
├── wrangler.jsonc              → Configuración de Cloudflare Pages
└── biome.json                  → Configuración de formateo y linting
```

---

## 5. Comandos de Desarrollo y Tooling

Todos los comandos se ejecutan con **Bun**:

```bash
# Desarrollo Frontend (Vite en localhost:5173)
bun run dev

# Desarrollo Fullstack (Build + Wrangler Pages Functions en localhost:4321)
bun run dev:full

# Compilación de producción (typecheck + vite build)
bun run build

# Previsualización del build estático
bun run preview

# Verificación de formato/lint (read-only, igual que en CI)
bun run check

# Corrección automática de formato/lint (escribe archivos)
bun run lint
bun run format

# Pruebas Unitarias con Vitest (una sola pasada)
bun run test        # alias de test:unit
bun run test:ui
```

---

## 6. Convenciones Obligatorias para Agentes

### 6.1 Regla de Oro en Ejecución de Tests y Checks
* **PROHIBIDO ejecutar tests o linter de forma reactiva tras cada pequeño cambio.** Realiza todos los cambios de código primero; corre `bun run check` (read-only) o `bun run test:unit` **una sola vez al final** cuando todo el conjunto esté listo y verificado.

### 6.2 Restricción Estricta de Herramientas
* **PROHIBIDO el uso de Playwright, Puppeteer o navegadores headless** en este proyecto. No lances herramientas ni scripts de navegación visual a menos que el usuario lo solicite explícitamente.

### 6.3 Uso de CodeGraph
* Antes de realizar búsquedas a ciegas, utiliza el MCP `codegraph` (`codegraph_explore`).
* Si creas nuevos módulos o rutas, sincroniza el índice ejecutando:
  ```bash
  codegraph sync /home/ivan/software-dev/ivandev
  ```

### 6.4 Estilo de Código y Comentarios
* **Lenguaje:** Todo el código, comentarios y documentación técnica deben redactarse en **español**.
* **Comentarios de 1 sola línea:** Concisos, directos y explicativos del *por qué*, sin bloques redundantes.
* **Tipado estricto:** Prohibido el uso de `any`; definir interfaces o types explícitos para props, modelos y respuestas de API.
* **Consistencia visual:** Todo contenedor principal de página secundaria debe mantener la clase unificada `max-w-5xl mx-auto` con padding vertical estándar `pt-32 pb-24 sm:pt-36 sm:pb-28`.

### 6.5 Flujo de Git y Despliegues
* **PROHIBIDO realizar commits o push sin la confirmación y aprobación explícita del usuario.**
* **Flujo de ramas:** Todo desarrollo se realiza en la rama `develop`. El merge a `main` se realiza únicamente tras aprobación del usuario, desplegándose automáticamente vía CI/CD.
* **Mensajes de commit:** Seguir *Conventional Commits* en minúsculas y español (`feat: ...`, `fix: ...`, `chore: ...`, `docs: ...`, `refactor: ...`).
