// src/components/skills/data/skills.ts

/**
 * ==========================================================
 * SKILLS DATA
 * ==========================================================
 * Acts as the single source of truth for the entire Skills
 * section. Every component should consume this file.
 */

import { Skill, SkillCategory } from "../types/skill";

import { frontendSkills } from "./frontend";
import { backendSkills } from "./backend";
import { databaseSkills } from "./database";
import { deploymentSkills } from "./deployment";
import { apiSkills } from "./api";
import { uiSkills } from "./ui";
import { aiSkills } from "./ai";

/* ==========================================================
 * ALL SKILLS
 * ==========================================================
 */

export const skills: Skill[] = [
  ...frontendSkills,
  ...backendSkills,
  ...databaseSkills,
  ...deploymentSkills,
  ...apiSkills,
  ...uiSkills,
  ...aiSkills,
];

/* ==========================================================
 * FEATURED SKILLS
 * ==========================================================
 */

export const featuredSkills = skills.filter(
  (skill) => skill.featured
);

/* ==========================================================
 * FAVORITE SKILLS
 * ==========================================================
 */

export const favoriteSkills = skills.filter(
  (skill) => skill.favorite
);

/* ==========================================================
 * CATEGORY MAP
 * ==========================================================
 */

export const skillsByCategory: Record<
  SkillCategory,
  Skill[]
> = {
  frontend: frontendSkills,
  backend: backendSkills,
  database: databaseSkills,
  deployment: deploymentSkills,
  api: apiSkills,
  ui: uiSkills,
  ai: aiSkills,
  tools: [],
};

/* ==========================================================
 * CATEGORY TITLES
 * ==========================================================
 */

export const categoryTitles: Record<
  SkillCategory,
  string
> = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  deployment: "Deployment",
  api: "API",
  ui: "UI / UX",
  ai: "Artificial Intelligence",
  tools: "Tools",
};

/* ==========================================================
 * CATEGORY DESCRIPTIONS
 * ==========================================================
 */

export const categoryDescriptions: Record<
  SkillCategory,
  string
> = {
  frontend:
    "Building responsive, interactive, and modern user interfaces.",

  backend:
    "Creating scalable server-side applications and services.",

  database:
    "Designing, managing, and optimizing data storage systems.",

  deployment:
    "Hosting, CI/CD, cloud infrastructure, and production environments.",

  api:
    "Building and consuming RESTful and GraphQL APIs.",

  ui:
    "Crafting polished user experiences with modern design systems.",

  ai:
    "Integrating AI services and intelligent applications.",

  tools:
    "Developer tools and productivity ecosystem.",
};

/* ==========================================================
 * QUICK LOOKUP
 * ==========================================================
 */

export const skillMap = new Map<string, Skill>();

skills.forEach((skill) => {
  skillMap.set(skill.id, skill);
});

/* ==========================================================
 * HELPERS
 * ==========================================================
 */

export const getSkill = (
  id: string
): Skill | undefined => {
  return skillMap.get(id);
};

export const getSkillsByCategory = (
  category: SkillCategory
): Skill[] => {
  return skillsByCategory[category] ?? [];
};

export const getFeaturedSkills = (): Skill[] => {
  return featuredSkills;
};

export const getFavoriteSkills = (): Skill[] => {
  return favoriteSkills;
};

export const getSkillCount = (): number => {
  return skills.length;
};

export const getCategoryCount = (
  category: SkillCategory
): number => {
  return getSkillsByCategory(category).length;
};

export const searchSkills = (
  query: string
): Skill[] => {
  const value = query.toLowerCase().trim();

  if (!value) return skills;

  return skills.filter((skill) => {
    return (
      skill.name.toLowerCase().includes(value) ||
      skill.description.toLowerCase().includes(value) ||
      skill.category.toLowerCase().includes(value) ||
      skill.technologies.some((tech) =>
        tech.toLowerCase().includes(value)
      )
    );
  });
};

/* ==========================================================
 * TOTAL STATS
 * ==========================================================
 */

export const totalProjects = skills.reduce(
  (total, skill) => total + skill.stats.projects,
  0
);

export const averageProficiency = Math.round(
  skills.reduce(
    (sum, skill) => sum + skill.metrics.proficiency,
    0
  ) / skills.length
);

export const totalExperienceYears = Math.max(
  ...skills.map((skill) => skill.experience.years)
);

/* ==========================================================
 * DEFAULT SKILL
 * ==========================================================
 */

export const defaultSkill =
  featuredSkills[0] ?? skills[0];