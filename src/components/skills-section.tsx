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

import VsCodeIcon from "/images/vscode-alt.svg"

const skills = [
	{
		title: "Front-end",
		items: [
			{ icon: <FaReact />, name: "React" },
			{ icon: <SiNextdotjs />, name: "Next.js" },
			{ icon: <SiTypescript />, name: "TypeScript" },
			{ icon: <SiJavascript />, name: "JavaScript" },
			{ icon: <SiTailwindcss />, name: "Tailwind CSS" },
		],
	},
	{
		title: "Back-end",
		items: [
			{ icon: <FaNodeJs />, name: "Node.js" },
			{ icon: <SiExpress />, name: "Express" },
			{ icon: <SiPrisma />, name: "Prisma ORM" },
		],
	},
	{
		title: "Database",
		items: [
			{ icon: <SiPostgresql />, name: "PostgreSQL" },
			{ icon: <SiMongodb />, name: "MongoDB" },
			{ icon: <SiMysql />, name: "MySQL" },
			{ icon: <SiRedis />, name: "Redis" },
		],
	},
	{
		title: "Tools",
		items: [
			{ icon: <FaGitAlt />, name: "Git" },
			{ icon: <SiGithub />, name: "GitHub" },
			{ icon: <FaDocker />, name: "Docker" },
			{ icon: <SiVercel />, name: "Vercel" },
			{
				icon: (
					<div
						className="h-4 w-4 bg-accent"
						style={{
							mask: `url(${VsCodeIcon}) center / contain no-repeat`,
							WebkitMask: `url(${VsCodeIcon}) center / contain no-repeat`,
						}}
					/>
				),
				name: "VS Code",
			},
			{ icon: <FaFigma />, name: "Figma" },
		],
	},
];

export const SkillsSection = () => {
	return (
		<section className="flex flex-col gap-8 py-6 mt-10 lg:py-8 w-full" id="skills">
			<h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-accent font-semibold uppercase text-center">
				Habilidades Técnicas
			</h2>

			<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
				{skills.map((category) => (
					<div
						key={category.title}
						className="rounded-xl border border-blue/20 bg-white/2 p-5 transition-all duration-300 hover:border-blue/40 hover:shadow-[0_0_25px_rgba(56,189,248,.12)]"
					>
						<h3 className="mb-5 text-lg font-semibold text-white">
							{category.title}
						</h3>

						<div className="flex flex-wrap gap-3">
							{category.items.map((item) => (
								<div
									key={item.name}
									className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 transition-all duration-300 hover:border-accent/40 hover:bg-accent/10"
								>
									<span className="text-lg text-accent">
										{item.icon}
									</span>

									<span className="text-sm text-gray-300">
										{item.name}
									</span>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};