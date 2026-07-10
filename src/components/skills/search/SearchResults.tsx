// src/components/skills/search/SearchResults.tsx

"use client";

/**
 * ==========================================================
 * SEARCH RESULTS
 * ==========================================================
 * Displays filtered skills from the explorer search.
 */

import { motion, AnimatePresence } from "framer-motion";
import {
  FileCode2,
  SearchX,
} from "lucide-react";

import { useExplorer } from "../hooks/useExplorer";

export default function SearchResults() {
  const {
    search,
    filteredSkills,
    openTab,
  } = useExplorer();

  if (!search.trim()) return null;

  return (
    <div className="overflow-hidden rounded-lg border border-[#2B2B2B] bg-[#1E1E1E]">
      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="flex items-center justify-between border-b border-[#2B2B2B] bg-[#252526] px-4 py-3">
        <h3 className="text-sm font-semibold text-white">
          Search Results
        </h3>

        <span className="text-xs text-[#8A8A8A]">
          {filteredSkills.length} found
        </span>
      </div>

      {/* =====================================================
          RESULTS
      ====================================================== */}

      <div className="max-h-[420px] overflow-y-auto">
        <AnimatePresence>
          {filteredSkills.length === 0 ? (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              className="flex flex-col items-center justify-center py-12"
            >
              <SearchX
                size={34}
                className="mb-3 text-[#666]"
              />

              <p className="text-sm text-[#8A8A8A]">
                No matching skills found.
              </p>
            </motion.div>
          ) : (
            filteredSkills.map(
              (skill, index) => (
                <motion.button
                  key={skill.id}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.04,
                  }}
                  whileHover={{
                    backgroundColor:
                      "#2A2D2E",
                  }}
                  onClick={() =>
                    openTab(skill.id)
                  }
                  className="flex w-full items-center gap-3 border-b border-[#2B2B2B] px-4 py-3 text-left last:border-b-0"
                >
                  {/* Icon */}

                  <FileCode2
                    size={18}
                    color={skill.color}
                  />

                  {/* Info */}

                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-white">
                      {skill.name}
                    </h4>

                    <p className="text-xs capitalize text-[#8A8A8A]">
                      {skill.category}
                    </p>
                  </div>

                  {/* Level */}

                  <span
                    className="rounded-full px-2 py-1 text-[11px] font-semibold"
                    style={{
                      background: `${skill.color}20`,
                      color: skill.color,
                    }}
                  >
                    {skill.level}
                  </span>
                </motion.button>
              )
            )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}