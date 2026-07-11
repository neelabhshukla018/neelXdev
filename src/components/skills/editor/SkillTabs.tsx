// src/components/skills/editor/SkillTabs.tsx

"use client";

/**
 * ==========================================================
 * SKILL TABS
 * ==========================================================
 * VS Code Editor Tabs
 */

import { motion, AnimatePresence } from "framer-motion";
import { ElementType } from "react";
import {
  X,
  Pin,
  Circle,
  FileCode2,
} from "lucide-react";
import { useTabs } from "../hooks/useTabs";

export default function SkillTabs() {
  const {
    tabs,
    activeTabId,

    setActiveTab,
    closeTab,

    isPinned,
    isDirty,
    canClose,
  } = useTabs();

  return (
    <div className="flex h-10 items-center overflow-x-auto border-b border-[#2B2B2B] bg-[#252526] scrollbar-none">
      <AnimatePresence initial={false}>
        {tabs.map((tab) => {
          const Icon: ElementType = tab.icon ?? FileCode2;

          const active =
            tab.id === activeTabId;

          return (
            <motion.button
              key={tab.id}
              layout
              initial={{
                opacity: 0,
                x: 20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -20,
              }}
              transition={{
                duration: 0.2,
              }}
              onClick={() =>
                setActiveTab(tab.id)
              }
              className={`group relative flex h-full min-w-[190px] items-center gap-2 border-r border-[#2B2B2B] px-4 transition-all

${
  active
    ? "bg-[#1E1E1E] text-white"
    : "bg-[#2D2D2D] text-[#B9B9B9] hover:bg-[#333333]"
}`}
            >
              {/* ===================================
                  ACTIVE INDICATOR
              ==================================== */}

              {active && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute left-0 top-0 h-[2px] w-full bg-[#007ACC]"
                />
              )}

              {/* ===================================
                  FILE ICON
              ==================================== */}

            <Icon
  className="h-4 w-4"
  color={active ? "#4FC1FF" : "#7BA7F7"}
/>

              {/* ===================================
                  FILE NAME
              ==================================== */}

              <span className="flex-1 truncate text-left text-sm">
                {tab.fileName}
              </span>

              {/* ===================================
                  DIRTY
              ==================================== */}

              {isDirty(tab.id) && (
                <Circle
                  size={8}
                  fill="white"
                  className="text-white"
                />
              )}

              {/* ===================================
                  PINNED
              ==================================== */}

              {isPinned(tab.id) && (
                <Pin
                  size={13}
                  className="text-[#A3A3A3]"
                />
              )}

              {/* ===================================
                  CLOSE
              ==================================== */}

              {canClose(tab.id) && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();

                    closeTab(tab.id);
                  }}
                  className="rounded p-1 opacity-0 transition group-hover:opacity-100 hover:bg-[#3E3E42]"
                >
                  <X size={14} />
                </button>
              )}
            </motion.button>
          );
        })}
      </AnimatePresence>
    </div>
  );
}