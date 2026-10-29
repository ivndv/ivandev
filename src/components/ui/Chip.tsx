// React
import type { ReactNode } from "react";

type Props = {
	children: ReactNode;
	// El acento se reserva para lo destacado
	tono?: "default" | "accent";
};

// Chip
// Etiqueta técnica en mono, con dos tonos permitidos
export const Chip = ({ children, tono = "default" }: Props) => (
	<span
		className={`inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-[11px] font-medium leading-none ${
			tono === "accent"
				? "border-accent/20 bg-accent-muted text-accent"
				: "border-surface-border/60 bg-surface-border/30 text-text-muted"
		}`}
	>
		{children}
	</span>
);
