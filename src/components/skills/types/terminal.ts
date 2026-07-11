// src/components/skills/types/terminal.ts

/**
 * ==========================================================
 * TERMINAL TYPES
 * ==========================================================
 * Types used by the VS Code inspired terminal.
 */

/* ==========================================================
 * COMMAND TYPES
 * ==========================================================
 */

export type TerminalCommandType =
  | "system"
  | "skill"
  | "navigation"
  | "git"
  | "custom";

/* ==========================================================
 * OUTPUT TYPES
 * ==========================================================
 */

export type OutputType =
  | "command"
  | "output"
  | "success"
  | "error"
  | "warning"
  | "info";

/* ==========================================================
 * TERMINAL STATUS
 * ==========================================================
 */

export type TerminalStatus =
  | "idle"
  | "typing"
  | "executing";

/* ==========================================================
 * PROMPT
 * ==========================================================
 */

export interface TerminalPrompt {
  user: string;

  machine: string;

  path: string;

  symbol: string;
}

/* ==========================================================
 * COMMAND
 * ==========================================================
 */

export interface TerminalCommand {
  id: string;

  value: string;

  type: TerminalCommandType;

  timestamp: number;

  success?: boolean;
}

/* ==========================================================
 * OUTPUT LINE
 * ==========================================================
 */

export interface TerminalOutputLine {
  id: string;

  text: string;

  type: OutputType;

  timestamp: number;
}

/* ==========================================================
 * HISTORY ITEM
 * ==========================================================
 */

export interface TerminalHistoryItem {
  id: string;

  command: string;

  timestamp: number;

  success?: boolean;

  output?: string[];
}
/* ==========================================================
 * CURSOR
 * ==========================================================
 */

export interface TerminalCursor {
  visible: boolean;

  blinking: boolean;
}

/* ==========================================================
 * AUTOCOMPLETE
 * ==========================================================
 */

export interface TerminalSuggestion {
  label: string;

  description?: string;

  value: string;
}

/* ==========================================================
 * TERMINAL SETTINGS
 * ==========================================================
 */

export interface TerminalSettings {
  maxHistory: number;

  autoScroll: boolean;

  animateTyping: boolean;

  showTimestamp: boolean;

  fontSize: number;

  lineHeight: number;
}

/* ==========================================================
 * TERMINAL ACTIONS
 * ==========================================================
 */

export interface TerminalActions {
  execute: (command: string) => void;

  clear: () => void;

  clearHistory: () => void;

  addOutput: (
    text: string,
    type?: OutputType
  ) => void;

  setInput: (value: string) => void;
}

/* ==========================================================
 * TERMINAL STATE
 * ==========================================================
 */

export interface TerminalState {
  status: TerminalStatus;

  prompt: TerminalPrompt;

  input: string;

  cursor: TerminalCursor;

  history: TerminalHistoryItem[];

  suggestions: TerminalSuggestion[];

  settings: TerminalSettings;
}

/* ==========================================================
 * BUILT-IN COMMAND
 * ==========================================================
 */

export interface BuiltInCommand {
  command: string;

  description: string;

  usage?: string;

  aliases?: string[];

  execute: (
    args: string[]
  ) => TerminalOutputLine[];
}

/* ==========================================================
 * TERMINAL ENVIRONMENT
 * ==========================================================
 */

export interface TerminalEnvironment {
  cwd: string;

  workspace: string;

  shell: string;

  version: string;

  os: "macOS" | "Windows" | "Linux";
}