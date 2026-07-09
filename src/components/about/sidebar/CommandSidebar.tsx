"use client";

import CommandItem from "./CommandItem";
import SidebarHeader from "./SidebarHeader";

import { COMMANDS } from "../constants/aboutCommands";
import { Command } from "../types";

interface CommandSidebarProps {
  activeCommand: Command;
  onSelect: (command: Command) => void;
}

const CommandSidebar = ({
  activeCommand,
  onSelect,
}: CommandSidebarProps) => {
  return (
    <aside
      className="
        flex
        w-full
        flex-col
        border-b
        border-[#30363d]
        bg-[#0d1117]
        lg:w-[280px]
        lg:border-b-0
        lg:border-r
        xl:w-[300px]
      "
    >
      {/* Header */}
      <SidebarHeader />

      {/* Command List */}
      <div className="flex-1 space-y-2 overflow-y-auto px-3 py-4">
        {COMMANDS.map((item) => (
          <CommandItem
            key={item.id}
            command={item.id}
            label={item.label}
            icon={item.icon}
            active={activeCommand === item.id}
            onClick={onSelect}
          />
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-[#30363d] px-5 py-4">
        <div className="font-mono text-xs text-gray-500">
          <p>Portfolio v2.0.0</p>

          <div className="mt-2 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#3FB950]" />
            <span className="text-[#3FB950]">
              Terminal Ready
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default CommandSidebar;