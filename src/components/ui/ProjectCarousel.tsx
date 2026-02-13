"use client";

import { useState, TouchEvent } from "react";
import { Project } from "@/data/projects";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import styles from "./ProjectCarousel.module.css";

interface ProjectCarouselProps {
    projects: Project[];
    onCardClick: (project: Project) => void;
}

export default function ProjectCarousel({ projects, onCardClick }: ProjectCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const length = projects.length;

    // Navigation functions
    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + length) % length);
    };

    // Calculate position and style for each card based on its distance from active
    const getCardStyle = (index: number): React.CSSProperties => {
        // Calculate offset from active index
        let offset = (index - activeIndex + length) % length;

        // Normalize to range -2 to +2 (for 5 cards)
        if (offset > Math.floor(length / 2)) {
            offset = offset - length;
        }

        // Position calculations based on offset
        let translateX = 0;
        let scale = 1;
        let opacity = 1;
        let zIndex = 50;
        let blur = 0;

        switch (offset) {
            case 0: // Center (active)
                translateX = 0;
                scale = 1;
                opacity = 1;
                zIndex = 50;
                blur = 0;
                break;
            case 1: // Right adjacent
                translateX = 45;
                scale = 0.85;
                opacity = 0.8;
                zIndex = 30;
                blur = 1;
                break;
            case -1: // Left adjacent
                translateX = -45;
                scale = 0.85;
                opacity = 0.8;
                zIndex = 30;
                blur = 1;
                break;
            case 2: // Far right
                translateX = 85;
                scale = 0.7;
                opacity = 0.5;
                zIndex = 10;
                blur = 2;
                break;
            case -2: // Far left
                translateX = -85;
                scale = 0.7;
                opacity = 0.5;
                zIndex = 10;
                blur = 2;
                break;
            default: // Hidden
                translateX = offset > 0 ? 120 : -120;
                scale = 0.5;
                opacity = 0;
                zIndex = 0;
                blur = 3;
        }

        return {
            transform: `translate(calc(-50% + ${translateX}%), -50%) scale(${scale})`,
            opacity: opacity,
            zIndex: zIndex,
            filter: blur > 0 ? `blur(${blur}px)` : 'none',
            pointerEvents: offset === 0 ? 'auto' : 'none',
        };
    };

    // Touch handlers for swipe
    const handleTouchStart = (e: TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
        if (!touchStart) return;

        const currentTouch = e.targetTouches[0].clientX;
        const diff = touchStart - currentTouch;

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
            setTouchStart(null);
        }
    };

    const handleTouchEnd = () => {
        setTouchStart(null);
    };

    // Handle card clicks
    const handleCardClick = (project: Project, index: number) => {
        let offset = (index - activeIndex + length) % length;
        if (offset > Math.floor(length / 2)) {
            offset = offset - length;
        }

        if (offset === 0) {
            // Active card - open modal
            onCardClick(project);
        } else if (offset > 0) {
            // Right side - go next
            nextSlide();
        } else {
            // Left side - go prev
            prevSlide();
        }
    };

    return (
        <div className={styles.carouselWrapper}>
            {/* Left Arrow */}
            <button
                className={`${styles.arrow} ${styles.arrowLeft}`}
                onClick={prevSlide}
                aria-label="Previous project"
            >
                <HiChevronLeft />
            </button>

            {/* Track Container */}
            <div
                className={styles.carouselTrack}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {projects.map((project, idx) => (
                    <div
                        key={project.id}
                        className={styles.card}
                        style={getCardStyle(idx)}
                        onClick={() => handleCardClick(project, idx)}
                    >
                        {/* Image area */}
                        <div className={styles.imageArea}>
                            <span className={styles.imagePlaceholder}>🖥️</span>
                        </div>

                        {/* Content */}
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>{project.title}</h3>
                            <p className={styles.cardDesc}>{project.description}</p>

                            {/* Tech stack */}
                            <div className={styles.techStack}>
                                {project.techStack.slice(0, 4).map((tech) => (
                                    <span key={tech} className={styles.techBadge}>
                                        {tech}
                                    </span>
                                ))}
                                {project.techStack.length > 4 && (
                                    <span className={styles.techBadge}>
                                        +{project.techStack.length - 4}
                                    </span>
                                )}
                            </div>

                            <button className={styles.viewMore}>
                                {idx === activeIndex ? "View Details →" : "Click to View"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Right Arrow */}
            <button
                className={`${styles.arrow} ${styles.arrowRight}`}
                onClick={nextSlide}
                aria-label="Next project"
            >
                <HiChevronRight />
            </button>

            {/* Dot Indicators */}
            <div className={styles.indicators}>
                {projects.map((_, idx) => (
                    <button
                        key={idx}
                        className={`${styles.dot} ${idx === activeIndex ? styles.dotActive : ""}`}
                        onClick={() => setActiveIndex(idx)}
                        aria-label={`Go to project ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
