"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Rocket } from "lucide-react";

import { useProjects } from "../hooks/useProjects";

export function LiveDemoButton() {
  const { activeProject } = useProjects();

  return (
    <motion.div
      whileHover={{
        y: -3,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className="w-full"
    >
      <Link
        href={activeProject.links.demo}
        target="_blank"
        rel="noopener noreferrer"
        className="
          group
          relative
          flex
          h-14
          w-full
          items-center
          justify-center
          gap-3
          overflow-hidden
          rounded-xl
          bg-gradient-to-r
          from-cyan-300
          via-cyan-300
          to-cyan-400
          font-medium
          text-black
          shadow-lg
          shadow-black-500/20
          transition-all
          duration-300
          hover:shadow-black-500/40
        "
      >
        {/* Hover Glow */}
        <div
          className="
            absolute
            inset-0
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
            bg-gradient-to-r
            from-white/10
            via-white/20
            to-white/10
          "
        />

        <Rocket
          size={20}
          className="
            relative
            z-10
            transition-transform
            duration-300
            group-hover:-translate-y-0.5
            group-hover:rotate-12
          "
        />

        <span className="relative z-10">
          Live Demo
        </span>

        <ArrowUpRight
          size={18}
          className="
            relative
            z-10
            transition-transform
            duration-300
            group-hover:translate-x-1
            group-hover:-translate-y-1
          "
        />
      </Link>
    </motion.div>
  );
}

export default LiveDemoButton;