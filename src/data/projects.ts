export interface Project {
    id: number;
    title: string;
    description: string;
    problem: string;
    solution: string;
    keyFeatures: string[];
    techStack: string[];
    githubUrl: string;
    liveUrl?: string;
    image: string;
}

export const projectsData: Project[] = [
    {
        id: 1,
        title: "HealthCare Microservices Platform",
        description:
            "A full-scale hospital management system built with microservices architecture.",
        problem:
            "Hospitals struggle with fragmented systems for patient management, appointments, and records.",
        solution:
            "Designed a distributed microservices platform with Spring Boot, API Gateway, and service discovery for seamless healthcare operations.",
        keyFeatures: [
            "Patient & doctor management",
            "Appointment booking system",
            "Medical records with CRUD",
            "JWT-based authentication",
            "API Gateway with Eureka",
        ],
        techStack: [
            "Spring Boot",
            "React",
            "MySQL",
            "Docker",
            "Eureka",
            "API Gateway",
        ],
        githubUrl: "https://github.com/charithdm/healthcare-platform",
        liveUrl: "",
        image: "/images/project-healthcare.jpg",
    },
    {
        id: 2,
        title: "AI-Powered Analytics Dashboard",
        description:
            "An intelligent dashboard that visualizes business data with ML-driven insights.",
        problem:
            "Businesses lacked real-time insights and predictive analytics from their operational data.",
        solution:
            "Built an interactive dashboard with Chart.js, Python ML models, and a Next.js frontend for real-time analytics.",
        keyFeatures: [
            "Real-time data visualization",
            "Predictive analytics",
            "Custom report generation",
            "Role-based access control",
            "Export to PDF/CSV",
        ],
        techStack: [
            "Next.js",
            "Python",
            "TensorFlow",
            "PostgreSQL",
            "Chart.js",
            "Docker",
        ],
        githubUrl: "https://github.com/charithdm/ai-dashboard",
        liveUrl: "",
        image: "/images/project-ai-dashboard.jpg",
    },
    {
        id: 3,
        title: "E-Commerce Microservices Platform",
        description:
            "A scalable e-commerce backend with order management, payments, and inventory.",
        problem:
            "Monolithic e-commerce platforms couldn't scale to handle traffic spikes and complex workflows.",
        solution:
            "Decomposed the system into microservices — product catalog, order processing, payment gateway, and notification services.",
        keyFeatures: [
            "Product catalog & search",
            "Shopping cart & checkout",
            "Payment gateway integration",
            "Order tracking system",
            "Email notifications",
        ],
        techStack: [
            "Spring Boot",
            "React",
            "MongoDB",
            "Redis",
            "RabbitMQ",
            "AWS",
        ],
        githubUrl: "https://github.com/charithdm/ecommerce-microservices",
        liveUrl: "",
        image: "/images/project-ecommerce.jpg",
    },
    {
        id: 4,
        title: "Real-Time Chat Application",
        description:
            "A high-concurrency chat solution supporting 10k+ concurrent users with WebSockets.",
        problem:
            "Existing polling-based chat solutions were high-latency and server-intensive.",
        solution:
            "Implemented a WebSocket-based architecture with Redis Pub/Sub for horizontal scaling across multiple server nodes.",
        keyFeatures: [
            "Real-time messaging",
            "Group chat & channels",
            "Message persistence",
            "Online status indicators",
            "File sharing support",
        ],
        techStack: [
            "Node.js",
            "Socket.io",
            "Redis",
            "React",
            "Cassandra",
            "Docker",
        ],
        githubUrl: "https://github.com/charithdm/chat-app",
        liveUrl: "",
        image: "/images/project-chat.jpg",
    },
    {
        id: 5,
        title: "Finance Tracker & Budgeting Tool",
        description:
            "Personal finance management tool with bank sync and visualized spending reports.",
        problem:
            "Users found it difficult to track expenses across multiple accounts manually.",
        solution:
            "Created a secure aggregator using Plaid API to fetch transactions and categorize them automatically with ML.",
        keyFeatures: [
            "Bank account synchronization",
            "Auto-categorization of expenses",
            "Budget goal setting",
            "Recurring bill alerts",
            "Monthly financial reports",
        ],
        techStack: [
            "Next.js",
            "TypeScript",
            "PostgreSQL",
            "Prisma",
            "Plaid API",
            "Tailwind CSS",
        ],
        githubUrl: "https://github.com/charithdm/finance-tracker",
        liveUrl: "",
        image: "/images/project-finance.jpg",
    },
];
