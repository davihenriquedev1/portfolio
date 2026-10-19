import {
    ClipboardList,
    Code2,
    FileText,
    Rocket,
} from "lucide-react";
import type { Step } from "../../types/step";

export const steps: Step[] = [
    {
        number: "01",
        title: "Alinhamento",
        description:
            "Entendemos sua necessidade, seus objetivos e o que precisa ser resolvido.",
        icon: ClipboardList,
    },
    {
        number: "02",
        title: "Proposta",
        description:
            "Definimos escopo, prazo estimado, investimento e condições de entrega.",
        icon: FileText,
    },
    {
        number: "03",
        title: "Desenvolvimento",
        description:
            "O projeto é desenvolvido de acordo com o que foi aprovado e combinado.",
        icon: Code2,
    },
    {
        number: "04",
        title: "Entrega",
        description:
            "Você revisa o resultado, recebe as orientações previstas e combinamos os próximos passos.",
        icon: Rocket,
    },
];
