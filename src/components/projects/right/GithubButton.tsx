"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

import { useProjects } from "../hooks/useProjects";

export function GithubButton() {
  const { activeProject } = useProjects();

  return (
    <motion.div
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
      className="w-full"
    >
      <Link
        href={activeProject.links.github}
        target="_blank"
        rel="noopener noreferrer"
        className="
          group
          flex
          h-14
          w-full
          items-center
          justify-center
          gap-3
          rounded-xl
          border
          border-zinc-700
          bg-zinc-900
          text-zinc-200
          transition-all
          duration-300
          hover:border-white/20
          hover:bg-zinc-800
          hover:text-white
        "
      >
        <FaGithub
          className="
            text-xl
            transition-transform
            duration-300
            group-hover:rotate-12
          "
        />

        <span className="font-medium">
          GitHub Code
        </span>
      </Link>
    </motion.div>
  );
}

export default GithubButton;