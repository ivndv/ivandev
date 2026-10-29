type Props = {
	title: string;
	subtitle: string;
};

// SectionHeader
// Encabezado común de sección con espaciado unificado
export const SectionHeader = ({ title, subtitle }: Props) => {
	return (
		<div className="text-center mb-12 sm:mb-16 space-y-3">
			<h2 className="text-h2 font-extrabold tracking-tight text-text-main">
				{title}
			</h2>
			<p className="text-text-muted text-sm sm:text-base max-w-xl mx-auto font-normal leading-relaxed">
				{subtitle}
			</p>
		</div>
	);
};
