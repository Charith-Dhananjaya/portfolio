"use client";

import styles from "./Hero.module.css";
import Button from "@/components/ui/Button";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { PERSONAL } from "@/lib/constants";
import { HiOutlineDownload, HiOutlineMail } from "react-icons/hi";

export default function Hero() {
    return (
        <section id="home" className={styles.hero} aria-label="Hero">
            {/* Floating shapes */}
            <div className={`${styles.floatingShape} ${styles.shape1}`} />
            <div className={`${styles.floatingShape} ${styles.shape2}`} />

            <div className={styles.content}>
                <AnimateOnScroll variant="fade-up">
                    <div className={styles.badge}>
                        <span className={styles.dot} />
                        Available for opportunities
                    </div>
                </AnimateOnScroll>

                <AnimateOnScroll variant="fade-up" delay={150}>
                    <h1 className={styles.name}>
                        Hi, I&apos;m{" "}
                        <span className={styles.nameGradient}>{PERSONAL.name}</span>
                    </h1>
                </AnimateOnScroll>

                <AnimateOnScroll variant="fade-up" delay={300}>
                    <div className={styles.titlesWrapper}>
                        <div className={styles.titlesTrack}>
                            {PERSONAL.titles.map((title) => (
                                <span key={title} className={styles.titleItem}>
                                    {title}
                                </span>
                            ))}
                        </div>
                    </div>
                </AnimateOnScroll>

                <AnimateOnScroll variant="fade-up" delay={450}>
                    <p className={styles.tagline}>{PERSONAL.tagline}</p>
                    <p className={styles.motto}>{PERSONAL.motto}  — my signature</p>
                </AnimateOnScroll>

                <AnimateOnScroll variant="fade-up" delay={600}>
                    <div className={styles.cta}>
                        <Button href="#contact" variant="primary" ariaLabel="Get in touch">
                            <HiOutlineMail /> Get in Touch
                        </Button>
                        <Button
                            href={PERSONAL.resumeUrl}
                            variant="secondary"
                            target="_blank"
                            ariaLabel="View my CV"
                        >
                            <HiOutlineDownload /> View My CV
                        </Button>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
}
