"use client";

import { useMemo } from "react";

import { useProjectContext } from "../context/ProjectContext";

export function useProjects() {
  const {
    projects,
    activeProject,
    activeIndex,
    setActiveProject,
    nextProject,
    previousProject,
    isFirst,
    isLast,
  } = useProjectContext();

  const totalProjects = useMemo(
    () => projects.length,
    [projects]
  );

  const hasMultipleProjects = totalProjects > 1;

  return {
    // Data
    projects,
    activeProject,
    activeIndex,
    totalProjects,

    // Navigation
    setActiveProject,
    nextProject,
    previousProject,

    // State
    isFirst,
    isLast,
    hasMultipleProjects,
  };
}

export default useProjects;