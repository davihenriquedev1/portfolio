import { Link } from "react-router-dom"
import { CustomButton } from "../ui/custom-button"

export const Hero = () => {
	return (
		<section className="relative overflow-hidden">
			<img
				src="/images/me.jpeg"
				alt=""
				draggable={false}
				onContextMenu={(event) => event.preventDefault()}
				className="pointer-events-none absolute right-0 top-0 z-0 h-full w-full object-cover object-right opacity-30 select-none"
			/>

			<div className="relative z-10 flex w-full justify-center px-4 md:px-8 py-12">
				<div className="flex w-full max-w-6xl flex-col justify-center">
					<div className="flex max-w-3xl flex-col">
						<span className="flex items-center gap-3 mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
							<span className="h-1.5 w-1.5 rounded-full bg-accent" />
							Desenvolvedor de software
						</span>

						<h1 className="text-4xl font-bold leading-tight xs:text-5xl sm:text-6xl xl:text-7xl">
							Soluções digitais para transformar seu negócio.
						</h1>

						<p className="mt-5 max-w-2xl text-sm leading-relaxed text-accent/80 sm:text-base md:text-lg">
							Desenvolvo sites, aplicações web, sistemas e automações sob medida
							para criadores, infoprodutores, músicos e negócios digitais que querem
							profissionalizar sua presença online e crescer.
						</p>

						<div className="mt-7 flex flex-col gap-3 xs:flex-row">
							<a href="/#contact">
								<CustomButton variant="primary">
									Vamos conversar
								</CustomButton>
							</a>

							<Link to="/projects">
								<CustomButton variant="secondary">
									Ver projetos
								</CustomButton>
							</Link>
						</div>

						<div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs text-accent/40 sm:text-sm">
							<span>Desenvolvimento sob medida</span>
							<span>Design responsivo</span>
							<span>Performance</span>
							<span>Integrações</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}