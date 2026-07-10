// src/components/skills/types/skill.ts

/**
 * ==========================================================
 * SKILL TYPES
 * ==========================================================
 * Core data models used across the Skills section.
 */

import { LucideIcon } from "lucide-react";

/* ==========================================================
 * BASIC TYPES
 * ==========================================================
 */

export type SkillCategory =
  | "frontend"
  | "backend"
  | "database"
  | "deployment"
  | "ui"
  | "api"
  | "ai"
  | "tools";

export type SkillLevel =
  | "Beginner"
  | "Intermediate"
  | "Advanced"
  | "Expert";

export type SkillStatus =
  | "learning"
  | "active"
  | "mastered"
  | "planned";

export type SkillFileExtension =
  | "ts"
  | "tsx"
  | "json";

/* ==========================================================
 * EXPERIENCE
 * ==========================================================
 */

export interface Experience {
  years: number;
  months?: number;
  startedAt?: string;
}

/* ==========================================================
 * PROJECT
 * ==========================================================
 */

export interface SkillProject {
  id: string;
  name: string;
  description?: string;
  href?: string;
}

/* ==========================================================
 * SKILL METRICS
 * ==========================================================
 */

export interface SkillMetrics {
  proficiency: number;      // 0-100
  confidence: number;       // 0-100
  experience: number;       // 0-100
  problemSolving: number;   // 0-100
  realWorldUsage: number;   // 0-100
}

/* ==========================================================
 * SKILL STATS
 * ==========================================================
 */

export interface SkillStats {
  years: number;
  projects: number;
  certifications?: number;
  commits?: number;
  repositories?: number;
  articles?: number;
}

/* ==========================================================
 * SKILL CONNECTION
 * ==========================================================
 */

export interface SkillConnection {
  target: string;
  strength: number; // 1-100
}

/* ==========================================================
 * GRAPH POSITION
 * ==========================================================
 */

export interface GraphPosition {
  x: number;
  y: number;
}

/* ==========================================================
 * SKILL
 * ==========================================================
 */

export interface Skill {
  id: string;

  name: string;

  shortName?: string;

  description: string;

  category: SkillCategory;

  level: SkillLevel;

  status: SkillStatus;

  icon: LucideIcon;

  color: string;

  extension: SkillFileExtension;

  experience: Experience;

  stats: SkillStats;

  metrics: SkillMetrics;

  projects: SkillProject[];

  technologies: string[];

  connections: SkillConnection[];

  position?: GraphPosition;

  featured?: boolean;

  favorite?: boolean;
}

/* ==========================================================
 * SKILL GROUP
 * ==========================================================
 */

export interface SkillGroup {
  id: SkillCategory;

  title: string;

  description?: string;

  icon?: LucideIcon;

  color: string;

  skills: Skill[];
}

/* ==========================================================
 * OPEN FILE
 * ==========================================================
 */

export interface OpenSkillFile {
  id: string;

  skillId: string;

  title: string;

  fileName: string;

  extension: SkillFileExtension;

  active: boolean;

  pinned?: boolean;

  dirty?: boolean;
}

/* ==========================================================
 * EDITOR STATE
 * ==========================================================
 */

export interface SkillEditorState {
  activeSkill: string;

  openFiles: OpenSkillFile[];

  expandedFolders: string[];

  search: string;

  terminalOpen: boolean;

  explorerOpen: boolean;

  rightSidebarOpen: boolean;

  minimapVisible: boolean;
}

/* ==========================================================
 * GRAPH NODE
 * ==========================================================
 */

export interface SkillNode {
  id: string;

  skillId: string;

  position: GraphPosition;

  radius: number;

  selected: boolean;

  hovered: boolean;
}

/* ==========================================================
 * GRAPH EDGE
 * ==========================================================
 */

export interface SkillEdge {
  id: string;

  source: string;

  target: string;

  strength: number;

  animated?: boolean;
}

/* ==========================================================
 * SEARCH RESULT
 * ==========================================================
 */

export interface SkillSearchResult {
  id: string;

  name: string;

  category: SkillCategory;

  fileName: string;
}