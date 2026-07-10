// src/components/skills/explorer/ExplorerFolder.tsx

"use client";

/**
 * ==========================================================
 * EXPLORER FOLDER
 * ==========================================================
 * Collapsible folder used inside the Explorer Tree.
 */

import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronRight,
  Folder,
  FolderOpen,
} from "lucide-react";

import { Skill } from "../types/skill";
import { useExplorer } from "../hooks/useExplorer";

import ExplorerFile from "./ExplorerFile";
import FolderItem from "./FolderItem";

interface ExplorerFolderProps {
  id: string;
  title: string;
  skills: Skill[];
}

export default function ExplorerFolder({
  id,
  title,
  skills,
}: ExplorerFolderProps) {
  const {
    isExpanded,
    toggleFolder,
  } = useExplorer();

  const expanded = isExpanded(id);

  return (
    <div className="select-none">
      {/* =====================================================
          FOLDER HEADER
      ====================================================== */}

      <button
        onClick={() => toggleFolder(id)}
        className="group flex h-8 w-full items-center gap-1 px-2 text-sm text-[#CCCCCC] transition-colors hover:bg-[#2A2D2E]"
      >
        {/* Arrow */}

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

        {/* Folder Icon */}

        {expanded ? (
          <FolderOpen
            size={16}
            className="text-[#D7BA7D]"
          />
        ) : (
          <FolderItem
  title={title}
  expanded={expanded}
  count={skills.length}
  onClick={() => toggleFolder(id)}
/>
        )}

        {/* Folder Name */}

        <span className="flex-1 text-left">
          {title}
        </span>

        {/* File Count */}

        <span className="text-[11px] text-[#707070] opacity-0 transition-opacity group-hover:opacity-100">
          {skills.length}
        </span>
      </button>

      {/* =====================================================
          FILES
      ====================================================== */}

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.18,
            }}
            className="overflow-hidden"
          >
            <div className="ml-5 border-l border-[#2F2F2F]">
              {skills.length > 0 ? (
                skills.map((skill) => (
                  <ExplorerFile
                    key={skill.id}
                    skill={skill}
                  />
                ))
              ) : (
                <div className="px-4 py-2 text-xs italic text-[#6A6A6A]">
                  Empty Folder
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}