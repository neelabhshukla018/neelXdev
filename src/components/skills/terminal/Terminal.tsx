// src/components/skills/terminal/Terminal.tsx

"use client";

/**
 * ==========================================================
 * TERMINAL
 * ==========================================================
 * VS Code Terminal
 *
 * Parent Component
 */

import { TerminalSquare } from "lucide-react";

import { useTerminal } from "../hooks/useTerminal";

import CommandHistory from "./CommandHistory";
import TerminalOutput from "./TerminalOutput";
import TerminalPrompt from "./TerminalPrompt";

export default function Terminal() {
  const {
    history,
    currentCommand,
    setCurrentCommand,

    executeCommand,

    prompt,

    terminalOpen,
  } = useTerminal();

  if (!terminalOpen) return null;

  return (
    <section className="flex h-full flex-col overflow-hidden rounded-lg border border-[#2B2B2B] bg-[#181818]">
      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="flex h-10 items-center justify-between border-b border-[#2B2B2B] bg-[#252526] px-4">
        <div className="flex items-center gap-2">
          <TerminalSquare
            size={16}
            className="text-[#CCCCCC]"
          />

          <span className="text-sm font-medium text-[#CCCCCC]">
            TERMINAL
          </span>
        </div>

        <span className="text-xs text-[#8A8A8A]">
          {history.length} Command
          {history.length !== 1 && "s"}
        </span>
      </div>

      {/* =====================================================
          BODY
      ====================================================== */}

      <div className="flex-1 overflow-y-auto px-4 py-4 font-mono text-[13px]">
        {/* Command History */}

        <CommandHistory />

        {/* Output */}

        <TerminalOutput />

        {/* Prompt */}

        <TerminalPrompt
          prompt={prompt}
          value={currentCommand}
          onChange={setCurrentCommand}
          onSubmit={executeCommand}
        />
      </div>
    </section>
  );
}