// src/components/skills/constants/colors.ts

/**
 * ==========================================================
 * VS CODE + MACOS COLOR SYSTEM
 * ==========================================================
 * Centralized color palette used across the Skills section.
 * Avoid hardcoding colors inside components.
 */

export const COLORS = {
  /* ========================================================
   * BRAND
   * ====================================================== */
  brand: {
    primary: "#007ACC",
    secondary: "#3794FF",
    accent: "#4FC1FF",
  },

  /* ========================================================
   * MACOS TRAFFIC LIGHTS
   * ====================================================== */
  mac: {
    red: "#FF5F57",
    yellow: "#FEBC2E",
    green: "#28C840",
  },

  /* ========================================================
   * DARK THEME
   * ====================================================== */
  dark: {
    background: "#1E1E1E",
    secondaryBackground: "#252526",
    tertiaryBackground: "#2D2D30",

    activityBar: "#181818",
    sidebar: "#252526",
    explorer: "#1E1E1E",
    editor: "#1E1E1E",
    terminal: "#181818",
    statusBar: "#007ACC",
    panel: "#252526",
    minimap: "#2A2D2E",

    border: "#313131",
    divider: "#3C3C3C",

    hover: "#2A2D2E",
    selected: "#37373D",
    active: "#094771",
    overlay: "rgba(255,255,255,0.04)",
  },

  /* ========================================================
   * LIGHT THEME
   * ====================================================== */
  light: {
    background: "#FFFFFF",
    secondaryBackground: "#F3F3F3",
    tertiaryBackground: "#ECECEC",

    activityBar: "#F3F3F3",
    sidebar: "#FAFAFA",
    explorer: "#FFFFFF",
    editor: "#FFFFFF",
    terminal: "#F7F7F7",
    statusBar: "#007ACC",
    panel: "#F3F3F3",
    minimap: "#ECECEC",

    border: "#DDDDDD",
    divider: "#E5E5E5",

    hover: "#F5F5F5",
    selected: "#E8E8E8",
    active: "#CCE8FF",
    overlay: "rgba(0,0,0,0.03)",
  },

  /* ========================================================
   * TEXT
   * ====================================================== */
  text: {
    white: "#FFFFFF",
    black: "#000000",

    primaryDark: "#CCCCCC",
    secondaryDark: "#9D9D9D",
    mutedDark: "#6A6A6A",

    primaryLight: "#24292E",
    secondaryLight: "#586069",
    mutedLight: "#8A8A8A",

    success: "#4EC9B0",
    warning: "#CCA700",
    error: "#F44747",
    info: "#3794FF",
  },

  /* ========================================================
   * FILE ICON COLORS
   * ====================================================== */
  file: {
    folder: "#D7BA7D",
    file: "#CCCCCC",

    ts: "#3178C6",
    js: "#F7DF1E",
    jsx: "#61DAFB",
    tsx: "#3178C6",

    json: "#CBCB41",
    md: "#519ABA",
    css: "#563D7C",
    html: "#E34F26",
  },

  /* ========================================================
   * SKILL CATEGORY COLORS
   * ====================================================== */
  skill: {
    frontend: "#61DAFB",
    backend: "#68A063",
    database: "#13AA52",
    deployment: "#8B5CF6",
    api: "#F59E0B",
    ui: "#EC4899",
    ai: "#8B5CF6",
    tools: "#94A3B8",
  },

  /* ========================================================
   * GRAPH COLORS
   * ====================================================== */
  graph: {
    node: "#3C3C3C",
    nodeHover: "#007ACC",
    nodeSelected: "#3794FF",

    edge: "#4B5563",
    edgeActive: "#4FC1FF",

    glow: "rgba(0,122,204,0.35)",
  },

  /* ========================================================
   * TERMINAL
   * ====================================================== */
  terminal: {
    background: "#181818",

    prompt: "#4EC9B0",
    command: "#DCDCAA",
    output: "#CCCCCC",
    error: "#F44747",
    success: "#89D185",
    path: "#569CD6",
  },

  /* ========================================================
   * SCROLLBAR
   * ====================================================== */
  scrollbar: {
    thumb: "#424242",
    thumbHover: "#4F4F4F",
    track: "transparent",
  },

  /* ========================================================
   * SHADOWS
   * ====================================================== */
  shadow: {
    sm: "0 2px 6px rgba(0,0,0,0.15)",
    md: "0 6px 18px rgba(0,0,0,0.22)",
    lg: "0 12px 32px rgba(0,0,0,0.35)",

    glowBlue: "0 0 20px rgba(0,122,204,0.35)",
    glowGreen: "0 0 18px rgba(40,200,64,0.25)",
    glowRed: "0 0 18px rgba(255,95,87,0.25)",
  },
} as const;

/* ==========================================================
 * COMMON GRADIENTS
 * ========================================================== */

export const GRADIENTS = {
  editor:
    "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0))",

  sidebar:
    "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",

  accent:
    "linear-gradient(135deg, #007ACC 0%, #3794FF 100%)",

  success:
    "linear-gradient(135deg, #28C840 0%, #4EC9B0 100%)",

  danger:
    "linear-gradient(135deg, #FF5F57 0%, #F44747 100%)",
} as const;

/* ==========================================================
 * BORDER RADIUS
 * ========================================================== */

export const RADIUS = {
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "12px",
  xl: "16px",
  full: "9999px",
} as const;