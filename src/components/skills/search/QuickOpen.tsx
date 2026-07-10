// src/components/skills/search/QuickOpen.tsx

"use client";

/**
 * ==========================================================
 * QUICK OPEN
 * ==========================================================
 * VS Code Ctrl+P style quick file search.
 */

import { useEffect, useMemo } from "react";

import { motion, AnimatePresence } from "framer-motion";
import {
  FileCode2,
  Search,
  X,
} from "lucide-react";

import { useExplorer } from "../hooks/useExplorer";
import { useTabs } from "../hooks/useTabs";

export default function QuickOpen() {
  const {
    quickOpen,

    quickOpenQuery,

    setQuickOpenQuery,

    closeQuickOpen,

    allSkills,
  } = useExplorer();

  const { openTab } = useTabs();

  /* ==========================================================
     ESC TO CLOSE
  ========================================================== */

  useEffect(() => {
    if (!quickOpen) return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeQuickOpen();
      }
    };

    window.addEventListener(
      "keydown",
      handler
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handler
      );
  }, [quickOpen, closeQuickOpen]);

  /* ==========================================================
     FILTER
  ========================================================== */

  const results = useMemo(() => {
    if (!quickOpenQuery.trim())
      return allSkills;

    return allSkills.filter((skill) => {
      const q =
        quickOpenQuery.toLowerCase();

      return (
        skill.name
          .toLowerCase()
          .includes(q) ||
        skill.shortName
          .toLowerCase()
          .includes(q) ||
        skill.category
          .toLowerCase()
          .includes(q)
      );
    });
  }, [
    allSkills,
    quickOpenQuery,
  ]);

  /* ==========================================================
     HIDDEN
  ========================================================== */

  if (!quickOpen) return null;

  /* ==========================================================
     RENDER
  ========================================================== */

  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        className="fixed inset-0 z-[999] flex items-start justify-center bg-black/50 pt-24 backdrop-blur-sm"
      >
        <motion.div
          initial={{
            y: -40,
            opacity: 0,
            scale: 0.95,
          }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          exit={{
            y: -20,
            opacity: 0,
          }}
          className="w-full max-w-2xl overflow-hidden rounded-xl border border-[#2B2B2B] bg-[#1E1E1E] shadow-2xl"
        >
          {/* ==========================================
              SEARCH
          ========================================== */}

          <div className="flex items-center border-b border-[#2B2B2B] px-4 py-3">
            <Search
              size={18}
              className="mr-3 text-[#7A7A7A]"
            />

            <input
              autoFocus
              value={quickOpenQuery}
              spellCheck={false}
              autoComplete="off"
              placeholder="Type a skill name..."
              onChange={(e) =>
                setQuickOpenQuery(
                  e.target.value
                )
              }
              className="flex-1 bg-transparent text-[15px] text-white outline-none placeholder:text-[#707070]"
            />

            <button
              onClick={closeQuickOpen}
              className="rounded p-1 text-[#8A8A8A] hover:bg-[#2A2D2E]"
            >
              <X size={16} />
            </button>
          </div>

          {/* ==========================================
              RESULTS
          ========================================== */}

          <div className="max-h-[420px] overflow-y-auto">
            {results.length === 0 ? (
              <div className="py-10 text-center text-sm text-[#7A7A7A]">
                No skills found.
              </div>
            ) : (
              results.map((skill) => (
                <button
                  key={skill.id}
                  onClick={() => {
                    openTab(skill.id);

                    closeQuickOpen();
                  }}
                  className="flex w-full items-center gap-4 border-b border-[#252526] px-5 py-4 text-left transition hover:bg-[#252526]"
                >
                  <FileCode2
                    size={18}
                    color={skill.color}
                  />

                  <div className="flex-1">
                    <h4 className="font-medium text-white">
                      {skill.name}
                    </h4>

                    <p className="mt-1 text-xs capitalize text-[#8A8A8A]">
                      {skill.category}
                    </p>
                  </div>

                  <span
                    className="rounded-full px-2 py-1 text-[11px] font-semibold"
                    style={{
                      background:
                        `${skill.color}20`,
                      color: skill.color,
                    }}
                  >
                    {skill.level}
                  </span>
                </button>
              ))
            )}
          </div>

          {/* ==========================================
              FOOTER
          ========================================== */}

          <div className="flex items-center justify-between border-t border-[#2B2B2B] bg-[#252526] px-4 py-2 text-xs text-[#8A8A8A]">
            <span>
              {results.length} Results
            </span>

            <span>
              ↵ Open • ESC Close
            </span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}