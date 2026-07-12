import { projects } from "../data/projects"
import { ProjectCard } from "../components/project-card"
import { SEO } from "../components/seo";

const Projects = () => {
    return (
        <>
            <SEO
                title="Davi Henrique | Projetos"
                description="Projetos desenvolvidos por Davi Henrique, desenvolvedor Full Stack."
            />
            <section className="flex flex-col justify-center py-6 lg:py-8 w-full">
                <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-accent mb-6 font-semibold uppercase text-center">
                    Meus Projetos
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.title.trim().toLowerCase()}
                            {...project}
                        />
                    ))}
                </div>
            </section>
        </>

    )
}

export default Projects;
