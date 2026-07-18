import { Link } from "react-router-dom"
import { projects } from "../data/projects"
import { FeaturedProjectCard } from "./featured-project-card"

export const FeaturedProjects = () => {
    const filteredProjects = projects.filter((p)=> p.featured)
    return (
        <section className="flex flex-col justify-center py-8 lg:py-10 w-full border-t border-gray-400/5">
            <h2 className="text-lg sm:text-xl md:text-2xl xl:text-3xl text-accent mb-6 font-semibold uppercase text-center">Principais Projetos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 justify-center">
                {filteredProjects.map((p)=> (
                    <FeaturedProjectCard {...p}/>
                ))}
            </div>
            <div className="m-auto mt-3 text-accent underline underline-offset-3">
                <Link to={'/projects'}>Ver mais projetos</Link>
            </div>
        </section>
    )
}   