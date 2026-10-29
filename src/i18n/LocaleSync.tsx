// React
import { type ReactNode, useEffect } from "react";
// React Router
import { useLocation } from "react-router-dom";
// Paraglide
import { getLocale, setLocale } from "@/paraglide/runtime";
// Navegación
import { parseLocale } from "./navigation";

// LocaleSync
// Mantiene el idioma de Paraglide en sincronía con la ruta antes de renderizar
export const LocaleSync = ({ children }: { children: ReactNode }) => {
	const { pathname } = useLocation();
	const locale = parseLocale(pathname);

	// 1. Actualizar el idioma del runtime si la ruta cambió
	if (getLocale() !== locale) {
		setLocale(locale, { reload: false });
	}

	// 2. Reflejar el idioma en el documento
	useEffect(() => {
		document.documentElement.lang = locale;
	}, [locale]);

	return <>{children}</>;
};
