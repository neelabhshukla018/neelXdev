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
  "var",
  "return",
  "interface",
  "type",
  "function",
  "async",
  "await",
  "new",
  "if",
  "else",
  "for",
  "while",
  "try",
  "catch",
];

export default function LiveTyping() {
  const editorRef = useRef<HTMLDivElement>(null);

  const [displayedLines, setDisplayedLines] = useState<string[]>([""]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= codeLines.length) {
      const restart = setTimeout(() => {
        setDisplayedLines([""]);
        setLineIndex(0);
        setCharIndex(0);

        if (editorRef.current) {
          editorRef.current.scrollTop = 0;
        }
      }, 2000);

      return () => clearTimeout(restart);
    }

    const currentLine = codeLines[lineIndex];

    if (charIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => {
          const copy = [...prev];
          copy[lineIndex] = currentLine.slice(0, charIndex + 1);
          return copy;
        });

        setCharIndex((prev) => prev + 1);
      }, 18);

      return () => clearTimeout(timeout);
    }

    const next = setTimeout(() => {
      setDisplayedLines((prev) => [...prev, ""]);
      setLineIndex((prev) => prev + 1);
      setCharIndex(0);
    }, 70);

    return () => clearTimeout(next);
  }, [charIndex, lineIndex]);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.scrollTop = editorRef.current.scrollHeight;
    }
  }, [displayedLines]);

  return (
  <div
  ref={editorRef}
  className="
    h-full
    overflow-auto

    pr-2
    sm:pr-4
    lg:pr-6

    scrollbar-thin
    scrollbar-thumb-zinc-700
  "
>
      {displayedLines.map((line, index) => (
        <CodeLine
          key={index}
          text={line}
          cursor={index === displayedLines.length - 1}
        />
      ))}
    </div>
  );
}

function CodeLine({
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
    <div
  className="
    whitespace-pre

    text-[12px]
    leading-6

    sm:text-[13px]

    lg:text-[15px]
    lg:leading-8
  "
>
      {tokens.map((token, index) => (
        <Token key={index} token={token} />
      ))}

      {cursor && (
        <span className="ml-[2px] animate-pulse text-white">
          |
        </span>
      )}
    </div>
  );
}

function Token({ token }: { token: string }) {
  // keywords
  if (KEYWORDS.includes(token))
    return (
      <span className="text-[#C586C0]">
        {token}{" "}
      </span>
    );

  // strings
  if (
    token.startsWith("'") ||
    token.startsWith('"') ||
    token.startsWith("`")
  )
    return (
      <span className="text-[#CE9178]">
        {token}{" "}
      </span>
    );

  // numbers
  if (/^\d+$/.test(token))
    return (
      <span className="text-[#B5CEA8]">
        {token}{" "}
      </span>
    );

  // comments
  if (token.startsWith("//"))
    return (
      <span className="text-[#6A9955]">
        {token}{" "}
      </span>
    );

  // hooks
  if (
    token.startsWith("use") &&
    token.length > 3
  )
    return (
      <span className="text-[#DCDCAA]">
        {token}{" "}
      </span>
    );

  // React / Components
  if (/^[A-Z]/.test(token))
    return (
      <span className="text-[#4EC9B0]">
        {token}{" "}
      </span>
    );

  // property names
  if (
    [
      "name",
      "role",
      "skills",
      "projects",
      "frameworks",
      "backend",
      "deployment",
      "location",
      "experience",
      "portfolio",
      "tools",
      "cloud",
      "databases",
      "developer",
    ].includes(token)
  )
    return (
      <span className="text-[#9CDCFE]">
        {token}{" "}
      </span>
    );

  // booleans
  if (
    token === "true" ||
    token === "false"
  )
    return (
      <span className="text-[#569CD6]">
        {token}{" "}
      </span>
    );

  // brackets
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

  // punctuation
  if (
    [
      ":",
      ";",
      ",",
      ".",
      "=",
      "<",
      ">",
      "/",
    ].includes(token)
  )
    return (
      <span className="text-[#D4D4D4]">
        {token}
      </span>
    );

  return (
    <span className="text-[#D4D4D4]">
      {token}{" "}
    </span>
  );
}