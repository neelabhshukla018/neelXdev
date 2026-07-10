// src/components/skills/data/api.ts

/**
 * ==========================================================
 * API SKILLS
 * ==========================================================
 */

import { Globe, Workflow } from "lucide-react";
import { Skill } from "../types/skill";

/* ==========================================================
 * REST API
 * ==========================================================
 */

const restApi: Skill = {
  id: "rest-api",

  name: "REST API",

  shortName: "REST",

  description:
    "Designing scalable RESTful APIs with proper resource architecture, authentication, validation, pagination, filtering and production-ready best practices.",

  category: "api",

  level: "Expert",

  status: "mastered",

  icon: Globe,

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
    commits: 960,
  },

  metrics: {
    proficiency: 94,
    confidence: 95,
    experience: 92,
    problemSolving: 94,
    realWorldUsage: 96,
  },

  projects: [
    {
      id: "naxity",
      name: "naXity",
    },
    {
      id: "despire",
      name: "Despire AI",
    },
    {
      id: "traventure",
      name: "Traventure",
    },
    {
      id: "portfolio-api",
      name: "Portfolio API",
    },
  ],

  technologies: [
    "GET",
    "POST",
    "PUT",
    "PATCH",
    "DELETE",
    "CRUD",
    "Authentication",
    "Authorization",
    "Pagination",
    "Filtering",
    "Sorting",
    "Validation",
    "Rate Limiting",
    "Status Codes",
    "OpenAPI",
    "Swagger",
    "Postman",
    "Thunder Client",
  ],

  connections: [
    {
      target: "nodejs",
      strength: 96,
    },
    {
      target: "express",
      strength: 100,
    },
    {
      target: "jwt",
      strength: 94,
    },
    {
      target: "mongodb",
      strength: 90,
    },
    {
      target: "postgresql",
      strength: 88,
    },
    {
      target: "prisma",
      strength: 88,
    },
    {
      target: "graphql",
      strength: 82,
    },
    {
      target: "socketio",
      strength: 84,
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
 * GRAPHQL
 * ==========================================================
 */

const graphql: Skill = {
  id: "graphql",

  name: "GraphQL",

  shortName: "GraphQL",

  description:
    "Building flexible APIs using GraphQL with schema design, queries, mutations, subscriptions and efficient client-server communication.",

  category: "api",

  level: "Intermediate",

  status: "learning",

  icon: Workflow,

  color: "#E10098",

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
    commits: 140,
  },

  metrics: {
    proficiency: 74,
    confidence: 76,
    experience: 70,
    problemSolving: 82,
    realWorldUsage: 72,
  },

  projects: [
    {
      id: "graphql-demo",
      name: "GraphQL Playground",
    },
    {
      id: "portfolio-api",
      name: "Portfolio API",
    },
  ],

  technologies: [
    "Schema",
    "Query",
    "Mutation",
    "Subscription",
    "Resolvers",
    "Apollo Server",
    "Apollo Client",
    "Fragments",
    "Variables",
    "Directives",
    "Context",
    "Type Definitions",
  ],

  connections: [
    {
      target: "rest-api",
      strength: 82,
    },
    {
      target: "nodejs",
      strength: 84,
    },
    {
      target: "express",
      strength: 82,
    },
    {
      target: "typescript",
      strength: 84,
    },
    {
      target: "react",
      strength: 86,
    },
  ],

  position: {
    x: 220,
    y: -60,
  },

  featured: false,

  favorite: false,
};

/* ==========================================================
 * CONTINUE IN PART 3...
 * ==========================================================
 *//* ==========================================================
 * WEBSOCKETS
 * ==========================================================
 */

const websocket: Skill = {
  id: "websocket",

  name: "WebSockets",

  shortName: "WS",

  description:
    "Building full-duplex real-time communication channels for live applications, notifications, dashboards and collaborative experiences.",

  category: "api",

  level: "Intermediate",

  status: "learning",

  icon: Globe,

  color: "#10B981",

  extension: "ts",

  experience: {
    years: 1,
    months: 0,
    startedAt: "2025",
  },

  stats: {
    years: 1,
    projects: 2,
    repositories: 2,
    commits: 90,
  },

  metrics: {
    proficiency: 73,
    confidence: 75,
    experience: 70,
    problemSolving: 82,
    realWorldUsage: 72,
  },

  projects: [
    {
      id: "chat-app",
      name: "Realtime Chat",
    },
    {
      id: "naxity",
      name: "naXity",
    },
  ],

  technologies: [
    "Full Duplex",
    "TCP",
    "Handshake",
    "Real-time Communication",
    "Broadcasting",
    "Live Notifications",
    "Presence",
    "Heartbeat",
    "Binary Frames",
    "Text Frames",
  ],

  connections: [
    {
      target: "socketio",
      strength: 100,
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
      target: "react",
      strength: 82,
    },
  ],

  position: {
    x: -220,
    y: 150,
  },

  featured: false,

  favorite: false,
};

/* ==========================================================
 * SOCKET.IO
 * ==========================================================
 */

const socketio: Skill = {
  id: "socketio",

  name: "Socket.IO",

  shortName: "Socket.IO",

  description:
    "Creating production-ready real-time applications with Socket.IO including rooms, namespaces, automatic reconnection, acknowledgements and event-driven architecture.",

  category: "api",

  level: "Intermediate",

  status: "active",

  icon: Workflow,

  color: "#010101",

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
    proficiency: 78,
    confidence: 80,
    experience: 75,
    problemSolving: 84,
    realWorldUsage: 78,
  },

  projects: [
    {
      id: "chat-app",
      name: "Realtime Chat",
    },
    {
      id: "naxity",
      name: "naXity",
    },
    {
      id: "live-dashboard",
      name: "Live Dashboard",
    },
  ],

  technologies: [
    "Rooms",
    "Namespaces",
    "Events",
    "Broadcasting",
    "Acknowledgements",
    "Auto Reconnect",
    "Middleware",
    "Authentication",
    "Client SDK",
    "Server SDK",
    "Realtime Dashboard",
    "Live Chat",
  ],

  connections: [
    {
      target: "websocket",
      strength: 100,
    },
    {
      target: "nodejs",
      strength: 94,
    },
    {
      target: "express",
      strength: 92,
    },
    {
      target: "rest-api",
      strength: 84,
    },
    {
      target: "react",
      strength: 86,
    },
    {
      target: "nextjs",
      strength: 82,
    },
  ],

  position: {
    x: 420,
    y: 120,
  },

  featured: false,

  favorite: true,
};

/* ==========================================================
 * CONTINUE IN PART 4...
 * ==========================================================
 *//* ==========================================================
 * EXPORT
 * ==========================================================
 */

export const apiSkills: Skill[] = [
  restApi,
  graphql,
  websocket,
  socketio,
];