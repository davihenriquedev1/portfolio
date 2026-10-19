import {
    ArrowUpRight,
} from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import { services } from "../../data/services-page/services";

interface GridProps {
    setSubject: Dispatch<SetStateAction<string>>
}

export const Grid = ({setSubject}: GridProps) => {
    return (
        <section
            id="services"
            className="px-4 py-12 sm:px-8"
        >
            <div className="max-w-6xl">
                <div className="mb-12 grid gap-5 md:grid-cols-[1fr_0.65fr] md:items-end">
                    <div>
                        <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                            Como posso ajudar
                        </span>

                        <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-text-heading sm:text-4xl lg:text-5xl">
                            Serviços para tirar{" "}
                            <span className="text-white/40">
                                seu projeto do papel.
                            </span>
                        </h2>
                    </div>

                    <p className="max-w-md text-sm leading-7 text-white/50 md:justify-self-end">
                        Cada projeto tem suas particularidades. Entendemos
                        o que você precisa e definimos uma solução compatível
                        com o objetivo e o escopo.
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <article
                                key={service.number}
                                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-accent-border/50 bg-white/2.5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent-border hover:bg-accent/[0.035] hover:shadow-[0_12px_40px_rgba(130,232,70,0.06)] sm:p-6"
                            >
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/[0.07] opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
                                />

                                <div className="relative flex items-center justify-between">
                                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent-border/70 bg-accent-bg text-accent transition-colors duration-300 group-hover:bg-accent/15">
                                        <Icon size={21} strokeWidth={1.7} />
                                    </span>

                                    <span className="font-mono text-xs text-white/30">
                                        {service.number}
                                    </span>
                                </div>

                                <h3 className="relative mt-5 text-lg font-semibold text-text-heading">
                                    {service.title}
                                </h3>

                                <p className="relative mt-2 text-sm leading-6 text-white/50">
                                    {service.description}
                                </p>

                                <ul className="relative mt-5 flex-1 space-y-3 border-t border-white/[0.07] pt-5">
                                    {service.items.map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-start gap-2.5 text-sm leading-5 text-white/75"
                                        >
                                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="#contact"
                                    className="relative mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-accent-invert transition-colors hover:text-accent"
                                    onClick={()=> setSubject("o serviço " + service.title)}
                                >
                                    Conversar sobre o serviço
                                    <ArrowUpRight
                                        size={16}
                                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    />
                                </a>
                            </article>
                        );
                    })}
                </div>

                <p className="mt-7 text-center text-xs leading-6 text-white/40">
                    A disponibilidade e a viabilidade de cada serviço são
                    confirmadas após a avaliação do projeto.
                </p>
            </div>
        </section>
    );
};