import { useEffect } from "react";
import { createPortal } from "react-dom";
import { ExternalLink, X } from "lucide-react";

type Project = {
	title: string;
	description: string;
	technologies: string[];
	image: string;
	repo: string;
	demo?: string;
};

type Props = {
	project: Project;
	onClose: () => void;
};

export const ProjectDetailsModal = ({ project, onClose }: Props) => {
	useEffect(() => {
		const previousOverflow = document.body.style.overflow;

		document.body.style.overflow = "hidden";

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				onClose();
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			document.body.style.overflow = previousOverflow;
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [onClose]);

	return createPortal(
		<div
			className="fixed inset-0 z-100 flex items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm animate-in fade-in duration-200 sm:p-6"
			onMouseDown={(event) => {
				if (event.target === event.currentTarget) {
					onClose();
				}
			}}
		>
			<article
				role="dialog"
				aria-modal="true"
				aria-labelledby="project-modal-title"
				className="relative my-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-[#131313] shadow-2xl animate-in fade-in zoom-in-95 duration-200"
			>
				<button
					type="button"
					onClick={onClose}
					aria-label="Fechar detalhes do projeto"
					className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/60 text-gray-300 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
				>
					<X size={18} />
				</button>

				<div className="max-h-[85vh] overflow-y-auto">
					<div className="border-b border-white/5 bg-white/2 p-4 sm:p-6">
						<img
							src={project.image}
							alt={`Captura de tela do projeto ${project.title}`}
							className="w-full rounded-xl border border-white/10 object-contain object-top"
						/>
					</div>

					<div className="flex flex-col gap-6 p-5 sm:p-7">
						<div className="flex flex-col gap-3">
							<h2
								id="project-modal-title"
								className="pr-10 text-2xl font-semibold tracking-tight text-white sm:text-3xl"
							>
								{project.title}
							</h2>

							<p className="text-sm leading-7 text-gray-400 sm:text-base">
								{project.description}
							</p>
						</div>

						<div className="flex flex-col gap-3">
							<h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
								Tecnologias
							</h3>

							<div className="flex flex-wrap gap-2">
								{project.technologies.map((technology) => (
									<span
										key={technology}
										className="rounded-md border border-accent/20 bg-accent/5 px-3 py-1.5 text-xs font-medium text-accent"
									>
										{technology}
									</span>
								))}
							</div>
						</div>

						<div className="flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
							{project.demo && (
								<a
									href={project.demo}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-black transition-opacity hover:opacity-80"
								>
									Ver demonstração
									<ExternalLink size={16} />
								</a>
							)}

							{project.repo && (
								<a
									href={project.repo}
									target="_blank"
									rel="noreferrer"
									className="flex items-center gap-2 text-accent transition-colors hover:text-white"
								>
									<ExternalLink size={16} />
									Repositório
								</a>
							)}
						</div>
					</div>
				</div>
			</article>
		</div>,
		document.body
	);
};