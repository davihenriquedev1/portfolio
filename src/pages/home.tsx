import { AboutSection } from "../components/about-section"
import { FeaturedProjects } from "../components/featured-projects"
import { Hero } from "../components/hero"
import { SkillsSection } from "../components/skills-section"
import { SocialsSection } from "../components/socials-section"

function Home() {

    return (
        <>
            <Hero/>
            <FeaturedProjects/>
            <AboutSection/>
            <SkillsSection/>
            <SocialsSection/>
        </>
    )
}

export default Home;
