import { projects } from "../data/projects"
import { FeaturedProjectCard } from "./featured-project-card"

export const FeaturedProjects = () => {
    const filteredProjects = projects.filter((p)=> p.featured)
    return (
        <section className="flex flex-col justify-center py-8 lg:py-10 w-full border-t border-gray-400/5">
            <h2 className="text-lg sm:text-xl md:text-2xl xl:text-3xl text-accent mb-6 font-semibold uppercase text-center">Principais Projetos</h2>
            <div className="gap-4 flex flex-col justify-center">
                {filteredProjects.map((p)=> (
                    <FeaturedProjectCard {...p}/>
                ))}
            </div>
           
        </section>
    )
}   