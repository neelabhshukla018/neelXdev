"use client";

import MiniCodeEditor from "./MiniCodeEditor";

import {
  Files,
  Search,
  GitBranch,
  MoreHorizontal,
} from "lucide-react";

export default function MiniVSCode() {
  return (
    <div
      className="
        flex
        h-[380px]
        w-full
        overflow-hidden

        bg-[#1e1e1e]
      "
    >


      {/* ================= Right Side ================= */}

      <div className="flex min-w-0 flex-1 flex-col">

        {/* ================= Tabs ================= */}

        <div
          className="
            flex
            h-10
            items-center
            justify-between

            border-b
            border-[#2d2d2d]

            bg-[#252526]

            px-3
          "
        >
          <div
            className="
              rounded-t-md

              border-t-2
              border-blue-500

              bg-[#1e1e1e]

              px-3
              py-2

              text-[11px]
              font-medium
              text-white
            "
          >
            Hero.tsx
          </div>

          <MoreHorizontal
            size={15}
            className="text-zinc-500"
          />
        </div>

        {/* ================= Breadcrumb ================= */}

        <div
          className="
            flex
            h-7
            items-center

            border-b
            border-[#2d2d2d]

            bg-[#202020]

            px-3

            text-[10px]
            text-zinc-500
          "
        >
          src / app / portfolio.tsx
        </div>

        {/* ================= Code ================= */}

        <div className="flex-1 overflow-hidden">
          <MiniCodeEditor />
        </div>

      
      </div>
    </div>
  );
}