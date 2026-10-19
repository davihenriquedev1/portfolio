import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { questions } from "../../data/services-page/faq";

export const Faq = () => {
    const [faqQuestionActive, setFaqQuestionActive] = useState<number | null>(
        null,
    );

    return (
        <section id="faq" className="px-4 py-12 sm:px-8">
            <div className="mx-auto max-w-4xl">
                <div className="mb-10 text-center">
                    <span className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        Perguntas frequentes
                    </span>

                    <h2 className="mt-5 text-3xl font-semibold tracking-tight text-text-heading sm:text-4xl">
                        Antes de começar.
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-white/50">
                        Entenda como funciona a contratação e o desenvolvimento.
                    </p>
                </div>

                <div className="space-y-3">
                    {questions.map((item, index) => {
                        const isOpen = faqQuestionActive === index;
                        const answerId = `faq-answer-${index}`;

                        return (
                            <div
                                key={item.question}
                                className={`overflow-hidden rounded-xl border transition-colors duration-200 ${
                                    isOpen
                                        ? "border-accent-border bg-white/3"
                                        : "border-white/10 bg-white/2 hover:border-white/20"
                                }`}
                            >
                                <button
                                    type="button"
                                    id={`faq-question-${index}`}
                                    aria-expanded={isOpen}
                                    aria-controls={answerId}
                                    onClick={() =>
                                        setFaqQuestionActive(
                                            isOpen ? null : index,
                                        )
                                    }
                                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-white/85 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent sm:px-6"
                                >
                                    <span>{item.question}</span>

                                    <ChevronDown
                                        size={17}
                                        aria-hidden="true"
                                        className={`shrink-0 transition-transform duration-200 ${
                                            isOpen
                                                ? "rotate-180 text-accent"
                                                : "text-white/40"
                                        }`}
                                    />
                                </button>

                                <div
                                    id={answerId}
                                    role="region"
                                    aria-labelledby={`faq-question-${index}`}
                                    hidden={!isOpen}
                                    className="px-5 pb-5 text-sm leading-7 text-white/55 sm:px-6"
                                >
                                    {item.answer}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};