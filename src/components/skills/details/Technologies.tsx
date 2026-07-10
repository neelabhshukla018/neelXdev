// src/components/skills/details/Technologies.tsx

"use client";

/**
 * ==========================================================
 * TECHNOLOGIES
 * ==========================================================
 * Displays technologies, related skills and connections
 * for the currently selected skill.
 */

import { motion } from "framer-motion";
import {
  ArrowRight,
  Cpu,
  Link2,
  Sparkles,
} from "lucide-react";

import { useEditor } from "../hooks/useEditor";

export default function Technologies() {
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
            Technologies
          </h3>

          <p className="mt-1 text-sm text-[#8A8A8A]">
            Core tools and connected technologies
          </p>
        </div>

        <div
          className="flex h-11 w-11 items-center justify-center rounded-xl"
          style={{
            backgroundColor: `${selectedSkill.color}20`,
          }}
        >
          <Cpu
            size={20}
            color={selectedSkill.color}
          />
        </div>
      </div>

      {/* =====================================================
          TECHNOLOGIES
      ====================================================== */}

      <div>
        <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold text-white">
          <Sparkles
            size={16}
            color={selectedSkill.color}
          />
          Technologies Used
        </h4>

        <div className="flex flex-wrap gap-3">
          {selectedSkill.technologies.map(
            (tech, index) => (
              <motion.div
                key={tech}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -4,
                  scale: 1.04,
                }}
                className="rounded-lg border border-[#353535] bg-[#252526] px-4 py-2 text-sm text-[#D6D6D6] transition-colors hover:border-[#4A4A4A]"
              >
                {tech}
              </motion.div>
            )
          )}
        </div>
      </div>

      {/* =====================================================
          CONNECTIONS
      ====================================================== */}

      <div className="mt-10">
        <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold text-white">
          <Link2
            size={16}
            color={selectedSkill.color}
          />
          Connected Skills
        </h4>

        <div className="space-y-3">
          {selectedSkill.connections.map(
            (connection, index) => (
              <motion.div
                key={connection.target}
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
                transition={{
                  delay: index * 0.08,
                }}
                className="rounded-xl border border-[#303030] bg-[#252526] p-4"
              >
                <div className="flex items-center justify-between">
                  {/* Left */}

                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-lg"
                      style={{
                        backgroundColor: `${selectedSkill.color}20`,
                      }}
                    >
                      <ArrowRight
                        size={18}
                        color={selectedSkill.color}
                      />
                    </div>

                    <div>
                      <h5 className="font-medium capitalize text-white">
                        {connection.target}
                      </h5>

                      <p className="text-xs text-[#8A8A8A]">
                        Skill Dependency
                      </p>
                    </div>
                  </div>

                  {/* Right */}

                  <div className="text-right">
                    <div
                      className="text-lg font-bold"
                      style={{
                        color: selectedSkill.color,
                      }}
                    >
                      {connection.strength}%
                    </div>

                    <div className="text-xs text-[#8A8A8A]">
                      Connection
                    </div>
                  </div>
                </div>

                {/* Progress */}

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#303030]">
                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: `${connection.strength}%`,
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
                      backgroundColor:
                        selectedSkill.color,
                    }}
                  />
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>

      {/* =====================================================
          SUMMARY
      ====================================================== */}

      <div className="mt-8 grid grid-cols-2 gap-4">
        <SummaryCard
          title="Technologies"
          value={selectedSkill.technologies.length}
          color={selectedSkill.color}
        />

        <SummaryCard
          title="Connections"
          value={selectedSkill.connections.length}
          color={selectedSkill.color}
        />
      </div>
    </section>
  );
}

/* ==========================================================
   SUMMARY CARD
========================================================== */

interface SummaryCardProps {
  title: string;
  value: number;
  color: string;
}

function SummaryCard({
  title,
  value,
  color,
}: SummaryCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -3,
      }}
      className="rounded-xl border border-[#303030] bg-[#252526] p-4"
    >
      <p className="text-xs uppercase tracking-wide text-[#8A8A8A]">
        {title}
      </p>

      <h4
        className="mt-2 text-3xl font-bold"
        style={{
          color,
        }}
      >
        {value}
      </h4>
    </motion.div>
  );
}