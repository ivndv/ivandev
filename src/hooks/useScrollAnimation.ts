// React
import { useEffect, useRef, useState } from "react";

// useScrollAnimation
// Activa animaciones cuando los elementos entran al viewport mediante IntersectionObserver
export const useScrollAnimation = (threshold = 0.1) => {
	const ref = useRef<HTMLElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		// 1. Crear observer que detecta intersección
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			},
			{ threshold },
		);

		// 2. Observar el elemento referenciado
		if (ref.current) {
			observer.observe(ref.current);
		}

		// 3. Limpiar observer al desmontar
		return () => observer.disconnect();
	}, [threshold]);

	return { ref, isVisible };
};
