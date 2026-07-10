// src/components/skills/data/backend.ts

/**
 * ==========================================================
 * BACKEND SKILLS
 * ==========================================================
 */

import { Server, Boxes } from "lucide-react";
import { Skill } from "../types/skill";

/* ==========================================================
 * NODE.JS
 * ==========================================================
 */

const nodejs: Skill = {
  id: "nodejs",

  name: "Node.js",

  shortName: "Node",

  description:
    "Building scalable backend applications, REST APIs, authentication systems, real-time services and server-side applications using the Node.js ecosystem.",

  category: "backend",

  level: "Advanced",

  status: "active",

  icon: Server,

  color: "#68A063",

  extension: "ts",

  experience: {
    years: 2,
    months: 6,
    startedAt: "2024",
  },

  stats: {
    years: 2,
    projects: 12,
    repositories: 10,
    commits: 1100,
  },

  metrics: {
    proficiency: 90,
    confidence: 91,
    experience: 88,
    problemSolving: 92,
    realWorldUsage: 90,
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
      id: "traventure",
      name: "Traventure",
    },
    {
      id: "yumcart",
      name: "YumCart",
    },
  ],

  technologies: [
    "Express.js",
    "REST API",
    "Middleware",
    "Authentication",
    "JWT",
    "Cookies",
    "CORS",
    "Multer",
    "Cloudinary",
    "Socket.IO",
    "Async/Await",
    "Environment Variables",
  ],

  connections: [
    {
      target: "express",
      strength: 100,
    },
    {
      target: "javascript",
      strength: 96,
    },
    {
      target: "typescript",
      strength: 90,
    },
    {
      target: "mongodb",
      strength: 94,
    },
    {
      target: "postgresql",
      strength: 90,
    },
    {
      target: "prisma",
      strength: 88,
    },
    {
      target: "jwt",
      strength: 94,
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
 * EXPRESS.JS
 * ==========================================================
 */

const express: Skill = {
  id: "express",

  name: "Express.js",

  shortName: "Express",

  description:
    "Developing secure and scalable REST APIs with routing, middleware, authentication, validation, file uploads and robust backend architecture.",

  category: "backend",

  level: "Advanced",

  status: "active",

  icon: Boxes,

  color: "#FFFFFF",

  extension: "ts",

  experience: {
    years: 2,
    months: 3,
    startedAt: "2024",
  },

  stats: {
    years: 2,
    projects: 11,
    repositories: 9,
    commits: 850,
  },

  metrics: {
    proficiency: 89,
    confidence: 90,
    experience: 87,
    problemSolving: 91,
    realWorldUsage: 89,
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
      id: "traventure",
      name: "Traventure",
    },
  ],

  technologies: [
    "Express Router",
    "Middleware",
    "REST API",
    "Authentication",
    "Authorization",
    "Validation",
    "File Upload",
    "Cookies",
    "Sessions",
    "Error Handling",
    "Rate Limiting",
    "MVC Architecture",
  ],

  connections: [
    {
      target: "nodejs",
      strength: 100,
    },
    {
      target: "jwt",
      strength: 92,
    },
    {
      target: "mongodb",
      strength: 92,
    },
    {
      target: "prisma",
      strength: 88,
    },
    {
      target: "rest-api",
      strength: 100,
    },
  ],

  position: {
    x: 220,
    y: -60,
  },

  featured: true,

  favorite: true,
};

/* ==========================================================
 * CONTINUE IN PART 2...
 * ==========================================================
 *//* ==========================================================
 * JAVA
 * ==========================================================
 */

const java: Skill = {
  id: "java",

  name: "Java",

  shortName: "Java",

  description:
    "Building object-oriented applications using Java with strong knowledge of OOP, collections, multithreading, exception handling and data structures.",

  category: "backend",

  level: "Advanced",

  status: "active",

  icon: Boxes,

  color: "#F89820",

  extension: "ts",

  experience: {
    years: 2,
    months: 0,
    startedAt: "2024",
  },

  stats: {
    years: 2,
    projects: 10,
    repositories: 8,
    commits: 980,
  },

  metrics: {
    proficiency: 88,
    confidence: 89,
    experience: 86,
    problemSolving: 93,
    realWorldUsage: 87,
  },

  projects: [
    {
      id: "dsa",
      name: "Data Structures & Algorithms",
    },
    {
      id: "bank-system",
      name: "Bank Management System",
    },
    {
      id: "student-system",
      name: "Student Management System",
    },
  ],

  technologies: [
    "OOP",
    "Collections",
    "Streams",
    "Exception Handling",
    "Generics",
    "Multithreading",
    "JDBC",
    "File Handling",
    "Lambda Expressions",
    "DSA",
    "Concurrency",
    "Packages",
  ],

  connections: [
    {
      target: "springboot",
      strength: 100,
    },
    {
      target: "postgresql",
      strength: 80,
    },
    {
      target: "rest-api",
      strength: 82,
    },
  ],

  position: {
    x: -200,
    y: 120,
  },

  featured: true,

  favorite: true,
};

/* ==========================================================
 * SPRING BOOT
 * ==========================================================
 */

const springboot: Skill = {
  id: "springboot",

  name: "Spring Boot",

  shortName: "Spring",

  description:
    "Developing enterprise-grade REST APIs with Spring Boot using dependency injection, Spring MVC, Spring Data JPA, security and scalable architecture.",

  category: "backend",

  level: "Intermediate",

  status: "learning",

  icon: Server,

  color: "#6DB33F",

  extension: "ts",

  experience: {
    years: 0,
    months: 6,
    startedAt: "2026",
  },

  stats: {
    years: 0,
    projects: 2,
    repositories: 2,
    commits: 140,
  },

  metrics: {
    proficiency: 68,
    confidence: 70,
    experience: 60,
    problemSolving: 75,
    realWorldUsage: 65,
  },

  projects: [
    {
      id: "learning-api",
      name: "Spring REST API",
    },
    {
      id: "crud-app",
      name: "Spring CRUD Application",
    },
  ],

  technologies: [
    "Spring MVC",
    "Spring Data JPA",
    "Dependency Injection",
    "Bean Lifecycle",
    "Hibernate",
    "REST API",
    "Validation",
    "Maven",
    "Application Properties",
    "Spring Security",
  ],

  connections: [
    {
      target: "java",
      strength: 100,
    },
    {
      target: "postgresql",
      strength: 86,
    },
    {
      target: "rest-api",
      strength: 92,
    },
    {
      target: "jwt",
      strength: 80,
    },
  ],

  position: {
    x: -420,
    y: 40,
  },

  featured: false,

  favorite: false,
};

/* ==========================================================
 * CONTINUE IN PART 3...
 * ==========================================================
 *//* ==========================================================
 * JWT AUTHENTICATION
 * ==========================================================
 */

const jwt: Skill = {
  id: "jwt",

  name: "JWT Authentication",

  shortName: "JWT",

  description:
    "Implementing secure authentication and authorization using JSON Web Tokens, refresh tokens, cookies, protected routes and role-based access control.",

  category: "backend",

  level: "Advanced",

  status: "active",

  icon: Server,

  color: "#F59E0B",

  extension: "ts",

  experience: {
    years: 2,
    months: 0,
    startedAt: "2024",
  },

  stats: {
    years: 2,
    projects: 9,
    repositories: 8,
    commits: 420,
  },

  metrics: {
    proficiency: 87,
    confidence: 89,
    experience: 86,
    problemSolving: 90,
    realWorldUsage: 88,
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
      id: "portfolio",
      name: "Developer Portfolio",
    },
  ],

  technologies: [
    "JWT",
    "Refresh Tokens",
    "Access Tokens",
    "Cookies",
    "Authorization",
    "Authentication",
    "bcrypt",
    "Protected Routes",
    "Role Based Access",
    "Session Management",
  ],

  connections: [
    {
      target: "nodejs",
      strength: 94,
    },
    {
      target: "express",
      strength: 92,
    },
    {
      target: "springboot",
      strength: 80,
    },
    {
      target: "rest-api",
      strength: 94,
    },
  ],

  position: {
    x: 380,
    y: 80,
  },

  featured: false,

  favorite: true,
};

/* ==========================================================
 * REST API
 * ==========================================================
 */

const restapi: Skill = {
  id: "rest-api",

  name: "REST API",

  shortName: "REST",

  description:
    "Designing scalable RESTful APIs with proper routing, CRUD operations, validation, pagination, filtering, authentication and production-ready architecture.",

  category: "backend",

  level: "Expert",

  status: "mastered",

  icon: Boxes,

  color: "#3B82F6",

  extension: "ts",

  experience: {
    years: 2,
    months: 6,
    startedAt: "2024",
  },

  stats: {
    years: 2,
    projects: 15,
    repositories: 12,
    commits: 980,
  },

  metrics: {
    proficiency: 92,
    confidence: 93,
    experience: 91,
    problemSolving: 94,
    realWorldUsage: 95,
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
      id: "traventure",
      name: "Traventure",
    },
    {
      id: "yumcart",
      name: "YumCart",
    },
  ],

  technologies: [
    "CRUD",
    "GET",
    "POST",
    "PUT",
    "PATCH",
    "DELETE",
    "Pagination",
    "Filtering",
    "Validation",
    "Status Codes",
    "Error Handling",
    "API Documentation",
  ],

  connections: [
    {
      target: "nodejs",
      strength: 94,
    },
    {
      target: "express",
      strength: 100,
    },
    {
      target: "java",
      strength: 82,
    },
    {
      target: "springboot",
      strength: 92,
    },
    {
      target: "jwt",
      strength: 94,
    },
  ],

  position: {
    x: 180,
    y: 180,
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

export const backendSkills: Skill[] = [
  nodejs,
  express,
  java,
  springboot,
  jwt,
  restapi,
];