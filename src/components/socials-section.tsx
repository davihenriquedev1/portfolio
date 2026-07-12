import { socials } from "../data/socials";
import { ContactItem } from "./socials-item";

export const SocialsSection = () => {
	return (
		<section className="flex flex-col py-8 lg:py-10 w-full border-t border-gray-400/5" id="contact">
			<h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-accent font-semibold uppercase text-center mb-6">
				Contato & Redes
			</h2>

			<p className="mx-auto max-w-2xl md:text-center leading-7 text-gray-300 mb-5">
				Estou sempre aberto para novas oportunidades, freelas e projetos.
				Sinta-se à vontade para entrar em contato através de qualquer uma das
				plataformas abaixo.
			</p>

			<div className="grid gap-4 xs:grid-cols-2 lg:grid-cols-3">
				{socials.map((social) => {
					return (
						<ContactItem {...social} />
					);
				})}
			</div>
		</section>
	);
};