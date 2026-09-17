import type { Social } from "../types/social"


export const ContactItem = ({...social}: Social) => {
    return (
        <a
            key={social.title}
            href={social.href}
            target={social.title === "E-mail" ? "_self" : "_blank"}
            rel="noreferrer"
            className="flex items-center gap-4 rounded-xl border border-blue/20 bg-white/2 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_0_25px_rgba(182,255,0,.12)]"
        >
            <social.icon
                size={24}
                className="text-accent shrink-0"
            />

            <div className="flex flex-col wrap-anywhere">
                <h3 className="font-semibold text-white">
                    {social.title}
                </h3>

                <p className="text-xs text-gray-500">
                    {social.description}
                </p>

                <p className="text-sm text-gray-300">
                    {social.value}
                </p>
            </div>
        </a>
    )
}