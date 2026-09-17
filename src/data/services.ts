import {
    Bot,
    Code2,
    Globe2,
    Settings2,
} from "lucide-react"
import type { Service } from "../types/service"

export const services: Service[] = [
    {
        number: "01",
        icon: Globe2,
        title: "Presença digital",
        description:
            "Sites institucionais, páginas comerciais e experiências digitais construídas para representar sua marca com clareza e profissionalismo.",
        tags: ["Web", "Responsivo", "Performance"],
        image: "/images/digital-presence.jpeg",
    },
    {
        number: "02",
        icon: Code2,
        title: "Sistemas web",
        description:
            "Painéis administrativos, áreas de clientes, plataformas e aplicações para transformar processos manuais em sistemas organizados.",
        tags: ["Dashboards", "SaaS", "Aplicações"],
        image: "/images/web-systems.jpeg",
    },
    {
        number: "03",
        icon: Bot,
        title: "Automação & integrações",
        description:
            "Conexão entre ferramentas, APIs e serviços para eliminar tarefas repetitivas e criar fluxos mais eficientes.",
        tags: ["APIs", "Automações", "Integrações"],
          image: "/images/integrations.jpeg",
    },
    {
        number: "04",
        icon: Settings2,
        title: "Evolução de sistemas",
        description:
            "Correção de problemas, melhorias, novas funcionalidades e manutenção para aplicações que já estão em produção.",
        tags: ["Bugs", "Features", "Manutenção"],
        image: "/images/systems-evolution.jpeg",
        
    },
]