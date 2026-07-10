// src/components/skills/visualization/SkillProgress.tsx

"use client";

/**
 * ==========================================================
 * SKILL PROGRESS
 * ==========================================================
 * Animated progress dashboard for the selected skill.
 */

import { motion } from "framer-motion";
import {
  Award,
  Brain,
  Briefcase,
  Gauge,
  TrendingUp,
} from "lucide-react";

import { useEditor } from "../hooks/useEditor";

export default function SkillProgress() {
  const { selectedSkill } = useEditor();

  if (!selectedSkill) return null;

  const metrics = [
    {
      title: "Proficiency",
      value: selectedSkill.metrics.proficiency,
      icon: Gauge,
    },
    {
      title: "Confidence",
      value: selectedSkill.metrics.confidence,
      icon: Brain,
    },
    {
      title: "Experience",
      value: selectedSkill.metrics.experience,
      icon: Award,
    },
    {
      title: "Problem Solving",
      value: selectedSkill.metrics.problemSolving,
      icon: TrendingUp,
    },
    {
      title: "Real World Usage",
      value: selectedSkill.metrics.realWorldUsage,
      icon: Briefcase,
    },
  ];

  return (
    <div className="rounded-xl border border-[#2B2B2B] bg-[#1E1E1E] p-6">
      {/* ==========================================
          HEADER
      ========================================== */}

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white">
          Skill Progress
        </h3>

        <p className="mt-1 text-sm text-[#8A8A8A]">
          Performance breakdown
        </p>
      </div>

      {/* ==========================================
          PROGRESS LIST
      ========================================== */}

      <div className="space-y-5">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;

          return (
            <motion.div
              key={metric.title}
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
            >
              {/* Label */}

              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-lg"
                    style={{
                      background: `${selectedSkill.color}20`,
                    }}
                  >
                    <Icon
                      size={18}
                      color={selectedSkill.color}
                    />
                  </div>

                  <span className="text-sm font-medium text-[#D6D6D6]">
                    {metric.title}
                  </span>
                </div>

                <span className="font-semibold text-white">
                  {metric.value}%
                </span>
              </div>

              {/* Progress */}

              <div className="relative h-3 overflow-hidden rounded-full bg-[#2A2A2A]">
                <motion.div
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: `${metric.value}%`,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.08,
                  }}
                  className="h-full rounded-full"
                  style={{
                    background: selectedSkill.color,
                  }}
                />

                <motion.div
                  initial={{
                    x: "-100%",
                  }}
                  animate={{
                    x: "300%",
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.5,
                    ease: "linear",
                  }}
                  className="absolute inset-y-0 w-16 bg-white/20 blur-md"
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ==========================================
          SUMMARY
      ========================================== */}

      <div className="mt-8 grid grid-cols-2 gap-4">
        <SummaryCard
          title="Projects"
          value={selectedSkill.stats.projects.toString()}
        />

        <SummaryCard
          title="Commits"
          value={selectedSkill.stats.commits.toLocaleString()}
        />

        <SummaryCard
          title="Repositories"
          value={selectedSkill.stats.repositories.toString()}
        />

        <SummaryCard
          title="Years"
          value={`${selectedSkill.experience.years}+`}
        />
      </div>
    </div>
  );
}

/* ==========================================================
   SUMMARY CARD
========================================================== */

interface SummaryCardProps {
  title: string;
  value: string;
}

function SummaryCard({
  title,
  value,
}: SummaryCardProps) {
  return (
    <div className="rounded-lg border border-[#303030] bg-[#252526] p-4">
      <p className="text-xs uppercase tracking-wide text-[#8A8A8A]">
        {title}
      </p>

      <p className="mt-2 text-2xl font-bold text-white">
        {value}
      </p>
    </div>
  );
}