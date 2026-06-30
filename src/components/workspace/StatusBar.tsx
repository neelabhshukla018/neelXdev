"use client";

import {
  Bell,
  Check,
  GitBranch,
  RefreshCcw,
  Smile,
  Wifi,
} from "lucide-react";

export default function StatusBar() {
  return (
    <footer
      className="
        flex
        h-6
        shrink-0
        items-center
        justify-between
        border-t
        border-[#0066b8]
        bg-[#007acc]
        px-2
        text-[10px]
        font-medium
        text-white
      "
    >
      {/* Left */}

      <div className="flex items-center">

        <div className="flex h-6 items-center gap-1 px-2 hover:bg-[#1a8fe6]">
          <GitBranch size={11} />
          <span>main</span>
        </div>

        <div className="flex h-6 items-center gap-1 px-2 hover:bg-[#1a8fe6]">
          <RefreshCcw size={10} />
          <span>0↓ 0↑</span>
        </div>

        <div className="flex h-6 items-center gap-1 px-2 hover:bg-[#1a8fe6]">
          <Check size={11} />
          <span>0 Problems</span>
        </div>

      </div>

      {/* Right */}

      <div className="flex items-center">

        <div className="px-2 hover:bg-[#1a8fe6]">
          Ln 34, Col 18
        </div>

        <div className="px-2 hover:bg-[#1a8fe6]">
          Spaces: 2
        </div>

        <div className="px-2 hover:bg-[#1a8fe6]">
          UTF-8
        </div>

        <div className="px-2 hover:bg-[#1a8fe6]">
          LF
        </div>

        <div className="px-2 hover:bg-[#1a8fe6]">
          TypeScript React
        </div>

        <div className="flex h-6 items-center gap-1 px-2 hover:bg-[#1a8fe6]">
          <Wifi size={11} />
        </div>

        <div className="flex h-6 items-center gap-1 px-2 hover:bg-[#1a8fe6]">
          <Bell size={11} />
        </div>

        <div className="flex h-6 items-center gap-1 px-2 hover:bg-[#1a8fe6]">
          <Smile size={11} />
        </div>

      </div>
    </footer>
  );
}