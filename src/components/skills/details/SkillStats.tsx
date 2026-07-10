// src/components/skills/details/SkillStats.tsx

"use client";

/**
 * ==========================================================
 * SKILL STATS
 * ==========================================================
 * Detailed statistics for the selected skill.
 */

import { motion } from "framer-motion";
import {
  Award,
  Brain,
  Briefcase,
  FolderGit2,
  GitCommitHorizontal,
  TrendingUp,
} from "lucide-react";

import { useEditor } from "../hooks/useEditor";

export default function SkillStats() {
  const { selectedSkill } = useEditor();

  if (!selectedSkill) return null;

  const metrics = [
    {
      title: "Proficiency",
      value: selectedSkill.metrics.proficiency,
      icon: Award,
    },
    {
      title: "Confidence",
      value: selectedSkill.metrics.confidence,
      icon: Brain,
    },
    {
      title: "Experience",
      value: selectedSkill.metrics.experience,
      icon: TrendingUp,
    },
    {
      title: "Problem Solving",
      value: selectedSkill.metrics.problemSolving,
      icon: Brain,
    },
    {
      title: "Real World Usage",
      value: selectedSkill.metrics.realWorldUsage,
      icon: Briefcase,
    },
  ];

  return (
    <section className="rounded-xl border border-[#2B2B2B] bg-[#1E1E1E] p-6">
      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white">
          Skill Statistics
        </h3>

        <p className="mt-1 text-sm text-[#8F8F8F]">
          Performance overview of {selectedSkill.name}
        </p>
      </div>

      {/* =====================================================
          SUMMARY CARDS
      ====================================================== */}

      <div className="grid grid-cols-2 gap-4">
        <SummaryCard
          icon={Briefcase}
          label="Projects"
          value={selectedSkill.stats.projects.toString()}
          color={selectedSkill.color}
        />

        <SummaryCard
          icon={FolderGit2}
          label="Repositories"
          value={selectedSkill.stats.repositories.toString()}
          color={selectedSkill.color}
        />

        <SummaryCard
          icon={GitCommitHorizontal}
          label="Commits"
          value={selectedSkill.stats.commits.toLocaleString()}
          color={selectedSkill.color}
        />

        <SummaryCard
          icon={Award}
          label="Experience"
          value={`${selectedSkill.experience.years} Years`}
          color={selectedSkill.color}
        />
      </div>

      {/* =====================================================
          METRICS
      ====================================================== */}

      <div className="mt-8 space-y-5">
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
                      backgroundColor: `${selectedSkill.color}20`,
                    }}
                  >
                    <Icon
                      size={18}
                      color={selectedSkill.color}
                    />
                  </div>

                  <span className="text-sm font-medium text-[#D4D4D4]">
                    {metric.title}
                  </span>
                </div>

                <span className="font-semibold text-white">
                  {metric.value}%
                </span>
              </div>

              {/* Progress */}

              <div className="h-2 overflow-hidden rounded-full bg-[#2B2B2B]">
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
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

/* ==========================================================
   SUMMARY CARD
========================================================== */

interface SummaryCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
  color: string;
}

function SummaryCard({
  icon: Icon,
  label,
  value,
  color,
}: SummaryCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      className="rounded-lg border border-[#303030] bg-[#252526] p-4"
    >
      <div
        className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg"
        style={{
          backgroundColor: `${color}20`,
        }}
      >
        <Icon
          size={18}
          color={color}
        />
      </div>

      <p className="text-xs uppercase tracking-wide text-[#8B8B8B]">
        {label}
      </p>

      <h4 className="mt-2 text-2xl font-bold text-white">
        {value}
      </h4>
    </motion.div>
  );
}