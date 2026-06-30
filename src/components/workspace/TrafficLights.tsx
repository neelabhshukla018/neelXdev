"use client";

import { Minus, Square, X } from "lucide-react";

export default function TrafficLights() {
  return (
    <div className="flex items-center gap-[7px]">

      {/* Close */}

      <button
        aria-label="Close"
        className="
          group
          relative
          flex
          h-3
          w-3
          items-center
          justify-center
          rounded-full
          bg-[#ff5f57]
          shadow-[inset_0_1px_1px_rgba(255,255,255,.25)]
          transition-all
          duration-200
          hover:scale-110
          hover:brightness-105
        "
      >
        <X
          size={7}
          strokeWidth={3}
          className="
            text-[#5b1d1d]
            opacity-0
            transition-opacity
            duration-150
            group-hover:opacity-100
          "
        />
      </button>

      {/* Minimize */}

      <button
        aria-label="Minimize"
        className="
          group
          relative
          flex
          h-3
          w-3
          items-center
          justify-center
          rounded-full
          bg-[#febc2e]
          shadow-[inset_0_1px_1px_rgba(255,255,255,.25)]
          transition-all
          duration-200
          hover:scale-110
          hover:brightness-105
        "
      >
        <Minus
          size={7}
          strokeWidth={3}
          className="
            text-[#6b4a00]
            opacity-0
            transition-opacity
            duration-150
            group-hover:opacity-100
          "
        />
      </button>

      {/* Maximize */}

      <button
        aria-label="Maximize"
        className="
          group
          relative
          flex
          h-3
          w-3
          items-center
          justify-center
          rounded-full
          bg-[#28c840]
          shadow-[inset_0_1px_1px_rgba(255,255,255,.25)]
          transition-all
          duration-200
          hover:scale-110
          hover:brightness-105
        "
      >
        <Square
          size={5.5}
          strokeWidth={3}
          className="
            text-[#164f23]
            opacity-0
            transition-opacity
            duration-150
            group-hover:opacity-100
          "
        />
      </button>

    </div>
  );
}