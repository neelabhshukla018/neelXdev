// src/components/skills/data/ai.ts

/**
 * ==========================================================
 * AI SKILLS
 * ==========================================================
 */

import { Bot, Sparkles } from "lucide-react";
import { Skill } from "../types/skill";

/* ==========================================================
 * OPENAI
 * ==========================================================
 */

const openai: Skill = {
  id: "openai",

  name: "OpenAI",

  shortName: "OpenAI",

  description:
    "Building AI-powered applications using OpenAI models for text generation, chat assistants, embeddings, structured outputs and intelligent automation.",

  category: "ai",

  level: "Advanced",

  status: "active",

  icon: Bot,

  color: "#10A37F",

  extension: "ts",

  experience: {
    years: 2,
    months: 0,
    startedAt: "2024",
  },

  stats: {
    years: 2,
    projects: 8,
    repositories: 7,
    commits: 260,
  },

  metrics: {
    proficiency: 90,
    confidence: 91,
    experience: 88,
    problemSolving: 94,
    realWorldUsage: 90,
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
    "GPT",
    "Chat Completions",
    "Structured Output",
    "Function Calling",
    "Embeddings",
    "Streaming",
    "Prompt Engineering",
    "System Prompts",
    "Vision Models",
    "JSON Responses",
    "AI Assistants",
    "SDK Integration",
  ],

  connections: [
    {
      target: "gemini",
      strength: 90,
    },
    {
      target: "langchain",
      strength: 92,
    },
    {
      target: "nodejs",
      strength: 90,
    },
    {
      target: "react",
      strength: 84,
    },
    {
      target: "rest-api",
      strength: 86,
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
 *//* ==========================================================
 * GOOGLE GEMINI
 * ==========================================================
 */

const gemini: Skill = {
  id: "gemini",

  name: "Google Gemini",

  shortName: "Gemini",

  description:
    "Integrating Google's Gemini models to build AI-powered chatbots, content generation tools, multimodal applications and intelligent assistants.",

  category: "ai",

  level: "Advanced",

  status: "active",

  icon: Sparkles,

  color: "#4285F4",

  extension: "ts",

  experience: {
    years: 2,
    months: 0,
    startedAt: "2024",
  },

  stats: {
    years: 2,
    projects: 7,
    repositories: 6,
    commits: 220,
  },

  metrics: {
    proficiency: 89,
    confidence: 90,
    experience: 87,
    problemSolving: 92,
    realWorldUsage: 89,
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
      id: "ai-chat",
      name: "AI Chat Assistant",
    },
  ],

  technologies: [
    "Gemini API",
    "Text Generation",
    "Vision Models",
    "Streaming",
    "Chat Models",
    "Prompt Engineering",
    "Safety Settings",
    "Function Calling",
    "JSON Mode",
    "Embeddings",
    "SDK Integration",
    "Multimodal AI",
  ],

  connections: [
    {
      target: "openai",
      strength: 90,
    },
    {
      target: "langchain",
      strength: 90,
    },
    {
      target: "huggingface",
      strength: 82,
    },
    {
      target: "nodejs",
      strength: 88,
    },
    {
      target: "react",
      strength: 84,
    },
    {
      target: "rest-api",
      strength: 86,
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
 * HUGGING FACE
 * ==========================================================
 */

const huggingface: Skill = {
  id: "huggingface",

  name: "Hugging Face",

  shortName: "HF",

  description:
    "Integrating open-source AI models for text generation, image generation, embeddings, inference APIs and transformer-based machine learning applications.",

  category: "ai",

  level: "Advanced",

  status: "active",

  icon: Bot,

  color: "#FFD21E",

  extension: "ts",

  experience: {
    years: 2,
    months: 0,
    startedAt: "2024",
  },

  stats: {
    years: 2,
    projects: 6,
    repositories: 5,
    commits: 180,
  },

  metrics: {
    proficiency: 87,
    confidence: 88,
    experience: 85,
    problemSolving: 90,
    realWorldUsage: 86,
  },

  projects: [
    {
      id: "despire",
      name: "Despire AI",
    },
    {
      id: "ai-image",
      name: "AI Image Generator",
    },
    {
      id: "portfolio",
      name: "Developer Portfolio",
    },
  ],

  technologies: [
    "Transformers",
    "Inference API",
    "Text Generation",
    "Image Generation",
    "Embeddings",
    "Tokenizers",
    "Diffusion Models",
    "Model Hub",
    "Datasets",
    "Pipelines",
    "Spaces",
    "Open Source Models",
  ],

  connections: [
    {
      target: "openai",
      strength: 82,
    },
    {
      target: "gemini",
      strength: 82,
    },
    {
      target: "langchain",
      strength: 84,
    },
    {
      target: "python",
      strength: 76,
    },
    {
      target: "nodejs",
      strength: 80,
    },
  ],

  position: {
    x: -220,
    y: 140,
  },

  featured: false,

  favorite: true,
};

/* ==========================================================
 * LANGCHAIN
 * ==========================================================
 */

const langchain: Skill = {
  id: "langchain",

  name: "LangChain",

  shortName: "LangChain",

  description:
    "Developing AI workflows with LangChain using chains, agents, memory, tools, retrieval augmented generation (RAG), vector databases and prompt templates.",

  category: "ai",

  level: "Intermediate",

  status: "learning",

  icon: Sparkles,

  color: "#00C853",

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
    proficiency: 76,
    confidence: 78,
    experience: 72,
    problemSolving: 88,
    realWorldUsage: 74,
  },

  projects: [
    {
      id: "rag-chatbot",
      name: "RAG Chatbot",
    },
    {
      id: "portfolio-ai",
      name: "Portfolio AI Assistant",
    },
  ],

  technologies: [
    "Chains",
    "Agents",
    "Memory",
    "Prompt Templates",
    "RAG",
    "Vector Stores",
    "Embeddings",
    "Retrievers",
    "Output Parsers",
    "Tool Calling",
    "Document Loaders",
    "LCEL",
  ],

  connections: [
    {
      target: "openai",
      strength: 92,
    },
    {
      target: "gemini",
      strength: 90,
    },
    {
      target: "huggingface",
      strength: 84,
    },
    {
      target: "nodejs",
      strength: 86,
    },
    {
      target: "react",
      strength: 80,
    },
    {
      target: "rest-api",
      strength: 82,
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

export const aiSkills: Skill[] = [
  openai,
  gemini,
  huggingface,
  langchain,
];