// src/components/skills/explorer/FileItem.tsx

"use client";

/**
 * ==========================================================
 * FILE ITEM
 * ==========================================================
 * Reusable VS Code Explorer File Component
 */

import { motion } from "framer-motion";
import {
  Circle,
  FileCode2,
  Pin,
} from "lucide-react";

interface FileItemProps {
  name: string;

  color: string;

  active?: boolean;

  opened?: boolean;

  pinned?: boolean;

  dirty?: boolean;

  onClick?: () => void;
}

export default function FileItem({
  name,
  color,

  active = false,

  opened = false,

  pinned = false,

  dirty = false,

  onClick,
}: FileItemProps) {
  return (
    <motion.button
      layout
      whileHover={{
        x: 2,
      }}
      whileTap={{
        scale: 0.98,
      }}
      onClick={onClick}
      className={`group relative flex h-8 w-full items-center gap-2 pl-5 pr-3 text-left transition-colors

${
  active
    ? "bg-[#37373D] text-white"
    : "text-[#C5C5C5] hover:bg-[#2A2D2E]"
}`}
    >
      {/* =====================================================
          ACTIVE INDICATOR
      ====================================================== */}

      {active && (
        <motion.div
          layoutId="explorer-file-active"
          className="absolute left-0 top-0 h-full w-[2px] bg-[#007ACC]"
        />
      )}

      {/* =====================================================
          FILE ICON
      ====================================================== */}

      <FileCode2
        size={15}
        color={color}
      />

      {/* =====================================================
          FILE NAME
      ====================================================== */}

      <span className="flex-1 truncate text-[13px]">
        {name}
      </span>

      {/* =====================================================
          FILE STATE
      ====================================================== */}

      <div className="flex items-center gap-1">
        {/* Dirty */}

        {dirty && (
          <Circle
            size={7}
            fill="white"
            className="text-white"
          />
        )}

        {/* Pinned */}

        {pinned && (
          <Pin
            size={11}
            className="text-[#9B9B9B]"
          />
        )}

        {/* Opened */}

        {opened && !dirty && (
          <motion.div
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
            className="h-2 w-2 rounded-full bg-[#3794FF] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          />
        )}
      </div>
    </motion.button>
  );
}