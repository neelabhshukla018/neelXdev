/**
 * ==========================================================
 * VS CODE CONFIGURATION
 * ==========================================================
 */

export const VSCODE = {
  APP_NAME: "NeelabhPortfolio",
  WORKSPACE: "NeelabhPortfolio.code-workspace",

  VERSION: "1.0.0",

  DEFAULT_FILE: "React.ts",

  SHOW_MINIMAP: true,
  SHOW_BREADCRUMB: true,
  SHOW_STATUS_BAR: true,
  SHOW_ACTIVITY_BAR: true,
  SHOW_EXPLORER: true,
  SHOW_TERMINAL: true,
  SHOW_RIGHT_SIDEBAR: true,

  ENABLE_FILE_ICONS: true,
  ENABLE_GIT_DECORATIONS: true,
  ENABLE_LINE_NUMBERS: true,
  ENABLE_WORD_WRAP: false,

  ENABLE_TYPING_ANIMATION: true,
  ENABLE_GRAPH_ANIMATION: true,
  ENABLE_TERMINAL_ANIMATION: true,
  ENABLE_TAB_ANIMATION: true,

  TAB_SIZE: 2,
  FONT_SIZE: 14,
  LINE_HEIGHT: 24,
} as const;

/* ==========================================================
 * WINDOW
 * ==========================================================
 */

export const WINDOW = {
  MIN_WIDTH: 1280,
  MIN_HEIGHT: 720,

  TITLEBAR_HEIGHT: 38,
  TAB_HEIGHT: 36,
  STATUSBAR_HEIGHT: 24,
  ACTIVITYBAR_WIDTH: 50,
  EXPLORER_WIDTH: 260,
  RIGHTBAR_WIDTH: 300,
  TERMINAL_HEIGHT: 220,
} as const;

/* ==========================================================
 * EDITOR
 * ==========================================================
 */

export const EDITOR = {
  FONT_FAMILY:
    '"JetBrains Mono", "Geist Mono", "Fira Code", monospace',

  FONT_SIZE: 14,

  LINE_HEIGHT: 24,

  LETTER_SPACING: "0.2px",

  CURSOR_BLINK_SPEED: 600,

  PADDING_X: 24,

  PADDING_Y: 20,

  MAX_LINE_LENGTH: 80,
} as const;

/* ==========================================================
 * EXPLORER
 * ==========================================================
 */

export const EXPLORER = {
  ROOT_NAME: "PORTFOLIO",

  DEFAULT_OPEN_FOLDERS: [
    "skills",
    "frontend",
  ],

  INDENT: 18,

  ITEM_HEIGHT: 30,
} as const;

/* ==========================================================
 * TERMINAL
 * ==========================================================
 */

export const TERMINAL = {
  PROMPT: "PS Portfolio>",

  CURSOR: "█",

  HISTORY_LIMIT: 100,

  TYPE_SPEED: 18,
} as const;

/* ==========================================================
 * STATUS BAR
 * ==========================================================
 */

export const STATUSBAR = {
  BRANCH: "main",

  LANGUAGE: "TypeScript",

  ENCODING: "UTF-8",

  EOL: "LF",

  FRAMEWORK: "Next.js",

  CSS: "Tailwind CSS",
} as const;

/* ==========================================================
 * BREADCRUMB
 * ==========================================================
 */

export const BREADCRUMB = {
  ROOT: "portfolio",

  SEPARATOR: ">",
} as const;

/* ==========================================================
 * SEARCH
 * ==========================================================
 */

export const SEARCH = {
  PLACEHOLDER: "Search files...",

  QUICK_OPEN: "Type the name of a skill...",

  MAX_RESULTS: 10,
} as const;

/* ==========================================================
 * ANIMATION
 * ==========================================================
 */

export const ANIMATION = {
  WINDOW: 0.35,

  TAB: 0.25,

  EXPLORER: 0.3,

  GRAPH: 0.5,

  SIDEBAR: 0.3,

  TERMINAL: 0.2,

  DETAILS: 0.25,
} as const;