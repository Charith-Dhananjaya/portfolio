"use client";

import { useEffect, useRef, ReactNode } from "react";

type AnimationVariant =
    | "fade-up"
    | "fade-in"
    | "slide-left"
    | "slide-right"
    | "scale-in";

interface AnimateOnScrollProps {
    children: ReactNode;
    variant?: AnimationVariant;
    delay?: number;
    threshold?: number;
    className?: string;
}

export default function AnimateOnScroll({
    children,
    variant = "fade-up",
    delay = 0,
    threshold = 0.15,
    className = "",
}: AnimateOnScrollProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        el.classList.remove("aos-hidden");
                        el.classList.add("aos-visible", variant);
                    }, delay);
                    observer.unobserve(el);
                }
            },
            { threshold }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [variant, delay, threshold]);

    return (
        <div ref={ref} className={`aos-hidden ${className}`}>
            {children}
        </div>
    );
}
