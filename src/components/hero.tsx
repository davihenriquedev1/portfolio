import { HeroImage } from "./hero-image"
import { CustomButton } from "./ui/custom-button"

export const Hero = () => {
    return (
        <section className="flex flex-col 2xs:flex-row justify-center py-6 lg:py-8 w-full">
            <div className="mr-4 flex ">
                <HeroImage/>
            </div>
            <div className="flex flex-col sm:max-w-[50%] lg:max-w-[40%]">
                <h1 className="xs:text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 ">DAVI HENRIQUE</h1>
                <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-accent mb-2 font-semibold ">Full Stack Developer JR</h2>
                <div className="text-accent/50 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">Desenvolvendo aplicações modernas cujo foco é satisfazer a necessidade real de cada cliente.</div>
                <div className="flex flex-col xs:flex-row gap-2 mt-3 w-full">
                    <CustomButton variant="primary"><a href="/projects">Ver projetos</a></CustomButton>
                    <CustomButton variant="secondary"><a href="/#contact">Entre em contato</a></CustomButton>
                </div>
            </div>
        </section>
    )
}   