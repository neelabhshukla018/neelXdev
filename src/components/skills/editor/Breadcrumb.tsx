// src/components/skills/editor/Breadcrumb.tsx

"use client";

/**
 * ==========================================================
 * BREADCRUMB
 * ==========================================================
 * VS Code Breadcrumb Navigation
 */

import {
  ChevronRight,
  Folder,
  FileCode2,
} from "lucide-react";

import { motion } from "framer-motion";

import { useEditor } from "../hooks/useEditor";

export default function Breadcrumb() {
  const {
    breadcrumbs,
    selectedSkill,
  } = useEditor();

  if (!selectedSkill) return null;

  return (
    <div className="flex h-9 items-center overflow-x-auto border-b border-[#2B2B2B] bg-[#252526] px-4 text-sm scrollbar-none">
      {breadcrumbs.map((crumb, index) => {
        const isLast =
          index === breadcrumbs.length - 1;

        const isFile = isLast;

        return (
          <motion.div
            key={crumb.id}
            initial={{
              opacity: 0,
              y: -5,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.05,
            }}
            className="flex items-center"
          >
            {/* ======================================
                ITEM
            ======================================= */}

            <button
              className={`flex items-center gap-1 rounded px-2 py-1 transition

${
  isFile
    ? "text-white"
    : "text-[#B3B3B3] hover:bg-[#2A2D2E] hover:text-white"
}`}
            >
              {isFile ? (
                <FileCode2
                  size={14}
                  color={selectedSkill.color}
                />
              ) : (
                <Folder
                  size={14}
                  className="text-[#D7BA7D]"
                />
              )}

              <span className="whitespace-nowrap capitalize">
                {crumb.label}
              </span>
            </button>

            {/* ======================================
                SEPARATOR
            ======================================= */}

            {!isLast && (
              <ChevronRight
                size={14}
                className="mx-1 text-[#6A6A6A]"
              />
            )}
          </motion.div>
        );
      })}
    </div>
  );
}