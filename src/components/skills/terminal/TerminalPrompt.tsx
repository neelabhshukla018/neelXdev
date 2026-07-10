// src/components/skills/terminal/TerminalPrompt.tsx

"use client";

/**
 * ==========================================================
 * TERMINAL PROMPT
 * ==========================================================
 * Interactive terminal input
 */

import {
  FormEvent,
  KeyboardEvent,
  useEffect,
  useRef,
} from "react";

interface TerminalPromptProps {
  prompt: string;

  value: string;

  onChange: (value: string) => void;

  onSubmit: (command: string) => void;
}

export default function TerminalPrompt({
  prompt,
  value,
  onChange,
  onSubmit,
}: TerminalPromptProps) {
  const inputRef =
    useRef<HTMLInputElement>(null);

  /* ======================================================
     AUTO FOCUS
  ====================================================== */

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  /* ======================================================
     SUBMIT
  ====================================================== */

  const handleSubmit = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const command = value.trim();

    if (!command) return;

    onSubmit(command);

    onChange("");
  };

  /* ======================================================
     KEYBOARD SHORTCUTS
  ====================================================== */

  const handleKeyDown = (
    e: KeyboardEvent<HTMLInputElement>
  ) => {
    switch (e.key) {
      case "Escape":
        onChange("");
        break;

      case "l":
        if (e.ctrlKey) {
          e.preventDefault();

          onChange("");
        }
        break;

      default:
        break;
    }
  };

  /* ======================================================
     RENDER
  ====================================================== */

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-3"
    >
      <div className="flex items-center gap-3 font-mono text-[13px]">
        {/* Prompt */}

        <span className="select-none whitespace-nowrap text-[#4EC9B0]">
          {prompt}
        </span>

        {/* Input */}

        <input
          ref={inputRef}
          autoComplete="off"
          spellCheck={false}
          value={value}
          onChange={(e) =>
            onChange(e.target.value)
          }
          onKeyDown={handleKeyDown}
          placeholder="Type a command..."
          className="flex-1 bg-transparent text-[#D4D4D4] outline-none placeholder:text-[#6A6A6A]"
        />
      </div>
    </form>
  );
}