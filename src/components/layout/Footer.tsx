import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { SOCIAL_LINKS } from "@/lib/constants";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer} role="contentinfo">
            <div className={styles.inner}>
                <div>
                    <div className={styles.brand}>
                        Charith<span className={styles.accent}>.</span>
                    </div>
                    <p className={styles.copy}>
                        © {new Date().getFullYear()} Charith Dhananjaya De Mel. All rights
                        reserved.
                    </p>
                </div>

                <div className={styles.socials}>
                    <a
                        href={SOCIAL_LINKS.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialIcon}
                        aria-label="LinkedIn"
                    >
                        <FaLinkedinIn />
                    </a>
                    <a
                        href={SOCIAL_LINKS.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialIcon}
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href={SOCIAL_LINKS.email}
                        className={styles.socialIcon}
                        aria-label="Email"
                    >
                        <HiOutlineMail />
                    </a>
                </div>
            </div>
        </footer>
    );
}
