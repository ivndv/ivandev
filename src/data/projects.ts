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
	// 1. Codebook (frontend + API de IA)
	{
		id: 9,
		title: "Codebook",
		description:
			"Aplicación web que usa inteligencia artificial para explicar fragmentos de código en una línea y guardarlos en una colección personal.",
		image: "https://assets.mgdc.site/ivandev/codebook.png",
		tags: [
			"Next.js",
			"TypeScript",
			"Tailwindcss",
			"Supabase",
			"Python",
			"FastAPI",
			"Groq (IA)",
			"Vercel",
			"Railway",
		],
		links: {
			demo: "https://codebook-three.vercel.app",
			docs: "https://codebook-api-production-6cfa.up.railway.app/docs",
			githubFrontend: "https://github.com/ivndv/codebook",
			githubBackend: "https://github.com/ivndv/codebook-api",
		},
	},
	// 2. Fluxbeats
	{
		id: 1,
		title: "Fluxbeats",
		description:
			"Fluxbeats es una landing page para mostrar un servicio de ventas de licencias de beats musicales libres de derechos de autor.",
		image: "https://assets.mgdc.site/ivandev/fluxbeats.png",
		tags: ["React", "Vite", "Tailwindcss", "Node.js", "Cloudflare"],
		links: {
			demo: "https://fluxbeats.mgdc.site/",
			github: "https://github.com/ivndv/fluxbeats",
		},
	},
	// 3. Nemi (anteriormente Gestor de activos)
	{
		id: 3,
		title: "Nemi",
		description:
			"Aplicaci\u00f3n web dise\u00f1ada para centralizar y administrar los equipos f\u00edsicos de una empresa, facilitando el control de inventario y las asignaciones de personal.",
		image: "https://assets.mgdc.site/ivandev/nemi.png",
		tags: ["Angular", "TypeScript", "Node.js", "Express", "MySQL"],
		links: {
			demo: "https://nemi.mgdc.site/",
			docs: "http://nemi-api.fluxdv.icu/api/docs",
			githubFrontend: "https://github.com/ivndv/nemi",
			githubBackend: "https://github.com/ivndv/nemi-api",
		},
	},
	// 4. Tempo
	{
		id: 5,
		title: "Tempo",
		description:
			"Aplicaci\u00f3n web de productividad que ayuda a gestionar el tiempo de trabajo y estudio mediante bloques de enfoque y descansos programados.",
		image: "https://assets.mgdc.site/ivandev/tempo.png",
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
			github: "https://github.com/ivndv/tempo",
		},
	},
	// 5. MXWatch
	{
		id: 4,
		title: "MXWatch",
		description:
			"Dashboard interactivo dise\u00f1ado para visualizar y monitorear la presencia de grupos organizados en territorio mexicano a trav\u00e9s de mapas din\u00e1micos.",
		image: "https://assets.mgdc.site/ivandev/mxwatch.png",
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
			githubFrontend: "https://github.com/ivndv/mxwatch",
			githubBackend: "https://github.com/ivndv/mxwatch-api",
		},
	},
	// 6. Fluxblog (anteriormente Fluxdev Blog V1)
	{
		id: 2,
		title: "Fluxblog",
		description:
			"Fluxblog es un gestor de contenido dise\u00f1ado como un espacio personal y profesional para compartir art\u00edculos, tutoriales y experiencias sobre el desarrollo web.",
		image: "https://assets.mgdc.site/ivandev/fluxdev.png",
		tags: ["Astro", "Cloudflare", "D1 (SQLite)", "TailwindCSS"],
		links: {
			demo: "https://fluxdev-nebula.mgdc.site/",
			github: "https://github.com/ivndv/fluxdev-blog",
		},
	},
	// 7. Cosmos (anteriormente Space App V3)
	{
		id: 7,
		title: "Cosmos",
		description:
			"Plataforma interactiva que permite explorar el universo, consultar noticias astron\u00f3micas y visualizar datos sobre el sistema solar.",
		image: "https://assets.mgdc.site/ivandev/cosmos.png",
		tags: ["React", "React Router", "API NASA", "CSS Modules"],
		links: {
			demo: "https://space-app-v3.pages.dev/",
			github: "https://github.com/ivndv/cosmos",
		},
	},
	// 8. Portafolio Web
	{
		id: 6,
		title: "Portafolio Web",
		description:
			"Landing page enfocada en la presentaci\u00f3n y oferta de servicios de desarrollo de software con un dise\u00f1o moderno y captura de leads.",
		image: "https://assets.mgdc.site/ivandev/ivandev-srvcs.png",
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
	// 9. Fluxdev (anteriormente Fluxdev Blog V2)
	{
		id: 8,
		title: "Fluxdev",
		description:
			"Fluxdev es un gestor de contenido avanzado dise\u00f1ado como un espacio personal y profesional para compartir art\u00edculos, tutoriales y experiencias sobre el desarrollo web.",
		image: "https://assets.mgdc.site/ivandev/fluxdev-v2.png",
		tags: ["Astro", "React", "Payload CMS", "PostgreSQL", "Docker", "Tailwind"],
		links: {
			demo: "https://fluxdev-nova.mgdc.site/",
			docs: "https://blog-personal-fluxdev-backend.fluxdv.icu/api/docs",
			githubFrontend: "https://github.com/ivndv/fluxblog-ui",
			githubBackend: "https://github.com/ivndv/fluxblog-api",
		},
	},
];
