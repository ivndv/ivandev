// Fragmentos con negrita delimitados por ** en los mensajes
const PARTES = /(\*\*[^*]+\*\*)/g;

type Props = {
	text: string;
	className?: string;
};

// RichText
// Convierte los segmentos **negrita** de un mensaje en spans con estilo
export const RichText = ({ text, className }: Props) => {
	return (
		<>
			{text
				.split(PARTES)
				.filter(Boolean)
				.map((parte) =>
					parte.startsWith("**") && parte.endsWith("**") ? (
						<span key={parte} className={className}>
							{parte.slice(2, -2)}
						</span>
					) : (
						parte
					),
				)}
		</>
	);
};
