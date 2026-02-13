"use client";

import { useEffect } from "react";
import { Project } from "@/data/projects";
import { HiX } from "react-icons/hi";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import styles from "./ProjectModal.module.css";

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    // ESC key to close
    useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        document.addEventListener("keydown", handleEscape);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "auto";
        };
    }, [isOpen, onClose]);

    if (!isOpen || !project) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                {/* Close button */}
                <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
                    <HiX />
                </button>

                {/* Content */}
                <div className={styles.content}>
                    {/* Image */}
                    <div className={styles.imageSection}>
                        <div className={styles.imagePlaceholder}>🖥️</div>
                    </div>

                    {/* Details */}
                    <div className={styles.details}>
                        <h2 className={styles.title}>{project.title}</h2>
                        <p className={styles.description}>{project.description}</p>

                        {/* Tech stack */}
                        <div className={styles.techStack}>
                            {project.techStack.map((tech) => (
                                <span key={tech} className={styles.techBadge}>
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Problem */}
                        <div className={styles.section}>
                            <h3 className={styles.sectionLabel}>Problem</h3>
                            <p className={styles.sectionText}>{project.problem}</p>
                        </div>

                        {/* Solution */}
                        <div className={styles.section}>
                            <h3 className={styles.sectionLabel}>Solution</h3>
                            <p className={styles.sectionText}>{project.solution}</p>
                        </div>

                        {/* Key Features */}
                        <div className={styles.section}>
                            <h3 className={styles.sectionLabel}>Key Features</h3>
                            <ul className={styles.featuresList}>
                                {project.keyFeatures.map((feat) => (
                                    <li key={feat} className={styles.featureItem}>
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Links */}
                        <div className={styles.links}>
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                            >
                                <FaGithub /> View on GitHub
                            </a>
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.link}
                                >
                                    <FaExternalLinkAlt /> Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
