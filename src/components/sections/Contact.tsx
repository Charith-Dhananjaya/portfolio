"use client";

import { FormEvent, useState } from "react";
import styles from "./Contact.module.css";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Button from "@/components/ui/Button";
import { SOCIAL_LINKS, PERSONAL } from "@/lib/constants";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
    };

    return (
        <section
            id="contact"
            className={`section ${styles.contact}`}
            aria-label="Contact"
        >
            <div className="container">
                <SectionHeading label="Get in Touch" title="Contact Me" />

                <div className={styles.grid}>
                    {/* Left — info */}
                    <AnimateOnScroll variant="slide-right">
                        <div className={styles.infoCol}>
                            <h3 className={styles.infoTitle}>
                                Let&apos;s build something{" "}
                                <span className="gradient-text">amazing</span> together.
                            </h3>
                            <p className={styles.infoText}>
                                Whether you have a project in mind, need technical consultation,
                                or just want to say hello — I&apos;d love to hear from you.
                                I&apos;m always open to discussing new opportunities.
                            </p>

                            <div className={styles.infoItem}>
                                <span className={styles.infoIcon}>
                                    <HiOutlineMail />
                                </span>
                                {PERSONAL.email}
                            </div>
                            <div className={styles.infoItem}>
                                <span className={styles.infoIcon}>
                                    <HiOutlineLocationMarker />
                                </span>
                                {PERSONAL.location}
                            </div>

                            <div className={styles.socials}>
                                <a
                                    href={SOCIAL_LINKS.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialLink}
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedinIn />
                                </a>
                                <a
                                    href={SOCIAL_LINKS.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialLink}
                                    aria-label="GitHub"
                                >
                                    <FaGithub />
                                </a>
                                <a
                                    href={SOCIAL_LINKS.email}
                                    className={styles.socialLink}
                                    aria-label="Email"
                                >
                                    <HiOutlineMail />
                                </a>
                            </div>
                        </div>
                    </AnimateOnScroll>

                    {/* Right — form */}
                    <AnimateOnScroll variant="slide-left">
                        <div className={styles.formCol}>
                            {submitted ? (
                                <div style={{ textAlign: "center", padding: "40px 0" }}>
                                    <p
                                        style={{
                                            fontSize: "1.3rem",
                                            fontWeight: 700,
                                            color: "var(--color-success)",
                                            marginBottom: 8,
                                        }}
                                    >
                                        ✓ Message Sent!
                                    </p>
                                    <p style={{ color: "var(--color-text-muted)" }}>
                                        Thank you for reaching out. I&apos;ll get back to you soon.
                                    </p>
                                </div>
                            ) : (
                                <form className={styles.form} onSubmit={handleSubmit}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="contact-name" className={styles.formLabel}>
                                            Your Name
                                        </label>
                                        <input
                                            id="contact-name"
                                            type="text"
                                            className={styles.formInput}
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="contact-email" className={styles.formLabel}>
                                            Your Email
                                        </label>
                                        <input
                                            id="contact-email"
                                            type="email"
                                            className={styles.formInput}
                                            placeholder="john@example.com"
                                            required
                                        />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label
                                            htmlFor="contact-message"
                                            className={styles.formLabel}
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            id="contact-message"
                                            className={styles.formTextarea}
                                            placeholder="Tell me about your project..."
                                            required
                                        />
                                    </div>

                                    <div className={styles.submitBtn}>
                                        <Button type="submit" variant="primary" ariaLabel="Send message">
                                            Send Message
                                        </Button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </section>
    );
}
