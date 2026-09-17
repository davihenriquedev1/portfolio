import { ExternalLink,} from "lucide-react";
import type { ComponentProps } from "react";

type Props = ComponentProps<"article"> & {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    repo: string;
    demo?: string;
};

export const FeaturedProjectCard = ({title, description, technologies, image, repo, demo, className = "", ...props}: Props) => {
    return (
        <article
            className={`flex flex-1 flex-col gap-5 rounded-xl border border-blue/25 bg-white/2 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue/50 hover:shadow-[0_0_30px_rgba(56,189,248,.15)] ${className}`}
            {...props}
        >   
            <div className="w-full  rounded-xl">
                <img src={image} alt={title} className="w-full rounded-lg border border-white/10 object-cover object-center" />
            </div>
            

            <div className="flex flex-1 flex-col gap-2">
                <h3 className="text-xl font-semibold text-white">
                    {title}
                </h3>

                <p className="text-xs leading-4 text-gray-300">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-md border border-blue/25 bg-blue/10 px-2 py-1 text-xs text-blue"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="mt-auto flex items-center gap-4 text-sm">
                    {demo && (
                        <a
                            href={demo}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1 text-accent transition-colors hover:text-white"
                        >
                            <ExternalLink size={16} />
                            Demo
                        </a>
                    )}

                    <a
                        href={repo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 text-accent transition-colors hover:text-white "
                    >   
                        <div className="bg-accent-bg rounded-full">
                            <img src="/images/github.png" className="w-4 md:w-8" />
                        </div>
                        Repo
                    </a>
                </div>
            </div>
        </article>
    );
};