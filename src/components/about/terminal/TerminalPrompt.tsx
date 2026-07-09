"use client";

import BlinkingCursor from "./BlinkingCursor";

interface TerminalPromptProps {
  command: string;
}

const TerminalPrompt = ({
  command,
}: TerminalPromptProps) => {
  return (
    <div className="mb-6 flex flex-wrap items-center gap-2 font-mono text-[15px] leading-7">
      {/* Username */}
      <span className="text-[#3FB950]">
        neelabh@portfolio
      </span>

      {/* Current Directory */}
      <span className="text-[#58A6FF]">
        ~/about
      </span>

      {/* Prompt */}
      <span className="text-white">
        %
      </span>

      {/* Command */}
      <span className="text-[#C9D1D9]">
        {command}
      </span>

      {/* Cursor */}
      <BlinkingCursor />
    </div>
  );
};

export default TerminalPrompt;