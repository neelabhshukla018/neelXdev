// src/components/skills/data/frontend.ts

/**
 * ==========================================================
 * FRONTEND SKILLS
 * ==========================================================
 */

import {
  FaReact,
  FaJs,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiRedux,
  SiHtml5,
  SiCss,
} from "react-icons/si";
import { Skill } from "../types/skill";

/* ==========================================================
 * REACT
 * ==========================================================
 */

const react: Skill = {
  id: "react",

  name: "React",

  shortName: "React",

  description:
    "Building modern, scalable and interactive user interfaces using reusable components, hooks, context API, performance optimization and ecosystem libraries.",

  category: "frontend",

  level: "Expert",

  status: "mastered",

  icon: FaReact,

  color: "#61DAFB",

  extension: "ts",

  experience: {
    years: 3,
    months: 2,
    startedAt: "2023",
  },

  stats: {
    years: 3,
    projects: 18,
    repositories: 15,
    commits: 1800,
  },

  metrics: {
    proficiency: 95,
    confidence: 96,
    experience: 94,
    problemSolving: 93,
    realWorldUsage: 98,
  },

  projects: [
    {
      id: "portfolio",
      name: "Developer Portfolio",
      description: "Interactive portfolio built with React ecosystem.",
    },
    {
      id: "traventure",
      name: "Traventure",
    },
    {
      id: "yumcart",
      name: "YumCart",
    },
    {
      id: "despire",
      name: "Despire AI",
    },
    {
      id: "naxity",
      name: "naXity",
    },
  ],

  technologies: [
    "Hooks",
    "Context API",
    "React Router",
    "Lazy Loading",
    "Memoization",
    "Code Splitting",
    "Error Boundaries",
    "Reusable Components",
    "Composition",
    "Suspense",
  ],

  connections: [
    {
      target: "nextjs",
      strength: 100,
    },
    {
      target: "typescript",
      strength: 95,
    },
    {
      target: "tailwindcss",
      strength: 98,
    },
    {
      target: "framer-motion",
      strength: 90,
    },
    {
      target: "redux",
      strength: 82,
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
 * NEXT.JS
 * ==========================================================
 */

const nextjs: Skill = {
  id: "nextjs",

  name: "Next.js",

  shortName: "Next",

  description:
    "Developing production-grade full-stack applications using App Router, Server Components, API Routes, Image Optimization and modern rendering strategies.",

  category: "frontend",

  level: "Advanced",

  status: "active",

  icon: SiNextdotjs,

  color: "#FFFFFF",

  extension: "ts",

  experience: {
    years: 2,
    months: 1,
    startedAt: "2024",
  },

  stats: {
    years: 2,
    projects: 8,
    repositories: 7,
    commits: 750,
  },

  metrics: {
    proficiency: 90,
    confidence: 92,
    experience: 88,
    problemSolving: 91,
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
    "App Router",
    "Server Components",
    "Client Components",
    "SSR",
    "SSG",
    "ISR",
    "Metadata API",
    "Image Optimization",
    "Dynamic Routing",
    "Layouts",
    "Middleware",
    "Route Handlers",
  ],

  connections: [
    {
      target: "react",
      strength: 100,
    },
    {
      target: "typescript",
      strength: 95,
    },
    {
      target: "tailwindcss",
      strength: 97,
    },
    {
      target: "nodejs",
      strength: 90,
    },
    {
      target: "vercel",
      strength: 92,
    },
  ],

  position: {
    x: 220,
    y: -40,
  },

  featured: true,

  favorite: true,
};

/* ==========================================================
 * CONTINUE IN PART 2...
 * ==========================================================
 *//* ==========================================================
 * TYPESCRIPT
 * ==========================================================
 */

const typescript: Skill = {
  id: "typescript",

  name: "TypeScript",

  shortName: "TS",

  description:
    "Developing scalable applications with strong typing, interfaces, generics, utility types, modules and modern TypeScript features for safer, maintainable code.",

  category: "frontend",

  level: "Advanced",

  status: "active",

  icon: SiTypescript,

  color: "#3178C6",

  extension: "ts",

  experience: {
    years: 2,
    months: 3,
    startedAt: "2024",
  },

  stats: {
    years: 2,
    projects: 15,
    repositories: 12,
    commits: 1200,
  },

  metrics: {
    proficiency: 91,
    confidence: 92,
    experience: 89,
    problemSolving: 94,
    realWorldUsage: 92,
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
    {
      id: "despire",
      name: "Despire AI",
    },
  ],

  technologies: [
    "Interfaces",
    "Types",
    "Enums",
    "Generics",
    "Utility Types",
    "Type Guards",
    "Modules",
    "Mapped Types",
    "Union Types",
    "Intersection Types",
    "Readonly",
    "Record",
  ],

  connections: [
    {
      target: "react",
      strength: 95,
    },
    {
      target: "nextjs",
      strength: 95,
    },
    {
      target: "javascript",
      strength: 100,
    },
    {
      target: "tailwindcss",
      strength: 80,
    },
  ],

  position: {
    x: 140,
    y: 150,
  },

  featured: true,

  favorite: true,
};

/* ==========================================================
 * JAVASCRIPT
 * ==========================================================
 */

const javascript: Skill = {
  id: "javascript",

  name: "JavaScript",

  shortName: "JS",

  description:
    "Writing modern ES6+ JavaScript for dynamic web applications with asynchronous programming, DOM manipulation, modules, promises and browser APIs.",

  category: "frontend",

  level: "Expert",

  status: "mastered",

  icon: FaJs,

  color: "#F7DF1E",

  extension: "ts",

  experience: {
    years: 3,
    months: 6,
    startedAt: "2023",
  },

  stats: {
    years: 3,
    projects: 24,
    repositories: 18,
    commits: 2400,
  },

  metrics: {
    proficiency: 94,
    confidence: 95,
    experience: 95,
    problemSolving: 94,
    realWorldUsage: 98,
  },

  projects: [
    {
      id: "portfolio",
      name: "Developer Portfolio",
    },
    {
      id: "traventure",
      name: "Traventure",
    },
    {
      id: "yumcart",
      name: "YumCart",
    },
    {
      id: "despire",
      name: "Despire AI",
    },
    {
      id: "naxity",
      name: "naXity",
    },
  ],

  technologies: [
    "ES6+",
    "DOM",
    "Async/Await",
    "Promises",
    "Closures",
    "Modules",
    "Fetch API",
    "Array Methods",
    "Event Loop",
    "Destructuring",
    "Spread Operator",
    "Optional Chaining",
  ],

  connections: [
    {
      target: "typescript",
      strength: 100,
    },
    {
      target: "react",
      strength: 98,
    },
    {
      target: "nextjs",
      strength: 95,
    },
    {
      target: "nodejs",
      strength: 96,
    },
  ],

  position: {
    x: -160,
    y: 130,
  },

  featured: false,

  favorite: true,
};

/* ==========================================================
 * CONTINUE IN PART 3...
 * ==========================================================
 *//* ==========================================================
 * TAILWIND CSS
 * ==========================================================
 */

const tailwindcss: Skill = {
  id: "tailwindcss",

  name: "Tailwind CSS",

  shortName: "Tailwind",

  description:
    "Building modern, responsive, utility-first user interfaces with custom themes, animations, dark mode, and scalable design systems.",

  category: "frontend",

  level: "Expert",

  status: "mastered",

  icon: SiTailwindcss,

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
    proficiency: 96,
    confidence: 97,
    experience: 95,
    problemSolving: 94,
    realWorldUsage: 98,
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
    {
      id: "despire",
      name: "Despire AI",
    },
  ],

  technologies: [
    "Responsive Design",
    "Flexbox",
    "Grid",
    "Dark Mode",
    "Animations",
    "Custom Theme",
    "Shadcn UI",
    "CSS Variables",
    "Glassmorphism",
    "Container Queries",
    "Tailwind Config",
    "Arbitrary Values",
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
      strength: 85,
    },
    {
      target: "framer-motion",
      strength: 95,
    },
    {
      target: "css",
      strength: 100,
    },
  ],

  position: {
    x: 260,
    y: 120,
  },

  featured: true,

  favorite: true,
};

/* ==========================================================
 * FRAMER MOTION
 * ==========================================================
 */

const framermotion: Skill = {
  id: "framer-motion",

  name: "Framer Motion",

  shortName: "Motion",

  description:
    "Creating smooth, high-performance animations, gestures, transitions, shared layouts, and immersive interactive experiences.",

  category: "frontend",

  level: "Advanced",

  status: "active",

  icon: SiFramer,

  color: "#EC4899",

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
    commits: 520,
  },

  metrics: {
    proficiency: 89,
    confidence: 91,
    experience: 87,
    problemSolving: 90,
    realWorldUsage: 88,
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
    "Motion",
    "Variants",
    "AnimatePresence",
    "Layout Animation",
    "Scroll Animation",
    "whileHover",
    "whileTap",
    "Drag",
    "Keyframes",
    "Transitions",
    "Gestures",
    "SVG Animation",
  ],

  connections: [
    {
      target: "react",
      strength: 95,
    },
    {
      target: "tailwindcss",
      strength: 95,
    },
    {
      target: "nextjs",
      strength: 88,
    },
  ],

  position: {
    x: 420,
    y: 40,
  },

  featured: true,

  favorite: true,
};

/* ==========================================================
 * CONTINUE IN PART 4...
 * ==========================================================
 *//* ==========================================================
 * REDUX
 * ==========================================================
 */

const redux: Skill = {
  id: "redux",

  name: "Redux",

  shortName: "Redux",

  description:
    "Managing scalable application state using Redux Toolkit, slices, async thunks, middleware and predictable state management.",

  category: "frontend",

  level: "Advanced",

  status: "active",

  icon: SiRedux,

  color: "#764ABC",

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
    commits: 340,
  },

  metrics: {
    proficiency: 86,
    confidence: 87,
    experience: 84,
    problemSolving: 89,
    realWorldUsage: 85,
  },

  projects: [
    {
      id: "despire",
      name: "Despire AI",
    },
    {
      id: "portfolio",
      name: "Developer Portfolio",
    },
    {
      id: "naxity",
      name: "naXity",
    },
  ],

  technologies: [
    "Redux Toolkit",
    "Slices",
    "Store",
    "Dispatch",
    "Selectors",
    "Middleware",
    "Async Thunk",
    "State Management",
    "Immer",
  ],

  connections: [
    {
      target: "react",
      strength: 92,
    },
    {
      target: "typescript",
      strength: 84,
    },
    {
      target: "javascript",
      strength: 90,
    },
  ],

  position: {
    x: -280,
    y: 30,
  },

  featured: false,

  favorite: false,
};

/* ==========================================================
 * HTML5
 * ==========================================================
 */

const html: Skill = {
  id: "html",

  name: "HTML5",

  shortName: "HTML",

  description:
    "Creating semantic, accessible and SEO-friendly web page structures using modern HTML5 elements and best practices.",

  category: "frontend",

  level: "Expert",

  status: "mastered",

  icon: SiHtml5,

  color: "#E34F26",

  extension: "ts",

  experience: {
    years: 4,
    months: 0,
    startedAt: "2022",
  },

  stats: {
    years: 4,
    projects: 30,
    repositories: 25,
    commits: 3200,
  },

  metrics: {
    proficiency: 98,
    confidence: 99,
    experience: 98,
    problemSolving: 95,
    realWorldUsage: 100,
  },

  projects: [
    {
      id: "portfolio",
      name: "Developer Portfolio",
    },
    {
      id: "traventure",
      name: "Traventure",
    },
    {
      id: "yumcart",
      name: "YumCart",
    },
    {
      id: "despire",
      name: "Despire AI",
    },
    {
      id: "naxity",
      name: "naXity",
    },
  ],

  technologies: [
    "Semantic HTML",
    "Forms",
    "Accessibility",
    "SEO",
    "Audio",
    "Video",
    "Canvas",
    "SVG",
    "Meta Tags",
    "ARIA",
  ],

  connections: [
    {
      target: "css",
      strength: 100,
    },
    {
      target: "javascript",
      strength: 98,
    },
    {
      target: "react",
      strength: 90,
    },
  ],

  position: {
    x: -430,
    y: -80,
  },

  featured: false,

  favorite: false,
};

/* ==========================================================
 * CSS3
 * ==========================================================
 */

const css: Skill = {
  id: "css",

  name: "CSS3",

  shortName: "CSS",

  description:
    "Designing responsive, animated and visually appealing interfaces using modern CSS, Flexbox, Grid, transitions and custom properties.",

  category: "frontend",

  level: "Expert",

  status: "mastered",

  icon: SiCss,

  color: "#1572B6",

  extension: "ts",

  experience: {
    years: 4,
    months: 0,
    startedAt: "2022",
  },

  stats: {
    years: 4,
    projects: 30,
    repositories: 25,
    commits: 3100,
  },

  metrics: {
    proficiency: 97,
    confidence: 98,
    experience: 97,
    problemSolving: 94,
    realWorldUsage: 99,
  },

  projects: [
    {
      id: "portfolio",
      name: "Developer Portfolio",
    },
    {
      id: "traventure",
      name: "Traventure",
    },
    {
      id: "yumcart",
      name: "YumCart",
    },
    {
      id: "despire",
      name: "Despire AI",
    },
    {
      id: "naxity",
      name: "naXity",
    },
  ],

  technologies: [
    "Flexbox",
    "Grid",
    "Animations",
    "Transitions",
    "Media Queries",
    "Variables",
    "Pseudo Elements",
    "Responsive Design",
    "Keyframes",
    "Transforms",
    "Backdrop Filter",
    "Glassmorphism",
  ],

  connections: [
    {
      target: "html",
      strength: 100,
    },
    {
      target: "tailwindcss",
      strength: 100,
    },
    {
      target: "javascript",
      strength: 90,
    },
    {
      target: "react",
      strength: 85,
    },
  ],

  position: {
    x: -280,
    y: -180,
  },

  featured: false,

  favorite: true,
};

/* ==========================================================
 * EXPORT
 * ==========================================================
 */

export const frontendSkills: Skill[] = [
  react,
  nextjs,
  typescript,
  javascript,
  tailwindcss,
  framermotion,
  redux,
  html,
  css,
];