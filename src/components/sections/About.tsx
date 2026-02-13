import styles from "./About.module.css";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { SOCIAL_LINKS } from "@/lib/constants";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className={`section ${styles.about}`} aria-label="About">
            <div className="container">
                <SectionHeading label="Get to know me" title="About Me" />

                <div className={styles.grid}>
                    {/* Left — Image */}
                    <AnimateOnScroll variant="slide-right">
                        <div className={styles.imageCol}>
                            <div className={styles.imageContainer}>
                                <div className={styles.decorativeBox}></div>
                                <div className={styles.imageWrapper}>
                                    <span className={styles.line1}></span>
                                    <span className={styles.line2}></span>
                                    <span className={styles.line3}></span>
                                    <span className={styles.line4}></span>
                                    <Image
                                        src="/profile.jpg"
                                        alt="Charith Dhananjaya De Mel"
                                        fill
                                        className={styles.profileImg}
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </AnimateOnScroll>

                    {/* Right — Text */}
                    <AnimateOnScroll variant="slide-left">
                        <div className={styles.textCol}>
                            <span className={styles.subtitle}>Who I Am</span>
                            <h3 className={styles.heading}>
                                A Full Stack Engineer who builds systems that{" "}
                                <span className="gradient-text">scale</span>.
                            </h3>
                            <p className={styles.paragraph}>
                                I&apos;m <span className={styles.highlight}>Charith Dhananjaya De Mel</span>,
                                a passionate Full Stack Software Engineer specializing in building
                                production-grade web applications, microservices architectures, and
                                AI-integrated solutions. I focus on writing clean, scalable code
                                that drives real business impact.
                            </p>
                            <p className={styles.paragraph}>
                                <span className={styles.highlight}>What makes me different?</span>{" "}
                                I don&apos;t just write code — I architect complete systems. From
                                designing database schemas and API contracts to building polished
                                frontends, I own the entire stack and deliver solutions that are
                                maintainable, performant, and secure.
                            </p>

                            {/* Social links */}
                            <div className={styles.socials}>
                                <a
                                    href={SOCIAL_LINKS.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialLink}
                                    aria-label="LinkedIn profile"
                                >
                                    <FaLinkedinIn />
                                </a>
                                <a
                                    href={SOCIAL_LINKS.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialLink}
                                    aria-label="GitHub profile"
                                >
                                    <FaGithub />
                                </a>
                                <a
                                    href={SOCIAL_LINKS.email}
                                    className={styles.socialLink}
                                    aria-label="Send email"
                                >
                                    <HiOutlineMail />
                                </a>
                            </div>

                            {/* Stats */}
                            <div className={styles.stats}>
                                <div className={styles.statItem}>
                                    <div className={styles.statNumber}>10+</div>
                                    <div className={styles.statLabel}>Projects</div>
                                </div>
                                <div className={styles.statItem}>
                                    <div className={styles.statNumber}>2+</div>
                                    <div className={styles.statLabel}>Years Experience</div>
                                </div>
                                <div className={styles.statItem}>
                                    <div className={styles.statNumber}>15+</div>
                                    <div className={styles.statLabel}>Technologies</div>
                                </div>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </section>
    );
}
