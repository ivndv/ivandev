// Tipos
export type ProjectLinks = {
  demo?: string;
  docs?: string;
  github?: string;
  githubFrontend?: string;
  githubBackend?: string;
};

// Proyecto individual con id inmutable
export type Project = {
  readonly id: number;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  links: ProjectLinks;
};

// Proyectos
export const projects: Project[] = [
  // Fluxbeats
  {
    id: 1,
    title: "Fluxbeats",
    description:
      "Fluxbeats es una landing page para mostrar un servicio de ventas de licencias de beats musicales libres de derechos de autor.",
    image: "https://portafolioweb.mgdc.site/fluxbeats.png",
    tags: ["React", "Vite", "Tailwindcss", "Node.js", "Cloudflare"],
    links: {
      demo: "https://fluxbeats.mgdc.site/",
      github: "https://github.com/ivndv/fluxbeats",
    },
  },
  // Fluxdev Blog V1
  {
    id: 2,
    title: "Fluxdev Blog V1",
    description:
      "Fluxdev blog es un gestor de contenido dise\u00f1ado como un espacio personal y profesional para compartir art\u00edculos, tutoriales y experiencias sobre el desarrollo web.",
    image: "https://portafolioweb.mgdc.site/fluxdev.png",
    tags: ["Astro", "Cloudflare", "D1 (SQLite)", "TailwindCSS"],
    links: {
      demo: "https://fluxdev-nebula.mgdc.site/",
      github: "https://github.com/ivndv/fluxdev-blog",
    },
  },
  // Gestor de activos
  {
    id: 3,
    title: "Gestor de activos",
    description:
      "Aplicaci\u00f3n web dise\u00f1ada para centralizar y administrar los equipos f\u00edsicos de una empresa, facilitando el control de inventario y las asignaciones de personal.",
    image: "https://portafolioweb.mgdc.site/nemi.png",
    tags: ["Angular", "TypeScript", "Node.js", "Express", "MySQL"],
    links: {
      demo: "https://nemi.mgdc.site/",
      docs: "http://nemi-api.fluxdv.icu/api/docs",
      githubFrontend: "https://github.com/Ivandv19/nemi",
      githubBackend: "https://github.com/Ivandv19/nemi-api",
    },
  },
  // MXWatch
  {
    id: 4,
    title: "MXWatch",
    description:
      "Dashboard interactivo dise\u00f1ado para visualizar y monitorear la presencia de grupos organizados en territorio mexicano a trav\u00e9s de mapas din\u00e1micos.",
    image: "https://portafolioweb.mgdc.site/mxwatch.png",
    tags: [
      "Next.js",
      "D3-Geo",
      "Hono",
      "Drizzle ORM",
      "PostgreSQL",
      "Cloudflare",
    ],
    links: {
      demo: "https://mxwatch.mgdc.site",
      docs: "https://mxwatch-api.fluxdv.icu/api/docs",
      githubFrontend: "https://github.com/Ivandv19/mxwatch",
      githubBackend: "https://github.com/Ivandv19/mxwatch-api",
    },
  },
  // Tempo
  {
    id: 5,
    title: "Tempo",
    description:
      "Aplicaci\u00f3n web de productividad que ayuda a gestionar el tiempo de trabajo y estudio mediante bloques de enfoque y descansos programados.",
    image: "https://portafolioweb.mgdc.site/sinxpomodoro.png",
    tags: [
      "Astro",
      "React",
      "Hono",
      "Better Auth",
      "Drizzle ORM",
      "Cloudflare D1",
    ],
    links: {
      demo: "https://tempo.mgdc.site/",
      docs: "https://tempo.mgdc.site/api/docs",
      github: "https://github.com/Ivandv19/tempo",
    },
  },
  // Portafolio Web
  {
    id: 6,
    title: "Portafolio Web",
    description:
      "Landing page enfocada en la presentaci\u00f3n y oferta de servicios de desarrollo de software con un dise\u00f1o moderno y captura de leads.",
    image: "https://portafolioweb.mgdc.site/portafolioweb.png",
    tags: [
      "Astro",
      "React",
      "Tailwind v4",
      "DaisyUI",
      "Resend",
      "Cloudflare Pages",
    ],
    links: {
      demo: "https://web-portfolio.mgdc.site/",
      github: "https://github.com/ivndv/ivandev-srvcs",
    },
  },
  // Space App V3
  {
    id: 7,
    title: "Space App V3",
    description:
      "Plataforma interactiva que permite explorar el universo, consultar noticias astron\u00f3micas y visualizar datos sobre el sistema solar.",
    image: "https://portafolioweb.mgdc.site/cosmos.png",
    tags: ["React", "React Router", "API NASA", "CSS Modules"],
    links: {
      demo: "https://space-app-v3.pages.dev/",
      github: "https://github.com/ivndv/cosmos",
    },
  },
  // Fluxdev Blog V2
  {
    id: 8,
    title: "Fluxdev Blog V2",
    description:
      "Fluxdev blog es un gestor de contenido avanzado dise\u00f1ado como un espacio personal y profesional para compartir art\u00edculos, tutoriales y experiencias sobre el desarrollo web.",
    image: "https://portafolioweb.mgdc.site/fluxdevV2.png",
    tags: ["Astro", "React", "Payload CMS", "PostgreSQL", "Docker", "Tailwind"],
    links: {
      demo: "https://fluxdev-nova.mgdc.site/",
      docs: "https://blog-personal-fluxdev-backend.fluxdv.icu/api/docs",
      githubFrontend: "https://github.com/ivndv/fluxblog-ui",
      githubBackend: "https://github.com/ivndv/fluxblog-api",
    },
  },
];
