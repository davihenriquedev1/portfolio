import type { Service } from "../../types/service"

type Props = {
    service: Service
}

export const ServiceItem = ({ service }: Props) => {
    const Icon = service.icon

    return (
        <article className="group relative flex h-[420px] w-full shrink-0 overflow-hidden rounded-2xl border border-black/10">
            {/* Background image */}
            <img
                src={service.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/35 transition-colors duration-500 group-hover:bg-black/45" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />

            {/* Content */}
            <div className="relative z-10 flex w-full flex-col p-7 sm:p-9">
                <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-accent/40 bg-accent/10 text-accent backdrop-blur-sm transition-all duration-500 group-hover:border-accent/70 group-hover:bg-accent/15">
                        <Icon size={24} strokeWidth={1.5} />
                    </div>

                    <span className="text-xs font-medium tracking-[0.2em] text-white/50">
                        {service.number}
                    </span>
                </div>

                <div className="mt-auto max-w-2xl">
                    <h3 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                        {service.title}
                    </h3>

                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
                        {service.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full border border-white/15 bg-black/20 px-3 py-1 text-[10px] uppercase tracking-wider text-white/65 backdrop-blur-sm"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Accent line */}
            <div className="absolute bottom-0 left-0 z-20 h-1 w-0 bg-accent transition-all duration-700 group-hover:w-full" />
        </article>
    )
}