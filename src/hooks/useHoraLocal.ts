// React
import { useEffect, useState } from "react";

const ZONA = "America/Mexico_City";

const formatear = () =>
	new Intl.DateTimeFormat("es-MX", {
		hour: "2-digit",
		minute: "2-digit",
		hour12: false,
		timeZone: ZONA,
	}).format(new Date());

// useHoraLocal
// Devuelve la hora local del autor en formato HH:mm y la refresca cada minuto
export const useHoraLocal = () => {
	const [hora, setHora] = useState(formatear);

	useEffect(() => {
		const id = setInterval(() => setHora(formatear()), 30_000);
		return () => clearInterval(id);
	}, []);

	return hora;
};
