// React
import { useEffect } from "react";
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
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslation } from "@/hooks/useTranslation";

// Skills
const Skills = () => {
	const { ref, isVisible } = useScrollAnimation(0.05);
	const t = useTranslation();

	// 1. Actualizar título SEO
	useEffect(() => { document.title = t.seo.skills; }, [t.seo.skills]);

	// Categorías de habilidades
	const skillCategories = [
		// Frontend
		{
			title: "Frontend",
			description: "",
			skills: [
				{ name: "HTML5", icon: <Layout />, level: "Avanzado" },
				{ name: "CSS3", icon: <Palette />, level: "Avanzado" },
				{ name: "JavaScript", icon: <Code2 />, level: "Intermedio" },
				{ name: "TypeScript", icon: <Code2 />, level: "Intermedio" },
				{ name: "React", icon: <Cpu />, level: "Intermedio" },
				{ name: "Tailwind CSS", icon: <Palette />, level: "Intermedio" },
				{ name: "Astro", icon: <Zap />, level: "Intermedio" },
				{ name: "Angular", icon: <Layout />, level: "Intermedio" },
				{ name: "Next.js", icon: <Globe />, level: "Básico" },
			],
		},
		// Backend
		{
			title: "Backend",
			description: "",
			skills: [
				{ name: "Node.js", icon: <Server />, level: "Intermedio" },
				{ name: "Express", icon: <Server />, level: "Intermedio" },
				{ name: "Hono", icon: <Server />, level: "Intermedio" },
				{ name: "MySQL", icon: <Database />, level: "Intermedio" },
				{ name: "Drizzle ORM", icon: <Database />, level: "Intermedio" },
				{ name: "REST APIs", icon: <Globe />, level: "Intermedio" },
				{ name: "Zod", icon: <ShieldCheck />, level: "Intermedio" },
				{ name: "Better Auth", icon: <ShieldCheck />, level: "Básico" },
				{ name: "JWT", icon: <ShieldCheck />, level: "Intermedio" },
				{ name: "Swagger", icon: <Globe />, level: "Intermedio" },
				{ name: "Next.js (Fullstack)", icon: <Globe />, level: "Básico" },
			],
		},
		// Herramientas & Control
		{
			title: "Herramientas & Control",
			description: "",
			skills: [
				{ name: "Git", icon: <GitBranch />, level: "Intermedio" },
				{ name: "GitHub", icon: <GitBranch />, level: "Intermedio" },
				{ name: "npm / pnpm", icon: <Terminal />, level: "Intermedio" },
				{ name: "Bun", icon: <Zap />, level: "Intermedio" },
				{ name: "Vite", icon: <Zap />, level: "Intermedio" },
				{ name: "Biome", icon: <Zap />, level: "Intermedio" },
				{ name: "Postman", icon: <Globe />, level: "Intermedio API" },
			],
		},
		// Cloud Computing
		{
			title: "Cloud Computing",
			description: "",
			skills: [
				{ name: "Azure", icon: <Cloud />, level: "Básico" },
				{ name: "Cloudflare", icon: <Cloud />, level: "Intermedio" },
				{ name: "Oracle Cloud", icon: <Cloud />, level: "Básico" },
			],
		},
		// DevOps
		{
			title: "DevOps",
			description: "",
			skills: [
				{ name: "Docker", icon: <Box />, level: "Básico" },
				{ name: "GitHub Actions", icon: <Zap />, level: "Básico" },
			],
		},
		// En Desarrollo / Explorando
		{
			title: "En Desarrollo / Explorando",
			description: "",
			skills: [
				{ name: "Vue", icon: <Layout />, level: "Aprendiendo" },
				{ name: "Django", icon: <Server />, level: "Aprendiendo" },
				{ name: "MongoDB", icon: <Database />, level: "Aprendiendo" },
				{ name: "PostgreSQL", icon: <Database />, level: "Aprendiendo" },
				{ name: "Python", icon: <Code2 />, level: "Aprendiendo" },
				{ name: "Java", icon: <Code2 />, level: "Aprendiendo" },
				{ name: "AWS", icon: <Cloud />, level: "Aprendiendo" },
				{ name: "Google Cloud", icon: <Cloud />, level: "Aprendiendo" },
			],
		},
		// QA & Testing
		{
			title: "QA & Testing",
			description: "",
			skills: [
				{ name: "Jest", icon: <ShieldCheck />, level: "Básico" },
				{ name: "Vitest", icon: <ShieldCheck />, level: "Intermedio" },
				{ name: "React Testing", icon: <ShieldCheck />, level: "Básico" },
			],
		},
		// Accesibilidad
		{
			title: "Accesibilidad",
			description: "",
			skills: [{ name: "WCAG / ARIA", icon: <Users />, level: "Básico" }],
		},

		// Inteligencia Artificial
		{
			title: "Inteligencia Artificial",
			description: "",
			skills: [
				{ name: "ChatGPT", icon: <Bot />, level: "Intermedio" },
				{ name: "Gemini", icon: <Sparkles />, level: "Intermedio" },
				{ name: "GitHub Copilot", icon: <Sparkles />, level: "Intermedio" },
				{ name: "Claude", icon: <Brain />, level: "Intermedio" },
			],
		},

		// Habilidades Blandas
		{
			title: "Habilidades Blandas",
			description: "",
			skills: [
				{ name: "Trabajo en Equipo", icon: <Users />, level: "Intermedio" },
				{ name: "Resolución Problemas", icon: <Brain />, level: "Intermedio" },
				{ name: "Comunicación", icon: <Users />, level: "Intermedio" },
				{ name: "Adaptabilidad", icon: <Zap />, level: "Intermedio" },
				{ name: "Aprendizaje Activo", icon: <Brain />, level: "Intermedio" },
				{ name: "Pensamiento Crítico", icon: <Brain />, level: "Intermedio" },
			],
		},
	];

	return (
		<section className="min-h-screen bg-page-bg text-text-main py-20 px-4 sm:px-6 lg:px-8">
			<div
				ref={ref as React.RefObject<HTMLDivElement>}
				className={`max-w-7xl mx-auto animate-on-scroll ${isVisible ? "visible" : ""}`}
			>
				<div className="text-center mb-16 space-y-4 mt-16">
					<h2 className="text-4xl md:text-5xl font-bold tracking-tight">
						{t.skills.title}
					</h2>
					<p className="text-text-muted max-w-2xl mx-auto text-lg">
						{t.skills.subtitle}
					</p>
				</div>

				{/* Categorías */}
				<div className="space-y-16">
					{skillCategories.map((category) => (
						<div key={category.title} className="space-y-6">
							<div className="flex items-center justify-center gap-4 mb-8">
								<div className="h-px bg-text-main flex-1 rounded-full opacity-20"></div>

								<h3 className="text-2xl font-bold text-text-main whitespace-nowrap text-center px-4">
									{category.title}
								</h3>

								<div className="h-px bg-text-main flex-1 rounded-full opacity-20"></div>
							</div>

							{category.description && (
								<p className="text-sm text-text-muted -mt-6 mb-6 text-center italic">
									{category.description}
								</p>
							)}

							<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
								{category.skills.map((skill) => (
									<div
										key={skill.name}
										className="group relative bg-surface-bg border border-surface-border rounded-lg p-4 shadow-sm hover:border-accent hover:shadow-[0_0_15px_rgba(220,38,38,0.2)] hover:-translate-y-1 flex flex-col items-center justify-center gap-3 text-center"
									>
										<div className="text-text-muted group-hover:text-accent">
											{skill.icon}
										</div>

										<div>
											<h4 className="font-semibold text-text-main text-sm">
												{skill.name}
											</h4>
											<span className="text-[10px] text-text-muted group-hover:text-accent uppercase tracking-wider mt-1 block">
												{skill.level}
											</span>
										</div>
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
