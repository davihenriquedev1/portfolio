import { useState } from "react";
import { Link } from "react-router-dom";

import { projects } from "../../data/projects";
import { FeaturedProjectCard } from "./featured-project-card";
import { ProjectDetailsModal } from "./project-details-modal";

export const FeaturedProjects = () => {
	const [selectedProject, setSelectedProject] =
		useState<(typeof projects)[number] | null>(null);

	const filteredProjects = projects.filter((project) => project.featured);

	return (
		<section
			id="projects"
			className="w-full border-t border-white/5 px-4 md:px-8 py-12"
		>
			<div className="mx-auto w-full max-w-6xl">
				{/*Heading*/}
				<div className="flex flex-col gap-6 border-b border-black/10 pb-12 lg:flex-row lg:items-end lg:justify-between">
					<div className="max-w-3xl">
						<span className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
							<span className="h-1.5 w-1.5 rounded-full bg-accent" />
							Principais Projetos
						</span>
						<h2 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
							Veja meus projetos em destaque
							<span className="text-accent"> e soluções reais.</span>
						</h2>
					</div>
					<p className="max-w-sm text-sm leading-relaxed text-black/50 sm:text-base">
						Aplicações e produtos digitais que demonstram minha experiência
						em desenvolvimento web e resolução de problemas reais.
					</p>
				</div>
				<div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
					{filteredProjects.map((project) => (
						<FeaturedProjectCard
							key={project.title}
							title={project.title}
							shortDescription={project.shortDescription}
							onClick={() => setSelectedProject(project)}
							image={project.image}
						/>
					))}
				</div>
				<div className="w-full flex justify-center">
					<Link
						to="/projects"
						className="mx-auto mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-white"
					>
						Ver todos os projetos
						<span aria-hidden="true">→</span>
					</Link>
				</div>
				
				{selectedProject && (
					<ProjectDetailsModal
						project={selectedProject}
						onClose={() => setSelectedProject(null)}
					/>
				)}
			</div>
		</section>
	);
};