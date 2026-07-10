// src/components/skills/constants/tabs.ts

/**
 * ==========================================================
 * EDITOR TABS CONFIGURATION
 * ==========================================================
 */

import { LucideIcon } from "lucide-react";
import {
  Braces,
  Database,
  Server,
  Palette,
  Cpu,
  Cloud,
  FileJson,
  Code2,
} from "lucide-react";

/* ==========================================================
 * TAB TYPES
 * ==========================================================
 */

export type TabCategory =
  | "frontend"
  | "backend"
  | "database"
  | "deployment"
  | "ui"
  | "api"
  | "ai";

export interface EditorTab {
  id: string;
  title: string;
  fileName: string;
  extension: "ts" | "tsx" | "json";
  category: TabCategory;
  icon: LucideIcon;
  closable: boolean;
  pinned?: boolean;
}

/* ==========================================================
 * DEFAULT OPEN TABS
 * ==========================================================
 */

export const DEFAULT_TABS: EditorTab[] = [
  {
    id: "react",
    title: "React",
    fileName: "React.ts",
    extension: "ts",
    category: "frontend",
    icon: Braces,
    closable: false,
    pinned: true,
  },
  {
    id: "next",
    title: "Next.js",
    fileName: "Next.ts",
    extension: "ts",
    category: "frontend",
    icon: Braces,
    closable: true,
  },
  {
    id: "node",
    title: "Node.js",
    fileName: "Node.ts",
    extension: "ts",
    category: "backend",
    icon: Server,
    closable: true,
  },
];

/* ==========================================================
 * FILE ICONS
 * ==========================================================
 */

export const TAB_ICONS: Record<TabCategory, LucideIcon> = {
  frontend: Braces,
  backend: Server,
  database: Database,
  deployment: Cloud,
  ui: Palette,
  api: FileJson,
  ai: Cpu,
};

/* ==========================================================
 * TAB COLORS
 * ==========================================================
 */

export const TAB_COLORS: Record<TabCategory, string> = {
  frontend: "#61DAFB",
  backend: "#68A063",
  database: "#13AA52",
  deployment: "#8B5CF6",
  ui: "#EC4899",
  api: "#F59E0B",
  ai: "#8B5CF6",
};

/* ==========================================================
 * FILE EXTENSIONS
 * ==========================================================
 */

export const FILE_EXTENSIONS = {
  TYPESCRIPT: ".ts",
  TSX: ".tsx",
  JSON: ".json",
} as const;

/* ==========================================================
 * TAB SETTINGS
 * ==========================================================
 */

export const TAB_SETTINGS = {
  HEIGHT: 36,
  MIN_WIDTH: 130,
  MAX_WIDTH: 220,
  ICON_SIZE: 16,
  CLOSE_ICON_SIZE: 14,
  GAP: 2,

  ENABLE_DRAG: true,
  ENABLE_CLOSE: true,
  ENABLE_PIN: true,
  ENABLE_SCROLL: true,
} as const;

/* ==========================================================
 * DEFAULT ACTIVE TAB
 * ==========================================================
 */

export const DEFAULT_ACTIVE_TAB = "react";

/* ==========================================================
 * SPECIAL FILES
 * ==========================================================
 */

export const SPECIAL_FILES = {
  README: "README.md",
  PACKAGE: "package.json",
  TSCONFIG: "tsconfig.json",
  NEXT_CONFIG: "next.config.ts",
  GLOBALS: "globals.css",
} as const;

/* ==========================================================
 * FILE HEADER LABELS
 * ==========================================================
 */

export const FILE_LABELS = {
  FRONTEND: "Frontend Skills",
  BACKEND: "Backend Skills",
  DATABASE: "Database Skills",
  DEPLOYMENT: "Deployment Skills",
  UI: "UI / UX Skills",
  API: "API Skills",
  AI: "AI Skills",
} as const;

/* ==========================================================
 * EDITOR METADATA
 * ==========================================================
 */

export const EDITOR_METADATA = {
  language: "TypeScript",
  encoding: "UTF-8",
  lineEnding: "LF",
  indentSize: 2,
  insertSpaces: true,
} as const;