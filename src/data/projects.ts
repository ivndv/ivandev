// Mensajes
import { m } from "@/paraglide/messages";

// Tipos
export type ProjectLinks = {
	demo?: string;
	docs?: string;
	github?: string;
	githubFrontend?: string;
	githubBackend?: string;
};

// Icono temático de la tarjeta
export type ProjectIcon =
	| "timer"
	| "palette"
	| "code"
	| "music"
	| "inventory"
	| "map"
	| "blog"
	| "space"
	| "services"
	| "cms";

// Proyecto individual con id inmutable
export type Project = {
	readonly id: number;
	title: string;
	icon: ProjectIcon;
	description: () => string;
	features: () => readonly string[];
	image?: string;
	tags: string[];
	links: ProjectLinks;
};

// Proyectos
export const projects: Project[] = [
	// 1. Tempo v2 (reescritura en Next.js sobre Workers)
	{
		id: 10,
		title: "Tempo v2",
		icon: "timer",
		description: m.project_tempo_v2,
		features: () => [
			m.project_tempo_v2_f1(),
			m.project_tempo_v2_f2(),
			m.project_tempo_v2_f3(),
			m.project_tempo_v2_f4(),
			m.project_tempo_v2_f5(),
		],
		image: "https://assets.mgdc.site/ivandev/tempo2.png",
		tags: [
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"next-intl",
			"Zod",
			"Polar",
			"Vitest",
			"Supabase",
			"Dexie",
			"Cloudflare",
			"Redis",
		],
		links: {
			demo: "https://tempo2.mgdc.site",
			github: "https://github.com/ivndv/tempo-v2",
		},
	},
	// 2. Palette Lab (Vue + FastAPI)
	{
		id: 11,
		title: "Palette Lab",
		icon: "palette",
		description: m.project_palette_lab,
		features: () => [
			m.project_palette_lab_f1(),
			m.project_palette_lab_f2(),
			m.project_palette_lab_f3(),
			m.project_palette_lab_f4(),
			m.project_palette_lab_f5(),
		],
		image: "https://assets.mgdc.site/ivandev/palettelab.png",
		tags: [
			"Vue",
			"Vite",
			"TypeScript",
			"Pinia",
			"Vue Router",
			"Sass",
			"FastAPI",
			"Python",
			"Groq (IA)",
			"Turnstile",
			"Vitest",
			"Supabase",
			"Cloudflare",
			"Redis",
		],
		links: {
			demo: "https://palettelab.mgdc.site",
			docs: "https://api-palettelab.fluxdv.icu/docs",
			githubFrontend: "https://github.com/ivndv/palette-lab",
			githubBackend: "https://github.com/ivndv/palette-lab-api",
		},
	},
	// 3. Codebook (frontend + API de IA)
	{
		id: 9,
		title: "Codebook",
		icon: "code",
		description: m.project_codebook,
		features: () => [
			m.project_codebook_f1(),
			m.project_codebook_f2(),
			m.project_codebook_f3(),
			m.project_codebook_f4(),
			m.project_codebook_f5(),
		],
		image: "https://assets.mgdc.site/ivandev/codebook-v2.png",
		tags: [
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"Python",
			"FastAPI",
			"Groq (IA)",
			"Supabase",
			"Vercel",
			"Railway",
			"Redis",
		],
		links: {
			demo: "https://codebook-three.vercel.app",
			docs: "https://codebook-api-production-0be5.up.railway.app/docs",
			githubFrontend: "https://github.com/ivndv/codebook",
			githubBackend: "https://github.com/ivndv/codebook-api",
		},
	},
	// 2. Fluxbeats
	{
		id: 1,
		title: "Fluxbeats",
		icon: "music",
		description: m.project_fluxbeats,
		features: () => [
			m.project_fluxbeats_f1(),
			m.project_fluxbeats_f2(),
			m.project_fluxbeats_f3(),
			m.project_fluxbeats_f4(),
			m.project_fluxbeats_f5(),
		],
		image: "https://assets.mgdc.site/ivandev/fluxbeats.png",
		tags: [
			"React",
			"Vite",
			"TypeScript",
			"Tailwind CSS",
			"React Router",
			"Zustand",
			"Hono",
			"Turnstile",
			"Resend",
			"Cloudflare",
		],
		links: {
			demo: "https://fluxbeats.mgdc.site/",
			github: "https://github.com/ivndv/fluxbeats",
		},
	},
	// 3. Nemi (anteriormente Gestor de activos)
	{
		id: 3,
		title: "Nemi",
		icon: "inventory",
		description: m.project_nemi,
		features: () => [
			m.project_nemi_f1(),
			m.project_nemi_f2(),
			m.project_nemi_f3(),
			m.project_nemi_f4(),
			m.project_nemi_f5(),
		],
		image: "https://assets.mgdc.site/ivandev/nemi.png",
		tags: [
			"Angular",
			"TypeScript",
			"Node.js",
			"Express",
			"Drizzle ORM",
			"MySQL",
			"Cloudflare",
		],
		links: {
			demo: "https://nemi.mgdc.site/",
			docs: "https://nemi-api.fluxdv.icu/api/docs",
			githubFrontend: "https://github.com/ivndv/nemi",
			githubBackend: "https://github.com/ivndv/nemi-api",
		},
	},
	// 4. Tempo
	{
		id: 5,
		title: "Tempo",
		icon: "timer",
		description: m.project_tempo,
		features: () => [
			m.project_tempo_f1(),
			m.project_tempo_f2(),
			m.project_tempo_f3(),
			m.project_tempo_f4(),
		],
		image: "https://assets.mgdc.site/ivandev/tempo-2026.png",
		tags: [
			"Astro",
			"React",
			"Tailwind CSS",
			"Paraglide",
			"Hono",
			"Better Auth",
			"Drizzle ORM",
			"Turnstile",
			"Resend",
			"Zod",
			"Cloudflare",
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
		icon: "map",
		description: m.project_mxwatch,
		features: () => [
			m.project_mxwatch_f1(),
			m.project_mxwatch_f2(),
			m.project_mxwatch_f3(),
			m.project_mxwatch_f4(),
			m.project_mxwatch_f5(),
		],
		image: "https://assets.mgdc.site/ivandev/mxwatch-v2.png",
		tags: [
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"Paraglide",
			"Zustand",
			"@visx/geo",
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
		icon: "blog",
		description: m.project_fluxblog,
		features: () => [
			m.project_fluxblog_f1(),
			m.project_fluxblog_f2(),
			m.project_fluxblog_f3(),
			m.project_fluxblog_f4(),
			m.project_fluxblog_f5(),
		],
		image: "https://assets.mgdc.site/ivandev/fluxdev.png",
		tags: ["Astro", "React", "Tailwind CSS", "Pagefind", "Hono", "Cloudflare"],
		links: {
			demo: "https://fluxdev-nebula.mgdc.site/",
			github: "https://github.com/ivndv/fluxdev-blog",
		},
	},
	// 7. Cosmos (anteriormente Space App V3)
	{
		id: 7,
		title: "Cosmos",
		icon: "space",
		description: m.project_cosmos,
		features: () => [
			m.project_cosmos_f1(),
			m.project_cosmos_f2(),
			m.project_cosmos_f3(),
			m.project_cosmos_f4(),
		],
		image: "https://assets.mgdc.site/ivandev/cosmos.png",
		tags: [
			"React",
			"Vite",
			"TypeScript",
			"React Router",
			"TanStack Query",
			"Tailwind CSS",
			"Hono",
			"API NASA",
			"Cloudflare",
		],
		links: {
			demo: "https://cosmos.mgdc.site",
			github: "https://github.com/ivndv/cosmos",
		},
	},
	// 8. Portafolio Web
	{
		id: 6,
		title: "Portafolio Web",
		icon: "services",
		description: m.project_portfolio,
		features: () => [
			m.project_portfolio_f1(),
			m.project_portfolio_f2(),
			m.project_portfolio_f3(),
			m.project_portfolio_f4(),
			m.project_portfolio_f5(),
		],
		image: "https://assets.mgdc.site/ivandev/ivandev-srvcs.png",
		tags: [
			"Astro",
			"React",
			"Tailwind CSS",
			"DaisyUI",
			"Paraglide",
			"Hono",
			"Resend",
			"Cloudflare",
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
		icon: "cms",
		description: m.project_fluxdev,
		features: () => [
			m.project_fluxdev_f1(),
			m.project_fluxdev_f2(),
			m.project_fluxdev_f3(),
			m.project_fluxdev_f4(),
			m.project_fluxdev_f5(),
		],
		image: "https://assets.mgdc.site/ivandev/fluxdev-nova.png",
		tags: [
			"Astro",
			"React",
			"Tailwind CSS",
			"Paraglide",
			"Pagefind",
			"Payload CMS",
			"Docker",
			"PostgreSQL",
			"Cloudflare",
		],
		links: {
			demo: "https://fluxdev-nova.mgdc.site/",
			docs: "https://fluxblog-api.fluxdv.icu/api/docs",
			githubFrontend: "https://github.com/ivndv/fluxblog-ui",
			githubBackend: "https://github.com/ivndv/fluxblog-api",
		},
	},
];
