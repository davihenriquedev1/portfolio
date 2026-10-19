import { ArrowRight, Check } from "lucide-react";
import { packages } from "../../data/services-page/packages";
import type { Dispatch, SetStateAction } from "react";

interface PackagesProps {
    setSubject: Dispatch<SetStateAction<string>>;
}
export const Packages = ({setSubject}: PackagesProps) => {
    return (
        <section
            id="pacotes"
            className="border-y border-white/6 bg-white/1.5 px-4 py-12 sm:px-8"
        >
            <div className="max-w-6xl">
                <div className="mx-auto mb-12 max-w-2xl text-center">
                    <span className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        Pacotes iniciais
                    </span>

                    <h2 className="mt-5 text-3xl font-semibold tracking-tight text-text-heading sm:text-4xl">
                        Contratação simples,{" "}
                        <span className="text-white/40">
                            escopo transparente.
                        </span>
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-white/50">
                        Valores de referência para projetos com escopo definido.
                        O orçamento final depende dos requisitos e da complexidade.
                    </p>
                </div>

                <div className="grid items-stretch gap-4 lg:grid-cols-3">
                    {packages.map((item) => (
                        <article
                            key={item.name}
                            className={`group relative flex flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 sm:p-7 ${
                                item.featured
                                    ? "border-accent-border bg-accent/4.5 shadow-[0_12px_45px_rgba(130,232,70,0.04)]"
                                    : "border-white/10 bg-[#202022] hover:border-accent-border/70"
                            }`}
                        >
                            {item.featured && (
                                <span className="mb-5 w-fit rounded-full border border-accent-border bg-accent-bg px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent-invert">
                                    Para começar
                                </span>
                            )}

                            <h3 className="text-lg font-semibold text-text-heading">
                                {item.name}
                            </h3>

                            <p className="mt-2 min-h-12 text-sm leading-6 text-white/50">
                                {item.description}
                            </p>

                            <ul className="mt-6 space-y-3 border-t border-white/3 pt-5">
                                {item.items.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-start gap-2.5 text-sm leading-5 text-white/70"
                                    >
                                        <Check
                                            size={16}
                                            className="mt-0.5 shrink-0 text-accent"
                                        />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            
                            <p className="mt-6 flex flex-col text-text-heading/30 border-t border-white/3 pt-5">
                                <span className="text-sm">Faixa de preço médio</span>
                                <span className="text-2xl tracking-tight text-accent/30 group-hover:text-accent italic font-light transition-colors">{item.price}</span>
                                <span className="mt-1 text-[11px] text-white/35 leading-3.5">
                                    Valores de referência baseados em médias de preços praticados no mercado. O orçamento final varia conforme a complexidade e o escopo do projeto.
                                </span>
                            </p>

                            <a
                                href="#contact"
                                className={`mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition ${
                                    item.featured
                                        ? "bg-accent text-bg hover:opacity-90"
                                        : "border border-white/10 bg-white/2.5 text-white/80 hover:border-accent-border hover:bg-accent-bg hover:text-accent-invert"
                                }`}
                                onClick={()=> setSubject('o pacote '+item.name)}
                            >
                                Solicitar orçamento
                                <ArrowRight size={16} />
                            </a>
                        </article>
                    ))}
                </div>

                <p className="mt-6 text-center text-xs leading-6 text-white/35">
                    Domínio, hospedagem, ferramentas pagas e serviços de terceiros
                    não estão incluídos, salvo quando especificados na proposta.
                </p>
                <p className="text-center text-xs leading-6 text-white/35">
                    Nos orçamentos menores, geralmente, serão usados templates prontos, sem copywriting avançado e sem integrações complexas.
                </p>
            </div>
        </section>
    );
};