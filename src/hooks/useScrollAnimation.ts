import { useEffect, useRef, useState } from "react";

/**
 * Hook Personalizado: Activa animaciones cuando los elementos entran en el viewport.
 * Usa IntersectionObserver para detectar visibilidad y disparar la clase CSS "visible".
 */
export const useScrollAnimation = (threshold = 0.1) => {
	const ref = useRef<HTMLElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			},
			{ threshold },
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => observer.disconnect();
	}, [threshold]);

	return { ref, isVisible };
};
