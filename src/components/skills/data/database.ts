// src/components/skills/data/database.ts

/**
 * ==========================================================
 * DATABASE SKILLS
 * ==========================================================
 */

import { Database, Cylinder } from "lucide-react";
import { Skill } from "../types/skill";

/* ==========================================================
 * MONGODB
 * ==========================================================
 */

const mongodb: Skill = {
  id: "mongodb",

  name: "MongoDB",

  shortName: "Mongo",

  description:
    "Designing scalable NoSQL databases using collections, documents, indexing, aggregation pipelines, transactions and schema modeling for modern applications.",

  category: "database",

  level: "Advanced",

  status: "active",

  icon: Database,

  color: "#47A248",

  extension: "ts",

  experience: {
    years: 2,
    months: 4,
    startedAt: "2024",
  },

  stats: {
    years: 2,
    projects: 12,
    repositories: 10,
    commits: 650,
  },

  metrics: {
    proficiency: 91,
    confidence: 92,
    experience: 89,
    problemSolving: 90,
    realWorldUsage: 94,
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
    "Collections",
    "Documents",
    "Aggregation",
    "Atlas",
    "Indexes",
    "Transactions",
    "Schema Design",
    "Relationships",
    "CRUD Operations",
    "Mongo Shell",
    "Compass",
    "Replication",
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
      target: "prisma",
      strength: 86,
    },
    {
      target: "rest-api",
      strength: 90,
    },
    {
      target: "redis",
      strength: 75,
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
 * POSTGRESQL
 * ==========================================================
 */

const postgresql: Skill = {
  id: "postgresql",

  name: "PostgreSQL",

  shortName: "Postgres",

  description:
    "Building reliable relational databases with advanced SQL, normalization, indexing, joins, transactions and production-ready database architecture.",

  category: "database",

  level: "Advanced",

  status: "active",

  icon: Cylinder,

  color: "#336791",

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
    commits: 520,
  },

  metrics: {
    proficiency: 89,
    confidence: 90,
    experience: 87,
    problemSolving: 91,
    realWorldUsage: 88,
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
      id: "ss-tech",
      name: "SS Technology",
    },
  ],

  technologies: [
    "SQL",
    "DDL",
    "DML",
    "Joins",
    "Indexes",
    "Views",
    "Constraints",
    "Transactions",
    "Normalization",
    "Foreign Keys",
    "Functions",
    "Stored Procedures",
  ],

  connections: [
    {
      target: "prisma",
      strength: 98,
    },
    {
      target: "nodejs",
      strength: 90,
    },
    {
      target: "express",
      strength: 88,
    },
    {
      target: "springboot",
      strength: 86,
    },
    {
      target: "java",
      strength: 80,
    },
    {
      target: "rest-api",
      strength: 86,
    },
    {
      target: "redis",
      strength: 74,
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
 * CONTINUE IN PART 3...
 * ==========================================================
 *//* ==========================================================
 * PRISMA ORM
 * ==========================================================
 */

const prisma: Skill = {
  id: "prisma",

  name: "Prisma ORM",

  shortName: "Prisma",

  description:
    "Building type-safe database applications using Prisma ORM with schema modeling, migrations, relationships, transactions and generated TypeScript clients.",

  category: "database",

  level: "Advanced",

  status: "active",

  icon: Database,

  color: "#2D3748",

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
    commits: 480,
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
      id: "naxity",
      name: "naXity",
    },
    {
      id: "portfolio",
      name: "Developer Portfolio",
    },
    {
      id: "ss-tech",
      name: "SS Technology",
    },
  ],

  technologies: [
    "Prisma Client",
    "Schema",
    "Migrations",
    "Relations",
    "CRUD",
    "Transactions",
    "Seeding",
    "Enums",
    "Indexes",
    "Generators",
    "Neon PostgreSQL",
    "Type Safety",
  ],

  connections: [
    {
      target: "postgresql",
      strength: 98,
    },
    {
      target: "nodejs",
      strength: 88,
    },
    {
      target: "express",
      strength: 86,
    },
    {
      target: "rest-api",
      strength: 88,
    },
    {
      target: "typescript",
      strength: 92,
    },
  ],

  position: {
    x: -180,
    y: 170,
  },

  featured: true,

  favorite: true,
};

/* ==========================================================
 * REDIS
 * ==========================================================
 */

const redis: Skill = {
  id: "redis",

  name: "Redis",

  shortName: "Redis",

  description:
    "Using Redis for high-performance caching, session storage, pub/sub messaging, rate limiting and improving backend application performance.",

  category: "database",

  level: "Intermediate",

  status: "learning",

  icon: Database,

  color: "#DC382D",

  extension: "ts",

  experience: {
    years: 1,
    months: 0,
    startedAt: "2025",
  },

  stats: {
    years: 1,
    projects: 3,
    repositories: 3,
    commits: 120,
  },

  metrics: {
    proficiency: 72,
    confidence: 74,
    experience: 68,
    problemSolving: 80,
    realWorldUsage: 72,
  },

  projects: [
    {
      id: "naxity",
      name: "naXity",
    },
    {
      id: "cache-demo",
      name: "Redis Cache Demo",
    },
  ],

  technologies: [
    "Caching",
    "Key-Value Store",
    "TTL",
    "Pub/Sub",
    "Rate Limiting",
    "Sessions",
    "In-Memory Database",
    "Performance",
    "Redis CLI",
    "Persistence",
  ],

  connections: [
    {
      target: "nodejs",
      strength: 84,
    },
    {
      target: "express",
      strength: 82,
    },
    {
      target: "mongodb",
      strength: 75,
    },
    {
      target: "postgresql",
      strength: 74,
    },
  ],

  position: {
    x: 420,
    y: 120,
  },

  featured: false,

  favorite: false,
};

/* ==========================================================
 * CONTINUE IN PART 4...
 * ==========================================================
 *//* ==========================================================
 * EXPORT
 * ==========================================================
 */

export const databaseSkills: Skill[] = [
  mongodb,
  postgresql,
  prisma,
  redis,
];