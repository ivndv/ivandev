// Componentes
import { RichText } from "@/components/ui/RichText";
// Hooks
import { useSeo } from "@/hooks/useSeo";
// Mensajes
import { m } from "@/paraglide/messages";

// Terminos
const Terminos = () => {
	useSeo(m.seo_terms_title(), m.seo_terms_description());

	return (
		<div className="min-h-screen bg-page-bg text-text-main pt-32 pb-20 transition-colors duration-300">
			<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Título */}
				<h1 className="text-4xl font-bold mb-8 text-accent">
					{m.terms_title()}
				</h1>
				<section className="space-y-6 text-text-muted leading-relaxed">
					<p>{m.terms_intro()}</p>
					<h2 className="text-2xl font-semibold text-text-main mt-8">
						{m.terms_s1_title()}
					</h2>
					<p>
						<RichText
							text={m.terms_s1_body()}
							className="font-semibold text-text-main"
						/>
					</p>
					<h2 className="text-2xl font-semibold text-text-main mt-8">
						{m.terms_s2_title()}
					</h2>
					<p>{m.terms_s2_body()}</p>
					<h2 className="text-2xl font-semibold text-text-main mt-8">
						{m.terms_s3_title()}
					</h2>
					<p>{m.terms_s3_body()}</p>
				</section>
			</div>
		</div>
	);
};

export default Terminos;
