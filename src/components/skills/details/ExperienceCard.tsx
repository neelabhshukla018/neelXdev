// src/components/skills/details/ExperienceCard.tsx

"use client";

/**
 * ==========================================================
 * EXPERIENCE CARD
 * ==========================================================
 * Shows experience timeline and journey for the selected skill.
 */

import { motion } from "framer-motion";
import {
  Calendar,
  Clock3,
  Rocket,
  Trophy,
} from "lucide-react";

import { useEditor } from "../hooks/useEditor";

export default function ExperienceCard() {
  const { selectedSkill } = useEditor();

  if (!selectedSkill) return null;

  const startedYear = Number(
    selectedSkill.experience.startedAt
  );

  const currentYear = new Date().getFullYear();

  const totalYears =
    currentYear - startedYear;

  return (
    <section className="rounded-xl border border-[#2B2B2B] bg-[#1E1E1E] p-6">
      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white">
          Experience Timeline
        </h3>

        <p className="mt-1 text-sm text-[#8F8F8F]">
          Journey with {selectedSkill.name}
        </p>
      </div>

      {/* =====================================================
          TIMELINE
      ====================================================== */}

      <div className="relative ml-5 border-l border-[#343434]">
        <TimelineItem
          icon={Rocket}
          color={selectedSkill.color}
          title="Started Learning"
          subtitle={selectedSkill.experience.startedAt ?? "Recently"}
          description={`Started exploring ${selectedSkill.name} fundamentals.`}
        />

        <TimelineItem
          icon={Clock3}
          color={selectedSkill.color}
          title="Hands-on Practice"
          subtitle={`${selectedSkill.experience.years} Years`}
          description="Built personal projects and strengthened practical knowledge."
        />

        <TimelineItem
          icon={Calendar}
          color={selectedSkill.color}
          title="Current Journey"
          subtitle={currentYear.toString()}
          description={`Working professionally with ${selectedSkill.name}.`}
        />

        <TimelineItem
          icon={Trophy}
          color={selectedSkill.color}
          title={selectedSkill.level}
          subtitle={selectedSkill.status}
          description="Current proficiency and confidence level."
          last
        />
      </div>

      {/* =====================================================
          SUMMARY
      ====================================================== */}

      <motion.div
        whileHover={{
          scale: 1.02,
        }}
        className="mt-8 rounded-xl border border-[#303030] bg-[#252526] p-5"
      >
        <p className="text-sm leading-7 text-[#CFCFCF]">
          I've been working with{" "}
          <span
            style={{
              color: selectedSkill.color,
            }}
            className="font-semibold"
          >
            {selectedSkill.name}
          </span>{" "}
          for approximately{" "}
          <span
            style={{
              color: selectedSkill.color,
            }}
            className="font-semibold"
          >
            {totalYears}+
          </span>{" "}
          years, completing{" "}
          <span
            style={{
              color: selectedSkill.color,
            }}
            className="font-semibold"
          >
            {selectedSkill.stats.projects}
          </span>{" "}
          real-world projects and continuously improving through practical development.
        </p>
      </motion.div>
    </section>
  );
}

/* ==========================================================
   TIMELINE ITEM
========================================================== */

interface TimelineItemProps {
  icon: React.ElementType;
  color: string;
  title: string;
  subtitle: string;
  description: string;
  last?: boolean;
}

function TimelineItem({
  icon: Icon,
  color,
  title,
  subtitle,
  description,
  last = false,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -20,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      className={`relative pl-8 ${
        last ? "" : "pb-8"
      }`}
    >
      {/* Timeline Dot */}

      <div
        className="absolute -left-[17px] flex h-8 w-8 items-center justify-center rounded-full border-2 bg-[#252526]"
        style={{
          borderColor: color,
        }}
      >
        <Icon
          size={15}
          color={color}
        />
      </div>

      {/* Content */}

      <div>
        <div className="flex flex-wrap items-center gap-3">
          <h4 className="font-semibold text-white">
            {title}
          </h4>

          <span
            className="rounded-full px-2 py-1 text-xs"
            style={{
              backgroundColor: `${color}20`,
              color,
            }}
          >
            {subtitle}
          </span>
        </div>

        <p className="mt-2 text-sm leading-6 text-[#B8B8B8]">
          {description}
        </p>
      </div>
    </motion.div>
  );
}