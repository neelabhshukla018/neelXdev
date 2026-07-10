// src/components/skills/visualization/SkillRadar.tsx

"use client";

/**
 * ==========================================================
 * SKILL RADAR
 * ==========================================================
 * Radar chart showing the selected skill metrics.
 */

import { motion } from "framer-motion";

import { useEditor } from "../hooks/useEditor";

const AXES = [
  {
    key: "proficiency",
    label: "Proficiency",
  },
  {
    key: "confidence",
    label: "Confidence",
  },
  {
    key: "experience",
    label: "Experience",
  },
  {
    key: "problemSolving",
    label: "Problem Solving",
  },
  {
    key: "realWorldUsage",
    label: "Real Usage",
  },
] as const;

const SIZE = 280;

const CENTER = SIZE / 2;

const RADIUS = 95;

export default function SkillRadar() {
  const { selectedSkill } = useEditor();

  if (!selectedSkill) return null;

  /* ======================================================
     BUILD RADAR POINTS
  ====================================================== */

  const points = AXES.map((axis, index) => {
    const value =
      selectedSkill.metrics[axis.key];

    const angle =
      ((Math.PI * 2) / AXES.length) *
        index -
      Math.PI / 2;

    const distance =
      (value / 100) * RADIUS;

    return {
      x:
        CENTER +
        Math.cos(angle) * distance,

      y:
        CENTER +
        Math.sin(angle) * distance,

      labelX:
        CENTER +
        Math.cos(angle) *
          (RADIUS + 28),

      labelY:
        CENTER +
        Math.sin(angle) *
          (RADIUS + 28),

      value,

      label: axis.label,
    };
  });

  const polygon = points
    .map(
      (p) => `${p.x},${p.y}`
    )
    .join(" ");

  /* ======================================================
     RENDER
  ====================================================== */

  return (
    <div className="rounded-xl border border-[#2B2B2B] bg-[#1E1E1E] p-6">
      {/* ==========================================
          HEADER
      ========================================== */}

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white">
          Skill Radar
        </h3>

        <p className="mt-1 text-sm text-[#8F8F8F]">
          Overall capability analysis
        </p>
      </div>

      {/* ==========================================
          CHART
      ========================================== */}

      <div className="flex justify-center">
        <svg
          width={SIZE}
          height={SIZE}
        >
          {/* Grid Rings */}

          {[20, 40, 60, 80, 100].map(
            (percent) => (
              <circle
                key={percent}
                cx={CENTER}
                cy={CENTER}
                r={
                  (percent / 100) *
                  RADIUS
                }
                fill="none"
                stroke="#303030"
                strokeWidth={1}
              />
            )
          )}

          {/* Axis */}

          {points.map(
            (point, index) => (
              <g key={index}>
                <line
                  x1={CENTER}
                  y1={CENTER}
                  x2={
                    CENTER +
                    Math.cos(
                      ((Math.PI * 2) /
                        AXES.length) *
                        index -
                        Math.PI / 2
                    ) *
                      RADIUS
                  }
                  y2={
                    CENTER +
                    Math.sin(
                      ((Math.PI * 2) /
                        AXES.length) *
                        index -
                        Math.PI / 2
                    ) *
                      RADIUS
                  }
                  stroke="#3A3A3A"
                />

                <text
                  x={point.labelX}
                  y={point.labelY}
                  textAnchor="middle"
                  className="fill-[#C5C5C5] text-[10px]"
                >
                  {point.label}
                </text>
              </g>
            )
          )}

          {/* Polygon */}

          <motion.polygon
            points={polygon}
            fill={`${selectedSkill.color}30`}
            stroke={selectedSkill.color}
            strokeWidth={2}
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
            }}
            style={{
              transformOrigin: `${CENTER}px ${CENTER}px`,
            }}
          />

          {/* Dots */}

          {points.map(
            (point, index) => (
              <motion.circle
                key={index}
                cx={point.x}
                cy={point.y}
                r={5}
                fill={selectedSkill.color}
                initial={{
                  scale: 0,
                }}
                animate={{
                  scale: 1,
                }}
                transition={{
                  delay:
                    index * 0.08,
                }}
              />
            )
          )}
        </svg>
      </div>

      {/* ==========================================
          VALUES
      ========================================== */}

      <div className="mt-8 space-y-3">
        {AXES.map((axis) => {
          const value =
            selectedSkill.metrics[
              axis.key
            ];

          return (
            <div
              key={axis.key}
            >
              <div className="mb-1 flex justify-between text-sm">
                <span className="text-[#B5B5B5]">
                  {axis.label}
                </span>

                <span className="font-medium text-white">
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
                    background:
                      selectedSkill.color,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}