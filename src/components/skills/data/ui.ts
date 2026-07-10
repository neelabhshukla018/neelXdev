// src/components/skills/data/ui.ts

/**
 * ==========================================================
 * UI / UX SKILLS
 * ==========================================================
 */

import { Palette } from "lucide-react";
import { Skill } from "../types/skill";

/* ==========================================================
 * TAILWIND CSS
 * ==========================================================
 */

const tailwindcss: Skill = {
  id: "tailwindcss-ui",

  name: "Tailwind CSS",

  shortName: "Tailwind",

  description:
    "Building modern, responsive, utility-first user interfaces with reusable components, custom themes, animations and scalable design systems.",

  category: "ui",

  level: "Expert",

  status: "mastered",

  icon: Palette,

  color: "#38BDF8",

  extension: "ts",

  experience: {
    years: 3,
    months: 0,
    startedAt: "2023",
  },

  stats: {
    years: 3,
    projects: 20,
    repositories: 18,
    commits: 1700,
  },

  metrics: {
    proficiency: 97,
    confidence: 98,
    experience: 96,
    problemSolving: 95,
    realWorldUsage: 99,
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
      id: "despire",
      name: "Despire AI",
    },
    {
      id: "ss-tech",
      name: "SS Technology",
    },
  ],

  technologies: [
    "Tailwind CSS",
    "Responsive Design",
    "Flexbox",
    "CSS Grid",
    "Dark Mode",
    "Animations",
    "Glassmorphism",
    "CSS Variables",
    "Custom Theme",
    "Responsive Layout",
    "Utility Classes",
    "Component Styling",
    "Container Queries",
    "Custom Plugins",
  ],

  connections: [
    {
      target: "react",
      strength: 98,
    },
    {
      target: "nextjs",
      strength: 97,
    },
    {
      target: "typescript",
      strength: 90,
    },
    {
      target: "framer-motion",
      strength: 95,
    },
    {
      target: "shadcn",
      strength: 100,
    },
    {
      target: "figma",
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
 * PART 2 STARTS FROM HERE
 * ==========================================================
 */import { Brush } from "lucide-react";

/* ==========================================================
 * SHADCN/UI
 * ==========================================================
 */

const shadcn: Skill = {
  id: "shadcn",

  name: "shadcn/ui",

  shortName: "shadcn",

  description:
    "Building beautiful, accessible, and reusable UI components using shadcn/ui with Radix UI, Tailwind CSS, and component-driven architecture.",

  category: "ui",

  level: "Advanced",

  status: "active",

  icon: Brush,

  color: "#FFFFFF",

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
    commits: 520,
  },

  metrics: {
    proficiency: 91,
    confidence: 92,
    experience: 89,
    problemSolving: 94,
    realWorldUsage: 90,
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
    "Radix UI",
    "Accessibility",
    "Theme Provider",
    "Dark Mode",
    "Variants",
    "CVA",
    "Reusable Components",
    "Buttons",
    "Cards",
    "Dialogs",
    "Popover",
    "Tooltip",
    "Dropdown Menu",
    "Sheet",
    "Drawer",
    "Toast",
    "Command Menu",
    "Form Components",
    "Responsive Components",
  ],

  connections: [
    {
      target: "tailwindcss-ui",
      strength: 100,
    },
    {
      target: "react",
      strength: 96,
    },
    {
      target: "nextjs",
      strength: 94,
    },
    {
      target: "typescript",
      strength: 90,
    },
    {
      target: "figma",
      strength: 84,
    },
    {
      target: "material-ui",
      strength: 75,
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
 * PART 3 STARTS FROM HERE
 * ==========================================================
 *//* ==========================================================
 * MATERIAL UI
 * ==========================================================
 */

const materialUI: Skill = {
  id: "material-ui",

  name: "Material UI",

  shortName: "MUI",

  description:
    "Building professional React applications using Material UI's rich component library, theming system, responsive layouts and Material Design principles.",

  category: "ui",

  level: "Intermediate",

  status: "active",

  icon: Brush,

  color: "#007FFF",

  extension: "ts",

  experience: {
    years: 1,
    months: 6,
    startedAt: "2025",
  },

  stats: {
    years: 1,
    projects: 5,
    repositories: 5,
    commits: 260,
  },

  metrics: {
    proficiency: 82,
    confidence: 84,
    experience: 80,
    problemSolving: 85,
    realWorldUsage: 83,
  },

  projects: [
    {
      id: "dashboard-ui",
      name: "Admin Dashboard",
    },
    {
      id: "portfolio",
      name: "Developer Portfolio",
    },
  ],

  technologies: [
    "Material Design",
    "Theme Provider",
    "Typography",
    "Grid",
    "Cards",
    "Buttons",
    "Forms",
    "Dialogs",
    "Data Grid",
    "Icons",
    "Responsive Layout",
    "Dark Theme",
    "Custom Themes",
    "Transitions",
  ],

  connections: [
    {
      target: "react",
      strength: 95,
    },
    {
      target: "tailwindcss-ui",
      strength: 78,
    },
    {
      target: "shadcn",
      strength: 75,
    },
    {
      target: "figma",
      strength: 86,
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
 * FIGMA
 * ==========================================================
 */

const figma: Skill = {
  id: "figma",

  name: "Figma",

  shortName: "Figma",

  description:
    "Designing modern user interfaces, responsive layouts, wireframes, design systems and interactive prototypes with seamless developer handoff.",

  category: "ui",

  level: "Advanced",

  status: "active",

  icon: Palette,

  color: "#A259FF",

  extension: "ts",

  experience: {
    years: 2,
    months: 0,
    startedAt: "2024",
  },

  stats: {
    years: 2,
    projects: 12,
    repositories: 0,
    commits: 0,
  },

  metrics: {
    proficiency: 89,
    confidence: 91,
    experience: 87,
    problemSolving: 92,
    realWorldUsage: 90,
  },

  projects: [
    {
      id: "portfolio-design",
      name: "Developer Portfolio",
    },
    {
      id: "naxity-ui",
      name: "naXity UI",
    },
    {
      id: "ss-tech-design",
      name: "SS Technology",
    },
  ],

  technologies: [
    "Wireframing",
    "Prototyping",
    "Auto Layout",
    "Components",
    "Variants",
    "Design Systems",
    "Responsive Design",
    "Constraints",
    "Typography",
    "Color Styles",
    "Developer Handoff",
    "Interactive Prototype",
    "Team Collaboration",
    "Design Tokens",
  ],

  connections: [
    {
      target: "tailwindcss-ui",
      strength: 90,
    },
    {
      target: "shadcn",
      strength: 84,
    },
    {
      target: "material-ui",
      strength: 86,
    },
    {
      target: "react",
      strength: 80,
    },
    {
      target: "nextjs",
      strength: 78,
    },
  ],

  position: {
    x: 420,
    y: 120,
  },

  featured: true,

  favorite: true,
};

/* ==========================================================
 * PART 4 STARTS FROM HERE
 * ==========================================================
 *//* ==========================================================
 * EXPORT
 * ==========================================================
 */

export const uiSkills: Skill[] = [
  tailwindcss,
  shadcn,
  materialUI,
  figma,
];