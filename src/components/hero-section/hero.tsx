import { Link } from "react-router-dom"
import { CustomButton } from "../ui/custom-button"

export const Hero = () => {
	return (
		<section className="relative overflow-hidden">
			<img
				src="/images/me.png"
				alt=""
				className="pointer-events-none absolute right-0 bottom-0 z-0 h-full max-w-none object-contain opacity-20"
			/>

			<div className="relative z-10 flex w-full justify-center py-12 lg:py-20">
				<div className="flex w-full max-w-6xl flex-col justify-center">
					<div className="flex max-w-3xl flex-col">
						<span className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
							Desenvolvimento web
						</span>

						<h1 className="text-4xl font-bold leading-tight xs:text-5xl sm:text-6xl xl:text-7xl">
							Soluções digitais para transformar seu negócio.
						</h1>

						<p className="mt-5 max-w-2xl text-sm leading-relaxed text-accent/60 sm:text-base md:text-lg">
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