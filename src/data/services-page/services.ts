import { 
    AppWindow,
    Bot,
    Gauge,
    Layers3,
    Link2,
    Wrench,
} from "lucide-react";
import type { ServiceServicesPage } from "../../types/service-services-page";

export const services: ServiceServicesPage[] = [
    {
        number: "01",
        title: "Sites e landing pages",
        description:
            "Páginas profissionais para apresentar seu negócio, divulgar serviços e facilitar o contato.",
        icon: AppWindow,
        items: [
            "Landing pages para produtos e serviços",
            "Sites institucionais responsivos",
            "Formulários e contato por WhatsApp",
            "SEO técnico básico",
        ],
    },
    {
        number: "02",
        title: "Aplicações e sistemas web",
        description:
            "Ferramentas personalizadas para organizar informações e simplificar tarefas do negócio.",
        icon: Layers3,
        items: [
            "Painéis administrativos",
            "Cadastros e gestão de informações",
            "Dashboards com dados relevantes",
            "MVPs e aplicações de escopo definido",
        ],
    },
    {
        number: "03",
        title: "Integrações e automações",
        description:
            "Conexões entre ferramentas para reduzir tarefas manuais e melhorar fluxos de trabalho.",
        icon: Link2,
        items: [
            "Integração entre APIs",
            "Conexão entre sistemas existentes",
            "Sincronização de informações",
            "Automação de tarefas repetitivas",
        ],
    },
    {
        number: "04",
        title: "Funcionalidades web",
        description:
            "Novos recursos para ampliar as possibilidades de sites e aplicações existentes.",
        icon: Bot,
        items: [
            "Login e áreas restritas",
            "Formulários e captação de contatos",
            "Integração com serviços externos",
            "Funcionalidades específicas sob demanda",
        ],
    },
    {
        number: "05",
        title: "Manutenção e correções",
        description:
            "Ajustes técnicos e melhorias para sites e aplicações que já estão em funcionamento.",
        icon: Wrench,
        items: [
            "Investigação e correção de bugs",
            "Ajustes visuais e funcionais",
            "Pequenas melhorias",
            "Suporte conforme o escopo contratado",
        ],
    },
    {
        number: "06",
        title: "Performance e otimização",
        description:
            "Análise e melhorias técnicas para proporcionar uma experiência de uso mais fluida.",
        icon: Gauge,
        items: [
            "Análise de carregamento",
            "Melhorias de responsividade",
            "Ajustes na estrutura do código",
            "Configuração básica de métricas",
        ],
    },
];