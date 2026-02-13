"use client";

import styles from "./Skills.module.css";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { skillsData } from "@/data/skills";
import {
    SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiCss3,
    SiTailwindcss, SiOpenjdk, SiSpringboot, SiNodedotjs, SiPython,
    SiGraphql, SiPostman, SiPostgresql, SiMysql, SiMongodb, SiRedis,
    SiDocker, SiAmazonwebservices, SiGit, SiGithubactions, SiLinux, SiNginx,
    SiTensorflow, SiOpenai, SiVscodium, SiIntellijidea, SiFigma, SiJira,
} from "react-icons/si";
import { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
    SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiCss3,
    SiTailwindcss, SiOpenjdk, SiSpringboot, SiNodedotjs, SiPython,
    SiGraphql, SiPostman, SiPostgresql, SiMysql, SiMongodb, SiRedis,
    SiDocker, SiAmazonwebservices, SiGit, SiGithubactions, SiLinux, SiNginx,
    SiTensorflow, SiOpenai, SiVscodium, SiIntellijidea, SiFigma, SiJira,
};

export default function Skills() {
    return (
        <section id="skills" className={`section ${styles.skills}`} aria-label="Skills">
            <div className="container">
                <SectionHeading label="My Expertise" title="Skills & Technologies" />

                <div className={styles.categoryGrid}>
                    {skillsData.map((cat, catIdx) => (
                        <AnimateOnScroll key={cat.category} variant="fade-up" delay={catIdx * 100}>
                            <div>
                                <h3 className={styles.categoryTitle}>{cat.category}</h3>
                                <div className={styles.skillGrid}>
                                    {cat.skills.map((skill, i) => {
                                        const Icon = iconMap[skill.icon];
                                        return (
                                            <div
                                                key={skill.name}
                                                className={styles.skillBadge}
                                                style={{ animationDelay: `${i * 50}ms` }}
                                            >
                                                {Icon && (
                                                    <Icon
                                                        className={styles.skillIcon}
                                                        style={{ color: skill.color }}
                                                    />
                                                )}
                                                <span className={styles.skillName}>{skill.name}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
