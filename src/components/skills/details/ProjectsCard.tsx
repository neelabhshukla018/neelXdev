// src/components/skills/details/ProjectsCard.tsx

"use client";

/**
 * ==========================================================
 * PROJECTS CARD
 * ==========================================================
 * Displays projects built using the selected skill.
 */

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  FolderGit2,
} from "lucide-react";

import { useEditor } from "../hooks/useEditor";

export default function ProjectsCard() {
  const { selectedSkill } = useEditor();

  if (!selectedSkill) return null;

  return (
    <section className="rounded-xl border border-[#2B2B2B] bg-[#1E1E1E] p-6">
      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">
            Projects
          </h3>

          <p className="mt-1 text-sm text-[#8F8F8F]">
            Applications built using {selectedSkill.name}
          </p>
        </div>

        <div
          className="flex h-11 w-11 items-center justify-center rounded-lg"
          style={{
            backgroundColor: `${selectedSkill.color}20`,
          }}
        >
          <FolderGit2
            size={20}
            color={selectedSkill.color}
          />
        </div>
      </div>

      {/* =====================================================
          PROJECT LIST
      ====================================================== */}

      <div className="space-y-4">
        {selectedSkill.projects.map(
          (project, index) => (
            <motion.div
              key={project.id}
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                y: -2,
              }}
              className="rounded-xl border border-[#303030] bg-[#252526] p-4 transition-colors hover:border-[#454545]"
            >
              <div className="flex items-start justify-between">
                {/* Left */}

                <div className="flex items-start gap-4">
                  <div
                    className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{
                      backgroundColor: `${selectedSkill.color}20`,
                    }}
                  >
                    <Briefcase
                      size={18}
                      color={selectedSkill.color}
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold text-white">
                      {project.name}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-[#B7B7B7]">
                      Built using{" "}
                      <span
                        style={{
                          color: selectedSkill.color,
                        }}
                        className="font-medium"
                      >
                        {selectedSkill.name}
                      </span>{" "}
                      as one of the core technologies.
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="rounded bg-[#2E2E2E] px-2 py-1 text-[11px] text-[#CFCFCF]">
                        {selectedSkill.category}
                      </span>

                      <span className="rounded bg-[#2E2E2E] px-2 py-1 text-[11px] text-[#CFCFCF]">
                        {selectedSkill.level}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right */}

                <button className="rounded-lg p-2 text-[#8F8F8F] transition hover:bg-[#333333] hover:text-white">
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </motion.div>
          )
        )}
      </div>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <div className="mt-6 rounded-xl border border-[#303030] bg-[#252526] p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-[#A0A0A0]">
            Total Projects
          </span>

          <span
            className="text-2xl font-bold"
            style={{
              color: selectedSkill.color,
            }}
          >
            {selectedSkill.projects.length}
          </span>
        </div>
      </div>
    </section>
  );
}