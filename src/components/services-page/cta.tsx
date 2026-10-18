import { ArrowRight, MessageCircle } from "lucide-react";

export const Cta = () => {
    return (
        <section className="px-4 py-12 sm:px-8">
            <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-accent-border/70 bg-accent/[0.035] px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-accent/8 blur-[100px]"
                />

                <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
                    <div className="max-w-2xl">
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                            Vamos conversar
                        </span>

                        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-heading sm:text-4xl">
                            Tem um projeto em mente?
                        </h2>

                        <p className="mt-4 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
                            Me conte o que você precisa construir ou melhorar.
                            Vamos entender sua necessidade e avaliar uma solução
                            adequada para o seu projeto.
                        </p>
                    </div>

                    <a
                        href="/services#contact"
                        className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-bg transition duration-300 hover:-translate-y-0.5 hover:opacity-90"
                    >
                        <MessageCircle size={17} />
                        Solicitar orçamento
                        <ArrowRight
                            size={16}
                            className="transition-transform group-hover:translate-x-1"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};