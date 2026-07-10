// src/components/skills/visualization/SkillTimeline.tsx

"use client";

/**
 * ==========================================================
 * SKILL TIMELINE
 * ==========================================================
 * Professional timeline showing the learning journey
 * of the currently selected skill.
 */

import { motion } from "framer-motion";
import {
  CalendarDays,
  Rocket,
  Star,
  Trophy,
  BriefcaseBusiness,
  CheckCircle2,
} from "lucide-react";

import { useEditor } from "../hooks/useEditor";

export default function SkillTimeline() {
  const { selectedSkill } = useEditor();

  if (!selectedSkill) return null;

  const currentYear = new Date().getFullYear();

  const startYear = Number(
    selectedSkill.experience.startedAt
  );

  const timeline = [
    {
      title: "Started Learning",
      description: `Started learning ${selectedSkill.name}.`,
      year: startYear,
      icon: CalendarDays,
    },

    {
      title: "First Project",
      description:
        "Built the first real-world project using this technology.",
      year: startYear,
      icon: Rocket,
    },

    {
      title: "Production Usage",
      description:
        "Used this technology in production-level applications.",
      year: startYear + 1,
      icon: BriefcaseBusiness,
    },

    {
      title: "Advanced Concepts",
      description:
        "Mastered advanced patterns and architecture.",
      year:
        startYear +
        Math.max(
          1,
          Math.floor(
            selectedSkill.experience.years / 2
          )
        ),
      icon: Trophy,
    },

    {
      title: "Current Level",
      description: `${selectedSkill.level} • ${selectedSkill.status}`,
      year: currentYear,
      icon: Star,
    },
  ];

  return (
    <div className="rounded-xl border border-[#2B2B2B] bg-[#1E1E1E] p-6">
      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white">
          Learning Journey
        </h3>

        <p className="mt-2 text-sm text-[#909090]">
          Timeline of my experience with{" "}
          <span
            style={{
              color: selectedSkill.color,
            }}
            className="font-medium"
          >
            {selectedSkill.name}
          </span>
        </p>
      </div>

      {/* =====================================================
          TIMELINE
      ====================================================== */}

      <div className="relative">
        {/* Vertical Line */}

        <div className="absolute left-6 top-0 h-full w-[2px] bg-[#343434]" />

        <div className="space-y-8">
          {timeline.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                className="relative flex gap-6"
              >
                {/* =====================================
                    ICON
                ====================================== */}

                <div
                  className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2"
                  style={{
                    borderColor:
                      selectedSkill.color,
                    background:
                      "#252526",
                  }}
                >
                  <Icon
                    size={18}
                    color={selectedSkill.color}
                  />
                </div>

                {/* =====================================
                    CONTENT
                ====================================== */}

                <div className="flex-1 rounded-xl border border-[#303030] bg-[#252526] p-5">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-white">
                      {item.title}
                    </h4>

                    <span
                      className="rounded-full px-3 py-1 text-xs font-semibold"
                      style={{
                        background:
                          `${selectedSkill.color}20`,
                        color:
                          selectedSkill.color,
                      }}
                    >
                      {item.year}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-7 text-[#BDBDBD]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.45,
        }}
        className="mt-10 rounded-xl border border-[#303030] bg-[#252526] p-5"
      >
        <div className="flex items-center gap-3">
          <CheckCircle2
            size={22}
            color={selectedSkill.color}
          />

          <div>
            <h4 className="font-semibold text-white">
              Current Status
            </h4>

            <p className="mt-1 text-sm text-[#A5A5A5]">
              {selectedSkill.name} has been one of my
              core technologies for{" "}
              <span
                style={{
                  color: selectedSkill.color,
                }}
                className="font-semibold"
              >
                {selectedSkill.experience.years} years
              </span>
              , contributing to{" "}
              <span
                style={{
                  color: selectedSkill.color,
                }}
                className="font-semibold"
              >
                {selectedSkill.stats.projects}
              </span>{" "}
              projects with a{" "}
              <span
                style={{
                  color: selectedSkill.color,
                }}
                className="font-semibold"
              >
                {selectedSkill.metrics.proficiency}%
              </span>{" "}
              proficiency level.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}