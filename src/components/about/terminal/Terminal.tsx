"use client";

import { TerminalData } from "../types";

import TerminalBody from "./TerminalBody";
import TerminalHeader from "./TerminalHeader";

import TerminalTransition from "../animations/TerminalTransition";

interface TerminalProps {
  data: TerminalData;
}

const Terminal = ({ data }: TerminalProps) => {
  return (
    <div
      className="
        flex
        h-full
        min-h-[650px]
        w-full
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-[#30363d]
        bg-[#0d1117]
        shadow-[0_25px_60px_rgba(0,0,0,0.45)]
      "
    >
      <TerminalHeader />

      <div className="flex-1 overflow-hidden">
        <TerminalTransition transitionKey={data.command}>
          <TerminalBody data={data} />
        </TerminalTransition>
      </div>
    </div>
  );
};

export default Terminal;