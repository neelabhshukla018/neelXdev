"use client";

import { motion } from "framer-motion";

import { Command } from "../types";

interface CommandItemProps {
  command: Command;
  label: string;
  icon?: string;
  active: boolean;
  onClick: (command: Command) => void;
}

const CommandItem = ({
  command,
  label,
  icon,
  active,
  onClick,
}: CommandItemProps) => {
  return (
    <motion.button
      whileHover={{ x: 6 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      onClick={() => onClick(command)}
      className={`
        group
        relative
        flex
        w-full
        items-center
        gap-3
        rounded-lg
        px-4
        py-2.5
        text-left
        transition-all
        duration-300

        ${
          active
            ? "bg-[#1f6feb]/10 text-[#3FB950]"
            : "text-gray-400 hover:bg-[#161b22] hover:text-white"
        }
      `}
    >
      {/* Left Active Bar */}
      <span
        className={`
          absolute
          left-0
          top-1/2
          h-6
          w-[3px]
          -translate-y-1/2
          rounded-r-full
          transition-all

          ${
            active
              ? "bg-[#3FB950] opacity-100"
              : "opacity-0 group-hover:opacity-40 bg-gray-500"
          }
        `}
      />

      {/* Chevron */}
      <span
        className={`transition-transform duration-200 ${
          active ? "translate-x-1 text-[#3FB950]" : ""
        }`}
      >
        ❯
      </span>

      {/* Icon */}
      {icon && (
        <span className="text-lg">
          {icon}
        </span>
      )}

      {/* Label */}
      <span className="font-mono text-[15px]">
        {label}
      </span>
    </motion.button>
  );
};

export default CommandItem;