// src/components/skills/types/editor.ts

/**
 * ==========================================================
 * EDITOR TYPES
 * ==========================================================
 * Types used by the VS Code editor, tabs, breadcrumbs,
 * minimap, cursor, and editor state.
 */

import {
  Skill,
  SkillFileExtension,
  SkillSearchResult,
  SkillIcon,
} from "./skill";

/* ==========================================================
 * TAB
 * ==========================================================
 */

export interface EditorTab {
  id: string;

  skillId: string;

  title: string;

  fileName: string;

  extension: SkillFileExtension;

  icon?: SkillIcon;

  active: boolean;

  dirty: boolean;

  pinned: boolean;

  preview: boolean;

  closable: boolean;
}

/* ==========================================================
 * BREADCRUMB
 * ==========================================================
 */

export interface BreadcrumbItem {
  id: string;

  label: string;

  path: string;

  clickable: boolean;
}

/* ==========================================================
 * CODE LINE
 * ==========================================================
 */

export interface CodeLine {
  number: number;

  text: string;

  highlighted?: boolean;

  indent?: number;

  readonly?: boolean;
}

/* ==========================================================
 * CURSOR
 * ==========================================================
 */

export interface CursorPosition {
  line: number;

  column: number;
}

export interface CursorState {
  position: CursorPosition;

  visible: boolean;

  blinking: boolean;
}

/* ==========================================================
 * SELECTION
 * ==========================================================
 */

export interface SelectionRange {
  start: CursorPosition;

  end: CursorPosition;
}

/* ==========================================================
 * SCROLL
 * ==========================================================
 */

export interface EditorScroll {
  top: number;

  left: number;

  maxTop: number;

  maxLeft: number;
}

/* ==========================================================
 * MINIMAP
 * ==========================================================
 */

export interface MinimapState {
  visible: boolean;

  viewportStart: number;

  viewportEnd: number;

  scale: number;
}

/* ==========================================================
 * SEARCH
 * ==========================================================
 */

export interface SearchState {
  query: string;

  results: SkillSearchResult[];

  selectedIndex: number;

  caseSensitive: boolean;

  wholeWord: boolean;

  regex: boolean;
}

/* ==========================================================
 * CODE PREVIEW
 * ==========================================================
 */

export interface CodePreview {
  language: string;

  lines: CodeLine[];

  readOnly: boolean;
}

/* ==========================================================
 * EDITOR OPTIONS
 * ==========================================================
 */

export interface EditorOptions {
  lineNumbers: boolean;

  wordWrap: boolean;

  minimap: boolean;

  breadcrumbs: boolean;

  stickyScroll: boolean;

  cursorAnimation: boolean;

  smoothScrolling: boolean;

  fontSize: number;

  lineHeight: number;

  tabSize: number;

  fontFamily: string;
}

/* ==========================================================
 * EDITOR STATUS
 * ==========================================================
 */

export interface EditorStatus {
  language: string;

  encoding: string;

  lineEnding: "LF" | "CRLF";

  line: number;

  column: number;

  spaces: number;

  branch: string;
}

/* ==========================================================
 * QUICK OPEN
 * ==========================================================
 */

export interface QuickOpenState {
  open: boolean;

  value: string;

  filtered: SkillSearchResult[];

  selectedIndex: number;
}

/* ==========================================================
 * EDITOR HISTORY
 * ==========================================================
 */

export interface EditorHistoryItem {
  fileId: string;

  timestamp: number;
}

/* ==========================================================
 * EDITOR ACTIONS
 * ==========================================================
 */

export interface EditorActions {
  openTab: (skill: Skill) => void;

  closeTab: (id: string) => void;

  activateTab: (id: string) => void;

  pinTab: (id: string) => void;

  setCursor: (position: CursorPosition) => void;

  scrollTo: (line: number) => void;

  search: (query: string) => void;
}

/* ==========================================================
 * EDITOR STATE
 * ==========================================================
 */

export interface EditorState {
  tabs: EditorTab[];

  activeTab?: EditorTab;

  breadcrumbs: BreadcrumbItem[];

  cursor: CursorState;

  selection?: SelectionRange;

  scroll: EditorScroll;

  minimap: MinimapState;

  preview: CodePreview;

  quickOpen: QuickOpenState;

  search: SearchState;

  history: EditorHistoryItem[];

  status: EditorStatus;

  options: EditorOptions;
}