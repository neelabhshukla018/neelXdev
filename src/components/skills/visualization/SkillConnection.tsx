// src/components/skills/visualization/SkillConnection.tsx

"use client";

/**
 * ==========================================================
 * SKILL CONNECTION
 * ==========================================================
 * SVG connection between two skill nodes.
 */

import { motion } from "framer-motion";

interface Point {
  x: number;
  y: number;
}

interface SkillConnectionProps {
  from: Point;

  to: Point;

  strength: number;

  active?: boolean;

  highlighted?: boolean;

  animated?: boolean;

  color?: string;
}

export default function SkillConnection({
  from,
  to,

  strength,

  active = false,

  highlighted = false,

  animated = true,

  color = "#3794FF",
}: SkillConnectionProps) {
  /* ======================================================
   * CURVE
   * ==================================================== */

  const dx = to.x - from.x;

  const controlX1 = from.x + dx * 0.25;

  const controlX2 = from.x + dx * 0.75;

  const controlY1 = from.y;

  const controlY2 = to.y;

  const path = `
    M ${from.x} ${from.y}
    C
    ${controlX1} ${controlY1},
    ${controlX2} ${controlY2},
    ${to.x} ${to.y}
  `;

  /* ======================================================
   * STYLE
   * ==================================================== */

  const opacity = highlighted
    ? 1
    : active
    ? 0.85
    : 0.35;

  const strokeWidth = highlighted
    ? 3
    : active
    ? 2.5
    : 1.5;

  const dash =
    strength >= 90
      ? "0"
      : strength >= 70
      ? "6 4"
      : "10 6";

  /* ======================================================
   * RENDER
   * ==================================================== */

  return (
    <g>
      {/* ==========================================
          GLOW
      ========================================== */}

      {(active || highlighted) && (
        <motion.path
          d={path}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth + 5}
          strokeOpacity={0.12}
          strokeLinecap="round"
          initial={{
            pathLength: 0,
          }}
          animate={{
            pathLength: 1,
          }}
          transition={{
            duration: 0.8,
          }}
        />
      )}

      {/* ==========================================
          MAIN CONNECTION
      ========================================== */}

      <motion.path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeOpacity={opacity}
        strokeDasharray={dash}
        strokeLinecap="round"
        initial={
          animated
            ? {
                pathLength: 0,
              }
            : false
        }
        animate={{
          pathLength: 1,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
      />

      {/* ==========================================
          FLOW ANIMATION
      ========================================== */}

      {active && (
        <motion.circle
          r={3}
          fill={color}
        >
          <animateMotion
            dur="2s"
            repeatCount="indefinite"
            path={path}
          />
        </motion.circle>
      )}
    </g>
  );
}