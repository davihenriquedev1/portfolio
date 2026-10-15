import {
	FaReact,
	FaNodeJs,
	FaGitAlt,
	FaDocker,
	FaFigma,
} from "react-icons/fa";

import {
	SiTypescript,
	SiJavascript,
	SiNextdotjs,
	SiTailwindcss,
	SiExpress,
	SiPrisma,
	SiPostgresql,
	SiMongodb,
	SiMysql,
	SiRedis,
	SiGithub,
	SiVercel,
} from "react-icons/si";

import VsCodeIcon from "/images/vscode-alt.svg";

const technologies = [
	{ icon: <FaReact />, name: "React" },
	{ icon: <SiNextdotjs />, name: "Next.js" },
	{ icon: <SiTypescript />, name: "TypeScript" },
	{ icon: <SiJavascript />, name: "JavaScript" },
	{ icon: <SiTailwindcss />, name: "Tailwind CSS" },
	{ icon: <FaNodeJs />, name: "Node.js" },
	{ icon: <SiExpress />, name: "Express" },
	{ icon: <SiPrisma />, name: "Prisma ORM" },
	{ icon: <SiPostgresql />, name: "PostgreSQL" },
	{ icon: <SiMongodb />, name: "MongoDB" },
	{ icon: <SiMysql />, name: "MySQL" },
	{ icon: <SiRedis />, name: "Redis" },
	{ icon: <FaGitAlt />, name: "Git" },
	{ icon: <SiGithub />, name: "GitHub" },
	{ icon: <FaDocker />, name: "Docker" },
	{ icon: <SiVercel />, name: "Vercel" },
	{
		icon: (
			<div
				className="h-4 w-4 bg-current"
				style={{
					mask: `url(${VsCodeIcon}) center / contain no-repeat`,
					WebkitMask: `url(${VsCodeIcon}) center / contain no-repeat`,
				}}
			/>
		),
		name: "VS Code",
	},
	{ icon: <FaFigma />, name: "Figma" },
];

export const About = () => {
	return (
		<section
			id="about"
			className="min-h-screen w-full overflow-hidden border-t border-black/10 py-12 bg-[#edf3e2] flex flex-col justify-between"
		>
			<div className="mx-auto flex w-full max-w-6xl flex-col gap-12 lg:gap-16">
				
				<div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-end lg:gap-16">
					<div className="max-w-2xl">
						<span className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
							<span className="h-1.5 w-1.5 rounded-full bg-accent" />
							Sobre mim
						</span>

						<h2 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-black sm:text-5xl lg:text-6xl">
							Desenvolvedor Fullstack
							<span className="text-accent">
								{" "}
							apaixonado por tecnologia
							</span>
						</h2>
					</div>

					<div className="max-w-2xl lg:justify-self-end">
						<p className="text-base leading-8 text-black/60 sm:text-lg">
							Meu foco é a construção de aplicações que resolvem problemas
							reais. Trabalho no desenvolvimento de interfaces modernas,
							APIs robustas e sistemas web, unindo experiência do usuário,
							organização e qualidade de código.
						</p>

						<p className="mt-4 text-base leading-8 text-black/60 sm:text-lg">
							Utilizo tecnologias como React, Next.js, Node.js,
							TypeScript e PostgreSQL para transformar ideias em
							produtos digitais funcionais, com atenção à arquitetura,
							à performance e à manutenção do software.
						</p>
					</div>
				</div>
			</div>

			<div
				className="mt-12 overflow-hidden bg-accent py-4 text-black sm:mt-16 sm:py-5"
				aria-label="Tecnologias e ferramentas"
			>
				<div className="flex w-max animate-tech-marquee motion-reduce:animate-none">
					{[0, 1].map((track) => (
						<div
							key={track}
							className="flex shrink-0 items-center"
							aria-hidden={track === 1}
						>
							{technologies.map((technology) => (
								<div
									key={`${track}-${technology.name}`}
									className="flex shrink-0 items-center gap-2.5 px-5 sm:gap-3 sm:px-7"
								>
									<span className="text-xl sm:text-2xl">
										{technology.icon}
									</span>

									<span className="whitespace-nowrap text-sm font-semibold tracking-tight sm:text-base">
										{technology.name}
									</span>

									<span className="ml-4 h-1 w-1 rounded-full bg-black/40 sm:ml-7" />
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};