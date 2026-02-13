export interface Service {
    id: number;
    title: string;
    icon: string;
    features: string[];
}

export const servicesData: Service[] = [
    {
        id: 1,
        title: "Full Stack Web Development",
        icon: "HiCode",
        features: [
            "Modern React & Next.js frontends",
            "Responsive, accessible UI/UX",
            "End-to-end feature development",
            "Performance-optimized builds",
        ],
    },
    {
        id: 2,
        title: "Backend Architecture & APIs",
        icon: "HiServer",
        features: [
            "REST & GraphQL API design",
            "Microservices architecture",
            "Authentication & JWT security",
            "Scalable system design",
        ],
    },
    {
        id: 3,
        title: "DevOps & Deployment",
        icon: "HiCloud",
        features: [
            "Docker containerization",
            "CI/CD pipeline setup",
            "AWS infrastructure",
            "Monitoring & logging",
        ],
    },
    {
        id: 4,
        title: "AI & Intelligent Systems",
        icon: "HiLightningBolt",
        features: [
            "ML model integration",
            "AI-powered dashboards",
            "Data analytics tools",
            "Intelligent automation",
        ],
    },
    {
        id: 5,
        title: "Debugging & Bug Fixing",
        icon: "HiSearchCircle",
        features: [
            "Root cause analysis",
            "Performance profiling",
            "Legacy code refactoring",
            "Production issue resolution",
        ],
    },
];
