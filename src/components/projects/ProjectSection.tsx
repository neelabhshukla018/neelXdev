"use client";

import { motion } from "framer-motion";

import { ProjectProvider } from "./context/ProjectContext";
import { ProjectWindow } from "./window/ProjectWindow";

export function ProjectSection() {
  return (
    <ProjectProvider>
      <section
        id="projects"
        className="
          relative
          w-full
          overflow-hidden
          py-24
          sm:py-28
          lg:py-32
        "
      >
        {/* Background Glow */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[700px]
            w-[700px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-500/10
            blur-[160px]
          "
        />

        <div
          className="
            relative
            mx-auto
            w-full
            max-w-7xl
            px-5
            sm:px-6
            lg:px-8
          "
        >
          {/* Section Header */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.6,
            }}
            className="mb-14 text-center"
          >
            <span
              className="
                inline-flex
                rounded-full
                border
                border-blue-500/20
                bg-blue-500/10
                px-4
                py-1.5
                text-xs
                font-semibold
                uppercase
                tracking-[0.25em]
                text-blue-400
              "
            >
              Portfolio
            </span>

            <h2
              className="
                mt-6
                text-4xl
                font-bold
                tracking-tight
                text-white
                sm:text-5xl
                lg:text-6xl
              "
            >
              Featured Projects
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-3xl
                text-base
                leading-8
                text-zinc-400
                sm:text-lg
              "
            >
              A collection of full-stack applications, developer tools,
              and real-world products focused on creating modern,
              scalable, and engaging digital experiences.
            </p>
          </motion.div>

          {/* macOS Project Window */}
          <ProjectWindow />
        </div>
      </section>
    </ProjectProvider>
  );
}

export default ProjectSection;