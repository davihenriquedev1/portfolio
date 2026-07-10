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
                    <img src="/images/logo-text.png" alt="logo" className="w-16 sm:w-20" />
                </a>
                <div>
                    {(screen > mobileLimit) &&
                        <nav>
                            <ul className="flex items-center uppercase text-sm">
                                <li className="px-2 hover:text-accent transition-all duration-400 hover:cursor-pointer"><a href="/projects">PROJECTS</a></li>
                                <li className="border-l border-l-gray-50/40 px-2 hover:text-accent transition-all duration-400 hover:cursor-pointer"><a href="/about">ABOUT</a></li>
                                <li className="border-l border-l-gray-50/40 px-2 hover:text-accent transition-all duration-400 hover:cursor-pointer"><a href="/#skills">SKILLS</a></li>
                                <li className="border-l border-l-gray-50/40 px-2 hover:text-accent transition-all duration-400 hover:cursor-pointer"><a href="/#contact">CONTACT</a></li>
                            </ul>
                        </nav>
                    }
                    {screen <= mobileLimit &&
                        <MenuIcon onClick={handleMobileMenu} className="text-accent"/>
                    }
                    {mobileMenu === "open" &&
                        <nav className="relative ">
                            <ul className="flex text-xs flex-col gap-2 border border-gray-50/50 rounded-sm p-2 items-end w-full sm:w-28 absolute right-0 bg-bg-secondary">
                                <li className="py-2 hover:text-accent transition-all duration-400 hover:cursor-pointer"><a href="/projects">PROJECTS</a></li>
                                <li className="border-t border-t-gray-50/20 py-2 hover:text-accent transition-all duration-400 hover:cursor-pointer"><a href="/about">ABOUT</a></li>
                                <li className="border-t border-t-gray-50/20 py-2 hover:text-accent transition-all duration-400 hover:cursor-pointer"><a href="#skills">SKILLS</a></li>
                                <li className="border-t border-t-gray-50/20 py-2 hover:text-accent transition-all duration-400 hover:cursor-pointer"><a href="#contact">CONTACT</a></li>
                            </ul>
                        </nav>
                    }
                </div>
            </header>
        )
    }