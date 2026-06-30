"use client";

import LiveTyping from "./LiveTyping";

export default function CodeEditor() {
  return (
    <div className="flex h-full flex-1 bg-[#1e1e1e]">
      {/* ================= Line Numbers ================= */}

      <div
        className="
          flex
          w-16
          shrink-0
          flex-col
          items-end
          border-r
          border-[#2d2d2d]
          bg-[#1e1e1e]
          px-3
          py-7
          font-mono
          text-[14px]
          leading-8
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
            overflow-hidden
            px-8
            py-7
            font-mono
            text-[15px]
            leading-8
          "
        >
          <LiveTyping />
        </div>
      </div>
    </div>
  );
}