"use client";

import { motion } from "framer-motion";

import { GithubButton } from "./GithubButton";
import { LiveDemoButton } from "./LiveDemoButton";

export function ActionButtons() {
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
        delay: 0.1,
      }}
      className="
        grid
        grid-cols-1
        gap-4
        sm:grid-cols-2
      "
    >
      <GithubButton />

      <LiveDemoButton />
    </motion.div>
  );
}

export default ActionButtons;