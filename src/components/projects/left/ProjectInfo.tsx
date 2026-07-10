"use client";

import { AnimatePresence, motion } from "framer-motion";

import { useProjects } from "../hooks/useProjects";
import { ProjectDescription } from "./ProjectDescription";
import { ProjectTitle } from "./ProjectTitle";
import { TechStack } from "./TechStack";

export function ProjectInfo() {
  const { activeProject } = useProjects();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeProject.id}
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: -20,
        }}
        transition={{
          duration: 0.35,
        }}
        className="
          flex
          h-full
          flex-col
          justify-center
          gap-8
        "
      >
        {/* Project Title */}
        <ProjectTitle />

        {/* Description */}
        <ProjectDescription />

        {/* Tech Stack */}
        <TechStack />
      </motion.div>
    </AnimatePresence>
  );
}

export default ProjectInfo;