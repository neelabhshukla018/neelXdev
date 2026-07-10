// src/components/skills/utils/buildTree.ts

/**
 * ==========================================================
 * BUILD TREE
 * ==========================================================
 * Generates the VS Code Explorer tree from skills.
 */

import { Skill } from "../types/skill";

/* ==========================================================
 * TYPES
 * ==========================================================
 */

export interface ExplorerFile {
  id: string;
  name: string;
  extension: string;
  skill: Skill;
}

export interface ExplorerFolder {
  id: string;
  name: string;
  expanded: boolean;
  files: ExplorerFile[];
}

export interface ExplorerTree {
  folders: ExplorerFolder[];
}

/* ==========================================================
 * CATEGORY ORDER
 * ==========================================================
 */

const CATEGORY_ORDER: Skill["category"][] = [
  "frontend",
  "backend",
  "database",
  "deployment",
  "api",
  "ui",
  "ai",
];

/* ==========================================================
 * CATEGORY LABELS
 * ==========================================================
 */

const CATEGORY_LABELS: Record<
  Skill["category"],
  string
> = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  deployment: "Deployment",
  api: "API",
  ui: "UI / UX",
  ai: "Artificial Intelligence",
};

/* ==========================================================
 * BUILD TREE
 * ==========================================================
 */

export function buildTree(
  skills: Skill[],
  expandedFolders: string[] = []
): ExplorerTree {
  const folders: ExplorerFolder[] = [];

  CATEGORY_ORDER.forEach((category) => {
    const categorySkills = skills.filter(
      (skill) =>
        skill.category === category
    );

    if (!categorySkills.length) {
      return;
    }

    folders.push({
      id: category,

      name:
        CATEGORY_LABELS[category],

      expanded:
        expandedFolders.includes(
          category
        ),

      files: categorySkills.map(
        (skill) => ({
          id: skill.id,

          name: skill.name,

          extension:
            skill.extension,

          skill,
        })
      ),
    });
  });

  return {
    folders,
  };
}

/* ==========================================================
 * FIND FILE
 * ==========================================================
 */

export function findExplorerFile(
  tree: ExplorerTree,
  skillId: string
): ExplorerFile | undefined {
  for (const folder of tree.folders) {
    const file = folder.files.find(
      (file) =>
        file.skill.id === skillId
    );

    if (file) {
      return file;
    }
  }

  return undefined;
}

/* ==========================================================
 * FIND FOLDER
 * ==========================================================
 */

export function findFolder(
  tree: ExplorerTree,
  folderId: string
): ExplorerFolder | undefined {
  return tree.folders.find(
    (folder) =>
      folder.id === folderId
  );
}

/* ==========================================================
 * COUNT FILES
 * ==========================================================
 */

export function getTotalFiles(
  tree: ExplorerTree
): number {
  return tree.folders.reduce(
    (total, folder) =>
      total + folder.files.length,
    0
  );
}

/* ==========================================================
 * COUNT FOLDERS
 * ==========================================================
 */

export function getFolderCount(
  tree: ExplorerTree
): number {
  return tree.folders.length;
}

/* ==========================================================
 * FLATTEN TREE
 * ==========================================================
 */

export function flattenTree(
  tree: ExplorerTree
): ExplorerFile[] {
  return tree.folders.flatMap(
    (folder) => folder.files
  );
}

/* ==========================================================
 * DEFAULT EXPORT
 * ==========================================================
 */

export default buildTree;