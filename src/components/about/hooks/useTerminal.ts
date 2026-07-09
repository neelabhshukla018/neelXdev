"use client";

import { useMemo, useState } from "react";

import { Command } from "../types";
import { terminalData } from "../data";

const DEFAULT_COMMAND: Command = "education";

export const useTerminal = () => {
  const [activeCommand, setActiveCommand] =
    useState<Command>(DEFAULT_COMMAND);

  const currentData = useMemo(() => {
    return terminalData[activeCommand];
  }, [activeCommand]);

  const selectCommand = (command: Command) => {
    if (command === activeCommand) return;

    setActiveCommand(command);
  };

  return {
    activeCommand,
    currentData,
    selectCommand,
  };
};