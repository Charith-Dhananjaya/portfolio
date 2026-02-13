"use client";

import { useRef, useState, useEffect, MouseEvent as ReactMouseEvent } from "react";
import { Project } from "@/data/projects";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import styles from "./ProjectCarousel.module.css";

interface ProjectCarouselProps {
    projects: Project[];
    onCardClick: (project: Project) => void;
}

export default function ProjectCarousel({ projects, onCardClick }: ProjectCarouselProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // Detect centered card using Intersection Observer
    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        const cards = container.querySelectorAll(`.${styles.card}`);
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.7) {
                        const index = parseInt(entry.target.getAttribute("data-index") || "0");
                        setActiveIndex(index);
                    }
                });
            },
            { root: container, threshold: [0.7], rootMargin: "0px" }
        );

        cards.forEach((card) => observer.observe(card));
        return () => observer.disconnect();
    }, [projects]);

    // Hijack mouse wheel to scroll horizontally
    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        const handleWheel = (e: WheelEvent) => {
            if (e.deltaY !== 0) {
                e.preventDefault();
                container.scrollLeft += e.deltaY;
            }
        };

        container.addEventListener("wheel", handleWheel, { passive: false });
        return () => container.removeEventListener("wheel", handleWheel);
    }, []);

    // Mouse drag to scroll
    const handleMouseDown = (e: ReactMouseEvent) => {
        setIsDragging(true);
        setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
        setScrollLeft(scrollRef.current?.scrollLeft || 0);
    };

    const handleMouseMove = (e: ReactMouseEvent) => {
        if (!isDragging || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - (scrollRef.current.offsetLeft || 0);
        const walk = (x - startX) * 2;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    // Arrow navigation
    const scrollTo = (direction: "left" | "right") => {
        if (!scrollRef.current) return;
        const cardWidth = scrollRef.current.querySelector(`.${styles.card}`)?.clientWidth || 400;
        const scrollAmount = cardWidth + 24; // card width + gap
        const newScrollLeft =
            direction === "left"
                ? scrollRef.current.scrollLeft - scrollAmount
                : scrollRef.current.scrollLeft + scrollAmount;

        scrollRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
    };

    return (
        <div className={styles.carouselWrapper}>
            {/* Left arrow */}
            <button
                className={`${styles.arrow} ${styles.arrowLeft}`}
                onClick={() => scrollTo("left")}
                aria-label="Previous project"
            >
                <HiChevronLeft />
            </button>

            {/* Scrollable container */}
            <div
                ref={scrollRef}
                className={styles.carouselTrack}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
            >
                {projects.map((project, idx) => (
                    <div
                        key={project.id}
                        data-index={idx}
                        className={`${styles.card} ${idx === activeIndex ? styles.active : ""}`}
                        onClick={() => !isDragging && onCardClick(project)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === "Enter" && onCardClick(project)}
                    >
                        {/* Image area */}
                        <div className={styles.imageArea}>
                            <span className={styles.imagePlaceholder}>🖥️</span>
                        </div>

                        {/* Content */}
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>{project.title}</h3>
                            <p className={styles.cardDesc}>{project.description}</p>

                            {/* Tech stack badges */}
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

                            <button className={styles.viewMore}>View Details →</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Right arrow */}
            <button
                className={`${styles.arrow} ${styles.arrowRight}`}
                onClick={() => scrollTo("right")}
                aria-label="Next project"
            >
                <HiChevronRight />
            </button>

            {/* Dot indicators */}
            <div className={styles.indicators}>
                {projects.map((_, idx) => (
                    <button
                        key={idx}
                        className={`${styles.dot} ${idx === activeIndex ? styles.dotActive : ""}`}
                        onClick={() => {
                            const container = scrollRef.current;
                            if (!container) return;
                            const card = container.querySelector(`[data-index="${idx}"]`);
                            if (card) {
                                card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
                            }
                        }}
                        aria-label={`Go to project ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
