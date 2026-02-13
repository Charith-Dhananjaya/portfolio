import styles from "./Button.module.css";
import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    variant?: "primary" | "secondary";
    href?: string;
    onClick?: () => void;
    type?: "button" | "submit";
    ariaLabel?: string;
    download?: boolean;
    target?: string;
}

export default function Button({
    children,
    variant = "primary",
    href,
    onClick,
    type = "button",
    ariaLabel,
    download,
    target,
}: ButtonProps) {
    const className = `${styles.btn} ${styles[variant]}`;

    if (href) {
        return (
            <a
                href={href}
                className={className}
                aria-label={ariaLabel}
                download={download}
                target={target}
                rel={target === "_blank" ? "noopener noreferrer" : undefined}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            type={type}
            className={className}
            onClick={onClick}
            aria-label={ariaLabel}
        >
            {children}
        </button>
    );
}
