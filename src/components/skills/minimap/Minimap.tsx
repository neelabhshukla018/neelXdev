// src/components/skills/minimap/Minimap.tsx

"use client";

/**
 * ==========================================================
 * MINIMAP
 * ==========================================================
 * VS Code style editor minimap.
 */

import { motion } from "framer-motion";

import { useEditor } from "../hooks/useEditor";

const LINE_HEIGHT = 3;
const MAX_LINES = 180;

export default function Minimap() {
  const {
    selectedSkill,
    activeLine,
  } = useEditor();

  if (!selectedSkill) return null;

  const totalLines = Math.min(
    selectedSkill.technologies.length * 10 +
      60,
    MAX_LINES
  );

  const viewportHeight = 60;

  const indicatorY =
    (activeLine / totalLines) *
    (totalLines * LINE_HEIGHT);

  return (
    <aside className="flex h-full w-24 flex-col border-l border-[#2D2D2D] bg-[#1E1E1E]">
      {/* ==========================================
          HEADER
      ========================================== */}

      <div className="border-b border-[#2D2D2D] px-3 py-2">
        <p className="text-center text-[10px] font-semibold uppercase tracking-wider text-[#8A8A8A]">
          Minimap
        </p>
      </div>

      {/* ==========================================
          MAP
      ========================================== */}

      <div className="relative flex-1 overflow-hidden px-2 py-3">
        {/* ======================================
            LINES
        ======================================= */}

        <div className="space-y-[1px]">
          {Array.from({
            length: totalLines,
          }).map((_, index) => {
            const width =
              30 +
              ((index * 17) % 50);

            const opacity =
              0.2 +
              ((index * 9) % 6) * 0.1;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity,
                }}
                className="rounded-sm"
                style={{
                  height: LINE_HEIGHT,
                  width,
                  background:
                    selectedSkill.color,
                }}
              />
            );
          })}
        </div>

        {/* ======================================
            VIEWPORT
        ======================================= */}

        <motion.div
          animate={{
            y: indicatorY,
          }}
          transition={{
            type: "spring",
            stiffness: 220,
            damping: 28,
          }}
          className="absolute left-0 right-0 rounded border border-[#FFFFFF55] bg-white/10"
          style={{
            height: viewportHeight,
          }}
        />

        {/* ======================================
            ACTIVE LINE
        ======================================= */}

        <motion.div
          animate={{
            y:
              indicatorY +
              viewportHeight / 2,
          }}
          className="absolute left-0 right-0 h-[2px]"
          style={{
            background:
              selectedSkill.color,
          }}
        />
      </div>

      {/* ==========================================
          FOOTER
      ========================================== */}

      <div className="border-t border-[#2D2D2D] px-2 py-2 text-center text-[10px] text-[#777]">
        {activeLine}/{totalLines}
      </div>
    </aside>
  );
}