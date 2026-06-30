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
      className="mt-8 flex items-center gap-3"
    >
      {/* Prompt */}
      <span className="text-lg font-semibold text-blue-500">
        &gt;
      </span>

      {/* Typewriter */}
      <h3
        className="
          min-h-[32px]
          text-xl
          font-semibold
          text-muted-foreground
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
  "Building naXity & smile12",
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