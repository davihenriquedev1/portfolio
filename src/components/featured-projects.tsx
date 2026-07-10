import { projects } from "../data/projects"
import { FeaturedProjectCard } from "./featured-project-card"

export const FeaturedProjects = () => {
    const filteredProjects = projects.filter((p)=> p.featured)
    return (
        <section className="flex flex-col justify-center py-6 mt-10 lg:py-8 w-full gap-2">
            <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-accent mb-4 font-semibold uppercase text-center">Principais Projetos</h2>
            {filteredProjects.map((p)=> (
                <FeaturedProjectCard {...p}/>
            ))}
        </section>
    )
}   