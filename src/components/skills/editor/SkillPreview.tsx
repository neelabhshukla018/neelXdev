// src/components/skills/editor/SkillPreview.tsx

"use client";

/**
 * ==========================================================
 * SKILL PREVIEW
 * ==========================================================
 * Live preview panel shown beside the editor.
 */

import {
  Award,
  Briefcase,
  Clock3,
  GitBranch,
  Star,
  TrendingUp,
} from "lucide-react";

import { motion } from "framer-motion";

import { useEditor } from "../hooks/useEditor";

export default function SkillPreview() {
  const { selectedSkill } = useEditor();

  if (!selectedSkill) return null;

  return (
    <aside className="hidden w-[340px] border-l border-[#2B2B2B] bg-[#181818] xl:flex xl:flex-col">
      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="border-b border-[#2B2B2B] p-5">
        <div className="flex items-center gap-4">
          <motion.div
            whileHover={{
              scale: 1.08,
            }}
            className="flex h-16 w-16 items-center justify-center rounded-xl border"
            style={{
              borderColor: selectedSkill.color,
              backgroundColor: `${selectedSkill.color}20`,
            }}
          >
            <span
              className="text-2xl font-bold"
              style={{
                color: selectedSkill.color,
              }}
            >
              {selectedSkill.name.charAt(0)}
            </span>
          </motion.div>

          <div>
            <h2 className="text-lg font-semibold text-white">
              {selectedSkill.name}
            </h2>

            <p className="mt-1 text-sm capitalize text-[#9D9D9D]">
              {selectedSkill.category}
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          DESCRIPTION
      ====================================================== */}

      <div className="border-b border-[#2B2B2B] p-5">
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#7F7F7F]">
          Description
        </h3>

        <p className="text-sm leading-7 text-[#C5C5C5]">
          {selectedSkill.description}
        </p>
      </div>

      {/* =====================================================
          METRICS
      ====================================================== */}

      <div className="border-b border-[#2B2B2B] p-5">
        <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#7F7F7F]">
          Metrics
        </h3>

        <div className="space-y-4">
          <ProgressRow
            title="Proficiency"
            value={selectedSkill.metrics.proficiency}
            color="#3B82F6"
          />

          <ProgressRow
            title="Confidence"
            value={selectedSkill.metrics.confidence}
            color="#10B981"
          />

          <ProgressRow
            title="Experience"
            value={selectedSkill.metrics.experience}
            color="#F59E0B"
          />

          <ProgressRow
            title="Problem Solving"
            value={selectedSkill.metrics.problemSolving}
            color="#8B5CF6"
          />

          <ProgressRow
            title="Real World Usage"
            value={selectedSkill.metrics.realWorldUsage}
            color="#EF4444"
          />
        </div>
      </div>

      {/* =====================================================
          STATS
      ====================================================== */}

      <div className="grid grid-cols-2 gap-3 border-b border-[#2B2B2B] p-5">
        <StatCard
          icon={Clock3}
          label="Experience"
          value={`${selectedSkill.experience.years} yrs`}
        />

        <StatCard
          icon={Briefcase}
          label="Projects"
          value={selectedSkill.stats.projects.toString()}
        />

        <StatCard
          icon={GitBranch}
          label="Repositories"
          value={String(selectedSkill.stats.repositories ?? 0)}
        />

        <StatCard
          icon={TrendingUp}
          label="Commits"
          value={String(selectedSkill.stats.commits ?? 0)}
        />

        <StatCard
          icon={Award}
          label="Level"
          value={selectedSkill.level}
        />

        <StatCard
          icon={Star}
          label="Status"
          value={selectedSkill.status}
        />
      </div>

      {/* =====================================================
          TECHNOLOGIES
      ====================================================== */}

      <div className="flex-1 overflow-y-auto p-5">
        <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#7F7F7F]">
          Technologies
        </h3>

        <div className="flex flex-wrap gap-2">
          {selectedSkill.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-[#353535] bg-[#252526] px-3 py-1.5 text-xs text-[#D4D4D4]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* ==========================================
            CONNECTIONS
        =========================================== */}

        <h3 className="mb-4 mt-8 text-xs font-semibold uppercase tracking-widest text-[#7F7F7F]">
          Connected Skills
        </h3>

        <div className="space-y-2">
          {selectedSkill.connections.map((connection) => (
            <div
              key={connection.target}
              className="flex items-center justify-between rounded-lg border border-[#303030] bg-[#252526] px-3 py-2"
            >
              <span className="text-sm capitalize text-[#D4D4D4]">
                {connection.target}
              </span>

              <span
                className="rounded-full px-2 py-0.5 text-xs font-semibold"
                style={{
                  color: selectedSkill.color,
                  backgroundColor: `${selectedSkill.color}20`,
                }}
              >
                {connection.strength}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

/* ==========================================================
   PROGRESS ROW
========================================================== */

interface ProgressRowProps {
  title: string;
  value: number;
  color: string;
}

function ProgressRow({
  title,
  value,
  color,
}: ProgressRowProps) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-xs">
        <span className="text-[#A5A5A5]">
          {title}
        </span>

        <span className="text-white">
          {value}%
        </span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-[#2C2C2C]">
        <motion.div
          initial={{
            width: 0,
          }}
          animate={{
            width: `${value}%`,
          }}
          transition={{
            duration: 0.8,
          }}
          className="h-full rounded-full"
          style={{
            background: color,
          }}
        />
      </div>
    </div>
  );
}

/* ==========================================================
   STAT CARD
========================================================== */

interface StatCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
}

function StatCard({
  icon: Icon,
  label,
  value,
}: StatCardProps) {
  return (
    <div className="rounded-lg border border-[#303030] bg-[#252526] p-3">
      <Icon
        size={16}
        className="mb-2 text-[#6EA8FE]"
      />

      <p className="text-[11px] uppercase tracking-wide text-[#808080]">
        {label}
      </p>

      <p className="mt-1 text-sm font-semibold capitalize text-white">
        {value}
      </p>
    </div>
  );
}