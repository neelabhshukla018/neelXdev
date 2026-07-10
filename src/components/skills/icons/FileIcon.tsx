// src/components/skills/icons/FileIcon.tsx

"use client";

/**
 * ==========================================================
 * FILE ICON
 * ==========================================================
 * Displays VS Code style file icons based on extension.
 */

import {
  FileCode2,
  FileJson,
  FileText,
  FileType,
} from "lucide-react";

interface FileIconProps {
  extension?: string;
  color?: string;
  size?: number;
}

export default function FileIcon({
  extension = "ts",
  color,
  size = 16,
}: FileIconProps) {
  switch (extension.toLowerCase()) {
    case "ts":
    case "tsx":
      return (
        <FileCode2
          size={size}
          color={color ?? "#3178C6"}
        />
      );

    case "js":
    case "jsx":
      return (
        <FileCode2
          size={size}
          color={color ?? "#F7DF1E"}
        />
      );

    case "json":
      return (
        <FileJson
          size={size}
          color={color ?? "#F1C40F"}
        />
      );

    case "css":
    case "scss":
      return (
        <FileType
          size={size}
          color={color ?? "#2965F1"}
        />
      );

    case "html":
      return (
        <FileCode2
          size={size}
          color={color ?? "#E34F26"}
        />
      );

    case "md":
      return (
        <FileText
          size={size}
          color={color ?? "#42A5F5"}
        />
      );

    default:
      return (
        <FileCode2
          size={size}
          color={color ?? "#9CDCFE"}
        />
      );
  }
}