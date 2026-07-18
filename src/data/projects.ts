import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "Você Calcula",
    image: '/images/projects/voce-calcula.png',
    description:
      "Plataforma web com diversas calculadoras financeiras e utilitárias, desenvolvida com foco em performance, experiência do usuário e resultados precisos. O projeto conta com validações robustas, gráficos interativos e arquitetura escalável.",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Zod",
    ],
    demo: "https://voce-calcula.vercel.app",
    repo: "https://github.com/davihenriquedev1/voce-calcula",
    featured: true
  },
  {
    title: "Taskify",
    image: '/images/projects/taskify.png',
    description:
      "Aplicação de gerenciamento de tarefas inspirada em ferramentas modernas de produtividade. Permite organizar atividades, acompanhar o progresso e gerenciar projetos através de uma interface responsiva e intuitiva.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
    ],
    repo: "https://github.com/davihenriquedev1/taskify",
    featured: true
  },
  {
    title: "Template de catálogo simples",
    image: '/images/projects/catalogo-pizzaria.jpeg',
    description:
      "Catálogo de produtos com opção de enviar pedido para whatsapp.",
    technologies: [
      "React.js",
      "Next.js",
      "Typescript",
    ],
    repo: "https://github.com/davihenriquedev1/pizzaria-react-shadcn",
    featured: true
  },
  {
    title: "Template Medical Center",
    image: '/images/projects/medical-center-template.png',
    description:
      "Template para sites da área da saúde. Desenvolvido com foco em responsividade e minimalismo",
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
    ],
    demo: 'https://davihenriquedev1.github.io/medical-center-landing-page/',
    repo: "https://github.com/davihenriquedev1/medical-center-landing-page",
    featured: true
  },
];