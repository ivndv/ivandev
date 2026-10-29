// Componentes
import { RichText } from "@/components/ui/RichText";
// Hooks
import { useSeo } from "@/hooks/useSeo";
// Mensajes
import { m } from "@/paraglide/messages";

// Privacidad
const Privacidad = () => {
	useSeo(m.seo_privacy_title(), m.seo_privacy_description());

	return (
		<div className="min-h-screen bg-page-bg text-text-main pt-32 pb-20 transition-colors duration-300">
			<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Título */}
				<h1 className="text-4xl font-bold mb-8 text-accent">
					{m.privacy_title()}
				</h1>
				<section className="space-y-6 text-text-muted leading-relaxed">
					<p>
						<RichText
							text={m.privacy_intro()}
							className="font-semibold text-text-main"
						/>
					</p>
					<h2 className="text-2xl font-semibold text-text-main mt-8">
						{m.privacy_s1_title()}
					</h2>
					<p>
						<RichText
							text={m.privacy_s1_body()}
							className="font-semibold text-text-main"
						/>
					</p>
					<h2 className="text-2xl font-semibold text-text-main mt-8">
						{m.privacy_s2_title()}
					</h2>
					<p>
						<RichText
							text={m.privacy_s2_body()}
							className="font-semibold text-text-main"
						/>
					</p>
					<h2 className="text-2xl font-semibold text-text-main mt-8">
						{m.privacy_s3_title()}
					</h2>
					<p>
						<RichText
							text={m.privacy_s3_body()}
							className="font-semibold text-text-main"
						/>
					</p>
					<h2 className="text-2xl font-semibold text-text-main mt-8">
						{m.privacy_s4_title()}
					</h2>
					<p>
						<RichText
							text={m.privacy_s4_body()}
							className="font-semibold text-text-main"
						/>
					</p>
				</section>
			</div>
		</div>
	);
};

export default Privacidad;
