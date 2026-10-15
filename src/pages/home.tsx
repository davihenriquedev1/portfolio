import { About } from "../components/about-section/about"
import { FeaturedProjects } from "../components/featured-projects-section/featured-projects"
import { Hero } from "../components/hero-section/hero"
import { Services } from "../components/services-section/services"
import { SocialsAndContact } from "../components/socials-and-contact-section/socials-and-contact"

function Home() {

    return (
        <>
            <Hero/>
            <Services/>
            <FeaturedProjects/>
            <About/>
            <SocialsAndContact/>
        </>
    )
}

export default Home;
