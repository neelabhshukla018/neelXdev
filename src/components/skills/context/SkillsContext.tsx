// src/components/skills/context/SkillsContext.tsx

"use client";

/**
 * ==========================================================
 * SKILLS CONTEXT
 * ==========================================================
 * Global state manager for the VS Code Skills section.
 */

import {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
} from "react";

import { DEFAULT_ACTIVE_TAB } from "../constants/tabs";
import { VSCODE } from "../constants/vscode";

import { skills, getSkill } from "../data/skills";

import {
  EditorTab,
  BreadcrumbItem,
} from "../types/editor";

import { Skill } from "../types/skill";

/* ==========================================================
 * CONTEXT TYPE
 * ==========================================================
 */

interface SkillsContextValue {
  /* ----------------------------------------
   * Data
   * -------------------------------------- */

  skills: Skill[];

  selectedSkill: Skill | null;

  /* ----------------------------------------
   * Explorer
   * -------------------------------------- */

  expandedFolders: string[];

  toggleFolder: (folder: string) => void;

  /* ----------------------------------------
   * Tabs
   * -------------------------------------- */

  tabs: EditorTab[];

  activeTabId: string;

  openTab: (skillId: string) => void;

  closeTab: (tabId: string) => void;

  setActiveTab: (tabId: string) => void;

  /* ----------------------------------------
   * Search
   * -------------------------------------- */

  search: string;

  setSearch: (value: string) => void;

  /* ----------------------------------------
   * Layout
   * -------------------------------------- */

  terminalOpen: boolean;

  explorerOpen: boolean;

  rightSidebarOpen: boolean;

  minimapVisible: boolean;

  toggleTerminal: () => void;

  toggleExplorer: () => void;

  toggleSidebar: () => void;

  toggleMinimap: () => void;

  /* ----------------------------------------
   * Breadcrumb
   * -------------------------------------- */

  breadcrumbs: BreadcrumbItem[];
}

/* ==========================================================
 * CONTEXT
 * ==========================================================
 */

const SkillsContext =
  createContext<SkillsContextValue | null>(null);

/* ==========================================================
 * PROVIDER
 * ==========================================================
 */

interface ProviderProps {
  children: ReactNode;
}

export function SkillsProvider({
  children,
}: ProviderProps) {
  /* ======================================================
   * SEARCH
   * ==================================================== */

  const [search, setSearch] = useState("");

  /* ======================================================
   * LAYOUT
   * ==================================================== */

  const [terminalOpen, setTerminalOpen] =
    useState(true);

  const [explorerOpen, setExplorerOpen] =
    useState(true);

  const [rightSidebarOpen, setRightSidebarOpen] =
    useState(true);

  const [minimapVisible, setMinimapVisible] =
    useState(VSCODE.SHOW_MINIMAP);

  /* ======================================================
   * EXPLORER
   * ==================================================== */

  const [expandedFolders, setExpandedFolders] =
    useState<string[]>([
      "skills",
      "frontend",
    ]);

  /* ======================================================
   * TABS
   * ==================================================== */

  const defaultSkill =
    getSkill(DEFAULT_ACTIVE_TAB) ?? skills[0];

  const [tabs, setTabs] = useState<EditorTab[]>([
    {
      id: defaultSkill.id,
      skillId: defaultSkill.id,
      title: defaultSkill.name,
      fileName: `${defaultSkill.name}.ts`,
      extension: defaultSkill.extension,
      icon: defaultSkill.icon,
      active: true,
      dirty: false,
      pinned: true,
      preview: false,
      closable: false,
    },
  ]);

  const [activeTabId, setActiveTabId] =
    useState(defaultSkill.id);

  /* ======================================================
   * SELECTED SKILL
   * ==================================================== */

  const selectedSkill =
    getSkill(activeTabId) ?? null;

  /* ======================================================
   * BREADCRUMB
   * ==================================================== */

  const breadcrumbs: BreadcrumbItem[] = useMemo(() => {
    if (!selectedSkill) return [];

    return [
      {
        id: "portfolio",
        label: "portfolio",
        path: "/",
        clickable: false,
      },
      {
        id: "skills",
        label: "skills",
        path: "/skills",
        clickable: false,
      },
      {
        id: selectedSkill.category,
        label: selectedSkill.category,
        path: "#",
        clickable: false,
      },
      {
        id: selectedSkill.id,
        label: `${selectedSkill.name}.ts`,
        path: "#",
        clickable: false,
      },
    ];
  }, [selectedSkill]);

  /* ======================================================
   * EXPLORER ACTIONS
   * ==================================================== */

  const toggleFolder = (folder: string) => {
    setExpandedFolders((prev) =>
      prev.includes(folder)
        ? prev.filter((f) => f !== folder)
        : [...prev, folder]
    );
  };

  /* ======================================================
   * TAB ACTIONS
   * ==================================================== */

  const openTab = (skillId: string) => {
    const skill = getSkill(skillId);

    if (!skill) return;

    const exists = tabs.find(
      (tab) => tab.skillId === skillId
    );

    if (exists) {
      setActiveTabId(exists.id);

      setTabs((prev) =>
        prev.map((tab) => ({
          ...tab,
          active: tab.id === exists.id,
        }))
      );

      return;
    }

    const newTab: EditorTab = {
      id: skill.id,
      skillId: skill.id,
      title: skill.name,
      fileName: `${skill.name}.ts`,
      extension: skill.extension,
      icon: skill.icon,
      active: true,
      dirty: false,
      pinned: false,
      preview: false,
      closable: true,
    };

    setTabs((prev) => [
      ...prev.map((tab) => ({
        ...tab,
        active: false,
      })),
      newTab,
    ]);

    setActiveTabId(skill.id);
  };

  const closeTab = (tabId: string) => {
    const closingIndex = tabs.findIndex(
      (tab) => tab.id === tabId
    );

    if (closingIndex === -1) return;

    const nextTabs = tabs.filter(
      (tab) => tab.id !== tabId
    );

    if (!nextTabs.length) return;

    setTabs(nextTabs);

    const nextActive =
      nextTabs[Math.max(0, closingIndex - 1)];

    setActiveTabId(nextActive.id);
  };

  const setActiveTab = (tabId: string) => {
    setActiveTabId(tabId);

    setTabs((prev) =>
      prev.map((tab) => ({
        ...tab,
        active: tab.id === tabId,
      }))
    );
  };

  /* ======================================================
   * LAYOUT ACTIONS
   * ==================================================== */

  const toggleTerminal = () =>
    setTerminalOpen((prev) => !prev);

  const toggleExplorer = () =>
    setExplorerOpen((prev) => !prev);

  const toggleSidebar = () =>
    setRightSidebarOpen((prev) => !prev);

  const toggleMinimap = () =>
    setMinimapVisible((prev) => !prev);

  /* ======================================================
   * VALUE
   * ==================================================== */

  const value: SkillsContextValue = {
    skills,

    selectedSkill,

    expandedFolders,

    toggleFolder,

    tabs,

    activeTabId,

    openTab,

    closeTab,

    setActiveTab,

    search,

    setSearch,

    terminalOpen,

    explorerOpen,

    rightSidebarOpen,

    minimapVisible,

    toggleTerminal,

    toggleExplorer,

    toggleSidebar,

    toggleMinimap,

    breadcrumbs,
  };

  return (
    <SkillsContext.Provider value={value}>
      {children}
    </SkillsContext.Provider>
  );
}

/* ==========================================================
 * HOOK
 * ==========================================================
 */

export function useSkills() {
  const context = useContext(SkillsContext);

  if (!context) {
    throw new Error(
      "useSkills must be used inside SkillsProvider."
    );
  }

  return context;
}