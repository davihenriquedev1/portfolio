import { Mail, ArrowUpRight, ArrowLeft } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { myData } from "../../data/my-data";

interface ContactProps {
    message: string,
}

export const Contact = ({message}: ContactProps) => {
    const whatsappMessage = `Olá! Gostaria de falar sobre ${message.toLowerCase() || "um projeto para o meu negócio"}.`;
    const whatsappUrl = `https://wa.me/${myData.number}?text=${encodeURIComponent(whatsappMessage)}`;
    const mailTo = `mailto:${myData.email}?subject=Or%C3%A7amento%20de%20projeto`;

    return (
        <section
            id="contact"
            className="px-4 py-12 sm:px-8"
        >
            <div className="mx-auto max-w-5xl">
                <div className="mb-10 text-center">
                    <span className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        Contato
                    </span>

                    <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/50">
                        Conte um pouco sobre o que você precisa. Vamos conversar
                        sobre seu projeto, entender os requisitos e avaliar a
                        melhor solução para você.
                    </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group rounded-2xl border border-white/10 bg-white/2 p-6 transition-colors duration-300 hover:border-accent-border hover:bg-white/4 sm:p-8"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent-border bg-accent-bg text-accent">
                            <MessageCircle size={23} aria-hidden="true" />
                        </div>

                        <h3 className="mt-6 text-lg font-semibold text-text-heading">
                            Vamos conversar
                        </h3>

                        <p className="mt-2 text-sm leading-7 text-white/50">
                            Fale diretamente comigo para apresentar sua ideia
                            e tirar dúvidas.
                        </p>

                        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                            Chamar no WhatsApp
                            <ArrowUpRight
                                size={17}
                                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                aria-hidden="true"
                            />
                        </span>
                    </a>

                    <a
                        href={mailTo}
                        className="group rounded-2xl border border-white/10 bg-white/2 p-6 transition-colors duration-300 hover:border-accent-border hover:bg-white/4 sm:p-8"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent-border bg-accent-bg text-accent">
                            <Mail size={23} aria-hidden="true" />
                        </div>

                        <h3 className="mt-6 text-lg font-semibold text-text-heading">
                            Prefere e-mail?
                        </h3>

                        <p className="mt-2 text-sm leading-7 text-white/50">
                            Envie os detalhes do seu projeto e retornarei assim
                            que possível.
                        </p>

                        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                            Enviar e-mail
                            <ArrowUpRight
                                size={17}
                                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                aria-hidden="true"
                            />
                        </span>
                    </a>
                </div>

                <div className="mt-8 flex flex-col items-center">
                    <a
                        href="/#contact"
                        className="inline-flex w-fit items-center gap-2 p-1 text-xs text-white/50 transition-colors hover:text-accent border-b border-white/20"
                    >
                        <ArrowLeft size={15} aria-hidden="true" />
                        mais formas de contato na página inicial
                    </a>
                </div>
            </div>
        </section>
    );
};