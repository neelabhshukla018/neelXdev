// src/components/skills/explorer/ExplorerTree.tsx

"use client";

/**
 * ==========================================================
 * EXPLORER TREE
 * ==========================================================
 * Root tree renderer for VS Code Explorer.
 */

import { useMemo } from "react";

import { useExplorer } from "../hooks/useExplorer";

import ExplorerFolder from "./ExplorerFolder";

export default function ExplorerTree() {
  const {
    groupedSkills,
    search,
  } = useExplorer();

  /* ======================================================
   * FOLDERS
   * ==================================================== */

  const folders = useMemo(
    () => [
      {
        id: "frontend",
        name: "Frontend",
        skills: groupedSkills.frontend,
      },
      {
        id: "backend",
        name: "Backend",
        skills: groupedSkills.backend,
      },
      {
        id: "database",
        name: "Database",
        skills: groupedSkills.database,
      },
      {
        id: "deployment",
        name: "Deployment",
        skills: groupedSkills.deployment,
      },
      {
        id: "api",
        name: "API",
        skills: groupedSkills.api,
      },
      {
        id: "ui",
        name: "UI / UX",
        skills: groupedSkills.ui,
      },
      {
        id: "ai",
        name: "Artificial Intelligence",
        skills: groupedSkills.ai,
      },
    ],
    [groupedSkills]
  );

  /* ======================================================
   * TOTAL FILES
   * ==================================================== */

  const totalFiles = useMemo(() => {
    return folders.reduce(
      (total, folder) =>
        total + folder.skills.length,
      0
    );
  }, [folders]);

  /* ======================================================
   * EMPTY SEARCH
   * ==================================================== */

  if (
    search.trim() &&
    totalFiles === 0
  ) {
    return (
      <div className="flex h-full items-center justify-center px-6">
        <div className="text-center">
          <p className="text-sm text-[#B3B3B3]">
            No matching skills found.
          </p>

          <p className="mt-2 text-xs text-[#7D7D7D]">
            Try searching another technology.
          </p>
        </div>
      </div>
    );
  }

  /* ======================================================
   * TREE
   * ==================================================== */

  return (
    <div className="flex flex-col py-2">
      {folders.map((folder) => (
        <ExplorerFolder
          key={folder.id}
          id={folder.id}
          title={folder.name}
          skills={folder.skills}
        />
      ))}
    </div>
  );
}