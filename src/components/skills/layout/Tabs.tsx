// src/components/skills/layout/Tabs.tsx

"use client";

/**
 * ==========================================================
 * TABS
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

export default function Tabs() {
  const {
    tabs,
    activeTabId,

    setActiveTab,
    closeTab,

    isPinned,
    canClose,
    isDirty,
  } = useTabs();

  return (
   <div
  className="
    flex
    h-10
    items-center
    overflow-x-auto
    border-b
    border-[#2B2B2B]
    bg-[#252526]
    scrollbar-thin
    scrollbar-thumb-[#3A3A3A]
  "
>
      <AnimatePresence initial={false}>
        {tabs.map((tab) => {
          const Icon: ElementType = tab.icon ?? FileCode2;

          const active = tab.id === activeTabId;

          return (
            <motion.div
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
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`group relative flex h-full min-w-[130px]
sm:min-w-[150px]
md:min-w-[180px] cursor-pointer items-center gap-2 border-r border-[#2B2B2B] px-4 transition-all

${
  active
    ? "bg-[#1E1E1E] text-white"
    : "bg-[#2D2D2D] text-[#B8B8B8] hover:bg-[#333333]"
}`}
            >
              {/* ==========================================
                  ACTIVE TOP BORDER
              =========================================== */}

              {active && (
                <motion.div
                  layoutId="tab-active-line"
                  className="absolute left-0 top-0 h-[2px] w-full bg-[#007ACC]"
                />
              )}

              {/* ==========================================
                  FILE ICON
              =========================================== */}

              <Icon
                size={14}
                color={
                  active
                    ? "#4FC1FF"
                    : "#7EBAFF"
                }
              />

              {/* ==========================================
                  FILE NAME
              =========================================== */}

              <span
 className="
 flex-1
 truncate
 text-xs
 sm:text-sm
 "
>
                {tab.fileName}
              </span>

              {/* ==========================================
                  DIRTY INDICATOR
              =========================================== */}

              {isDirty(tab.id) && (
                <div className="h-2 w-2 rounded-full bg-white" />
              )}

              {/* ==========================================
                  PIN
              =========================================== */}

              {isPinned(tab.id) && (
                <Pin
                  size={13}
                  className="text-[#8E8E8E]"
                />
              )}

              {/* ==========================================
                  CLOSE BUTTON
              =========================================== */}

              {canClose(tab.id) && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();

                    closeTab(tab.id);
                  }}
className="
rounded
p-0.5
opacity-100
sm:opacity-0
transition
sm:group-hover:opacity-100
hover:bg-[#3E3E42]
"                >
                  <X size={14} />
                </button>
              )}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}