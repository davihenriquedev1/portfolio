import { AboutSection } from "./components/about-section"
import { FeaturedProjects } from "./components/featured-projects"
import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { Hero } from "./components/hero"
import { SkillsSection } from "./components/skills-section"
import { SocialsSection } from "./components/socials-section"

function App() {

	return (
		<div className="mx-auto max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-6xl px-4 lg:px-8">
			<Header />
			<main>
				<Hero/>
				<FeaturedProjects/>
				<AboutSection/>
				<SkillsSection/>
				<SocialsSection/>
			</main>
			<Footer/>
		</div>
	)
}

export default App
