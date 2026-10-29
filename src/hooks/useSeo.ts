// React
import { useEffect } from "react";

// useSeo
// Actualiza el título y la descripción del documento según el idioma activo
export const useSeo = (title: string, description: string) => {
	useEffect(() => {
		document.title = title;

		// 1. Sincronizar la meta descripción
		let meta = document.querySelector<HTMLMetaElement>(
			'meta[name="description"]',
		);
		if (!meta) {
			meta = document.createElement("meta");
			meta.name = "description";
			document.head.appendChild(meta);
		}
		meta.content = description;
	}, [title, description]);
};
