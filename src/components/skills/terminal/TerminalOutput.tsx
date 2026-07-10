// src/components/skills/terminal/TerminalOutput.tsx

"use client";

/**
 * ==========================================================
 * TERMINAL OUTPUT
 * ==========================================================
 * Displays the latest command output.
 */

import { motion, AnimatePresence } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  Info,
} from "lucide-react";

import { useTerminal } from "../hooks/useTerminal";

export default function TerminalOutput() {
  const { history } = useTerminal();

  if (!history.length) return null;

  const latest = history[history.length - 1];

  if (!latest.output?.length) return null;

  return (
    <div className="mb-5">
      <AnimatePresence mode="wait">
        <motion.div
          key={latest.id}
          initial={{
            opacity: 0,
            y: 8,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.25,
          }}
          className="space-y-2"
        >
          {latest.output.map(
            (
              line: string,
              index: number
            ) => (
              <OutputLine
                key={index}
                text={line}
                success={
                  latest.success !== false
                }
              />
            )
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ==========================================================
   OUTPUT LINE
========================================================== */

interface OutputLineProps {
  text: string;
  success: boolean;
}

function OutputLine({
  text,
  success,
}: OutputLineProps) {
  const lower = text.toLowerCase();

  const isError =
    lower.includes("error") ||
    lower.includes("failed") ||
    lower.includes("invalid");

  const isInfo =
    lower.includes("info") ||
    lower.includes("hint") ||
    lower.includes("tip");

  let Icon = CheckCircle2;
  let color = "#4ADE80";

  if (!success || isError) {
    Icon = AlertCircle;
    color = "#EF4444";
  } else if (isInfo) {
    Icon = Info;
    color = "#3B82F6";
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -10,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      className="flex items-start gap-3 rounded-md border border-[#2D2D2D] bg-[#1A1A1A] px-4 py-3"
    >
      <Icon
        size={16}
        color={color}
        className="mt-0.5 flex-shrink-0"
      />

      <pre className="whitespace-pre-wrap break-words font-mono text-[13px] leading-6 text-[#D4D4D4]">
        {text}
      </pre>
    </motion.div>
  );
}