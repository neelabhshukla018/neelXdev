// src/components/skills/explorer/ExplorerFile.tsx

"use client";

/**
 * ==========================================================
 * EXPLORER FILE
 * ==========================================================
 * Container component that connects FileItem to the
 * Explorer and Tabs state.
 */

import { Skill } from "../types/skill";

import { useExplorer } from "../hooks/useExplorer";
import { useTabs } from "../hooks/useTabs";

import FileItem from "./FileItem";

interface ExplorerFileProps {
  skill: Skill;
}

export default function ExplorerFile({
  skill,
}: ExplorerFileProps) {
  const {
    openTab,
    isSelected,
  } = useExplorer();

  const { tabs } = useTabs();

  const openedTab = tabs.find(
    (tab) => tab.skillId === skill.id
  );

  return (
    <FileItem
      name={`${skill.name}.ts`}
      color={skill.color}
      active={isSelected(skill.id)}
      opened={!!openedTab}
      pinned={openedTab?.pinned}
      dirty={openedTab?.dirty}
      onClick={() => openTab(skill.id)}
    />
  );
}