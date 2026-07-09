import { MenuIcon } from "lucide-react";
import { useEffect, useState } from "react";

export const Header = () => {
    const [mobileMenu, setMobileMenu] = useState<'open' | 'closed'>('closed')
    const [screen, setScreen] = useState(window.innerWidth);
    const mobileLimit = 780;

    const handleMobileMenu = () => {
        if (mobileMenu === 'open') setMobileMenu('closed');
        else setMobileMenu('open');
    }

    useEffect(() => {
        const handleResize = () => {
            setScreen(window.innerWidth);

            if (window.innerWidth > mobileLimit) {
                setMobileMenu("closed");
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

        return (
            <header className="flex items-center justify-between py-2 border-b border-gray-50/20">
                <a href="/" className="flex items-center justify-center gap-2 cursor-pointer">
                    <img src="/images/logo.png" alt="logo" className="w-16 sm:w-20" />
                    <div className="font-light text-sm sm:text-base md:text-xl xl:text-2xl uppercase">Davi Henrique</div>
                </a>
                <div>
                    {(screen > mobileLimit) &&
                        <nav>
                            <ul className="flex items-center uppercase text-sm">
                                <li className="px-2 hover:text-accent transition-all duration-400 hover:cursor-pointer">Projects</li>
                                <li className="border-l border-l-gray-50/40 px-2 hover:text-accent transition-all duration-400 hover:cursor-pointer">About</li>
                                <li className="border-l border-l-gray-50/40 px-2 hover:text-accent transition-all duration-400 hover:cursor-pointer">Skills</li>
                                <li className="border-l border-l-gray-50/40 px-2 hover:text-accent transition-all duration-400 hover:cursor-pointer">Contact</li>
                                <li className="border-l border-l-gray-50/40 px-2 hover:text-accent transition-all duration-400 hover:cursor-pointer">Github</li>
                                <li className="border-l border-l-gray-50/40 px-2 hover:text-accent transition-all duration-400 hover:cursor-pointer">Linkedin</li>
                            </ul>
                        </nav>
                    }
                    {screen <= mobileLimit &&
                        <MenuIcon onClick={handleMobileMenu} className="text-accent"/>
                    }
                    {mobileMenu === "open" &&
                        <nav className="relative ">
                            <ul className="flex text-xs flex-col gap-2 border border-gray-50/50 rounded-sm p-2 items-end w-full sm:w-28 absolute right-0 bg-bg-secondary">
                                <li className="py-2 hover:text-accent transition-all duration-400 hover:cursor-pointer">PROJECTS</li>
                                <li className="border-t border-t-gray-50/20 py-2 hover:text-accent transition-all duration-400 hover:cursor-pointer">ABOUT</li>
                                <li className="border-t border-t-gray-50/20 py-2 hover:text-accent transition-all duration-400 hover:cursor-pointer">SKILLS</li>
                                <li className="border-t border-t-gray-50/20 py-2 hover:text-accent transition-all duration-400 hover:cursor-pointer">CONTACT</li>
                                <li className="border-t border-t-gray-50/20 py-2 hover:text-accent transition-all duration-400 hover:cursor-pointer">GITHUB</li>
                                <li className="border-t border-t-gray-50/20 py-2 hover:text-accent transition-all duration-400 hover:cursor-pointer">LINKEDIN</li>
                            </ul>
                        </nav>
                    }
                </div>
            </header>
        )
    }