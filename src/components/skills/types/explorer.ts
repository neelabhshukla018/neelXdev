// src/components/skills/types/explorer.ts

/**
 * ==========================================================
 * EXPLORER TYPES
 * ==========================================================
 * Types for the VS Code Explorer tree.
 */

import { LucideIcon } from "lucide-react";
import { Skill, SkillCategory } from "./skill";

/* ==========================================================
 * NODE TYPE
 * ==========================================================
 */

export type ExplorerNodeType =
  | "workspace"
  | "folder"
  | "category"
  | "file";

/* ==========================================================
 * GIT STATUS
 * ==========================================================
 */

export type GitStatus =
  | "none"
  | "modified"
  | "added"
  | "deleted"
  | "renamed"
  | "untracked";

/* ==========================================================
 * FILE STATUS
 * ==========================================================
 */

export type FileStatus =
  | "closed"
  | "open"
  | "active";

/* ==========================================================
 * TREE NODE (BASE)
 * ==========================================================
 */

export interface ExplorerNode {
  id: string;

  name: string;

  type: ExplorerNodeType;

  icon?: LucideIcon;

  parentId?: string;

  depth: number;

  expanded?: boolean;

  selected?: boolean;

  hidden?: boolean;
}

/* ==========================================================
 * WORKSPACE
 * ==========================================================
 */

export interface WorkspaceNode extends ExplorerNode {
  type: "workspace";

  children: FolderNode[];
}

/* ==========================================================
 * FOLDER
 * ==========================================================
 */

export interface FolderNode extends ExplorerNode {
  type: "folder" | "category";

  category?: SkillCategory;

  color?: string;

  children: Array<FolderNode | FileNode>;
}

/* ==========================================================
 * FILE
 * ==========================================================
 */

export interface FileNode extends ExplorerNode {
  type: "file";

  fileName: string;

  extension: "ts" | "tsx" | "json";

  category: SkillCategory;

  gitStatus: GitStatus;

  fileStatus: FileStatus;

  skill: Skill;
}

/* ==========================================================
 * TREE
 * ==========================================================
 */

export interface ExplorerTree {
  workspace: WorkspaceNode;

  folders: FolderNode[];

  files: FileNode[];
}

/* ==========================================================
 * EXPLORER STATE
 * ==========================================================
 */

export interface ExplorerState {
  expandedFolders: string[];

  selectedFile?: string;

  activeFile?: string;

  hoveredFile?: string;

  search: string;
}

/* ==========================================================
 * CONTEXT MENU
 * ==========================================================
 */

export interface ExplorerContextMenu {
  visible: boolean;

  x: number;

  y: number;

  targetId?: string;
}

/* ==========================================================
 * DRAG & DROP
 * ==========================================================
 */

export interface DragState {
  dragging: boolean;

  sourceId?: string;

  targetId?: string;
}

/* ==========================================================
 * SEARCH RESULT
 * ==========================================================
 */

export interface ExplorerSearchResult {
  id: string;

  fileName: string;

  category: SkillCategory;

  path: string;
}

/* ==========================================================
 * FILE DECORATION
 * ==========================================================
 */

export interface FileDecoration {
  color: string;

  badge?: string;

  tooltip?: string;
}

/* ==========================================================
 * EXPLORER SETTINGS
 * ==========================================================
 */

export interface ExplorerSettings {
  showIcons: boolean;

  showGitStatus: boolean;

  compactFolders: boolean;

  autoExpand: boolean;

  allowMultiSelect: boolean;
}

/* ==========================================================
 * ACTIONS
 * ==========================================================
 */

export interface ExplorerActions {
  openFile: (id: string) => void;

  closeFile: (id: string) => void;

  toggleFolder: (id: string) => void;

  selectFile: (id: string) => void;

  search: (query: string) => void;
}