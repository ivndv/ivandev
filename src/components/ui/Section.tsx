// React
import type { ReactNode } from "react";
// Hooks
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
// Navegación
import { idSeccion, type SeccionKey } from "@/i18n/navigation";
// Paraglide
import { getLocale } from "@/paraglide/runtime";

type Props = {
	seccion: SeccionKey;
	children: ReactNode;
};

// Section
// Contenedor común de sección: ancla, divisor superior y animación de entrada
export const Section = ({ seccion, children }: Props) => {
	const { ref, isVisible } = useScrollAnimation(0.05);

	return (
		<section
			id={idSeccion(seccion, getLocale())}
			data-section={seccion}
			className="scroll-mt-16 py-section px-4 sm:px-6 lg:px-8 text-text-main bg-page-bg border-t border-surface-border/30 transition-colors duration-300"
		>
			<div
				ref={ref as React.RefObject<HTMLDivElement>}
				className={`w-full max-w-6xl 2xl:max-w-7xl mx-auto animate-on-scroll ${isVisible ? "visible" : ""}`}
			>
				{children}
			</div>
		</section>
	);
};
