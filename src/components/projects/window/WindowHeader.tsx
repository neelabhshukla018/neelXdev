"use client";

import { motion } from "framer-motion";

import { useProjects } from "../hooks/useProjects";

export function WindowHeader() {
  const { activeProject } = useProjects();

  return (
    <header
      className="
        flex
        items-center
        justify-between
        border-b
        border-white/10
        bg-zinc-950/90
        px-5
        py-3
      "
    >
      {/* macOS Controls */}
      <div className="flex items-center gap-2">
        <motion.span
          whileHover={{ scale: 1.15 }}
          className="h-3 w-3 rounded-full bg-[#ff5f57]"
        />

        <motion.span
          whileHover={{ scale: 1.15 }}
          className="h-3 w-3 rounded-full bg-[#febc2e]"
        />

        <motion.span
          whileHover={{ scale: 1.15 }}
          className="h-3 w-3 rounded-full bg-[#28c840]"
        />
      </div>

      {/* Window Title */}
      <motion.div
        key={activeProject.id}
        initial={{
          opacity: 0,
          y: -8,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.25,
        }}
        className="
          absolute
          left-1/2
          -translate-x-1/2
          select-none
          text-sm
          font-medium
          tracking-wide
          text-zinc-300
        "
      >
        {activeProject.title}.app
      </motion.div>

      {/* Right Spacer */}
      <div className="w-14" />
    </header>
  );
}

export default WindowHeader;