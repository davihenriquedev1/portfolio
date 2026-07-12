import { SEO } from "../components/seo";

const About = () => {
    return (
        <>
            <SEO
                title="Davi Henrique | Sobre"
                description="Conheça a trajetória de Davi Henrique como desenvolvedor."
            />
            <section className="flex flex-col justify-center py-6 lg:py-8 w-full">
                <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-accent mb-6 font-semibold uppercase text-center">
                    Sobre mim
                </h1>

                <p className="text-text leading-relaxed mb-10">
                    Sou desenvolvedor focado na criação de aplicações web modernas,
                    com experiência no desenvolvimento de interfaces, APIs e soluções
                    completas utilizando tecnologias atuais do ecossistema JavaScript.
                </p>
                
                <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-text-heading mb-6">
                        Minha trajetória
                </h2>

                <p className="text-text leading-relaxed mb-5">
                    Minha jornada na programação começou através da curiosidade por
                    tecnologia e pela vontade de transformar ideias em produtos reais.
                    Desde então, venho estudando, criando projetos próprios e buscando
                    evoluir minhas habilidades técnicas através da prática.
                </p>

                <p className="text-text leading-relaxed mb-10">
                    Tenho interesse principalmente em desenvolvimento Full Stack,
                    arquitetura de aplicações, boas práticas de código e criação de
                    experiências digitais eficientes e bem estruturadas.
                </p>

                <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-text-heading mb-6">
                    Tecnologias e conhecimentos
                </h2>

                <p className="text-text leading-relaxed mb-10">
                    Trabalho com tecnologias como React, Next.js, TypeScript,
                    Node.js, Express, bancos de dados SQL e NoSQL, além de ferramentas
                    modernas para desenvolvimento, testes e deploy.
                </p>

                <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-text-heading mb-6">
                    Meu objetivo
                </h2>

                <p className="text-text leading-relaxed">
                    Busco evoluir constantemente como desenvolvedor, participando de
                    projetos desafiadores e criando soluções que unam qualidade técnica,
                    performance e uma ótima experiência para o usuário.
                </p>
            </section>
        </>

    )
}

export default About;