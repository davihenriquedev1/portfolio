import type { Package } from "../../types/package";

export const packages: Package[] = [
    {
        name: "Landing Page Express",
        description:
            "Uma página objetiva para apresentar um produto, serviço ou oferta.",
        price: "R$ 500–1.500",
        featured: true,
        items: [
            "Uma página com 5 a 7 seções",
            "Layout responsivo",
            "Botão de WhatsApp e/ou formulário simples",
            "SEO técnico básico",
            "Revisões definidas na proposta",
        ],
    },
    {
        name: "Site Institucional",
        description:
            "Presença digital profissional para apresentar seu negócio.",
        price: "R$ 1.500–3.000",
        featured: false,
        items: [
            "Até 5 páginas",
            "Apresentação do negócio e serviços",
            "Formulário de contato",
            "Layout responsivo",
            "SEO técnico básico",
        ],
    },
    {
        name: "Suporte e Manutenção",
        description:
            "Acompanhamento técnico e pequenas melhorias em sites existentes.",
        price: "R$ 100–300/mês",
        featured: false,
        items: [
            "Pequenas correções e ajustes",
            "Melhorias dentro do escopo mensal",
            "Condições de atendimento definidas",
            "Acompanhamento conforme o plano",
            "Novas funcionalidades orçadas à parte",
        ],
    },
];