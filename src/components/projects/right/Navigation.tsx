"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { useProjectNavigation } from "../hooks/useProjectNavigation";
import { useProjects } from "../hooks/useProjects";

export function Navigation() {
  const { activeIndex, totalProjects } = useProjects();

  const { previousProject, nextProject } = useProjectNavigation();

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.35,
        delay: 0.2,
      }}
      className="
        flex
        items-center
        justify-between
        rounded-2xl
        border
        border-white/10
        bg-white/[0.03]
        px-5
        py-4
        backdrop-blur-md
      "
    >
      {/* Previous */}
      <motion.button
        whileHover={{
          x: -4,
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={previousProject}
        className="
          flex
          items-center
          gap-2
          text-sm
          font-medium
          text-zinc-300
          transition-colors
          hover:text-white
        "
      >
        <ChevronLeft size={18} />

        Previous
      </motion.button>

      {/* Counter */}
      <div
        className="
          rounded-full
          border
          border-white/10
          bg-white/5
          px-4
          py-1.5
          text-xs
          font-medium
          tracking-wider
          text-zinc-400
        "
      >
        {String(activeIndex + 1).padStart(2, "0")}
        {" / "}
        {String(totalProjects).padStart(2, "0")}
      </div>

      {/* Next */}
      <motion.button
        whileHover={{
          x: 4,
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={nextProject}
        className="
          flex
          items-center
          gap-2
          text-sm
          font-medium
          text-zinc-300
          transition-colors
          hover:text-white
        "
      >
        Next

        <ChevronRight size={18} />
      </motion.button>
    </motion.div>
  );
}

export default Navigation;