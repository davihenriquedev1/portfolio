import { ArrowUpRight } from "lucide-react";
import type { Account as AccountType } from "../../types/account";

export const Account = ({
	title,
	href,
	icon: Icon,
	description,
	value,
}: AccountType) => {
	const isEmail = title === "E-mail";

	return (
		<a
			href={href}
			target={isEmail ? "_self" : "_blank"}
			rel={isEmail ? undefined : "noopener noreferrer"}
			className="group flex min-w-0 items-start gap-4 rounded-2xl border border-black/10 bg-[#f0f7e5]  p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:p-6"
		>
			<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-black">
				<Icon size={21} />
			</div>

			<div className="min-w-0 flex-1">
				<div className="flex items-center justify-between gap-2">
					<h3 className="font-semibold text-black transition-colors group-hover:text-accent">
						{title}
					</h3>

					<ArrowUpRight
						size={17}
						className="shrink-0 text-black/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
					/>
				</div>

				<p className="mt-1 text-sm leading-relaxed text-black/50">
					{description}
				</p>

				<p className="mt-3 wrap-break-word text-sm font-medium text-black/75">
					{value}
				</p>
			</div>
		</a>
	);
};