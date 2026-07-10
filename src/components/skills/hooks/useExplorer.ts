// src/components/skills/hooks/useExplorer.ts

"use client";

import { useMemo } from "react";

import { useSkills } from "../context/SkillsContext";
import { searchSkills } from "../data/skills";
import { Skill } from "../types/skill";

export function useExplorer() {
  const {
    search,
    expandedFolders,
    toggleFolder,
    openTab,
    selectedSkill,
    skills,
  } = useSkills();

  /* ======================================================
   * FILTERED SKILLS
   * ==================================================== */

  const filteredSkills: Skill[] = useMemo(() => {
    if (!search.trim()) {
      return skills;
    }

    return searchSkills(search);
  }, [search, skills]);

  /* ======================================================
   * GROUP BY CATEGORY
   * ==================================================== */

  const groupedSkills = useMemo(() => {
    return {
      frontend: filteredSkills.filter(
        (skill) => skill.category === "frontend"
      ),

      backend: filteredSkills.filter(
        (skill) => skill.category === "backend"
      ),

      database: filteredSkills.filter(
        (skill) => skill.category === "database"
      ),

      deployment: filteredSkills.filter(
        (skill) => skill.category === "deployment"
      ),

      api: filteredSkills.filter(
        (skill) => skill.category === "api"
      ),

      ui: filteredSkills.filter(
        (skill) => skill.category === "ui"
      ),

      ai: filteredSkills.filter(
        (skill) => skill.category === "ai"
      ),
    };
  }, [filteredSkills]);

  /* ======================================================
   * HELPERS
   * ==================================================== */

  const isExpanded = (folder: string) =>
    expandedFolders.includes(folder);

  const isSelected = (skillId: string) =>
    selectedSkill?.id === skillId;

  return {
    search,

    filteredSkills,

    groupedSkills,

    expandedFolders,

    toggleFolder,

    openTab,

    isExpanded,

    isSelected,
  };
}