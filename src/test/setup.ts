import "@testing-library/jest-dom";

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
