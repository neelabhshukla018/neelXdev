"use client";

import MiniVSCode from "./MiniVSCode";

export default function MiniMac() {
  return (
    <div
      className="
        relative
        mx-auto
        w-full
        max-w-[360px]
      "
    >
      {/* Ambient Glow */}

      <div
        className="
          absolute
          inset-0
          -z-10

          rounded-full

          bg-gradient-to-r
          from-cyan-500/20
          via-violet-500/20
          to-blue-500/20

          blur-[90px]
        "
      />

      {/* Floating Shadow */}

      <div
        className="
          absolute
          left-1/2
          top-full

          h-10
          w-[75%]

          -translate-x-1/2

          rounded-full
          bg-black/40

          blur-2xl
        "
      />

      {/* ================= Mac Window ================= */}

      <div
        className="
          relative

          overflow-hidden

          rounded-[26px]

          border
          border-white/10

          bg-[#111111]

          shadow-[0_25px_80px_rgba(0,0,0,.45)]
        "
      >
        {/* Glass Reflection */}

        <div
          className="
            pointer-events-none

            absolute
            inset-0

            bg-gradient-to-br
            from-white/10
            via-transparent
            to-transparent
          "
        />

        {/* ================= Title Bar ================= */}

        <div
          className="
            flex
            items-center
            justify-between

            border-b
            border-white/10

            bg-[#1a1a1a]

            px-4
            py-3
          "
        >
          {/* Traffic Lights */}

          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />

            <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />

            <span className="h-3 w-3 rounded-full bg-[#28C840]" />
          </div>

          {/* File */}

          <div
            className="
              rounded-full

              bg-white/5

              px-4
              py-1

              text-[11px]
              font-medium
              text-zinc-300
            "
          >
            neelabh's_portfolio.tsx
          </div>

          {/* Spacer */}

          <div className="w-8" />
        </div>

        {/* ================= VS Code ================= */}

        <MiniVSCode />
      </div>
    </div>
  );
}