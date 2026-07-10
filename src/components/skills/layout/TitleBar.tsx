// src/components/skills/layout/TitleBar.tsx

"use client";

/**
 * ==========================================================
 * TITLE BAR
 * ==========================================================
 * macOS + VS Code style title bar
 */

import {
  Search,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  SplitSquareHorizontal,
} from "lucide-react";

import { useEditor } from "../hooks/useEditor";

export default function TitleBar() {
  const { fileName } = useEditor();

  return (
    <header
  className="
    flex
    h-12
    w-full
    items-center
    justify-between
    border-b
    border-[#313131]
    bg-[#181818]
    px-2
    sm:px-3
    select-none
  "
>
      {/* =====================================================
          LEFT
      ====================================================== */}

      <div
  className="
    flex
    items-center
    gap-2
    sm:gap-4
  "
>
        {/* macOS Buttons */}

        <div
  className="
    flex
    items-center
    gap-1.5
    sm:gap-2
  "
>
          <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#FF5F57]" />

          <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#FEBC2E]" />

          <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#28C840]" />
        </div>

        {/* Navigation */}

       <div
  className="
    hidden
    sm:flex
    items-center
    gap-1
  "
>
          <button className="rounded p-1.5 text-[#858585] transition hover:bg-[#2A2D2E] hover:text-white">
            <ChevronLeft size={16} />
          </button>

          <button className="rounded p-1.5 text-[#858585] transition hover:bg-[#2A2D2E] hover:text-white">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* =====================================================
          CENTER
      ====================================================== */}

      <div
  className="
    flex
    flex-1
    items-center
    justify-center
    px-2
    sm:px-6
  "
>
       <div
className="
flex
h-8
w-full
max-w-xl
items-center
gap-2
rounded-md
border
border-[#2F2F2F]
bg-[#252526]
px-2
sm:px-3
"
>
          <Search
            size={15}
            className="text-[#8B8B8B]"
          />

          <input
            readOnly
            value={fileName || "Search"}
            className="
w-full
truncate
bg-transparent
text-xs
sm:text-sm
text-[#C8C8C8]
"
          />
        </div>
      </div>

      {/* =====================================================
          RIGHT
      ====================================================== */}

      <div
className="
hidden
sm:flex
items-center
gap-1
"
>
        <button className="rounded p-2 text-[#8A8A8A] transition hover:bg-[#2A2D2E] hover:text-white">
          <SplitSquareHorizontal size={17} />
        </button>

        <button className="rounded p-2 text-[#8A8A8A] transition hover:bg-[#2A2D2E] hover:text-white">
          <MoreHorizontal size={17} />
        </button>
      </div>
    </header>
  );
}