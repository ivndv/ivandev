// Componentes
import { Chip } from "@/components/ui/Chip";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
// Mensajes
import { m } from "@/paraglide/messages";

// Education
const Education = () => {
	// Datos de formación académica
	const educationData = [
		{
			id: 1,
			institution: "Código Facilito",
			title: m.education_1_title(),
			date: "Nov 2024 - Dec 2025",
			type: m.education_1_type(),
			description: m.education_1_desc(),
			skills: [
				m.education_1_skill_1(),
				m.education_1_skill_2(),
				m.education_1_skill_3(),
				m.education_1_skill_4(),
				m.education_1_skill_5(),
				m.education_1_skill_6(),
			],
			certified: true,
		},
		{
			id: 2,
			institution: "Alura Latam / Oracle Next Education",
			title: m.education_2_title(),
			date: "Jan 2024 - Oct 2024",
			type: m.education_2_type(),
			description: m.education_2_desc(),
			skills: [
				m.education_2_skill_1(),
				m.education_2_skill_2(),
				m.education_2_skill_3(),
				m.education_2_skill_4(),
				m.education_2_skill_5(),
				m.education_2_skill_6(),
			],
			certified: true,
		},
		{
			id: 3,
			institution: "CECYTEM Chimalhuacán II",
			title: m.education_3_title(),
			date: "Jun 2017 - Jun 2020",
			type: m.education_3_type(),
			description: m.education_3_desc(),
			skills: [
				m.education_3_skill_1(),
				m.education_3_skill_2(),
				m.education_3_skill_3(),
				m.education_3_skill_4(),
				m.education_3_skill_5(),
			],
			certified: true,
		},
	];

	return (
		<Section seccion="education">
			<SectionHeader
				title={m.education_title()}
				subtitle={m.education_subtitle()}
			/>

			{/* Lista de formación en estilo Linear / Minimalista con amplio respiro */}
			<div className="space-y-6 max-w-6xl mx-auto">
				{educationData.map((edu) => (
					<article
						key={edu.id}
						className="rounded-2xl border border-surface-border bg-surface-bg p-6 sm:p-7 transition-all duration-200 hover:border-text-muted/40"
					>
						<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
							<div className="space-y-1.5">
								<div className="flex flex-wrap items-center gap-2">
									<span className="text-[11px] font-mono font-medium uppercase tracking-wider text-text-muted/60">
										{edu.institution}
									</span>
									<span className="text-surface-border" aria-hidden="true">
										·
									</span>
									<span className="text-xs font-mono text-text-muted/60">
										{edu.date}
									</span>
								</div>
								<h3 className="text-lg sm:text-xl font-bold text-text-main tracking-tight">
									{edu.title}
								</h3>
							</div>

							{/* Badge de estado: completado o en curso */}
							<div className="flex-shrink-0 self-start sm:self-auto">
								{edu.certified ? (
									<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
										<span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
										{m.education_completed()}
									</span>
								) : (
									<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
										<span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
										{m.education_in_progress()}
									</span>
								)}
							</div>
						</div>

						<p className="text-sm text-text-muted leading-relaxed mb-6 max-w-3xl">
							{edu.description}
						</p>

						{/* Competencias */}
						<div className="pt-5 border-t border-surface-border/50 flex flex-wrap items-center gap-2">
							<span className="text-[11px] font-mono uppercase tracking-wider text-text-muted/60 mr-2">
								{m.education_competencies()}:
							</span>
							{edu.skills.map((skill) => (
								<Chip key={skill}>{skill}</Chip>
							))}
						</div>
					</article>
				))}
			</div>
		</Section>
	);
};

export default Education;
