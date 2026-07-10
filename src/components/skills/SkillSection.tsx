// src/components/skills/SkillSection.tsx

"use client";

/**
 * ==========================================================
 * SKILL SECTION
 * ==========================================================
 * Main entry component for Developer Skills VS Code UI.
 */

import { motion } from "framer-motion";

import {
  SkillsProvider,
} from "./context/SkillsContext";

import VSCodeWindow from "./layout/VSCodeWindow";

import {
  fadeUp,
} from "./animations/fade";


export default function SkillSection() {
  return (
    <section
      id="skills"
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[#0D1117]
        py-12
sm:py-16
lg:py-20
      "
    >

      {/* ==================================================
          BACKGROUND GRID
      =================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-20
          [background-image:linear-gradient(#ffffff08_1px,transparent_1px),linear-gradient(90deg,#ffffff08_1px,transparent_1px)]
          [background-size:40px_40px]
        "
      />


      {/* ==================================================
          CONTENT
      =================================================== */}

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once:true,
          amount:0.2,
        }}
        className="
          relative
          mx-auto
          flex
          w-full
          max-w-[1600px]
          flex-col
          gap-5
sm:gap-6
lg:gap-8
          px-3
sm:px-5
lg:px-8
        "
      >


{/* ================================================
    SECTION HEADER
================================================= */}

<div
  className="
    flex
    flex-col
    items-center
    justify-center
    gap-3
    text-center
  "
>

  <p
    className="
      font-mono
      text-sm
      text-[#007ACC]
    "
  >
    ~/portfolio/skills
  </p>


  <h2
    className="
      text-2xl
      font-bold
      text-white
      sm:text-3xl
      md:text-5xl
    "
  >
    Developer Skills
  </h2>


  <p
    className="
      max-w-full
      text-sm
      leading-6
      text-[#9CA3AF]
      sm:max-w-2xl
      md:text-base
    "
  >
    Interactive VS Code inspired workspace
    showing technologies, experience,
    projects and technical expertise.
  </p>

</div>


        {/* =================================================
            MAIN IDE WINDOW
        ================================================== */}

        <SkillsProvider>

          <VSCodeWindow />

        </SkillsProvider>


      </motion.div>


      {/* ==================================================
          GLOW EFFECTS
      =================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
         h-[300px]
w-[300px]
sm:h-[400px]
sm:w-[400px]
lg:h-[500px]
lg:w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-500/10
          blur-[120px]
        "
      />

    </section>
  );
}