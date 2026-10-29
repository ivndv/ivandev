// Iconos
import {
	ArrowUpRight,
	Cloud,
	Code2,
	FolderGit2,
	GitBranch,
	GraduationCap,
	Languages,
	Mail,
	MapPin,
} from "lucide-react";
// React Router
import { Link } from "react-router-dom";
// Componentes
import { RichText } from "@/components/ui/RichText";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
// Navegación
import { hrefSeccion } from "@/i18n/navigation";
// Mensajes
import { m } from "@/paraglide/messages";
// Paraglide
import { getLocale } from "@/paraglide/runtime";

// About
// Perfil profesional: balance tipográfico sobrio, lista limpia de overview y pilares técnicos
const About = () => {
	const locale = getLocale();

	// 1. Pilares: la propuesta de valor en tres bloques enlazados con íconos limpios
	const pilares = [
		{
			title: m.about_pillar_full_title(),
			desc: m.about_pillar_full_desc(),
			icon: <Code2 size={22} />,
			href: hrefSeccion("skills", locale),
		},
		{
			title: m.about_pillar_devops_title(),
			desc: m.about_pillar_devops_desc(),
			icon: <GitBranch size={22} />,
			href: hrefSeccion("experience", locale),
		},
		{
			title: m.about_pillar_cloud_title(),
			desc: m.about_pillar_cloud_desc(),
			icon: <Cloud size={22} />,
			href: hrefSeccion("projects", locale),
		},
	];

	// 2. Datos rápidos: contexto personal y profesional
	type Dato = {
		label: string;
		value: string;
		icon: React.ReactNode;
		href?: string;
		mailto?: string;
	};

	const datos: Dato[] = [
		{
			label: m.about_location(),
			value: m.about_location_value(),
			icon: <MapPin size={15} className="text-text-muted" />,
		},
		{
			label: m.about_study(),
			value: m.about_study_value(),
			icon: <GraduationCap size={15} className="text-text-muted" />,
		},
		{
			label: m.about_languages(),
			value: m.about_languages_value(),
			icon: <Languages size={15} className="text-text-muted" />,
		},
		{
			label: m.about_contact_label(),
			value: m.about_contact_value(),
			icon: <Mail size={15} className="text-text-muted" />,
			mailto: m.about_contact_value(),
		},
		{
			label: m.about_cta_projects(),
			value: m.about_projects_value(),
			icon: <FolderGit2 size={15} className="text-text-muted" />,
			href: hrefSeccion("projects", locale),
		},
	];

	return (
		<Section seccion="about">
			<SectionHeader title={m.about_title()} subtitle={m.about_subtitle()} />

			<div className="space-y-4 max-w-6xl mx-auto">
				{/* Fila superior Bento: Bio (2/3) + Overview (1/3) */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
					{/* Tarjeta de Biografía / Enfoque */}
					<div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-between rounded-2xl border border-surface-border bg-surface-bg p-5 sm:p-6">
						<div className="space-y-3">
							<span className="block text-[11px] font-mono font-medium uppercase tracking-widest text-text-muted/60">
								{m.about_role_label()}
							</span>

							<p className="text-text-muted text-xs sm:text-sm leading-relaxed">
								<RichText
									text={m.about_intro()}
									className="font-medium text-text-main"
								/>
							</p>
							<p className="text-text-muted text-xs sm:text-sm leading-relaxed">
								<RichText
									text={m.about_intro_2()}
									className="font-medium text-text-main"
								/>
							</p>
						</div>

						{/* Cierre / Enfoque continuo integrado al pie de la tarjeta */}
						<div className="mt-5 pt-3.5 border-t border-surface-border/40 text-xs text-text-muted/70 leading-relaxed">
							<p>
								<RichText
									text={m.about_closing()}
									className="font-medium text-text-main"
								/>
							</p>
						</div>
					</div>

					{/* Tarjeta de Datos Rápidos (Lista limpia sin tarjetas anidadas) */}
					<div className="lg:col-span-5 xl:col-span-4 rounded-2xl border border-surface-border bg-surface-bg p-5 sm:p-6 flex flex-col justify-between">
						<div className="pb-3 border-b border-surface-border/40">
							<span className="block text-[11px] font-mono font-medium uppercase tracking-widest text-text-muted/60">
								{m.about_overview_label()}
							</span>
						</div>

						<ul className="divide-y divide-surface-border/40 my-auto">
							{datos.map((dato) => {
								const clases =
									"group flex items-center justify-between gap-3 py-2.5 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-surface-border";
								const contenido = (
									<>
										<div className="flex items-center gap-2 min-w-0">
											<span className="text-text-muted/60 group-hover:text-text-main transition-colors flex-shrink-0">
												{dato.icon}
											</span>
											<span className="text-xs text-text-muted/70 truncate">
												{dato.label}
											</span>
										</div>
										<div className="flex items-center gap-1.5 min-w-0 flex-shrink-0">
											<span className="text-xs font-medium text-text-main group-hover:text-accent transition-colors">
												{dato.value}
											</span>
											{(dato.href || dato.mailto) && (
												<ArrowUpRight
													size={13}
													className="text-text-muted/40 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
												/>
											)}
										</div>
									</>
								);

								return (
									<li key={dato.label}>
										{dato.mailto ? (
											<a href={`mailto:${dato.mailto}`} className={clases}>
												{contenido}
											</a>
										) : dato.href ? (
											<Link to={dato.href} className={clases}>
												{contenido}
											</Link>
										) : (
											<div className="flex items-center justify-between gap-3 py-2.5">
												{contenido}
											</div>
										)}
									</li>
								);
							})}
						</ul>
					</div>
				</div>

				{/* Fila inferior Bento: 3 Pilares con tipografía balanceada */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					{pilares.map((pilar) => (
						<Link
							key={pilar.title}
							to={pilar.href}
							className="group flex flex-col justify-between min-h-[145px] rounded-2xl border border-surface-border bg-surface-bg p-5 transition-all duration-200 hover:border-text-muted/40 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-surface-border"
						>
							<div className="text-text-muted/60 group-hover:text-text-main transition-colors duration-200">
								{pilar.icon}
							</div>

							<div className="mt-4 space-y-1">
								<h3 className="text-sm sm:text-base font-semibold text-text-main tracking-tight group-hover:text-accent transition-colors duration-200">
									{pilar.title}
								</h3>
								<p className="text-xs sm:text-sm text-text-muted leading-relaxed text-pretty">
									{pilar.desc}
								</p>
							</div>
						</Link>
					))}
				</div>
			</div>
		</Section>
	);
};

export default About;
