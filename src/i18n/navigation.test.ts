// Vitest
import { describe, expect, it } from "vitest";
// Navegación
import {
	hrefSeccion,
	idSeccion,
	parseLocale,
	resolverRuta,
	rutaLocalizada,
	seccionDesdeHash,
} from "./navigation";

describe("Navegación i18n", () => {
	it("deriva el idioma de la ruta", () => {
		expect(parseLocale("/")).toBe("en");
		expect(parseLocale("/privacy")).toBe("en");
		expect(parseLocale("/es")).toBe("es");
		expect(parseLocale("/es/privacidad")).toBe("es");
	});

	it("resuelve el nombre de la ruta en ambos idiomas", () => {
		expect(resolverRuta("/")).toBe("home");
		expect(resolverRuta("/es/")).toBe("home");
		expect(resolverRuta("/privacy")).toBe("privacy");
		expect(resolverRuta("/es/privacidad")).toBe("privacy");
		expect(resolverRuta("/terms")).toBe("terms");
		expect(resolverRuta("/es/terminos")).toBe("terms");
		expect(resolverRuta("/no-existe")).toBeNull();
	});

	it("traduce las rutas legales", () => {
		expect(rutaLocalizada("privacy", "en")).toBe("/privacy");
		expect(rutaLocalizada("privacy", "es")).toBe("/es/privacidad");
		expect(rutaLocalizada("terms", "es")).toBe("/es/terminos");
	});

	it("traduce las anclas de sección", () => {
		expect(idSeccion("projects", "en")).toBe("projects");
		expect(idSeccion("projects", "es")).toBe("proyectos");
		expect(hrefSeccion("about", "es")).toBe("/es#sobre-mi");
	});

	it("acepta un ancla del otro idioma", () => {
		expect(seccionDesdeHash("#proyectos")).toBe("projects");
		expect(seccionDesdeHash("#projects")).toBe("projects");
		expect(seccionDesdeHash("#sobre-mi")).toBe("about");
		expect(seccionDesdeHash("#desconocida")).toBeNull();
	});
});
