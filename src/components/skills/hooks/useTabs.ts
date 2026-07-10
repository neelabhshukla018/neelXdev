// src/components/skills/hooks/useTabs.ts

"use client";

/**
 * ==========================================================
 * USE TABS
 * ==========================================================
 * Handles all VS Code editor tab functionality.
 */

import { useMemo } from "react";

import { useSkills } from "../context/SkillsContext";

export function useTabs() {
  const {
    tabs,
    activeTabId,

    openTab,
    closeTab,
    setActiveTab,
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
   * TAB COUNT
   * ==================================================== */

  const tabCount = tabs.length;

  /* ======================================================
   * PINNED TABS
   * ==================================================== */

  const pinnedTabs = useMemo(() => {
    return tabs.filter((tab) => tab.pinned);
  }, [tabs]);

  /* ======================================================
   * NORMAL TABS
   * ==================================================== */

  const normalTabs = useMemo(() => {
    return tabs.filter((tab) => !tab.pinned);
  }, [tabs]);

  /* ======================================================
   * DIRTY TABS
   * ==================================================== */

  const dirtyTabs = useMemo(() => {
    return tabs.filter((tab) => tab.dirty);
  }, [tabs]);

  /* ======================================================
   * PREVIEW TAB
   * ==================================================== */

  const previewTab = useMemo(() => {
    return tabs.find((tab) => tab.preview) ?? null;
  }, [tabs]);

  /* ======================================================
   * HELPERS
   * ==================================================== */

  const isActive = (tabId: string) =>
    tabId === activeTabId;

  const isPinned = (tabId: string) =>
    tabs.some(
      (tab) =>
        tab.id === tabId &&
        tab.pinned
    );

  const isPreview = (tabId: string) =>
    tabs.some(
      (tab) =>
        tab.id === tabId &&
        tab.preview
    );

  const isDirty = (tabId: string) =>
    tabs.some(
      (tab) =>
        tab.id === tabId &&
        tab.dirty
    );

  const canClose = (tabId: string) =>
    tabs.some(
      (tab) =>
        tab.id === tabId &&
        tab.closable
    );

  /* ======================================================
   * NAVIGATION
   * ==================================================== */

  const nextTab = () => {
    if (tabs.length <= 1) return;

    const currentIndex = tabs.findIndex(
      (tab) => tab.id === activeTabId
    );

    const nextIndex =
      (currentIndex + 1) % tabs.length;

    setActiveTab(tabs[nextIndex].id);
  };

  const previousTab = () => {
    if (tabs.length <= 1) return;

    const currentIndex = tabs.findIndex(
      (tab) => tab.id === activeTabId
    );

    const previousIndex =
      currentIndex === 0
        ? tabs.length - 1
        : currentIndex - 1;

    setActiveTab(tabs[previousIndex].id);
  };

  /* ======================================================
   * CLOSE HELPERS
   * ==================================================== */

  const closeActiveTab = () => {
    if (!activeTab) return;

    if (!activeTab.closable) return;

    closeTab(activeTab.id);
  };

  const closeAllTabs = () => {
    tabs.forEach((tab) => {
      if (tab.closable) {
        closeTab(tab.id);
      }
    });
  };

  const closeOtherTabs = () => {
    tabs.forEach((tab) => {
      if (
        tab.id !== activeTabId &&
        tab.closable
      ) {
        closeTab(tab.id);
      }
    });
  };

  /* ======================================================
   * RETURN
   * ==================================================== */

  return {
    tabs,

    activeTab,

    activeTabId,

    tabCount,

    pinnedTabs,

    normalTabs,

    dirtyTabs,

    previewTab,

    openTab,

    closeTab,

    setActiveTab,

    nextTab,

    previousTab,

    closeActiveTab,

    closeAllTabs,

    closeOtherTabs,

    isActive,

    isPinned,

    isPreview,

    isDirty,

    canClose,
  };
}