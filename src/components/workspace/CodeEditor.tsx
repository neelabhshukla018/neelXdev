"use client";

import LiveTyping from "./LiveTyping";

export default function CodeEditor() {
  return (
    <div className="flex h-full flex-1 bg-[#1e1e1e]">
      {/* ================= Line Numbers ================= */}

      <div
        className="
          flex
          w-10
          sm:w-12
          lg:w-16

          shrink-0
          flex-col
          items-end

          border-r
          border-[#2d2d2d]

          bg-[#1e1e1e]

          px-2
          sm:px-2.5
          lg:px-3

          py-5
          lg:py-7

          font-mono

          text-[11px]
          sm:text-xs
          lg:text-[14px]

          leading-6
          lg:leading-8

          text-[#6b6b6b]

          select-none
        "
      >
        {Array.from({ length: 28 }).map((_, i) => (
          <span key={i}>{i + 1}</span>
        ))}
      </div>

      {/* ================= Editor ================= */}

      <div
        className="
          flex
          flex-1
          flex-col
          overflow-hidden
        "
      >
        <div
          className="
            flex-1

            overflow-auto

            px-3
            sm:px-5
            lg:px-8

            py-5
            lg:py-7

            font-mono

            text-[12px]
            sm:text-[13px]
            lg:text-[15px]

            leading-6
            lg:leading-8
          "
        >
          <LiveTyping />
        </div>
      </div>
    </div>
  );
}