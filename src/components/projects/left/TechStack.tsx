"use client";

import { AnimatePresence, motion } from "framer-motion";

import { useProjects } from "../hooks/useProjects";
import { TechBadge } from "./TechBadge";

export function TechStack() {
  const { activeProject } = useProjects();

  return (
    <div className="space-y-4">
      {/* Section Title */}
      <h3
        className="
          text-xs
          font-semibold
          uppercase
          tracking-[0.25em]
          text-zinc-500
        "
      >
        Tech Stack
      </h3>

      {/* Technologies */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProject.id}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.25,
          }}
          className="
            flex
            flex-wrap
            gap-3
          "
        >
          {activeProject.techStack.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{
                opacity: 0,
                y: 12,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
              }}
            >
              <TechBadge tech={tech} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default TechStack;