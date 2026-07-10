import { socials } from "../data/socials";
import { ContactItem } from "./socials-item";

export const SocialsSection = () => {
	return (
		<section className="flex flex-col gap-8 py-6 mt-10 lg:py-8 w-full mb-4">
			<h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-accent font-semibold uppercase text-center">
				Contato & Redes
			</h2>

			<p className="mx-auto max-w-2xl text-center leading-7 text-gray-300">
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