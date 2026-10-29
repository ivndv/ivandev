// React
import type { ChangeEvent } from "react";

type Props = {
	id: string;
	label: string;
	value: string;
	onChange: (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => void;
	onBlur?: () => void;
	type?: string;
	placeholder?: string;
	required?: boolean;
	multiline?: boolean;
	rows?: number;
	error?: string;
};

const clasesCampo =
	"w-full px-3.5 py-2 rounded-lg bg-page-bg/40 border border-surface-border/70 text-[13px] text-text-main placeholder:text-text-muted/50 hover:border-surface-border focus:border-text-muted/70 focus:bg-page-bg/80 focus:outline-none focus:ring-1 focus:ring-surface-border transition-all duration-200";

// Field
// Campo de formulario con label asociado, estado inválido y mensaje de error
export const Field = ({
	id,
	label,
	value,
	onChange,
	onBlur,
	type = "text",
	placeholder,
	required = false,
	multiline = false,
	rows = 5,
	error,
}: Props) => {
	const idError = `${id}-error`;

	return (
		<div className="space-y-1.5">
			<label
				htmlFor={id}
				className="block text-[11px] font-mono uppercase tracking-wider text-text-muted/70"
			>
				{label}
			</label>

			{multiline ? (
				<textarea
					id={id}
					rows={rows}
					value={value}
					onChange={onChange}
					onBlur={onBlur}
					required={required}
					placeholder={placeholder}
					aria-invalid={error ? true : undefined}
					aria-describedby={error ? idError : undefined}
					className={`${clasesCampo} resize-none`}
				/>
			) : (
				<input
					id={id}
					type={type}
					value={value}
					onChange={onChange}
					onBlur={onBlur}
					required={required}
					placeholder={placeholder}
					aria-invalid={error ? true : undefined}
					aria-describedby={error ? idError : undefined}
					className={clasesCampo}
				/>
			)}

			{error && (
				<p id={idError} className="text-xs text-red-400">
					{error}
				</p>
			)}
		</div>
	);
};
