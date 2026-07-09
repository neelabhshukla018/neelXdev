"use client";

import { TerminalSquare } from "lucide-react";

const TerminalHeader = () => {
  return (
    <div className="flex h-14 items-center justify-between rounded-t-2xl border-b border-[#30363d] bg-[#161b22] px-5">
      {/* Left */}
      <div className="flex items-center gap-4">
        {/* macOS Buttons */}
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>

        {/* Terminal Icon */}
        <div className="flex items-center gap-2 rounded-md border border-[#30363d] bg-[#0d1117] px-2 py-1">
          <TerminalSquare
            size={16}
            className="text-[#3FB950]"
          />

          <span className="font-mono text-sm text-gray-300">
            About.tsx
          </span>
        </div>
      </div>

      {/* Right */}
      <div className="hidden items-center gap-3 text-xs font-mono text-gray-500 md:flex">
        <span>bash</span>

        <span className="h-1 w-1 rounded-full bg-gray-500" />

        <span>UTF-8</span>

        <span className="h-1 w-1 rounded-full bg-gray-500" />

        <span className="text-[#3FB950]">Running</span>
      </div>
    </div>
  );
};

export default TerminalHeader;