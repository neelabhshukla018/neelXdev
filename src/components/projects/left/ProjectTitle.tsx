"use client";

import { motion } from "framer-motion";

import { useProjects } from "../hooks/useProjects";

export function ProjectTitle() {
  const { activeProject } = useProjects();

  return (
    <div className="space-y-4">
      {/* Project Badge */}
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="
          inline-flex
          items-center
          rounded-full
          border
          border-blue-500/20
          bg-blue-500/10
          px-3
          py-1
          text-xs
          font-medium
          uppercase
          tracking-[0.25em]
          text-blue-400
        "
      >
        Featured Project
      </motion.span>

      {/* Project Name */}
      <motion.h2
        key={activeProject.title}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="
          text-3xl
          font-bold
          leading-tight
          text-white
          sm:text-4xl
          lg:text-5xl
        "
      >
        {activeProject.title}
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        key={activeProject.subtitle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="
          max-w-xl
          text-base
          font-medium
          text-zinc-400
          sm:text-lg
        "
      >
        {activeProject.subtitle}
      </motion.p>
    </div>
  );
}

export default ProjectTitle;