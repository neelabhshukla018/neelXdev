"use client";

import { motion } from "framer-motion";

import { WindowHeader } from "./WindowHeader";
import { WindowBody } from "./WindowBody";

export function ProjectWindow() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="
        relative
        w-full
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-zinc-900/90
        shadow-[0_30px_80px_rgba(0,0,0,0.45)]
        backdrop-blur-xl
      "
    >
      <WindowHeader />

      <WindowBody />
    </motion.div>
  );
}

export default ProjectWindow;