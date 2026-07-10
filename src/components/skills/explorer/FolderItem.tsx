// src/components/skills/explorer/FolderItem.tsx

"use client";

/**
 * ==========================================================
 * FOLDER ITEM
 * ==========================================================
 * Reusable VS Code Explorer Folder
 */

import { motion } from "framer-motion";
import {
  ChevronDown,
  ChevronRight,
  Folder,
  FolderOpen,
} from "lucide-react";

interface FolderItemProps {
  title: string;

  expanded: boolean;

  count?: number;

  onClick: () => void;
}

export default function FolderItem({
  title,
  expanded,
  count = 0,
  onClick,
}: FolderItemProps) {
  return (
    <button
      onClick={onClick}
      className="group flex h-8 w-full items-center gap-1 px-2 text-left text-[13px] text-[#CCCCCC] transition-colors hover:bg-[#2A2D2E]"
    >
      {/* =====================================================
          EXPAND ICON
      ====================================================== */}

      <motion.div
        animate={{
          rotate: expanded ? 0 : -90,
        }}
        transition={{
          duration: 0.15,
        }}
      >
        <ChevronDown
          size={15}
          className="text-[#8A8A8A]"
        />
      </motion.div>

      {/* =====================================================
          FOLDER ICON
      ====================================================== */}

      {expanded ? (
        <FolderOpen
          size={16}
          className="text-[#D7BA7D]"
        />
      ) : (
        <Folder
          size={16}
          className="text-[#D7BA7D]"
        />
      )}

      {/* =====================================================
          TITLE
      ====================================================== */}

      <span className="flex-1 truncate">
        {title}
      </span>

      {/* =====================================================
          FILE COUNT
      ====================================================== */}

      <span className="rounded bg-[#2F2F2F] px-1.5 py-0.5 text-[10px] text-[#8A8A8A] opacity-0 transition-opacity group-hover:opacity-100">
        {count}
      </span>

      {/* =====================================================
          HOVER INDICATOR
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileHover={{
          opacity: 1,
        }}
        className="absolute left-0 h-6 w-[2px] rounded-r bg-[#007ACC]"
      />
    </button>
  );
}