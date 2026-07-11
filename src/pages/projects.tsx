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
            <div className="flex flex-col justify-center py-6 mt-10 lg:py-8 w-full gap-6">
                <h1 className="xs:text-3xl sm:text-4xl lg:text-5xl text-accent mb-4 font-semibold uppercase text-center">
                    Meus Projetos
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.title.trim().toLowerCase()}
                            {...project}
                        />
                    ))}
                </div>
            </div>
        </>

    )
}

export default Projects;
