import { ArrowRight } from "lucide-react";
import { steps } from "../../data/services-page/steps";

export const ProcessSection = () => {
    return (
        <section
            id="processo"
            className="px-4 py-12 sm:px-8"
        >
            <div className="max-w-6xl">
                <div className="mb-12 max-w-2xl">
                    <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        Como funciona
                    </span>

                    <h2 className="mt-5 text-3xl font-semibold tracking-tight text-text-heading sm:text-4xl">
                        Do primeiro contato{" "}
                        <span className="text-white/40">
                            à entrega do projeto.
                        </span>
                    </h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <article
                                key={step.number}
                                className="group relative rounded-2xl border border-white/8 bg-white/2 p-5 transition-all duration-300 hover:border-accent-border hover:bg-white/[0.035] sm:p-6"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent-border/60 bg-accent-bg text-accent">
                                        <Icon size={19} />
                                    </span>

                                    <span className="font-mono text-xs text-white/30">
                                        {step.number}
                                    </span>
                                </div>

                                <h3 className="mt-5 font-semibold text-text-heading">
                                    {step.title}
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-white/50">
                                    {step.description}
                                </p>

                                {index < steps.length - 1 && (
                                    <ArrowRight
                                        aria-hidden="true"
                                        className="absolute -right-3 top-8 z-10 hidden text-accent/50 xl:block"
                                        size={18}
                                    />
                                )}
                            </article>
                        );
                    })}
                </div>

                <p className="mt-6 text-sm leading-6 text-white/40">
                    O desenvolvimento começa após a aprovação da proposta e a
                    definição das condições combinadas.
                </p>
            </div>
        </section>
    );
};