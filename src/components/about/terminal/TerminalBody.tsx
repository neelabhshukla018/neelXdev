"use client";

import { TerminalData } from "../types";

import TerminalPrompt from "./TerminalPrompt";
import Typewriter from "./Typewriter";

interface TerminalBodyProps {
  data: TerminalData;
}

const TerminalBody = ({ data }: TerminalBodyProps) => {
  return (
    <div className="flex h-full flex-col overflow-y-auto bg-[#0d1117] p-6">
      {/* Last Login */}
      <p className="mb-6 font-mono text-sm text-[#8B949E]">
        Last login: Today on ttys000
      </p>

      {/* Prompt */}
      <TerminalPrompt command={data.command} />

      {/* File Information */}
      <div className="mb-6 font-mono text-sm">
        <span className="text-[#8B949E]">Opening </span>

        <span className="text-[#58A6FF]">
          {data.filename}
        </span>
      </div>

      {/* Terminal Output */}
      <div className="flex-1">
        <Typewriter
          text={data.content}
          speed={15}
        />
      </div>
    </div>
  );
};

export default TerminalBody;