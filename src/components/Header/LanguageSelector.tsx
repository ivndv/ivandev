// Mensajes
import { m } from "@/paraglide/messages";
// Paraglide
import type { Locale } from "@/paraglide/runtime";

const IDIOMAS: Locale[] = ["en", "es"];

type Props = {
	locale: Locale;
	onChange: (locale: Locale) => void;
};

// LanguageSelector
// Selector segmentado EN | ES que navega a la ruta del idioma elegido
const LanguageSelector = ({ locale, onChange }: Props) => {
	return (
		<fieldset className="flex items-center rounded-full border border-surface-border bg-surface-bg/70 p-0.5 m-0">
			<legend className="sr-only">{m.a11y_language()}</legend>
			{IDIOMAS.map((idioma) => {
				const activo = idioma === locale;
				return (
					<button
						key={idioma}
						type="button"
						onClick={() => onChange(idioma)}
						aria-pressed={activo}
						aria-label={idioma === "en" ? "English" : "Español"}
						className={`px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full transition-colors ${
							activo
								? "bg-accent text-white"
								: "text-text-muted hover:text-text-main"
						}`}
					>
						{idioma}
					</button>
				);
			})}
		</fieldset>
	);
};

export default LanguageSelector;
