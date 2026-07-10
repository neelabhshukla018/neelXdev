// src/components/skills/editor/CodeEditor.tsx

"use client";

/**
 * ==========================================================
 * CODE EDITOR
 * ==========================================================
 * Real VS Code Editor
 */

import { motion } from "framer-motion";
import {
  FileCode2,
  CheckCircle2,
  GitBranch,
} from "lucide-react";

import { useEditor } from "../hooks/useEditor";

import CodeHeader from "./CodeHeader";
import CodeLines from "./CodeLines";
import Breadcrumb from "./Breadcrumb";
import SkillPreview from "./SkillPreview";
import SkillTabs from "./SkillTabs";

export default function CodeEditor() {
  const {
    selectedSkill,
    fileName,
    filePath,
    language,
  } = useEditor();

  if (!selectedSkill) {
    return (
      <div className="flex h-full items-center justify-center bg-[#1E1E1E]">
        <p className="text-sm text-[#808080]">
          Select a skill from Explorer
        </p>
      </div>
    );
  }

  return (
    <motion.div
      layout
      className="flex h-full flex-col bg-[#1E1E1E]"
    >
      {/* =====================================================
          TABS
      ====================================================== */}

      <SkillTabs />

      {/* =====================================================
          BREADCRUMB
      ====================================================== */}

      <Breadcrumb />

      {/* =====================================================
          HEADER
      ====================================================== */}

      <CodeHeader />

      {/* =====================================================
          EDITOR
      ====================================================== */}

      <div className="flex flex-1 overflow-hidden">
        {/* ===========================
            CODE
        =========================== */}

        <div className="flex flex-1 overflow-auto">
          {/* Line Numbers */}

          <div className="select-none border-r border-[#2B2B2B] bg-[#181818] px-4 py-6 text-right text-[13px] text-[#858585]">
            {Array.from({
              length: 70,
            }).map((_, index) => (
              <div
                key={index}
                className="h-7 leading-7"
              >
                {index + 1}
              </div>
            ))}
          </div>

          {/* Code */}

          <div className="flex-1 overflow-auto">
            <CodeLines />
          </div>
        </div>

        {/* ===========================
            PREVIEW
        =========================== */}

        <SkillPreview />
      </div>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="flex h-9 items-center justify-between border-t border-[#2B2B2B] bg-[#181818] px-4 text-xs text-[#A0A0A0]">
        {/* Left */}

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <GitBranch size={14} />

            <span>main</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2 size={14} />

            <span>No Problems</span>
          </div>
        </div>

        {/* Right */}

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <FileCode2 size={14} />

            <span>{fileName}</span>
          </div>

          <span>{filePath}</span>

          <span>{language}</span>

          <span>UTF-8</span>

          <span>LF</span>
        </div>
      </footer>
    </motion.div>
  );
}