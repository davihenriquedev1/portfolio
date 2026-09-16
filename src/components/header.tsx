import { MenuIcon, XIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { HeaderLink } from "./header-link"

export const Header = () => {
	const [mobileMenu, setMobileMenu] = useState(false)
	const mobileLimit = 780

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > mobileLimit) {
				setMobileMenu(false)
			}
		}

		window.addEventListener("resize", handleResize)

		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, [])

	const handleMobileMenu = () => {
		setMobileMenu((previous) => !previous)
	}

	return (
		<header className="relative z-50 flex items-center justify-between border-b border-gray-50/10 px-6 py-4">
			<NavLink
				to="/"
				className="flex items-center justify-center gap-2"
				onClick={() => setMobileMenu(false)}
			>
				<img
					src="/images/logo-text.png"
					alt="Davi Henrique DEV"
                    title="Davi Henrique DEV"
					className="w-20 sm:w-24"
				/>
			</NavLink>

			<nav className="hidden min-[781px]:block">
				<ul className="flex items-center gap-1 text-sm font-medium uppercase tracking-wide">
					<HeaderLink
						to="/projects"
						value="PROJETOS"
						className="px-3 py-2"
					/>

					<HeaderLink
						to="/services"
						value="SERVIÇOS"
						className="px-3 py-2"
					/>

					<li>
						<a
							href="/#contact"
							className="ml-2 rounded-sm bg-accent px-4 py-2 text-bg transition-all duration-300 hover:opacity-80"
						>
							CONTATO
						</a>
					</li>
				</ul>
			</nav>

			<div className="min-[781px]:hidden">
				<button
					type="button"
					onClick={handleMobileMenu}
					aria-label={mobileMenu ? "Fechar menu" : "Abrir menu"}
					aria-expanded={mobileMenu}
					className="flex items-center justify-center text-accent"
				>
					{mobileMenu ? (
						<XIcon size={24} />
					) : (
						<MenuIcon size={24} />
					)}
				</button>

				{mobileMenu && (
					<nav className="absolute right-0 top-full mt-3 w-40 border border-gray-50/10 bg-bg-secondary p-2 shadow-lg">
						<ul className="flex flex-col text-right text-sm uppercase">
							<HeaderLink
								to="/projects"
								value="PROJETOS"
								className="px-3 py-3"
							/>

							<HeaderLink
								to="/services"
								value="SERVIÇOS"
								className="border-t border-gray-50/10 px-3 py-3"
							/>

							<li className="border-t border-gray-50/10">
								<a
									href="/#contact"
									onClick={() => setMobileMenu(false)}
									className="block px-3 py-3 text-accent"
								>
									CONTATO
								</a>
							</li>
						</ul>
					</nav>
				)}
			</div>
		</header>
	)
}