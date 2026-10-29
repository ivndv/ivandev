// Iconos
import {
	Accessibility,
	Blocks,
	Bot,
	Box,
	Brain,
	Cloud,
	Code2,
	Cpu,
	Database,
	FlaskConical,
	Gauge,
	GitBranch,
	Globe,
	Hash,
	Image,
	Layout,
	Paintbrush,
	Palette,
	RefreshCw,
	Server,
	ShieldCheck,
	Smartphone,
	Sparkles,
	Terminal,
	Users,
	Waypoints,
	Zap,
} from "lucide-react";
// Componentes
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
// Mensajes
import { m } from "@/paraglide/messages";

// Skills
const Skills = () => {
	// Categorías de habilidades
	const skillCategories = [
		{
			title: m.skills_cat_frontend(),
			skills: [
				{ name: "HTML5", icon: <Layout size={20} /> },
				{ name: "CSS3", icon: <Palette size={20} /> },
				{ name: "Sass & SCSS", icon: <Paintbrush size={20} /> },
				{ name: "JavaScript", icon: <Code2 size={20} /> },
				{ name: "TypeScript", icon: <Code2 size={20} /> },
				{ name: "React", icon: <Cpu size={20} /> },
				{ name: "Zustand", icon: <Blocks size={20} /> },
				{ name: "Tailwind CSS", icon: <Palette size={20} /> },
				{ name: "Astro", icon: <Zap size={20} /> },
				{ name: "Angular", icon: <Layout size={20} /> },
				{ name: "Vue", icon: <Layout size={20} /> },
				{ name: "Next.js", icon: <Globe size={20} /> },
			],
		},
		{
			title: m.skills_cat_backend(),
			skills: [
				{ name: "Node.js", icon: <Server size={20} /> },
				{ name: "Express", icon: <Server size={20} /> },
				{ name: "Hono", icon: <Server size={20} /> },
				{ name: "MySQL", icon: <Database size={20} /> },
				{ name: "PostgreSQL", icon: <Database size={20} /> },
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
		{
			title: m.skills_cat_tools(),
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
		{
			title: m.skills_cat_cloud(),
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
		{
			title: m.skills_cat_testing(),
			skills: [
				{ name: "Vitest", icon: <FlaskConical size={20} /> },
				{ name: "Jest", icon: <FlaskConical size={20} /> },
				{ name: "React Testing Library", icon: <ShieldCheck size={20} /> },
				{ name: "Vue Test Utils", icon: <Layout size={20} /> },
				{ name: "Playwright", icon: <Globe size={20} /> },
				{ name: "pytest", icon: <FlaskConical size={20} /> },
				{ name: "httpx", icon: <Globe size={20} /> },
			],
		},
		{
			title: m.skills_cat_quality(),
			skills: [
				{ name: "axe-core (a11y)", icon: <Accessibility size={20} /> },
				{ name: "Visual Regression", icon: <Image size={20} /> },
				{ name: "Test Coverage", icon: <Gauge size={20} /> },
				{ name: "Snyk", icon: <ShieldCheck size={20} /> },
				{ name: "ruff", icon: <Terminal size={20} /> },
			],
		},
		{
			title: m.skills_cat_learning(),
			skills: [
				{ name: "C#", icon: <Hash size={20} /> },
				{ name: ".NET", icon: <Box size={20} /> },
				{ name: "React Native", icon: <Smartphone size={20} /> },
				{ name: "Flask", icon: <Server size={20} /> },
				{ name: "MongoDB", icon: <Database size={20} /> },
				{ name: "TanStack Query", icon: <RefreshCw size={20} /> },
				{ name: "GraphQL", icon: <Waypoints size={20} /> },
				{ name: "AWS", icon: <Cloud size={20} /> },
				{ name: "Java", icon: <Code2 size={20} /> },
				{ name: "Google Cloud", icon: <Cloud size={20} /> },
			],
		},
		{
			title: m.skills_cat_ai(),
			skills: [
				{ name: "Claude", icon: <Brain size={20} /> },
				{ name: "ChatGPT", icon: <Bot size={20} /> },
				{ name: "GitHub Copilot", icon: <Sparkles size={20} /> },
				{ name: "OpenCode", icon: <Terminal size={20} /> },
				{ name: "Gemini", icon: <Sparkles size={20} /> },
			],
		},
		{
			title: m.skills_cat_a11y(),
			skills: [{ name: "WCAG / ARIA", icon: <Users size={20} /> }],
		},
		{
			title: m.skills_cat_soft(),
			skills: [
				{ name: m.skills_soft_1(), icon: <Users size={20} /> },
				{ name: m.skills_soft_2(), icon: <Brain size={20} /> },
				{ name: m.skills_soft_3(), icon: <Users size={20} /> },
				{ name: m.skills_soft_4(), icon: <Zap size={20} /> },
				{ name: m.skills_soft_5(), icon: <Brain size={20} /> },
				{ name: m.skills_soft_6(), icon: <Brain size={20} /> },
				{ name: m.skills_soft_7(), icon: <Users size={20} /> },
			],
		},
	];

	return (
		<Section seccion="skills">
			<SectionHeader title={m.skills_title()} subtitle={m.skills_subtitle()} />

			{/* Categorías */}
			<div className="space-y-10">
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

						{/* Grid de tarjetas técnicas compactas */}
						<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-3.5">
							{category.skills.map((skill) => (
								<div
									key={skill.name}
									className="group relative bg-surface-bg border border-surface-border rounded-lg min-h-[76px] sm:min-h-[82px] py-3 sm:py-3.5 px-2 sm:px-2.5 flex flex-col items-center justify-center text-center gap-2 sm:gap-2.5 transition-all duration-200 hover:border-accent hover:-translate-y-0.5"
								>
									<div className="text-text-muted group-hover:text-accent transition-colors duration-200 [&_svg]:w-4.5 [&_svg]:h-4.5 sm:[&_svg]:w-5 sm:[&_svg]:h-5">
										{skill.icon}
									</div>
									<h4 className="font-mono font-medium text-text-main text-[11px] sm:text-xs leading-tight">
										{skill.name}
									</h4>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</Section>
	);
};

export default Skills;
