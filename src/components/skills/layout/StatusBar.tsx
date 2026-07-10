// src/components/skills/layout/StatusBar.tsx

"use client";

/**
 * ==========================================================
 * STATUS BAR
 * ==========================================================
 * VS Code Bottom Status Bar
 */

import {
  GitBranch,
  CheckCircle2,
  RefreshCw,
  AlertTriangle,
  Bell,
  Wifi,
  Cloud,
  Code2,
  Cpu,
} from "lucide-react";

import { useEditor } from "../hooks/useEditor";

export default function StatusBar() {
  const {
    selectedSkill,
    fileName,
    language,
  } = useEditor();

  return (
    <footer className="flex h-4 items-center justify-between bg-[#007ACC] px-2 text-[11px] text-white select-none">
      {/* =====================================================
          LEFT
      ====================================================== */}

      <div className="flex items-center gap-4 overflow-hidden">
        <StatusItem
          icon={GitBranch}
          label="main"
        />

        <StatusItem
          icon={RefreshCw}
          label="Sync"
        />

        <StatusItem
          icon={CheckCircle2}
          label="0 Errors"
        />

        <StatusItem
          icon={AlertTriangle}
          label="0 Warnings"
        />
      </div>

      {/* =====================================================
          CENTER
      ====================================================== */}

      <div className="hidden items-center gap-2 md:flex">
        <Code2 size={13} />

        <span className="truncate">
          {selectedSkill
            ? `${selectedSkill.category} / ${fileName}`
            : "No File Open"}
        </span>
      </div>

      {/* =====================================================
          RIGHT
      ====================================================== */}

      <div className="flex items-center gap-4 overflow-hidden">
        <StatusItem
          icon={Cpu}
          label={language}
        />

        <StatusItem
          icon={Cloud}
          label="UTF-8"
        />

        <StatusItem
          icon={Wifi}
          label="LF"
        />

        <StatusItem
          icon={Bell}
          label="Spaces: 2"
        />
      </div>
    </footer>
  );
}

/* ==========================================================
   STATUS ITEM
========================================================== */

interface StatusItemProps {
  icon: React.ElementType;
  label: string;
}

function StatusItem({
  icon: Icon,
  label,
}: StatusItemProps) {
  return (
    <div className="flex items-center gap-1 rounded px-1.5 py-0.5 transition hover:bg-white/10">
      <Icon size={13} />

      <span>{label}</span>
    </div>
  );
}