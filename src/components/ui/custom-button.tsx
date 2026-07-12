import type { ComponentProps, ReactNode } from "react";

type Props = {
    children: ReactNode;
    variant: "danger" | "primary" | "secondary";
} & ComponentProps<"button">;

export const CustomButton = ({
    children,
    className = "",
    variant,
    ...props
}: Props) => {
    return (
        <button
            className={`cursor-pointer w-full inline-flex items-center justify-center rounded-lg ${variant === "danger" ? 'bg-red-900 border border-red-700/10 text-white' : variant === "primary" ? 'bg-accent border border-accent-border text-bg' : 'bg-none border border-accent/30 text-accent'} px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0px_0px_10px_rgba(58,191,250,.50)] active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 text-xs sm:text-sm xl:text-base 
            ${className}
        `}
            {...props}
        >
            {children}
        </button>
    );
};