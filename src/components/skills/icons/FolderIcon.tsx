// src/components/skills/icons/FolderIcon.tsx

"use client";

/**
 * ==========================================================
 * FOLDER ICON
 * ==========================================================
 * VS Code style folder icons.
 */

import {
  Folder,
  FolderOpen,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

interface FolderIconProps {
  open?: boolean;

  color?: string;

  size?: number;

  showChevron?: boolean;
}

export default function FolderIcon({
  open = false,
  color,
  size = 16,
  showChevron = true,
}: FolderIconProps) {
  const folderColor =
    color ?? "#DCB67A";

  return (
    <div className="flex items-center gap-1">
      {/* ==========================================
          CHEVRON
      ========================================== */}

      {showChevron &&
        (open ? (
          <ChevronDown
            size={12}
            className="text-[#8C8C8C]"
          />
        ) : (
          <ChevronRight
            size={12}
            className="text-[#8C8C8C]"
          />
        ))}

      {/* ==========================================
          FOLDER
      ========================================== */}

      {open ? (
        <FolderOpen
          size={size}
          color={folderColor}
        />
      ) : (
        <Folder
          size={size}
          color={folderColor}
        />
      )}
    </div>
  );
}