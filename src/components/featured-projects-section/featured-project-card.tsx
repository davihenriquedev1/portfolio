import { ArrowUpRight } from "lucide-react";
import type { ComponentProps } from "react";

type Props = Omit<ComponentProps<"button">, "children"> & {
	title: string;
	shortDescription: string;
	image: string;
};

export const FeaturedProjectCard = ({
	title,
	shortDescription,
	image,
	className = "",
	...props
}: Props) => {
	return (
		<button
			type="button"
			className={`group relative flex w-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-black/10 bg-[#d5e0c0] text-left transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${className}`}
			{...props}
		>
			<div className="relative aspect-16/7 w-full overflow-hidden bg-black/5">
				<img
					src={image}
					alt={`Preview do projeto ${title}`}
					loading="lazy"
					className="w-full object-contain object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
				/>

				<div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/55 group-focus-visible:bg-black/55">
					<span className="flex translate-y-2 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
						Ver detalhes
						<ArrowUpRight
							size={16}
							className="text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
						/>
					</span>
				</div>
			</div>

			{/* Informações do projeto */}
			<div className="flex flex-1 flex-col gap-2.5 p-5 sm:p-6">
				<div className="flex items-start justify-between gap-4">
					<h3 className="text-lg font-semibold tracking-tight text-black transition-colors duration-300 group-hover:text-accent sm:text-xl">
						{title}
					</h3>

					<ArrowUpRight
						size={20}
						className="mt-0.5 shrink-0 text-black/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
					/>
				</div>

				<p className="text-sm leading-relaxed text-black/55">
					{shortDescription}
				</p>
			</div>
		</button>
	);
};