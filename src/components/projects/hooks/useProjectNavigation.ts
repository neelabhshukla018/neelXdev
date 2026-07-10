"use client";

import { useCallback, useEffect } from "react";

import { useProjects } from "./useProjects";

interface UseProjectNavigationOptions {
  keyboard?: boolean;
}

export function useProjectNavigation(
  options: UseProjectNavigationOptions = {}
) {
  const { keyboard = true } = options;

  const {
    activeIndex,
    totalProjects,
    nextProject,
    previousProject,
    setActiveProject,
    isFirst,
    isLast,
  } = useProjects();

  const goTo = useCallback(
    (index: number) => {
      if (index < 0 || index >= totalProjects) return;

      const id = useProjects().projects[index].id;
      setActiveProject(id);
    },
    [setActiveProject, totalProjects]
  );

  const goToFirst = useCallback(() => {
    if (!isFirst) {
      goTo(0);
    }
  }, [goTo, isFirst]);

  const goToLast = useCallback(() => {
    if (!isLast) {
      goTo(totalProjects - 1);
    }
  }, [goTo, isLast, totalProjects]);

  useEffect(() => {
    if (!keyboard) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowRight":
          nextProject();
          break;

        case "ArrowLeft":
          previousProject();
          break;

        case "Home":
          goToFirst();
          break;

        case "End":
          goToLast();
          break;

        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    keyboard,
    nextProject,
    previousProject,
    goToFirst,
    goToLast,
  ]);

  return {
    activeIndex,
    totalProjects,

    nextProject,
    previousProject,

    goTo,
    goToFirst,
    goToLast,

    isFirst,
    isLast,
  };
}

export default useProjectNavigation;