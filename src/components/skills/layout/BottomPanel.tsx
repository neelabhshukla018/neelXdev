// src/components/skills/layout/BottomPanel.tsx

"use client";

/**
 * ==========================================================
 * BOTTOM PANEL
 * ==========================================================
 * VS Code Integrated Terminal
 */

import {
  ChevronDown,
  ChevronUp,
  Terminal,
  AlertCircle,
  FileText,
  Trash2,
} from "lucide-react";

import { useTerminal } from "../hooks/useTerminal";

export default function BottomPanel() {
  const {
    terminalOpen,

    toggleTerminal,

    prompt,

    history,

    currentCommand,

    setCurrentCommand,

    executeCommand,

    clearHistory,
  } = useTerminal();

  return (
    <div
      className={`border-t border-[#2B2B2B] bg-[#181818] transition-all duration-300 ${
       terminalOpen
  ? "h-[220px] sm:h-[250px] lg:h-[280px]"
  : "h-10"
      }`}
    >
      {/* =====================================================
          HEADER
      ====================================================== */}

    <div
className="
flex
h-10
items-center
justify-between
border-b
border-[#2B2B2B]
px-2
sm:px-4
"
>  
        {/* Tabs */}

        <div
className="
flex
items-center
gap-3
sm:gap-5
"
>
          <button className="flex items-center gap-2 border-b-2 border-[#007ACC] pb-1 text-xs font-semibold uppercase tracking-wide text-white">
            <Terminal size={14} />
            Terminal
          </button>

         <div className="hidden sm:block">
  <button
    className="
      flex
      items-center
      gap-2
      text-xs
      uppercase
      tracking-wide
      text-[#8A8A8A]
      hover:text-white
    "
  >
    <AlertCircle size={14} />
    Problems
  </button>
</div>

         <div className="hidden md:block">
  <button
    className="
      flex
      items-center
      gap-2
      text-xs
      uppercase
      tracking-wide
      text-[#8A8A8A]
      hover:text-white
    "
  >
    <FileText size={14} />
    Output
  </button>
</div>
        </div>

        {/* Actions */}

        <div className="flex items-center gap-2">
          <button
            onClick={clearHistory}
            className="rounded p-1.5 text-[#8A8A8A] transition hover:bg-[#2A2D2E] hover:text-white"
          >
            <Trash2 size={15} />
          </button>

          <button
            onClick={toggleTerminal}
            className="rounded p-1.5 text-[#8A8A8A] transition hover:bg-[#2A2D2E] hover:text-white"
          >
            {terminalOpen ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronUp size={16} />
            )}
          </button>
        </div>
      </div>

      {/* =====================================================
          TERMINAL BODY
      ====================================================== */}

      {terminalOpen && (
        <div className="flex h-[calc(100%-40px)] flex-col">
          {/* History */}

          <div className="flex-1 overflow-y-auto px-5 py-4 font-mono text-[14px]">
            {history.map((entry) => (
              <div
                key={entry.id}
                className="mb-5"
              >
                {/* Command */}

                <div className="flex items-center gap-2">
                  <span className="text-[#4CAF50]">
                    {prompt}
                  </span>

                  <span className="text-white">
                    {entry.command}
                  </span>
                </div>

                {/* Output */}

                <div className="ml-3 mt-2 space-y-1">
                  {entry.output.map(
                    (line, index) => (
                      <div
                        key={index}
                        className="text-[#BDBDBD]"
                      >
                        {line}
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* =================================================
              INPUT
          ================================================== */}

          <form
            onSubmit={(e) => {
              e.preventDefault();

              executeCommand(currentCommand);
            }}
            className="border-t border-[#2B2B2B] px-5 py-3"
          >
            <div className="flex items-center gap-3 font-mono text-[14px]">
              <span className="whitespace-nowrap text-[#4CAF50]">
                {prompt}
              </span>

              <input
                autoComplete="off"
                spellCheck={false}
                value={currentCommand}
                onChange={(e) =>
                  setCurrentCommand(
                    e.target.value
                  )
                }
                placeholder="Type a command..."
                className="flex-1 bg-transparent text-white outline-none placeholder:text-[#6B6B6B]"
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}