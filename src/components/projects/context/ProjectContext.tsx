"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import projects from "../data/projects";
import { Project } from "../types/project";

interface ProjectContextValue {
  projects: Project[];

  activeProject: Project;

  activeIndex: number;

  setActiveProject: (id: string) => void;

  nextProject: () => void;

  previousProject: () => void;

  isFirst: boolean;

  isLast: boolean;
}

const ProjectContext = createContext<ProjectContextValue | null>(null);

interface ProjectProviderProps {
  children: ReactNode;
}

export function ProjectProvider({
  children,
}: ProjectProviderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const setActiveProject = useCallback((id: string) => {
    const index = projects.findIndex((project) => project.id === id);

    if (index !== -1) {
      setActiveIndex(index);
    }
  }, []);

  const nextProject = useCallback(() => {
    setActiveIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  }, []);

  const previousProject = useCallback(() => {
    setActiveIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  }, []);

  const value = useMemo<ProjectContextValue>(
    () => ({
      projects,

      activeProject: projects[activeIndex],

      activeIndex,

      setActiveProject,

      nextProject,

      previousProject,

      isFirst: activeIndex === 0,

      isLast: activeIndex === projects.length - 1,
    }),
    [
      activeIndex,
      nextProject,
      previousProject,
      setActiveProject,
    ]
  );

  return (
    <ProjectContext.Provider value={value}>
      {children}
    </ProjectContext.Provider>
  );
}

export function useProjectContext() {
  const context = useContext(ProjectContext);

  if (!context) {
    throw new Error(
      "useProjectContext must be used inside ProjectProvider."
    );
  }

  return context;
}