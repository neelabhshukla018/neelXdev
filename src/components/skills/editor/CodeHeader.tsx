// src/components/skills/editor/CodeHeader.tsx

"use client";

/**
 * ==========================================================
 * CODE HEADER
 * ==========================================================
 * VS Code editor file information
 */

import {
  Clock3,
  Code2,
  FolderTree,
  Layers3,
  Star,
} from "lucide-react";

import { useEditor } from "../hooks/useEditor";

export default function CodeHeader() {
  const { selectedSkill } = useEditor();

  if (!selectedSkill) return null;

  return (
    <header className="border-b border-[#2B2B2B] bg-[#1E1E1E]">
      {/* =====================================================
          TOP
      ====================================================== */}

      <div className="flex items-center justify-between px-6 py-5">
        {/* Left */}

        <div className="flex items-center gap-4">
          {/* Icon */}

          <div
            className="flex h-14 w-14 items-center justify-center rounded-xl border"
            style={{
              borderColor: `${selectedSkill.color}70`,
              backgroundColor: `${selectedSkill.color}18`,
            }}
          >
            <Code2
              size={28}
              color={selectedSkill.color}
            />
          </div>

          {/* Info */}

          <div>
            <h2 className="text-xl font-semibold text-white">
              {selectedSkill.name}
            </h2>

            <p className="mt-1 text-sm text-[#9B9B9B]">
              {selectedSkill.description}
            </p>
          </div>
        </div>

        {/* Status */}

        <div
          className="rounded-md border px-3 py-1.5 text-xs font-semibold uppercase tracking-wide"
          style={{
            color: selectedSkill.color,
            borderColor: `${selectedSkill.color}60`,
            backgroundColor: `${selectedSkill.color}15`,
          }}
        >
          {selectedSkill.status}
        </div>
      </div>

      {/* =====================================================
          META BAR
      ====================================================== */}

      <div className="grid grid-cols-4 border-t border-[#2B2B2B] bg-[#181818]">
        {/* Category */}

        <MetaItem
          icon={FolderTree}
          label="Category"
          value={selectedSkill.category}
        />

        {/* Level */}

        <MetaItem
          icon={Layers3}
          label="Level"
          value={selectedSkill.level}
        />

        {/* Experience */}

        <MetaItem
          icon={Clock3}
          label="Experience"
          value={`${selectedSkill.experience.years} Years`}
        />

        {/* Featured */}

        <MetaItem
          icon={Star}
          label="Featured"
          value={
            selectedSkill.featured
              ? "Yes"
              : "No"
          }
        />
      </div>

      {/* =====================================================
          SKILL COLOR
      ====================================================== */}

      <div
        className="h-[2px]"
        style={{
          background: selectedSkill.color,
        }}
      />
    </header>
  );
}

/* ==========================================================
   META ITEM
========================================================== */

interface MetaItemProps {
  icon: React.ElementType;
  label: string;
  value: string;
}

function MetaItem({
  icon: Icon,
  label,
  value,
}: MetaItemProps) {
  return (
    <div className="flex items-center gap-3 border-r border-[#2B2B2B] px-5 py-4 last:border-r-0">
      <div className="rounded-md bg-[#252526] p-2">
        <Icon
          size={16}
          className="text-[#6EA8FE]"
        />
      </div>

      <div>
        <p className="text-[11px] uppercase tracking-wide text-[#7F7F7F]">
          {label}
        </p>

        <p className="mt-1 text-sm font-medium capitalize text-white">
          {value}
        </p>
      </div>
    </div>
  );
}