import { About } from "../components/about-section/about"
import { FeaturedProjects } from "../components/featured-projects-section/featured-projects"
import { Hero } from "../components/hero-section/hero"
import { Services } from "../components/services-section/services"
import { Contact } from "../components/contact-section/contact"

function Home() {

	return (
		<>
			<Hero />
			<Services />
			<FeaturedProjects />
			<About />
			<Contact />
		</>
	)
}

export default Home;
