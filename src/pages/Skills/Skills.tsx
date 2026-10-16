// React

// Iconos
import {
	Bot,
	Box,
	Brain,
	Cloud,
	Code2,
	Cpu,
	Database,
	GitBranch,
	Globe,
	Layout,
	Palette,
	Server,
	ShieldCheck,
	Sparkles,
	Terminal,
	Users,
	Zap,
} from "lucide-react";
import { useEffect } from "react";
// Hooks
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslation } from "@/hooks/useTranslation";

// Skills
const Skills = () => {
	const { ref, isVisible } = useScrollAnimation(0.05);
	const t = useTranslation();

	// 1. Actualizar título SEO
	useEffect(() => {
		document.title = t.seo.skills;
	}, [t.seo.skills]);

	// Categorías de habilidades
	const skillCategories = [
		// Frontend
		{
			title: "Frontend",
			skills: [
				{ name: "HTML5", icon: <Layout size={20} /> },
				{ name: "CSS3", icon: <Palette size={20} /> },
				{ name: "JavaScript", icon: <Code2 size={20} /> },
				{ name: "TypeScript", icon: <Code2 size={20} /> },
				{ name: "React", icon: <Cpu size={20} /> },
				{ name: "Tailwind CSS", icon: <Palette size={20} /> },
				{ name: "Astro", icon: <Zap size={20} /> },
				{ name: "Angular", icon: <Layout size={20} /> },
				{ name: "Next.js", icon: <Globe size={20} /> },
			],
		},
		// Backend
		{
			title: "Backend",
			skills: [
				{ name: "Node.js", icon: <Server size={20} /> },
				{ name: "Express", icon: <Server size={20} /> },
				{ name: "Hono", icon: <Server size={20} /> },
				{ name: "MySQL", icon: <Database size={20} /> },
				{ name: "Drizzle ORM", icon: <Database size={20} /> },
				{ name: "REST APIs", icon: <Globe size={20} /> },
				{ name: "Zod", icon: <ShieldCheck size={20} /> },
				{ name: "Better Auth", icon: <ShieldCheck size={20} /> },
				{ name: "JWT", icon: <ShieldCheck size={20} /> },
				{ name: "Swagger", icon: <Globe size={20} /> },
				{ name: "Next.js (Fullstack)", icon: <Globe size={20} /> },
				{ name: "Python", icon: <Code2 size={20} /> },
				{ name: "FastAPI", icon: <Server size={20} /> },
			],
		},
		// Herramientas & Control
		{
			title: "Herramientas & Control",
			skills: [
				{ name: "Git", icon: <GitBranch size={20} /> },
				{ name: "GitHub", icon: <GitBranch size={20} /> },
				{ name: "npm / pnpm", icon: <Terminal size={20} /> },
				{ name: "Bun", icon: <Zap size={20} /> },
				{ name: "Vite", icon: <Zap size={20} /> },
				{ name: "Biome", icon: <Zap size={20} /> },
				{ name: "Postman", icon: <Globe size={20} /> },
			],
		},
		// Cloud Computing & DevOps
		{
			title: "Cloud Computing & DevOps",
			skills: [
				{ name: "Cloudflare", icon: <Cloud size={20} /> },
				{ name: "Docker", icon: <Box size={20} /> },
				{ name: "GitHub Actions", icon: <Zap size={20} /> },
				{ name: "Azure", icon: <Cloud size={20} /> },
				{ name: "Oracle Cloud", icon: <Cloud size={20} /> },
				{ name: "Supabase", icon: <Database size={20} /> },
				{ name: "Vercel", icon: <Cloud size={20} /> },
				{ name: "Railway", icon: <Cloud size={20} /> },
			],
		},
		// QA & Testing
		{
			title: "QA & Testing",
			skills: [
				{ name: "Vitest", icon: <ShieldCheck size={20} /> },
				{ name: "Jest", icon: <ShieldCheck size={20} /> },
				{ name: "React Testing", icon: <ShieldCheck size={20} /> },
			],
		},
		// En Desarrollo / Explorando
		{
			title: "En Desarrollo / Explorando",
			skills: [
				{ name: "Django", icon: <Server size={20} /> },
				{ name: "PostgreSQL", icon: <Database size={20} /> },
				{ name: "MongoDB", icon: <Database size={20} /> },
				{ name: "Vue", icon: <Layout size={20} /> },
				{ name: "AWS", icon: <Cloud size={20} /> },
				{ name: "Java", icon: <Code2 size={20} /> },
				{ name: "Google Cloud", icon: <Cloud size={20} /> },
			],
		},
		// Inteligencia Artificial
		{
			title: "Inteligencia Artificial",
			skills: [
				{ name: "Claude", icon: <Brain size={20} /> },
				{ name: "ChatGPT", icon: <Bot size={20} /> },
				{ name: "GitHub Copilot", icon: <Sparkles size={20} /> },
				{ name: "Gemini", icon: <Sparkles size={20} /> },
			],
		},
		// Accesibilidad
		{
			title: "Accesibilidad",
			skills: [{ name: "WCAG / ARIA", icon: <Users size={20} /> }],
		},
		// Habilidades Blandas
		{
			title: "Habilidades Blandas",
			skills: [
				{ name: "Trabajo en Equipo", icon: <Users size={20} /> },
				{ name: "Resolución Problemas", icon: <Brain size={20} /> },
				{ name: "Comunicación", icon: <Users size={20} /> },
				{ name: "Adaptabilidad", icon: <Zap size={20} /> },
				{ name: "Aprendizaje Activo", icon: <Brain size={20} /> },
				{ name: "Pensamiento Crítico", icon: <Brain size={20} /> },
			],
		},
	];

	return (
		<section className="min-h-screen bg-page-bg text-text-main pt-32 pb-24 sm:pt-36 sm:pb-28 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
			<div
				ref={ref as React.RefObject<HTMLDivElement>}
				className={`w-full max-w-5xl mx-auto animate-on-scroll ${isVisible ? "visible" : ""}`}
			>
				{/* Encabezado */}
				<div className="text-center mb-16 sm:mb-20 space-y-3">
					<h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-main">
						{t.skills.title}
					</h2>
					<p className="text-text-muted text-sm sm:text-base max-w-xl mx-auto font-normal leading-relaxed">
						{t.skills.subtitle}
					</p>
				</div>

				{/* Categorías */}
				<div className="space-y-12">
					{skillCategories.map((category) => (
						<div key={category.title} className="space-y-5">
							{/* Divisor de categoría */}
							<div className="flex items-center justify-center gap-4">
								<div className="h-px bg-surface-border flex-1" />
								<h3 className="text-lg sm:text-xl font-bold text-text-main whitespace-nowrap text-center px-4 tracking-tight">
									{category.title}
								</h3>
								<div className="h-px bg-surface-border flex-1" />
							</div>

							{/* Grid de cuadrados técnicos compactos */}
							<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-3.5">
								{category.skills.map((skill) => (
									<div
										key={skill.name}
										className="group relative bg-surface-bg border border-surface-border rounded-md min-h-[104px] sm:min-h-[116px] py-4 sm:py-5 px-3 sm:px-3.5 flex flex-col items-center justify-center text-center gap-2.5 transition-all duration-200 hover:border-accent hover:shadow-[0_0_12px_rgba(220,38,38,0.15)] hover:-translate-y-0.5"
									>
										<div className="text-text-muted group-hover:text-accent transition-colors duration-200 [&_svg]:w-5 [&_svg]:h-5 sm:[&_svg]:w-6 sm:[&_svg]:h-6">
											{skill.icon}
										</div>
										<h4 className="font-semibold text-text-main text-xs sm:text-sm tracking-tight leading-snug">
											{skill.name}
										</h4>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
