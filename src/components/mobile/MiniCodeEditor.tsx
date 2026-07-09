"use client";

import { useEffect, useRef, useState } from "react";
import { codeLines } from "@/data/code";

const KEYWORDS = [
  "import",
  "from",
  "export",
  "default",
  "const",
  "let",
  "return",
  "async",
  "await",
  "function",
];

export default function MiniCodeEditor() {
  const editorRef = useRef<HTMLDivElement>(null);

  const [displayedLines, setDisplayedLines] = useState([""]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= codeLines.length) {
      const timer = setTimeout(() => {
        setDisplayedLines([""]);
        setLineIndex(0);
        setCharIndex(0);

        if (editorRef.current) {
          editorRef.current.scrollTop = 0;
        }
      }, 1800);

      return () => clearTimeout(timer);
    }

    const current = codeLines[lineIndex];

    if (charIndex < current.length) {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => {
          const copy = [...prev];
          copy[lineIndex] = current.slice(0, charIndex + 1);
          return copy;
        });

        setCharIndex((c) => c + 1);
      }, 18);

      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setDisplayedLines((prev) => [...prev, ""]);
      setLineIndex((l) => l + 1);
      setCharIndex(0);
    }, 80);

    return () => clearTimeout(timer);
  }, [charIndex, lineIndex]);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.scrollTop =
        editorRef.current.scrollHeight;
    }
  }, [displayedLines]);

  return (
    <div
      ref={editorRef}
      className="
        flex
        h-full
        overflow-auto
        bg-[#1e1e1e]
      "
    >
      {/* Line Numbers */}

      <div
        className="
          flex
          w-9
          shrink-0
          flex-col
          items-end

          border-r
          border-[#2d2d2d]

          px-2
          py-4

          font-mono
          text-[10px]
          leading-5

          text-[#6b6b6b]

          select-none
        "
      >
        {Array.from({ length: 25 }).map((_, i) => (
          <span key={i}>{i + 1}</span>
        ))}
      </div>

      {/* Code */}

      <div
        className="
          flex-1

          px-3
          py-4

          font-mono

          text-[11px]
          leading-5
        "
      >
        {displayedLines.map((line, index) => (
          <MiniCodeLine
            key={index}
            text={line}
            cursor={index === displayedLines.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

function MiniCodeLine({
  text,
  cursor,
}: {
  text: string;
  cursor: boolean;
}) {
  const tokens =
    text.match(
      /('[^']*'|"[^"]*"|`[^`]*`|[A-Za-z_$][A-Za-z0-9_$]*|[0-9]+|[{}()[\];,.<>:=])/g
    ) || [];

  return (
    <div className="whitespace-pre">
      {tokens.map((token, index) => (
        <MiniToken key={index} token={token} />
      ))}

      {cursor && (
        <span className="animate-pulse text-white">
          |
        </span>
      )}
    </div>
  );
}

function MiniToken({
  token,
}: {
  token: string;
}) {
  if (KEYWORDS.includes(token))
    return (
      <span className="text-[#C586C0]">
        {token}{" "}
      </span>
    );

  if (
    token.startsWith('"') ||
    token.startsWith("'") ||
    token.startsWith("`")
  )
    return (
      <span className="text-[#CE9178]">
        {token}{" "}
      </span>
    );

  if (/^\d+$/.test(token))
    return (
      <span className="text-[#B5CEA8]">
        {token}{" "}
      </span>
    );

  if (/^[A-Z]/.test(token))
    return (
      <span className="text-[#4EC9B0]">
        {token}{" "}
      </span>
    );

  if (
    [
      "{",
      "}",
      "[",
      "]",
      "(",
      ")",
    ].includes(token)
  )
    return (
      <span className="text-[#FFD700]">
        {token}
      </span>
    );

  return (
    <span className="text-[#D4D4D4]">
      {token}{" "}
    </span>
  );
}