// Paraglide

// Mensajes
import { m } from "@/paraglide/messages";
import { baseLocale, type Locale } from "@/paraglide/runtime";

export type { Locale };

// Rutas localizadas de la aplicación
export const RUTAS = {
	home: { en: "/", es: "/es" },
	privacy: { en: "/privacy", es: "/es/privacidad" },
	terms: { en: "/terms", es: "/es/terminos" },
} as const;

export type RutaNombre = keyof typeof RUTAS;

// Secciones de la página única, en orden de aparición
export const SECCIONES = [
	{ key: "home", id: { en: "home", es: "inicio" }, label: m.nav_home },
	{ key: "about", id: { en: "about", es: "sobre-mi" }, label: m.nav_about },
	{ key: "skills", id: { en: "skills", es: "skills" }, label: m.nav_skills },
	{
		key: "experience",
		id: { en: "experience", es: "experiencia" },
		label: m.nav_experience,
	},
	{
		key: "projects",
		id: { en: "projects", es: "proyectos" },
		label: m.nav_projects,
	},
	{
		key: "education",
		id: { en: "education", es: "formacion" },
		label: m.nav_education,
	},
	{
		key: "contact",
		id: { en: "contact", es: "contacto" },
		label: m.nav_contact,
	},
] as const;

export type SeccionKey = (typeof SECCIONES)[number]["key"];

// Deriva el idioma de la ruta, con inglés como idioma base en la raíz
export const parseLocale = (pathname: string): Locale => {
	const segmento = pathname.split("/")[1];
	return segmento === "es" ? "es" : baseLocale;
};

// Nombre de ruta a partir de la ruta actual, o null si no existe
export const resolverRuta = (pathname: string): RutaNombre | null => {
	const normalizada = pathname.replace(/\/+$/, "") || "/";
	for (const [nombre, rutas] of Object.entries(RUTAS)) {
		if (rutas.en === normalizada || rutas.es === normalizada) {
			return nombre as RutaNombre;
		}
	}
	return null;
};

// Ruta equivalente en el idioma indicado
export const rutaLocalizada = (nombre: RutaNombre, locale: Locale) =>
	RUTAS[nombre][locale];

// Identificador DOM de una sección en el idioma indicado
export const idSeccion = (key: SeccionKey, locale: Locale) => {
	const seccion = SECCIONES.find((s) => s.key === key);
	return seccion ? seccion.id[locale] : key;
};

// Clave de sección a partir del hash de la URL, aceptando ambos idiomas
export const seccionDesdeHash = (hash: string): SeccionKey | null => {
	const limpio = decodeURIComponent(hash.replace(/^#/, ""));
	if (!limpio) return null;
	const seccion = SECCIONES.find(
		(s) => s.id.en === limpio || s.id.es === limpio,
	);
	return seccion ? seccion.key : null;
};

// URL con ancla localizada
export const hrefSeccion = (key: SeccionKey, locale: Locale) =>
	`${rutaLocalizada("home", locale)}#${idSeccion(key, locale)}`;
