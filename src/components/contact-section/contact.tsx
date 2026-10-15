import { accounts } from "../../data/accounts";
import { Account } from "./account";
import { FaWhatsapp } from "react-icons/fa";

export const Contact = () => {
	return (
		<section id="contact" className="w-full border-t border-black/10 py-12 px-4 md:px-8 bg-accent/40">
			<div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 lg:gap-12">
				<div className="flex flex-col gap-6 border-b border-black/10 pb-10 lg:flex-row lg:items-end lg:justify-between">
					<div className="max-w-3xl">
						<span className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
							<span className="h-1.5 w-1.5 rounded-full bg-accent" />
							Contato e redes sociais
						</span>

						<h2 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-black sm:text-5xl lg:text-6xl">
							Vamos tirar sua
							<span className="text-accent"> ideia do papel.</span>
						</h2>
					</div>

					<p className="max-w-sm text-right text-sm leading-relaxed text-white/60 sm:text-base">
						Tem um projeto em mente ou busca um desenvolvedor?
						Entre em contato para conversarmos sobre sua ideia.
					</p>
				</div>
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{accounts.map((account) => (
						<Account key={account.title} {...account} />
					))}
				</div>
				<div className="flex flex-col border-t border-black/10 pt-6">
					<p className="text-sm text-white/60">
						Prefere conversar diretamente? Estou a uma mensagem de distância.
					</p>
				</div>
				<a
						href="https://wa.me/+5581984524953?text=Ol%C3%A1%21%20Vim%20pelo%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
						target="_blank"
						rel="noopener noreferrer"
						className="group absolute items-center gap-2 rounded-full bg-accent p-2 text-sm font-semibold text-black hover:bg-accent/80 animate-bounce transition-all hover:animate-none -bottom-4 -right-4"
					>
						<FaWhatsapp size={40} className="group-hover:size-12 group-hover:bottom-0" fill="#fff"/>
					</a>
			</div>
		</section>
	);
};