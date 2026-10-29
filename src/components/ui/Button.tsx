// React
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variante = "primary" | "secondary" | "ghost";
type Tamano = "sm" | "md";

const base =
	"inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-page-bg disabled:pointer-events-none disabled:opacity-50";

const variantes: Record<Variante, string> = {
	primary: "bg-accent text-white hover:opacity-90 shadow-sm",
	secondary: "bg-surface-border/40 text-text-main hover:bg-surface-border/60",
	ghost: "text-text-main hover:text-accent",
};

const tamanos: Record<Tamano, string> = {
	md: "min-h-10 px-5 text-[13px]",
	sm: "min-h-9 px-3 text-xs",
};

// Estilos compartidos entre botón y enlace
export const clasesBoton = (
	variante: Variante = "primary",
	tamano: Tamano = "md",
) => `${base} ${variantes[variante]} ${tamanos[tamano]}`;

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
	variante?: Variante;
	tamano?: Tamano;
	children: ReactNode;
};

// Button
export const Button = ({
	variante = "primary",
	tamano = "md",
	className = "",
	children,
	...rest
}: Props) => (
	<button
		type="button"
		className={`${clasesBoton(variante, tamano)} ${className}`}
		{...rest}
	>
		{children}
	</button>
);
