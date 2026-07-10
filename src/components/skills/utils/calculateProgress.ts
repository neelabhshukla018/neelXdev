// src/components/skills/utils/calculateProgress.ts

/**
 * ==========================================================
 * CALCULATE PROGRESS
 * ==========================================================
 * Utility functions for calculating skill progress,
 * averages, completion and category statistics.
 */

import { Skill } from "../types/skill";

/* ==========================================================
 * TYPES
 * ==========================================================
 */

export interface ProgressSummary {
  average: number;

  highest: number;

  lowest: number;

  completed: number;

  total: number;
}

/* ==========================================================
 * SINGLE SKILL
 * ==========================================================
 */

export function calculateSkillProgress(
  skill: Skill
): number {
  const {
    proficiency,
    confidence,
    experience,
    problemSolving,
    realWorldUsage,
  } = skill.metrics;

  return Math.round(
    (
      proficiency +
      confidence +
      experience +
      problemSolving +
      realWorldUsage
    ) / 5
  );
}

/* ==========================================================
 * ALL SKILLS
 * ==========================================================
 */

export function calculateOverallProgress(
  skills: Skill[]
): number {
  if (!skills.length) return 0;

  const total = skills.reduce(
    (sum, skill) =>
      sum +
      calculateSkillProgress(skill),
    0
  );

  return Math.round(total / skills.length);
}

/* ==========================================================
 * CATEGORY
 * ==========================================================
 */

export function calculateCategoryProgress(
  skills: Skill[],
  category: Skill["category"]
): number {
  const filtered = skills.filter(
    (skill) =>
      skill.category === category
  );

  if (!filtered.length) return 0;

  return calculateOverallProgress(
    filtered
  );
}

/* ==========================================================
 * SUMMARY
 * ==========================================================
 */

export function calculateSummary(
  skills: Skill[]
): ProgressSummary {
  if (!skills.length) {
    return {
      average: 0,
      highest: 0,
      lowest: 0,
      completed: 0,
      total: 0,
    };
  }

  const values = skills.map(
    calculateSkillProgress
  );

  return {
    average:
      calculateOverallProgress(
        skills
      ),

    highest: Math.max(...values),

    lowest: Math.min(...values),

    completed: skills.filter(
      (skill) =>
        skill.status ===
        "mastered"
    ).length,

    total: skills.length,
  };
}

/* ==========================================================
 * EXPERIENCE
 * ==========================================================
 */

export function calculateExperienceYears(
  skills: Skill[]
): number {
  return skills.reduce(
    (sum, skill) =>
      sum +
      skill.experience.years,
    0
  );
}

/* ==========================================================
 * PROJECTS
 * ==========================================================
 */

export function calculateProjects(
  skills: Skill[]
): number {
  return skills.reduce(
    (sum, skill) =>
      sum +
      skill.stats.projects,
    0
  );
}

/* ==========================================================
 * COMMITS
 * ==========================================================
 */

export function calculateCommits(
  skills: Skill[]
): number {
  return skills.reduce(
    (sum, skill) =>
      sum +
      skill.stats.commits,
    0
  );
}

/* ==========================================================
 * REPOSITORIES
 * ==========================================================
 */

export function calculateRepositories(
  skills: Skill[]
): number {
  return skills.reduce(
    (sum, skill) =>
      sum +
      skill.stats.repositories,
    0
  );
}

/* ==========================================================
 * LEVEL SCORE
 * ==========================================================
 */

export function levelToScore(
  level: Skill["level"]
): number {
  switch (level) {
    case "Expert":
      return 100;

    case "Advanced":
      return 85;

    case "Intermediate":
      return 70;

    case "Beginner":
      return 45;

    default:
      return 0;
  }
}

/* ==========================================================
 * STATUS %
 * ==========================================================
 */

export function statusPercentage(
  skills: Skill[],
  status: Skill["status"]
): number {
  if (!skills.length) return 0;

  const total = skills.filter(
    (skill) =>
      skill.status === status
  ).length;

  return Math.round(
    (total / skills.length) * 100
  );
}

/* ==========================================================
 * SORT
 * ==========================================================
 */

export function sortByProgress(
  skills: Skill[]
): Skill[] {
  return [...skills].sort(
    (a, b) =>
      calculateSkillProgress(b) -
      calculateSkillProgress(a)
  );
}

/* ==========================================================
 * TOP SKILLS
 * ==========================================================
 */

export function getTopSkills(
  skills: Skill[],
  count = 5
): Skill[] {
  return sortByProgress(
    skills
  ).slice(0, count);
}

/* ==========================================================
 * DEFAULT EXPORT
 * ==========================================================
 */

export default calculateOverallProgress;