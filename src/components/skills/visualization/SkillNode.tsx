// src/components/skills/visualization/SkillNode.tsx

"use client";

/**
 * ==========================================================
 * SKILL NODE
 * ==========================================================
 * Interactive node used inside SkillGraph.
 */

import { motion } from "framer-motion";
import {
  Star,
  Heart,
} from "lucide-react";

import { Skill } from "../types/skill";

interface SkillNodeProps {
  skill: Skill;

  selected?: boolean;

  hovered?: boolean;

  dragging?: boolean;

  connected?: boolean;

  scale?: number;

  onClick?: () => void;

  onHover?: (
    id: string | null
  ) => void;

  onDragStart?: () => void;

  onDragEnd?: () => void;
}

export default function SkillNode({
  skill,

  selected = false,

  hovered = false,

  dragging = false,

  connected = false,

  scale = 1,

  onClick,

  onHover,

  onDragStart,

  onDragEnd,
}: SkillNodeProps) {
  const Icon = skill.icon;

  return (
    <motion.g
      drag
      dragMomentum={false}
      whileHover={{
        scale: 1.08,
      }}
      whileTap={{
        scale: 0.96,
      }}
      onHoverStart={() =>
        onHover?.(skill.id)
      }
      onHoverEnd={() =>
        onHover?.(null)
      }
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onClick={onClick}
      style={{
        cursor: "pointer",
      }}
      animate={{
        x: skill.position.x,
        y: skill.position.y,
        scale,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 22,
      }}
    >
      {/* ==========================================
          OUTER GLOW
      ========================================== */}

      {(selected || hovered) && (
        <motion.circle
          r={44}
          fill={skill.color}
          opacity={0.12}
          animate={{
            scale: [1, 1.18, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      )}

      {/* ==========================================
          CONNECTION RING
      ========================================== */}

      {connected && (
        <circle
          r={39}
          fill="none"
          stroke={skill.color}
          strokeWidth={1.5}
          opacity={0.4}
          strokeDasharray="5 5"
        />
      )}

      {/* ==========================================
          MAIN CIRCLE
      ========================================== */}

      <motion.circle
        r={32}
        fill="#252526"
        stroke={skill.color}
        strokeWidth={
          selected ? 3 : 2
        }
        animate={{
          boxShadow: selected
            ? `0 0 40px ${skill.color}`
            : "none",
        }}
      />

      {/* ==========================================
          INNER CIRCLE
      ========================================== */}

      <circle
        r={27}
        fill={`${skill.color}20`}
      />

      {/* ==========================================
          ICON
      ========================================== */}

      <foreignObject
        x={-12}
        y={-12}
        width={24}
        height={24}
      >
        <div className="flex h-6 w-6 items-center justify-center">
          <Icon
            size={20}
            color={skill.color}
          />
        </div>
      </foreignObject>

      {/* ==========================================
          LABEL
      ========================================== */}

      <text
        y={52}
        textAnchor="middle"
        className="fill-white text-[13px] font-medium"
      >
        {skill.shortName}
      </text>

      {/* ==========================================
          LEVEL
      ========================================== */}

      <text
        y={67}
        textAnchor="middle"
        className="fill-[#9D9D9D] text-[10px]"
      >
        {skill.level}
      </text>

      {/* ==========================================
          FEATURED
      ========================================== */}

      {skill.featured && (
        <foreignObject
          x={18}
          y={-32}
          width={16}
          height={16}
        >
          <div className="rounded-full bg-[#FFD54F] p-0.5">
            <Star
              size={10}
              fill="#FFD54F"
              color="#FFD54F"
            />
          </div>
        </foreignObject>
      )}

      {/* ==========================================
          FAVORITE
      ========================================== */}

      {skill.favorite && (
        <foreignObject
          x={-34}
          y={-32}
          width={16}
          height={16}
        >
          <div className="rounded-full bg-[#E91E63] p-0.5">
            <Heart
              size={10}
              fill="#E91E63"
              color="#E91E63"
            />
          </div>
        </foreignObject>
      )}

      {/* ==========================================
          EXPERIENCE BADGE
      ========================================== */}

      <foreignObject
        x={14}
        y={18}
        width={34}
        height={18}
      >
        <div
          className="rounded-full border px-1.5 py-[2px] text-center text-[9px] font-semibold text-white backdrop-blur"
          style={{
            background: "#1E1E1ECC",
            borderColor: skill.color,
          }}
        >
          {skill.experience.years}Y
        </div>
      </foreignObject>

      {/* ==========================================
          ACTIVE DOT
      ========================================== */}

      {selected && (
        <motion.circle
          r={5}
          cy={-30}
          fill="#22C55E"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
        />
      )}

      {/* ==========================================
          DRAGGING OVERLAY
      ========================================== */}

      {dragging && (
        <circle
          r={36}
          fill="none"
          stroke="#FFFFFF"
          strokeDasharray="4 4"
          opacity={0.5}
        />
      )}
    </motion.g>
  );
}