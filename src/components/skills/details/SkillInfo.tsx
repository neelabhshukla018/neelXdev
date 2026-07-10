// src/components/skills/details/SkillInfo.tsx

"use client";

/**
 * ==========================================================
 * SKILL INFO
 * ==========================================================
 * Main details panel for the selected skill.
 */

import { motion } from "framer-motion";
import { Info } from "lucide-react";

import { useEditor } from "../hooks/useEditor";

import SkillStats from "./SkillStats";
import ExperienceCard from "./ExperienceCard";
import ProjectsCard from "./ProjectsCard";
import Technologies from "./Technologies";

export default function SkillInfo() {
  const { selectedSkill } = useEditor();

  if (!selectedSkill) {
    return (
      <div className="flex h-full items-center justify-center rounded-xl border border-[#2B2B2B] bg-[#1E1E1E]">
        <div className="text-center">
          <Info
            size={34}
            className="mx-auto mb-4 text-[#6B6B6B]"
          />

          <h3 className="text-lg font-semibold text-white">
            No Skill Selected
          </h3>

          <p className="mt-2 text-sm text-[#8F8F8F]">
            Select a skill from the Explorer or Skill Graph
            to view detailed information.
          </p>
        </div>
      </div>
    );
  }

  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.35,
      }}
      className="space-y-6"
    >
      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="rounded-xl border border-[#2B2B2B] bg-[#1E1E1E] p-6">
        <div className="flex items-start gap-5">
          {/* Skill Icon */}

          <div
            className="flex h-20 w-20 items-center justify-center rounded-2xl border"
            style={{
              backgroundColor: `${selectedSkill.color}20`,
              borderColor: `${selectedSkill.color}70`,
            }}
          >
            <selectedSkill.icon
              size={38}
              color={selectedSkill.color}
            />
          </div>

          {/* Details */}

          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-2xl font-bold text-white">
                {selectedSkill.name}
              </h2>

              <span
                className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide"
                style={{
                  backgroundColor: `${selectedSkill.color}20`,
                  color: selectedSkill.color,
                }}
              >
                {selectedSkill.level}
              </span>

              <span className="rounded-full border border-[#363636] bg-[#252526] px-3 py-1 text-xs uppercase text-[#B5B5B5]">
                {selectedSkill.status}
              </span>
            </div>

            <p className="mt-4 max-w-4xl leading-7 text-[#C8C8C8]">
              {selectedSkill.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-md bg-[#252526] px-3 py-1 text-xs text-[#CFCFCF]">
                {selectedSkill.category}
              </span>

              <span className="rounded-md bg-[#252526] px-3 py-1 text-xs text-[#CFCFCF]">
                {selectedSkill.experience.years} Years Experience
              </span>

              <span className="rounded-md bg-[#252526] px-3 py-1 text-xs text-[#CFCFCF]">
                {selectedSkill.stats.projects} Projects
              </span>

              <span className="rounded-md bg-[#252526] px-3 py-1 text-xs text-[#CFCFCF]">
                {selectedSkill.metrics.proficiency}% Proficiency
              </span>

              {selectedSkill.featured && (
                <span className="rounded-md bg-yellow-500/20 px-3 py-1 text-xs font-medium text-yellow-400">
                  Featured
                </span>
              )}

              {selectedSkill.favorite && (
                <span className="rounded-md bg-pink-500/20 px-3 py-1 text-xs font-medium text-pink-400">
                  Favorite
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          GRID
      ====================================================== */}

      <div className="grid gap-6 xl:grid-cols-2">
        {/* Left */}

        <div className="space-y-6">
          <SkillStats />

          <ExperienceCard />
        </div>

        {/* Right */}

        <div className="space-y-6">
          <ProjectsCard />

          <Technologies />
        </div>
      </div>
    </motion.section>
  );
}