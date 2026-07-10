// src/components/skills/terminal/CommandHistory.tsx

"use client";

/**
 * ==========================================================
 * COMMAND HISTORY
 * ==========================================================
 * Renders executed terminal commands.
 */

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock3,
  XCircle,
} from "lucide-react";

import { useTerminal } from "../hooks/useTerminal";

export default function CommandHistory() {
  const { history, prompt } = useTerminal();

  if (!history.length) {
    return (
      <div className="flex h-40 items-center justify-center text-sm text-[#6A6A6A]">
        No commands executed yet.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {history.map((entry, index) => (
        <motion.div
          key={entry.id}
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: index * 0.04,
          }}
          className="space-y-2"
        >
          {/* ==========================================
              COMMAND
          ========================================== */}

          <div className="flex items-center gap-2">
            <span className="text-[#4EC9B0]">
              {prompt}
            </span>

            <span className="break-all text-[#DCDCDC]">
              {entry.command}
            </span>
          </div>

          {/* ==========================================
              META
          ========================================== */}

          <div className="ml-5 flex items-center gap-4 text-[11px] text-[#7F7F7F]">
            <div className="flex items-center gap-1">
              <Clock3 size={12} />

              <span>
                {entry.timestamp
                  ? new Date(
                      entry.timestamp
                    ).toLocaleTimeString()
                  : "--:--"}
              </span>
            </div>

            <div className="flex items-center gap-1">
              {entry.success !== false ? (
                <>
                  <CheckCircle2
                    size={12}
                    className="text-green-500"
                  />

                  <span>Success</span>
                </>
              ) : (
                <>
                  <XCircle
                    size={12}
                    className="text-red-500"
                  />

                  <span>Failed</span>
                </>
              )}
            </div>
          </div>

          {/* ==========================================
              OUTPUT
          ========================================== */}

          {entry.output?.length > 0 && (
            <div className="ml-5 rounded-md border border-[#2D2D2D] bg-[#1A1A1A] px-4 py-3">
              {entry.output.map(
                (
                  line: string,
                  lineIndex: number
                ) => (
                  <div
                    key={lineIndex}
                    className="whitespace-pre-wrap break-words text-[13px] leading-6 text-[#BDBDBD]"
                  >
                    {line}
                  </div>
                )
              )}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}