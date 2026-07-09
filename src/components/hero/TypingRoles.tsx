"use client";

import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function TypingRoles() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.6,
        duration: 0.6,
      }}
      className="
        mt-6
        flex
        items-start
        gap-3

        sm:mt-8
        sm:items-center
      "
    >
      {/* Prompt */}

      <span
        className="
          text-base
          font-semibold
          text-blue-500

          sm:text-lg
        "
      >
        &gt;
      </span>

      {/* Typewriter */}

      <h3
        className="
          min-h-[52px]

          text-lg
          font-semibold
          leading-relaxed
          text-muted-foreground

          sm:min-h-[32px]
          sm:text-2xl
        "
      >
        <Typewriter
          words={[
            "Full Stack Developer",
            "Frontend Intern @ IITianCrafts",
            "AI-Powered Web Developer",
            "Next.js • React • TypeScript",
            "Node.js • Express • Prisma",
            "PostgreSQL • MongoDB",
            "Open Source Contributor",
            "Building naXity & Smile12",
            "DSA Enthusiast • Java",
          ]}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={80}
          deleteSpeed={40}
          delaySpeed={1800}
        />
      </h3>
    </motion.div>
  );
}