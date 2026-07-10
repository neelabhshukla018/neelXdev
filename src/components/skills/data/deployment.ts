// src/components/skills/data/deployment.ts

/**
 * ==========================================================
 * DEPLOYMENT SKILLS
 * ==========================================================
 */

import { Box, Rocket } from "lucide-react";
import { Skill } from "../types/skill";

/* ==========================================================
 * DOCKER
 * ==========================================================
 */

const docker: Skill = {
  id: "docker",

  name: "Docker",

  shortName: "Docker",

  description:
    "Containerizing applications using Docker with images, containers, volumes, networks, Docker Compose and production-ready deployment workflows.",

  category: "deployment",

  level: "Intermediate",

  status: "active",

  icon: Box,

  color: "#2496ED",

  extension: "ts",

  experience: {
    years: 1,
    months: 6,
    startedAt: "2025",
  },

  stats: {
    years: 1,
    projects: 6,
    repositories: 6,
    commits: 180,
  },

  metrics: {
    proficiency: 78,
    confidence: 80,
    experience: 75,
    problemSolving: 82,
    realWorldUsage: 80,
  },

  projects: [
    {
      id: "naxity",
      name: "naXity",
    },
    {
      id: "portfolio",
      name: "Developer Portfolio",
    },
    {
      id: "despire",
      name: "Despire AI",
    },
  ],

  technologies: [
    "Docker Engine",
    "Docker CLI",
    "Dockerfile",
    "Docker Compose",
    "Images",
    "Containers",
    "Volumes",
    "Networks",
    "Environment Variables",
    "Bind Mounts",
    "Container Registry",
    "Multi-stage Builds",
  ],

  connections: [
    {
      target: "nodejs",
      strength: 88,
    },
    {
      target: "postgresql",
      strength: 82,
    },
    {
      target: "mongodb",
      strength: 82,
    },
    {
      target: "redis",
      strength: 84,
    },
    {
      target: "vercel",
      strength: 74,
    },
    {
      target: "render",
      strength: 90,
    },
  ],

  position: {
    x: 0,
    y: 0,
  },

  featured: true,

  favorite: true,
};

/* ==========================================================
 * CONTINUE IN PART 2...
 * ==========================================================
 *//* ==========================================================
 * VERCEL
 * ==========================================================
 */

const vercel: Skill = {
  id: "vercel",

  name: "Vercel",

  shortName: "Vercel",

  description:
    "Deploying production-ready Next.js applications with automatic CI/CD, edge functions, environment variables, analytics and global CDN.",

  category: "deployment",

  level: "Advanced",

  status: "active",

  icon: Rocket,

  color: "#FFFFFF",

  extension: "ts",

  experience: {
    years: 2,
    months: 0,
    startedAt: "2024",
  },

  stats: {
    years: 2,
    projects: 12,
    repositories: 10,
    commits: 260,
  },

  metrics: {
    proficiency: 91,
    confidence: 92,
    experience: 89,
    problemSolving: 90,
    realWorldUsage: 95,
  },

  projects: [
    {
      id: "portfolio",
      name: "Developer Portfolio",
    },
    {
      id: "naxity",
      name: "naXity",
    },
    {
      id: "ss-tech",
      name: "SS Technology",
    },
  ],

  technologies: [
    "Next.js Deployment",
    "CI/CD",
    "Preview Deployments",
    "Custom Domains",
    "Environment Variables",
    "Serverless Functions",
    "Edge Functions",
    "Analytics",
    "Speed Insights",
    "CDN",
    "GitHub Integration",
    "SSL",
  ],

  connections: [
    {
      target: "nextjs",
      strength: 100,
    },
    {
      target: "react",
      strength: 98,
    },
    {
      target: "docker",
      strength: 74,
    },
    {
      target: "github",
      strength: 92,
    },
    {
      target: "render",
      strength: 70,
    },
    {
      target: "netlify",
      strength: 82,
    },
  ],

  position: {
    x: 220,
    y: -80,
  },

  featured: true,

  favorite: true,
};

/* ==========================================================
 * CONTINUE IN PART 3...
 * ==========================================================
 *//* ==========================================================
 * NETLIFY
 * ==========================================================
 */

const netlify: Skill = {
  id: "netlify",

  name: "Netlify",

  shortName: "Netlify",

  description:
    "Deploying static sites and frontend applications with automatic builds, custom domains, serverless functions and continuous deployment from Git repositories.",

  category: "deployment",

  level: "Advanced",

  status: "active",

  icon: Rocket,

  color: "#00C7B7",

  extension: "ts",

  experience: {
    years: 2,
    months: 0,
    startedAt: "2024",
  },

  stats: {
    years: 2,
    projects: 10,
    repositories: 9,
    commits: 210,
  },

  metrics: {
    proficiency: 88,
    confidence: 89,
    experience: 86,
    problemSolving: 87,
    realWorldUsage: 90,
  },

  projects: [
    {
      id: "despire",
      name: "Despire AI",
    },
    {
      id: "traventure",
      name: "Traventure",
    },
    {
      id: "yumcart",
      name: "YumCart",
    },
  ],

  technologies: [
    "Continuous Deployment",
    "Build Pipeline",
    "Custom Domain",
    "Forms",
    "Redirects",
    "Functions",
    "Environment Variables",
    "GitHub Integration",
    "SSL",
    "CDN",
    "Deploy Preview",
    "Build Plugins",
  ],

  connections: [
    {
      target: "react",
      strength: 94,
    },
    {
      target: "nextjs",
      strength: 82,
    },
    {
      target: "github",
      strength: 92,
    },
    {
      target: "vercel",
      strength: 82,
    },
  ],

  position: {
    x: -220,
    y: 160,
  },

  featured: false,

  favorite: false,
};

/* ==========================================================
 * RENDER
 * ==========================================================
 */

const render: Skill = {
  id: "render",

  name: "Render",

  shortName: "Render",

  description:
    "Deploying backend services, REST APIs, databases and full-stack applications with automatic builds, environment variables and managed infrastructure.",

  category: "deployment",

  level: "Advanced",

  status: "active",

  icon: Rocket,

  color: "#46E3B7",

  extension: "ts",

  experience: {
    years: 2,
    months: 0,
    startedAt: "2024",
  },

  stats: {
    years: 2,
    projects: 8,
    repositories: 8,
    commits: 180,
  },

  metrics: {
    proficiency: 86,
    confidence: 88,
    experience: 85,
    problemSolving: 89,
    realWorldUsage: 87,
  },

  projects: [
    {
      id: "despire",
      name: "Despire AI",
    },
    {
      id: "naxity",
      name: "naXity",
    },
    {
      id: "portfolio-api",
      name: "Portfolio Backend",
    },
  ],

  technologies: [
    "Web Services",
    "Background Workers",
    "Environment Variables",
    "Cron Jobs",
    "Managed PostgreSQL",
    "Auto Deploy",
    "HTTPS",
    "Logs",
    "Scaling",
    "GitHub Integration",
    "Docker Support",
    "Health Checks",
  ],

  connections: [
    {
      target: "nodejs",
      strength: 96,
    },
    {
      target: "express",
      strength: 94,
    },
    {
      target: "docker",
      strength: 90,
    },
    {
      target: "postgresql",
      strength: 88,
    },
    {
      target: "mongodb",
      strength: 84,
    },
    {
      target: "vercel",
      strength: 70,
    },
  ],

  position: {
    x: 420,
    y: 140,
  },

  featured: true,

  favorite: true,
};

/* ==========================================================
 * CONTINUE IN PART 4...
 * ==========================================================
 *//* ==========================================================
 * EXPORT
 * ==========================================================
 */

export const deploymentSkills: Skill[] = [
  docker,
  vercel,
  netlify,
  render,
];