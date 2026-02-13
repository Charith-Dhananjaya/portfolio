import styles from "./SectionHeading.module.css";

interface SectionHeadingProps {
    label: string;
    title: string;
}

export default function SectionHeading({ label, title }: SectionHeadingProps) {
    return (
        <div className={styles.heading}>
            <span className={styles.label}>{label}</span>
            <h2 className={styles.title}>{title}</h2>
            <span className={styles.underline}></span>
        </div>
    );
}
