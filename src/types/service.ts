import type { LucideProps } from "lucide-react"

export type Service = {
    number: string,
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
    title: string,
    description: string,
    tags: string[],
    image: string
}