// src/components/skills/search/SearchBox.tsx

"use client";

/**
 * ==========================================================
 * SEARCH BOX
 * ==========================================================
 * Reusable VS Code style search input.
 */

import { forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  X,
} from "lucide-react";

interface SearchBoxProps {
  value: string;

  placeholder?: string;

  autoFocus?: boolean;

  onChange: (value: string) => void;

  onClear?: () => void;

  className?: string;
}

const SearchBox = forwardRef<
  HTMLInputElement,
  SearchBoxProps
>(
  (
    {
      value,
      placeholder = "Search...",
      autoFocus = false,
      onChange,
      onClear,
      className = "",
    },
    ref
  ) => {
    return (
      <div
        className={`relative ${className}`}
      >
        {/* ==========================================
            SEARCH ICON
        ========================================== */}

        <Search
          size={15}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#8A8A8A]"
        />

        {/* ==========================================
            INPUT
        ========================================== */}

        <input
          ref={ref}
          autoFocus={autoFocus}
          autoComplete="off"
          spellCheck={false}
          value={value}
          placeholder={placeholder}
          onChange={(e) =>
            onChange(e.target.value)
          }
          className="
            h-10
            w-full
            rounded-md
            border
            border-[#3C3C3C]
            bg-[#1E1E1E]
            pl-10
            pr-10
            text-sm
            text-[#D4D4D4]
            outline-none
            transition-all
            duration-200
            placeholder:text-[#6A6A6A]
            focus:border-[#007ACC]
            focus:ring-1
            focus:ring-[#007ACC]
          "
        />

        {/* ==========================================
            CLEAR BUTTON
        ========================================== */}

        <AnimatePresence>
          {value.length > 0 && (
            <motion.button
              type="button"
              initial={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0,
                opacity: 0,
              }}
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
              }}
              onClick={() => {
                onClear?.();
                onChange("");
              }}
              className="
                absolute
                right-2
                top-1/2
                flex
                h-6
                w-6
                -translate-y-1/2
                items-center
                justify-center
                rounded
                text-[#8A8A8A]
                transition-colors
                hover:bg-[#37373D]
                hover:text-white
              "
            >
              <X size={14} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

SearchBox.displayName =
  "SearchBox";

export default SearchBox;