import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import "./styles.scss";

interface ButtonProps
    extends DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    variant?:
        | "primary"
        | "secondary"
        | "tertiary"
        | "quaternary"
        | "alt"
        | "link";
    children: ReactNode;
}
export const Button = ({ children, variant = "primary" }: ButtonProps) => {
    return (
        <button className={`c-btn ${variant ? "c-btn--" + variant : null}`}>
            {children}
        </button>
    );
};
