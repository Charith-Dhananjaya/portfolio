"use client";

import { useState } from "react";
import styles from "./Projects.module.css";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import ProjectCarousel from "@/components/ui/ProjectCarousel";
import ProjectModal from "@/components/ui/ProjectModal";
import { projectsData, Project } from "@/data/projects";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [modalOpen, setModalOpen] = useState(false);

    const handleCardClick = (project: Project) => {
        setSelectedProject(project);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setTimeout(() => setSelectedProject(null), 300);
    };

    return (
        <section id="projects" className={`section ${styles.projects}`} aria-label="Projects">
            <div className="container">
                <SectionHeading label="Case Studies" title="Featured Projects" />

                <AnimateOnScroll variant="fade-up">
                    <ProjectCarousel projects={projectsData} onCardClick={handleCardClick} />
                </AnimateOnScroll>
            </div>

            {/* Modal */}
            <ProjectModal
                project={selectedProject}
                isOpen={modalOpen}
                onClose={handleCloseModal}
            />
        </section>
    );
}
