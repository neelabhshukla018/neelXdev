"use client";

import { motion } from "framer-motion";

export default function TypingName() {
  return (
    <div className="space-y-3">
      {/* Intro */}

      <motion.h2
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="
          text-xl
          font-medium
          text-muted-foreground

          sm:text-2xl
          md:text-3xl
        "
      >
        I'm
      </motion.h2>

      {/* Name */}

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.6 }}
        className="
          font-black
          leading-none
          tracking-tight

          text-[52px]

          xs:text-[58px]

          sm:text-6xl

          lg:text-7xl

          xl:text-7xl
        "
      >
        <span className="gradient-text">
          ℕ𝕖𝕖𝕝𝕒𝕓𝕙
        </span>

        <br />

        <span className="text-foreground">
          𝕊𝕙𝕦𝕜𝕝𝕒
        </span>

        <span className="ml-2 inline-block animate-blink text-blue-500">
          |
        </span>
      </motion.h1>
    </div>
  );
}