import { ArrowUpRight } from "lucide-react"
import { useEffect, useState } from "react"
import { services } from "../../data/services"
import { ServiceItem } from "./service-item"

export const Services = () => {
	const [currentIndex, setCurrentIndex] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((previous) => (previous + 1) % services.length)
		}, 4500)

		return () => clearInterval(interval)
	}, [])

	const handleNext = () => {
		setCurrentIndex((previous) => (previous + 1) % services.length)
	}
    
	return (
		<section
			id="services"
			className="relative w-full overflow-hidden bg-green-olive px-6 py-12 text-bg "
		>
			<div className="mx-auto w-full max-w-6xl">
				{/* Heading */}
				<div className="flex flex-col gap-6 border-b border-black/10 pb-12 lg:flex-row lg:items-end lg:justify-between">
					<div className="max-w-3xl">
						<span className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
							<span className="h-1.5 w-1.5 rounded-full bg-accent" />
							Serviços
						</span>

						<h2 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
							Da ideia ao produto
							<span className="text-accent"> em produção.</span>
						</h2>
					</div>

					<p className="max-w-sm text-sm leading-relaxed text-black/50 sm:text-base">
						Desenvolvimento, integração e evolução de produtos digitais
						para transformar necessidades reais em soluções funcionais.
					</p>
				</div>

				{/* Carousel */}
				<div className="mt-10 overflow-hidden">
					<div
						className="flex transition-transform duration-700 ease-out"
						style={{
							transform: `translateX(-${currentIndex * 100}%)`,
						}}
					>
						{services.map((service) => (
							<div
								key={service.number}
								className="w-full shrink-0"
							>
								<ServiceItem service={service} />
							</div>
						))}
					</div>
				</div>

				{/* Navigation */}
				<div className="mt-7 flex items-center justify-between">
					<div className="flex items-center gap-2">
						{services.map((service, index) => (
							<button
								key={service.number}
								type="button"
								onClick={() => setCurrentIndex(index)}
								aria-label={`Ir para ${service.title}`}
								className={`h-1.5 transition-all duration-500 ${
									currentIndex === index
										? "w-10 bg-accent"
										: "w-5 bg-black/20"
								}`}
							/>
						))}
					</div>

					<button
						type="button"
						onClick={handleNext}
						className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/50 transition-colors hover:text-accent"
					>
						Próximo
						<ArrowUpRight size={15} />
					</button>
				</div>

				{/* Bottom CTA */}
				<div className="flex flex-col gap-5 border-b border-black/10 py-10 sm:flex-row sm:items-center sm:justify-between">
					<div>
						<p className="text-lg font-medium">
							Não encontrou exatamente o que procura?
						</p>

						<p className="mt-1 text-sm text-black/50">
							Cada projeto começa entendendo o problema antes de definir
							a solução.
						</p>
					</div>

					<a
						href="/#contact"
						className="group flex w-fit items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent"
					>
						Falar sobre um projeto
						<ArrowUpRight
							size={17}
							className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
						/>
					</a>
				</div>
			</div>
		</section>
	)
}