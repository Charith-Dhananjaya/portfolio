"use client";

import { useState, useEffect } from "react";
import { NAV_ITEMS } from "@/lib/constants";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Logo from "@/components/ui/Logo";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        let ticking = false;

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrolled(window.scrollY > 50);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleLinkClick = () => setMobileOpen(false);

    return (
        <>
            <nav
                className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
                role="navigation"
                aria-label="Main navigation"
            >
                <div className={styles.inner}>
                    <a href="#home" className={styles.logo} aria-label="Home">
                        <Logo />
                    </a>

                    <div className={styles.navLinks}>
                        {NAV_ITEMS.map((item) => (
                            <a key={item.href} href={item.href} className={styles.navLink}>
                                {item.label}
                            </a>
                        ))}
                        <ThemeToggle />
                    </div>

                    <button
                        className={`${styles.hamburger} ${mobileOpen ? styles.open : ""}`}
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={mobileOpen}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </nav>

            {/* Mobile overlay */}
            <div
                className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ""}`}
            >
                {NAV_ITEMS.map((item) => (
                    <a
                        key={item.href}
                        href={item.href}
                        className={styles.mobileLink}
                        onClick={handleLinkClick}
                    >
                        {item.label}
                    </a>
                ))}
            </div>
        </>
    );
}
