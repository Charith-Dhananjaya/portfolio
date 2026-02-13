export interface Skill {
    name: string;
    icon: string; // react-icons identifier
    color: string;
}

export interface SkillCategory {
    category: string;
    skills: Skill[];
}

export const skillsData: SkillCategory[] = [
    {
        category: "Frontend",
        skills: [
            { name: "React", icon: "SiReact", color: "#61DAFB" },
            { name: "Next.js", icon: "SiNextdotjs", color: "#000000" }, // Note: Might need white on dark mode
            { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
            { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E" },
            { name: "HTML5", icon: "SiHtml5", color: "#E34F26" },
            { name: "CSS3", icon: "SiCss3", color: "#1572B6" },
            { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#06B6D4" },
        ],
    },
    {
        category: "Backend",
        skills: [
            { name: "Java", icon: "SiOpenjdk", color: "#007396" },
            { name: "Spring Boot", icon: "SiSpringboot", color: "#6DB33F" },
            { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
            { name: "Python", icon: "SiPython", color: "#3776AB" },
            { name: "GraphQL", icon: "SiGraphql", color: "#E10098" },
            { name: "REST APIs", icon: "SiPostman", color: "#FF6C37" },
        ],
    },
    {
        category: "Database",
        skills: [
            { name: "PostgreSQL", icon: "SiPostgresql", color: "#4169E1" },
            { name: "MySQL", icon: "SiMysql", color: "#4479A1" },
            { name: "MongoDB", icon: "SiMongodb", color: "#47A248" },
            { name: "Redis", icon: "SiRedis", color: "#DC382D" },
        ],
    },
    {
        category: "DevOps & Cloud",
        skills: [
            { name: "Docker", icon: "SiDocker", color: "#2496ED" },
            { name: "AWS", icon: "SiAmazonwebservices", color: "#FF9900" },
            { name: "Git", icon: "SiGit", color: "#F05032" },
            { name: "GitHub Actions", icon: "SiGithubactions", color: "#2088FF" },
            { name: "Linux", icon: "SiLinux", color: "#FCC624" },
            { name: "Nginx", icon: "SiNginx", color: "#009639" },
        ],
    },
    {
        category: "AI & ML",
        skills: [
            { name: "TensorFlow", icon: "SiTensorflow", color: "#FF6F00" },
            { name: "Python ML", icon: "SiPython", color: "#3776AB" },
            { name: "OpenAI", icon: "SiOpenai", color: "#412991" },
        ],
    },
    {
        category: "Tools",
        skills: [
            { name: "VS Code", icon: "SiVscodium", color: "#007ACC" },
            { name: "IntelliJ", icon: "SiIntellijidea", color: "#000000" },
            { name: "Figma", icon: "SiFigma", color: "#F24E1E" },
            { name: "Jira", icon: "SiJira", color: "#0052CC" },
        ],
    },
];
