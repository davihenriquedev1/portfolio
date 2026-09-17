import { About } from "../components/about-section/about"
import { FeaturedProjects } from "../components/featured-projects-section/featured-projects"
import { Hero } from "../components/hero-section/hero"
import { Services } from "../components/services-section/services"
import { Skills } from "../components/skills-badge/skills"
import { SocialsAndContact } from "../components/socials-and-contact-section/socials-and-contact"

function Home() {

    return (
        <>
            <Hero/>
            <Services/>
            <FeaturedProjects/>
            <About/>
            <Skills/>
            <SocialsAndContact/>
        </>
    )
}

export default Home;
