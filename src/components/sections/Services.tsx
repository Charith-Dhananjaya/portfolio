import styles from "./Services.module.css";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Button from "@/components/ui/Button";
import { servicesData } from "@/data/services";
import {
    HiCode,
    HiServer,
    HiCloud,
    HiLightningBolt,
    HiSearchCircle,
} from "react-icons/hi";
import { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
    HiCode,
    HiServer,
    HiCloud,
    HiLightningBolt,
    HiSearchCircle,
};

export default function Services() {
    return (
        <section
            id="services"
            className={`section ${styles.services}`}
            aria-label="Services"
        >
            <div className="container">
                <SectionHeading label="What I Offer" title="Services" />

                <div className={styles.serviceGrid}>
                    {servicesData.map((service, idx) => {
                        const Icon = iconMap[service.icon];
                        return (
                            <AnimateOnScroll
                                key={service.id}
                                variant="fade-up"
                                delay={idx * 120}
                            >
                                <div className={styles.serviceCard}>
                                    <div className={styles.iconWrapper}>
                                        {Icon && <Icon />}
                                    </div>
                                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                                    <ul className={styles.featureList}>
                                        {service.features.map((feat) => (
                                            <li key={feat} className={styles.featureItem}>
                                                {feat}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </AnimateOnScroll>
                        );
                    })}
                </div>

                {/* CTA */}
                <AnimateOnScroll variant="fade-up" delay={200}>
                    <div className={styles.ctaWrapper}>
                        <p className={styles.ctaText}>
                            Ready to bring your idea to life?
                        </p>
                        <Button href="#contact" variant="primary" ariaLabel="Let's build your system">
                            👉 Let&apos;s Build Your System
                        </Button>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
}
