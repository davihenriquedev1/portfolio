import { ArrowDown, ArrowRight } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative isolate overflow-hidden px-4 py-12 sm:px-8">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
            >
                <div className="absolute left-1/2 -top-62.5 h-125 w-175 -translate-x-1/2 rounded-full bg-accent/[0.07] blur-[120px]" />
                <div className="absolute -right-30 top-40 h-64 w-64 rounded-full bg-green-light/4 blur-[100px]" />
            </div>

            <div className="mx-auto max-w-6xl text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-accent-border bg-accent-bg px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent-invert">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Desenvolvimento web
                </span>

                <h1 className="mx-auto mt-8 max-w-4xl text-3xl font-semibold leading-[1.1] tracking-tight text-text-heading sm:text-4xl lg:text-6xl">
                    Transforme suas ideias em{" "}
                    <span className="text-accent">
                        soluções digitais.
                    </span>
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
                    Desenvolvo sites, aplicações web e integrações sob medida
                    para profissionais, criadores e negócios que querem evoluir
                    no digital.
                </p>

                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <a
                        href="#contact"
                        className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-bg transition duration-300 hover:-translate-y-0.5 hover:opacity-90"
                    >
                        Solicitar orçamento
                        <ArrowRight
                            size={17}
                            className="transition-transform group-hover:translate-x-1"
                        />
                    </a>

                    <a
                        href="#services"
                        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/2.5 px-6 py-3 text-sm font-medium text-white/80 transition duration-300 hover:border-accent-border hover:bg-accent-bg hover:text-accent-invert"
                    >
                        Conhecer os serviços
                        <ArrowDown size={16} />
                    </a>
                </div>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-white/45">
                    <span>Escopo definido antes do desenvolvimento</span>
                    <span className="hidden h-1 w-1 rounded-full bg-accent/50 sm:block" />
                    <span>Design responsivo</span>
                    <span className="hidden h-1 w-1 rounded-full bg-accent/50 sm:block" />
                    <span>Comunicação direta</span>
                </div>
            </div>
        </section>
    );
};