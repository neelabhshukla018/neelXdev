// src/components/skills/utils/syntaxHighlight.ts

/**
 * ==========================================================
 * SYNTAX HIGHLIGHT
 * ==========================================================
 * Utility helpers for VS Code-like syntax highlighting.
 */

export type TokenType =
  | "keyword"
  | "string"
  | "number"
  | "comment"
  | "function"
  | "property"
  | "type"
  | "operator"
  | "punctuation"
  | "text";

export interface Token {
  value: string;
  type: TokenType;
}

/* ==========================================================
 * COLORS
 * ==========================================================
 */

export const TOKEN_COLORS: Record<
  TokenType,
  string
> = {
  keyword: "#569CD6",

  string: "#CE9178",

  number: "#B5CEA8",

  comment: "#6A9955",

  function: "#DCDCAA",

  property: "#9CDCFE",

  type: "#4EC9B0",

  operator: "#D4D4D4",

  punctuation: "#D4D4D4",

  text: "#D4D4D4",
};

/* ==========================================================
 * KEYWORDS
 * ==========================================================
 */

const KEYWORDS = [
  "const",
  "let",
  "var",
  "function",
  "return",
  "export",
  "default",
  "import",
  "from",
  "class",
  "extends",
  "new",
  "if",
  "else",
  "switch",
  "case",
  "break",
  "continue",
  "for",
  "while",
  "do",
  "async",
  "await",
  "try",
  "catch",
  "finally",
  "throw",
  "interface",
  "type",
];

/* ==========================================================
 * TOKENIZE
 * ==========================================================
 */

export function tokenize(
  line: string
): Token[] {
  if (!line.trim()) {
    return [
      {
        value: "",
        type: "text",
      },
    ];
  }

  /* ---------------- COMMENTS ---------------- */

  if (line.trim().startsWith("//")) {
    return [
      {
        value: line,
        type: "comment",
      },
    ];
  }

  const parts = line.split(
    /(\s+|["'`(){}[\];,.:=<>+-/*])/g
  );

  return parts
    .filter((part) => part !== "")
    .map((part) => ({
      value: part,
      type: detectTokenType(part),
    }));
}

/* ==========================================================
 * DETECT TOKEN
 * ==========================================================
 */

export function detectTokenType(
  token: string
): TokenType {
  if (
    KEYWORDS.includes(token)
  ) {
    return "keyword";
  }

  if (
    /^["'].*["']$/.test(token)
  ) {
    return "string";
  }

  if (
    /^[0-9]+$/.test(token)
  ) {
    return "number";
  }

  if (
    /^[A-Z][A-Za-z0-9]*$/.test(
      token
    )
  ) {
    return "type";
  }

  if (
    /^[a-zA-Z_][a-zA-Z0-9_]*\($/.test(
      token
    )
  ) {
    return "function";
  }

  if (
    [
      "{",
      "}",
      "(",
      ")",
      "[",
      "]",
      ";",
      ",",
      ".",
    ].includes(token)
  ) {
    return "punctuation";
  }

  if (
    [
      "=",
      "==",
      "===",
      "+",
      "-",
      "*",
      "/",
      "=>",
      "<",
      ">",
      "<=",
      ">=",
      "&&",
      "||",
      "!",
    ].includes(token)
  ) {
    return "operator";
  }

  return "text";
}

/* ==========================================================
 * COLOR
 * ==========================================================
 */

export function getTokenColor(
  token: TokenType
): string {
  return (
    TOKEN_COLORS[token] ??
    TOKEN_COLORS.text
  );
}

/* ==========================================================
 * HIGHLIGHT LINE
 * ==========================================================
 */

export function highlightLine(
  line: string
): Token[] {
  return tokenize(line);
}

/* ==========================================================
 * DEFAULT EXPORT
 * ==========================================================
 */

export default highlightLine;