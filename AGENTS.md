# Portafolio Web V4 — Rules

## Stack

| Capa | Tecnología |
|---|---|
| Framework | React 19 + Vite 8 |
| CSS | Tailwind CSS 4 + Tailwind4 Icons (Iconify) |
| Routing | React Router v7 |
| Email | Resend SDK |
| CAPTCHA | Cloudflare Turnstile |
| Lint/Format | Biome 2 |
| Tests | Vitest + jsdom + @testing-library/react |
| Runtime | Bun 1.3 |
| Deploy | Cloudflare Pages (Wrangler) |

## Commands

| Comando | Descripción |
|---|---|
| `bun run dev` | Dev server (Vite) |
| `bun run build` | Build producción |
| `bun run preview` | Preview del build |
| `bun run lint` | Biome lint (auto-fix) |
| `bun run check` | Biome check (lint + format + organize) |
| `bun run test` | Vitest |

## Project Structure

```
src/
├── components/
│   ├── Footer/        # Footer.test.tsx + Footer.tsx
│   ├── Header/        # Header.test.tsx + Header.tsx
│   └── Layout/        # Layout.tsx (Header + Outlet + Footer)
├── context/           # ThemeContext (light/dark via .dark class)
├── hooks/             # useScrollAnimation (IntersectionObserver)
├── pages/
│   ├── Contacto/      # Form + Turnstile + info cards
│   ├── Experiencia/   # Timeline
│   ├── Formacion/     # Education/certifications
│   ├── Hero/          # Landing presentation
│   ├── Legal/         # Privacidad, Terminos
│   ├── NotFound/      # 404
│   ├── Proyectos/     # Project cards grid
│   ├── Skills/        # Skills by category
│   └── SobreMi/       # Bio + quick info
├── router/            # Router.tsx (lazy routes)
├── test/setup.ts      # Vitest setup (jest-dom, matchMedia, IntersectionObserver mocks)
├── App.tsx            # ThemeProvider + Router
├── index.css          # Tailwind + theme tokens + animations
└── main.tsx           # BrowserRouter + StrictMode

functions/
└── api/[[route]].ts   # Hono API (contact form)
```

## Routing

| Ruta | Página |
|---|---|
| `/` | Hero |
| `/skills` | Skills |
| `/experiencia` | Experiencia |
| `/proyectos` | Proyectos |
| `/sobre-mi` | Sobre Mi |
| `/formacion` | Formacion |
| `/contacto` | Contacto |
| `/privacidad` | Privacidad |
| `/terminos` | Terminos |
| `*` | NotFound |

## Environment Variables

| Variable | Ámbito | Uso |
|---|---|---|
| `VITE_TURNSTILE_SITE_KEY` | Cliente | Turnstile widget |
| `TURNSTILE_SECRET_KEY` | Server (c.env) | Server-side verification |
| `RESEND_API_KEY` | Server (c.env) | Email sending |
| `RESEND_TO_EMAIL` | Server (c.env) | Recipient email |
| `SITE_URL` | Build | robots.txt generation |

## Known Biome Config

- `noNonNullAssertion` suppressed on `main.tsx` (standard React pattern)
- `useExhaustiveDependencies` disabled globally (intentional pathname dep)
- `useAnchorContent` suppressed on icon-only Footer social links (aria-label is sufficient)
- CSS `@variant` directive excluded from Biome (Tailwind-specific syntax)
- Indent: tabs, Quotes: double
