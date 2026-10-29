// Iconos
import { MapPin } from "lucide-react";
// Componentes
import { Chip } from "@/components/ui/Chip";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
// Mensajes
import { m } from "@/paraglide/messages";

// Experience
const Experience = () => {
	// Datos de experiencia laboral
	const experienceData = [
		{
			id: 1,
			role: m.experience_role_1(),
			company: m.experience_company_1(),
			location: m.experience_location_1(),
			date: m.experience_date_1(),
			description: m.experience_desc_1(),
			skills: [
				m.experience_skill_1_5(),
				m.experience_skill_1_6(),
				m.experience_skill_1_7(),
				m.experience_skill_1_8(),
				m.experience_skill_1_9(),
				m.experience_skill_1_10(),
				m.experience_skill_1_1(),
				m.experience_skill_1_2(),
				m.experience_skill_1_3(),
				m.experience_skill_1_4(),
			],
		},
	];

	return (
		<Section seccion="experience">
			<SectionHeader
				title={m.experience_title()}
				subtitle={m.experience_subtitle()}
			/>

			{/* Lista de experiencia */}
			<div className="space-y-6 max-w-6xl mx-auto">
				{experienceData.map((job) => (
					<article
						key={job.id}
						className="rounded-2xl border border-surface-border bg-surface-bg p-6 sm:p-7 transition-colors duration-200 hover:border-text-muted/40"
					>
						<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
							<div className="space-y-1.5">
								<div className="flex flex-wrap items-center gap-2">
									<span className="text-[11px] font-mono font-medium uppercase tracking-wider text-text-muted/60">
										{job.company}
									</span>
									<span className="text-surface-border" aria-hidden="true">
										·
									</span>
									<span className="text-xs font-mono text-text-muted/60">
										{job.date}
									</span>
								</div>
								<h3 className="text-lg sm:text-xl font-bold text-text-main tracking-tight">
									{job.role}
								</h3>
							</div>

							{/* Badge de ubicación */}
							<div className="flex-shrink-0 self-start sm:self-auto">
								<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-surface-border/30 text-text-muted border border-surface-border">
									<MapPin size={12} />
									{job.location}
								</span>
							</div>
						</div>

						<p className="text-sm text-text-muted leading-relaxed mb-6 max-w-3xl">
							{job.description}
						</p>

						{/* Tecnologías */}
						<div className="pt-5 border-t border-surface-border/50 flex flex-wrap items-center gap-2">
							<span className="text-[11px] font-mono uppercase tracking-wider text-text-muted/60 mr-2">
								{m.experience_stack_label()}:
							</span>
							{job.skills.map((skill) => (
								<Chip key={skill}>{skill}</Chip>
							))}
						</div>
					</article>
				))}
			</div>
		</Section>
	);
};

export default Experience;
