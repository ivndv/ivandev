// Iconos
import { ArrowUpRight, GraduationCap } from "lucide-react";
// Mensajes
import { m } from "@/paraglide/messages";

type Variante = "texto" | "icono";

type Props = {
	variante?: Variante;
	className?: string;
};

// Fuente única de redes: URL, etiqueta e icono
const REDES = [
	{
		id: "github",
		href: "https://github.com/ivndv",
		label: m.social_github,
		icono: (
			<span
				className="icon-[mdi--github] text-base text-text-main"
				aria-hidden="true"
			/>
		),
	},
	{
		id: "linkedin",
		href: "https://www.linkedin.com/in/ivan-cruz-1906mx",
		label: m.social_linkedin,
		icono: (
			<span
				className="icon-[mdi--linkedin] text-base text-text-main"
				aria-hidden="true"
			/>
		),
	},
	{
		id: "discord",
		href: "https://discord.com/users/ivndv1",
		label: m.social_discord,
		icono: (
			<span
				className="icon-[mdi--discord] text-base text-text-main"
				aria-hidden="true"
			/>
		),
	},
	{
		id: "alura",
		href: "https://app.aluracursos.com/user/ivndv1",
		label: m.social_alura,
		icono: (
			<span
				className="font-bold text-base text-text-main leading-none"
				aria-hidden="true"
			>
				a
			</span>
		),
	},
	{
		id: "codigofacilito",
		href: "https://codigofacilito.com/usuarios/ivndv",
		label: m.social_codigofacilito,
		icono: (
			<GraduationCap size={15} className="text-text-main" aria-hidden="true" />
		),
	},
];

const foco =
	"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-page-bg rounded-lg";

// SocialLinks
// Enlaces a redes en dos variantes: con texto (hero) o solo icono (footer)
export const SocialLinks = ({ variante = "texto", className = "" }: Props) => (
	<div className={`flex flex-wrap items-center gap-x-4 gap-y-2 ${className}`}>
		{REDES.map((red) =>
			variante === "texto" ? (
				<a
					key={red.id}
					href={red.href}
					target="_blank"
					rel="noopener noreferrer"
					className={`flex items-center gap-1.5 font-mono text-[11px] sm:text-xs font-medium text-text-muted hover:text-accent transition-colors ${foco}`}
				>
					{red.icono} {red.label()} <ArrowUpRight size={12} />
				</a>
			) : (
				<a
					key={red.id}
					href={red.href}
					target="_blank"
					rel="noopener noreferrer"
					title={red.label()}
					className={`inline-flex items-center justify-center min-h-11 min-w-11 p-2.5 bg-accent/5 hover:bg-accent/10 text-text-muted hover:text-accent transition-colors ${foco}`}
				>
					<span className="sr-only">{red.label()}</span>
					{red.icono}
				</a>
			),
		)}
	</div>
);
