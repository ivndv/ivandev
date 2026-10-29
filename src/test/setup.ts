import "@testing-library/jest-dom/vitest";
// Vitest
import { beforeEach, vi } from "vitest";
// Paraglide
import { setLocale } from "@/paraglide/runtime";

// Los tests de functions/ corren en entorno node, sin DOM
const hayDom = typeof window !== "undefined";

// Restablece el idioma base antes de cada prueba
beforeEach(() => {
	if (hayDom) {
		localStorage.clear();
		setLocale("en", { reload: false });
	}
});

if (hayDom) {
	// Mock matchMedia for jsdom
	Object.defineProperty(window, "matchMedia", {
		writable: true,
		value: (query: string) => ({
			matches: false,
			media: query,
			onchange: null,
			addListener: () => {},
			removeListener: () => {},
			addEventListener: () => {},
			removeEventListener: () => {},
			dispatchEvent: () => {},
		}),
	});

	// Mock IntersectionObserver for jsdom
	class IntersectionObserverMock implements IntersectionObserver {
		readonly root: Element | Document | null = null;
		readonly rootMargin: string = "";
		readonly scrollMargin: string = "";
		readonly thresholds: ReadonlyArray<number> = [0];
		observe() {}
		unobserve() {}
		disconnect() {}
		takeRecords(): IntersectionObserverEntry[] {
			return [];
		}
	}
	Object.defineProperty(window, "IntersectionObserver", {
		writable: true,
		value: IntersectionObserverMock,
	});

	// jsdom no implementa el desplazamiento a anclas
	Element.prototype.scrollIntoView = vi.fn();
}
