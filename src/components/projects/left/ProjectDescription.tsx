"use client";

import { motion } from "framer-motion";

import { useProjects } from "../hooks/useProjects";

export function ProjectDescription() {
  const { activeProject } = useProjects();

  return (
    <motion.div
      key={activeProject.id}
      initial={{
        opacity: 0,
        y: 12,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.35,
        delay: 0.1,
      }}
      className="space-y-3"
    >
      <h3
        className="
          text-xs
          font-semibold
          uppercase
          tracking-[0.25em]
          text-zinc-500
        "
      >
        Overview
      </h3>

      <p
        className="
          max-w-2xl
          text-base
          leading-8
          text-zinc-300
          sm:text-lg
        "
      >
        {activeProject.description}
      </p>
    </motion.div>
  );
}

export default ProjectDescription;