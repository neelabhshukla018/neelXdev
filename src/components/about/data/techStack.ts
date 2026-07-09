import { TerminalData } from "../types";

const techStack: TerminalData = {
  command: "cat tech-stack.json",
  filename: "tech-stack.json",

  content: `{
  "Frontend": [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion"
  ],

  "Backend": [
    "Node.js",
    "Express.js",
    "REST APIs"
  ],

  "Database": [
    "MongoDB",
    "PostgreSQL",
    "Prisma"
  ],

  "Tools": [
    "Git",
    "GitHub",
    "VS Code",
    "Figma",
    "Postman"
  ]
}`,
};

export default techStack;