export interface Skill {
    name: string;
    icon: string; // react-icons identifier
}

export interface SkillCategory {
    category: string;
    skills: Skill[];
}

export const skillsData: SkillCategory[] = [
    {
        category: "Frontend",
        skills: [
            { name: "React", icon: "SiReact" },
            { name: "Next.js", icon: "SiNextdotjs" },
            { name: "TypeScript", icon: "SiTypescript" },
            { name: "JavaScript", icon: "SiJavascript" },
            { name: "HTML5", icon: "SiHtml5" },
            { name: "CSS3", icon: "SiCss3" },
            { name: "Tailwind CSS", icon: "SiTailwindcss" },
        ],
    },
    {
        category: "Backend",
        skills: [
            { name: "Java", icon: "SiOpenjdk" },
            { name: "Spring Boot", icon: "SiSpringboot" },
            { name: "Node.js", icon: "SiNodedotjs" },
            { name: "Python", icon: "SiPython" },
            { name: "GraphQL", icon: "SiGraphql" },
            { name: "REST APIs", icon: "SiPostman" },
        ],
    },
    {
        category: "Database",
        skills: [
            { name: "PostgreSQL", icon: "SiPostgresql" },
            { name: "MySQL", icon: "SiMysql" },
            { name: "MongoDB", icon: "SiMongodb" },
            { name: "Redis", icon: "SiRedis" },
        ],
    },
    {
        category: "DevOps & Cloud",
        skills: [
            { name: "Docker", icon: "SiDocker" },
            { name: "AWS", icon: "SiAmazonwebservices" },
            { name: "Git", icon: "SiGit" },
            { name: "GitHub Actions", icon: "SiGithubactions" },
            { name: "Linux", icon: "SiLinux" },
            { name: "Nginx", icon: "SiNginx" },
        ],
    },
    {
        category: "AI & ML",
        skills: [
            { name: "TensorFlow", icon: "SiTensorflow" },
            { name: "Python ML", icon: "SiPython" },
            { name: "OpenAI", icon: "SiOpenai" },
        ],
    },
    {
        category: "Tools",
        skills: [
            { name: "VS Code", icon: "SiVscodium" },
            { name: "IntelliJ", icon: "SiIntellijidea" },
            { name: "Figma", icon: "SiFigma" },
            { name: "Jira", icon: "SiJira" },
        ],
    },
];
