import type { LiHTMLAttributes } from "react";
import { NavLink } from "react-router-dom";

type Props = {
    to: string;
    value: string;
} & LiHTMLAttributes<HTMLLIElement>;

export const HeaderLink = ({ to, value, className = "", ...props }: Props) => {
    return (
        <li
            {...props}
            className={`hover:text-accent transition-all duration-300 cursor-pointer ${className}`}
        >
            <NavLink
                to={to}
                className={({ isActive }) =>
                    isActive ? "text-accent" : ""
                }
            >
                {value}
            </NavLink>
        </li>
    );
};