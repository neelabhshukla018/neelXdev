// src/components/skills/hooks/useEditor.ts

"use client";

/**
 * ==========================================================
 * USE EDITOR
 * ==========================================================
 * Handles VS Code editor logic.
 */

import { useMemo } from "react";

import { useSkills } from "../context/SkillsContext";

export function useEditor() {
  const {
    selectedSkill,

    tabs,
    activeTabId,

    openTab,
    closeTab,
    setActiveTab,

    breadcrumbs,

    minimapVisible,
    toggleMinimap,

    rightSidebarOpen,
    toggleSidebar,
  } = useSkills();

  /* ======================================================
   * ACTIVE TAB
   * ==================================================== */

  const activeTab = useMemo(() => {
    return (
      tabs.find((tab) => tab.id === activeTabId) ??
      null
    );
  }, [tabs, activeTabId]);

  /* ======================================================
   * EDITOR FILE
   * ==================================================== */

  const fileName = useMemo(() => {
    return selectedSkill
      ? `${selectedSkill.name}.ts`
      : "";
  }, [selectedSkill]);

  /* ======================================================
   * LANGUAGE
   * ==================================================== */

  const language = useMemo(() => {
    return "TypeScript";
  }, []);

  /* ======================================================
   * READ ONLY
   * ==================================================== */

  const readOnly = true;

  /* ======================================================
   * LINE COUNT
   * ==================================================== */

  const lineCount = useMemo(() => {
    if (!selectedSkill) return 0;

    return (
      selectedSkill.description.split(" ").length + 35
    );
  }, [selectedSkill]);

  /* ======================================================
   * FILE PATH
   * ==================================================== */

  const filePath = useMemo(() => {
    if (!selectedSkill) return "";

    return `skills/${selectedSkill.category}/${selectedSkill.name}.ts`;
  }, [selectedSkill]);

  /* ======================================================
   * HELPERS
   * ==================================================== */

  const isActiveTab = (id: string) =>
    id === activeTabId;

  const isPinned = (id: string) =>
    tabs.find((tab) => tab.id === id)?.pinned ?? false;

  const canClose = (id: string) =>
    tabs.find((tab) => tab.id === id)?.closable ?? false;

  return {
    /* ---------------------------------------
     * Current File
     * ------------------------------------- */

    selectedSkill,

    activeTab,

    tabs,

    fileName,

    filePath,

    language,

    lineCount,

    readOnly,

    breadcrumbs,

    /* ---------------------------------------
     * Tabs
     * ------------------------------------- */

    activeTabId,

    openTab,

    closeTab,

    setActiveTab,

    isActiveTab,

    isPinned,

    canClose,

    /* ---------------------------------------
     * Layout
     * ------------------------------------- */

    minimapVisible,

    toggleMinimap,

    rightSidebarOpen,

    toggleSidebar,
  };
}