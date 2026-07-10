// src/components/skills/search/SearchHighlight.tsx

"use client";

/**
 * ==========================================================
 * SEARCH HIGHLIGHT
 * ==========================================================
 * Highlights matching text inside strings.
 */

import { Fragment } from "react";

interface SearchHighlightProps {
  text: string;

  query: string;

  className?: string;

  highlightClassName?: string;
}

export default function SearchHighlight({
  text,
  query,
  className = "",
  highlightClassName = "",
}: SearchHighlightProps) {
  /* ======================================================
   * NO SEARCH
   * ==================================================== */

  if (!query.trim()) {
    return <span className={className}>{text}</span>;
  }

  /* ======================================================
   * FIND MATCHES
   * ==================================================== */

  const escapedQuery = query.replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&"
  );

  const regex = new RegExp(
    `(${escapedQuery})`,
    "gi"
  );

  const parts = text.split(regex);

  /* ======================================================
   * RENDER
   * ==================================================== */

  return (
    <span className={className}>
      {parts.map((part, index) => {
        const matched =
          part.toLowerCase() ===
          query.toLowerCase();

        if (!matched) {
          return (
            <Fragment key={index}>
              {part}
            </Fragment>
          );
        }

        return (
          <mark
            key={index}
            className={
              highlightClassName ||
              `
                rounded
                bg-yellow-400/25
                px-1
                font-semibold
                text-yellow-300
              `
            }
          >
            {part}
          </mark>
        );
      })}
    </span>
  );
}