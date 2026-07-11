// src/components/skills/hooks/useTerminal.ts

"use client";

/**
 * ==========================================================
 * USE TERMINAL
 * ==========================================================
 * Handles the VS Code integrated terminal.
 */

import { useMemo, useState } from "react";

import { useSkills } from "../context/SkillsContext";

interface TerminalCommand {
  id: string;

  command: string;

  output: string[];

  timestamp: number;

  success: boolean;
}

const INITIAL_HISTORY: TerminalCommand[] = [
  {
    id: "1",
    command: "whoami",
    output: ["Neelabh Shukla"],
    timestamp: Date.now() - 180000,
    success: true,
  },
  {
    id: "2",
    command: "pwd",
    output: ["/portfolio/src/components/skills"],
    timestamp: Date.now() - 120000,
    success: true,
  },
  {
    id: "3",
    command: "ls",
    output: [
      "frontend/",
      "backend/",
      "database/",
      "deployment/",
      "api/",
      "ui/",
      "ai/",
    ],
    timestamp: Date.now() - 60000,
    success: true,
  },
];

export function useTerminal() {
  const {
    terminalOpen,
    toggleTerminal,
    selectedSkill,
  } = useSkills();

  /* ======================================================
   * STATE
   * ==================================================== */

  const [history, setHistory] =
    useState<TerminalCommand[]>(INITIAL_HISTORY);

  const [currentCommand, setCurrentCommand] =
    useState("");

  /* ======================================================
   * HELPERS
   * ==================================================== */

  const prompt = useMemo(() => {
    return "neelabh@portfolio:~/skills$";
  }, []);

  const currentDirectory = useMemo(() => {
    return "/portfolio/src/components/skills";
  }, []);

  /* ======================================================
   * COMMAND EXECUTION
   * ==================================================== */

  const executeCommand = (command: string) => {
    const value = command.trim();

    if (!value) return;

    let output: string[] = [];
    let success = true;

    switch (value.toLowerCase()) {
      case "help":
        output = [
          "Available commands:",
          "",
          "help",
          "clear",
          "whoami",
          "pwd",
          "ls",
          "skill",
        ];
        break;

      case "whoami":
        output = ["Neelabh Shukla"];
        break;

      case "pwd":
        output = [currentDirectory];
        break;

      case "ls":
        output = [
          "frontend/",
          "backend/",
          "database/",
          "deployment/",
          "api/",
          "ui/",
          "ai/",
        ];
        break;

      case "skill":
        output = selectedSkill
          ? [
              `Name: ${selectedSkill.name}`,
              `Category: ${selectedSkill.category}`,
              `Level: ${selectedSkill.level}`,
              `Status: ${selectedSkill.status}`,
            ]
          : ["No skill selected."];
        break;

      case "clear":
        setHistory([]);
        setCurrentCommand("");
        return;

      default:
        success = false;

        output = [
          `Command not found: ${value}`,
          "Type 'help' to see available commands.",
        ];
    }

    setHistory((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        command: value,
        output,
        timestamp: Date.now(),
        success,
      },
    ]);

    setCurrentCommand("");
  };

  /* ======================================================
   * CLEAR HISTORY
   * ==================================================== */

  const clearHistory = () => {
    setHistory([]);
  };

  /* ======================================================
   * LAST COMMAND
   * ==================================================== */

  const lastCommand = useMemo(() => {
    return history.at(-1) ?? null;
  }, [history]);

  /* ======================================================
   * RETURN
   * ==================================================== */

  return {
    terminalOpen,

    toggleTerminal,

    prompt,

    currentDirectory,

    currentCommand,

    setCurrentCommand,

    history,

    lastCommand,

    executeCommand,

    clearHistory,
  };
}