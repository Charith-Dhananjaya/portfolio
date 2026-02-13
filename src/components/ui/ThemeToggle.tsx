"use client";

import { useTheme } from "@/context/ThemeContext";
import { HiSun, HiMoon } from "react-icons/hi";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={styles.toggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
            {theme === "dark" ? <HiSun /> : <HiMoon />}
        </button>
    );
}
