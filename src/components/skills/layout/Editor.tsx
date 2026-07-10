// src/components/skills/layout/Editor.tsx

"use client";

/**
 * ==========================================================
 * EDITOR
 * ==========================================================
 * Main VS Code Editor Area
 */

import {
  FileCode2,
  GitBranch,
  CheckCircle2,
} from "lucide-react";

import { useEditor } from "../hooks/useEditor";

import Tabs from "./Tabs";

export default function Editor() {
  const {
    selectedSkill,

    fileName,
    filePath,
    language,

    lineCount,

    breadcrumbs,
  } = useEditor();

  if (!selectedSkill) {
    return (
      <div className="flex h-full items-center justify-center bg-[#1E1E1E] text-[#7D7D7D]">
        Select a skill from Explorer.
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col bg-[#1E1E1E]">
      {/* =====================================================
          TABS
      ====================================================== */}

      <Tabs />

      {/* =====================================================
          BREADCRUMB
      ====================================================== */}

     <div
  className="
    flex
    h-8
    items-center
    gap-1
    overflow-x-auto
    whitespace-nowrap
    border-b
    border-[#2B2B2B]
    px-3
    md:px-4
    text-xs
    text-[#9D9D9D]
  "
>
        {breadcrumbs.map((crumb, index) => (
          <div
            key={crumb.id}
            className="flex items-center gap-1"
          >
            <span>{crumb.label}</span>

            {index !== breadcrumbs.length - 1 && (
              <span className="text-[#5F5F5F]">
                /
              </span>
            )}
          </div>
        ))}
      </div>

      {/* =====================================================
          HEADER
      ====================================================== */}

      <div
className="
flex
h-12
items-center
justify-between
gap-3
border-b
border-[#2B2B2B]
px-3
md:px-5
"
>
        <div
className="
flex
min-w-0
items-center
gap-3
"
>
          <FileCode2
            size={18}
            color={selectedSkill.color}
          />

          <div>
            <h2
className="
truncate
text-sm
font-semibold
text-white
md:text-base
"
>
              {selectedSkill.name}
            </h2>

            <p
className="
max-w-[180px]
truncate
text-xs
text-[#8A8A8A]
md:max-w-none
"
>
              {filePath}
            </p>
          </div>
        </div>

        <div
className="
hidden
rounded
border
border-[#313131]
bg-[#252526]
px-3
py-1
text-xs
text-[#BFBFBF]
sm:block
"
>
          {language}
        </div>
      </div>

      {/* =====================================================
          CODE VIEW
      ====================================================== */}

      <div
className="
flex-1
overflow-auto
"
>
        <div className="flex">
          {/* ==========================================
              LINE NUMBERS
          =========================================== */}

          <div className="
select-none
border-r
border-[#2B2B2B]
bg-[#1B1B1B]
px-2
py-5
text-right
text-xs
text-[#6F6F6F]
md:px-4
md:text-sm
">
            {Array.from({
                //if you want to add line numbers
              length: 20,
            }).map((_, index) => (
              <div
                key={index}
                className="h-7 leading-7"
              >
                {index + 1}
              </div>
            ))}
          </div>

          {/* ==========================================
              CODE
          =========================================== */}

          <div className="flex-1 px-6 py-5 font-mono
text-[12px]
leading-6
sm:text-[13px]
md:text-[15px]
md:leading-7">
            <div>
              <span className="text-[#569CD6]">
                export
              </span>{" "}
              <span className="text-[#569CD6]">
                const
              </span>{" "}
              <span className="text-[#9CDCFE]">
                {selectedSkill.id}
              </span>{" "}
              <span className="text-white">=</span>{" "}
              <span className="text-[#DCDCAA]">
                {"{"}
              </span>
            </div>

            <div className="ml-8">
              <span className="text-[#9CDCFE]">
                name
              </span>
              <span className="text-white">:</span>{" "}
              <span className="text-[#CE9178]">
                "{selectedSkill.name}"
              </span>
              ,
            </div>

            <div className="ml-8">
              <span className="text-[#9CDCFE]">
                category
              </span>
              <span className="text-white">:</span>{" "}
              <span className="text-[#CE9178]">
                "{selectedSkill.category}"
              </span>
              ,
            </div>

            <div className="ml-8">
              <span className="text-[#9CDCFE]">
                level
              </span>
              <span className="text-white">:</span>{" "}
              <span className="text-[#4EC9B0]">
                "{selectedSkill.level}"
              </span>
              ,
            </div>

            <div className="ml-8">
              <span className="text-[#9CDCFE]">
                status
              </span>
              <span className="text-white">:</span>{" "}
              <span className="text-[#4EC9B0]">
                "{selectedSkill.status}"
              </span>
              ,
            </div>

            <div className="ml-8">
              <span className="text-[#9CDCFE]">
                description
              </span>
              <span className="text-white">:</span>{" "}
              <span className="text-[#CE9178]">
                "{selectedSkill.description}"
              </span>
              ,
            </div>

            <div className="ml-8">
              <span className="text-[#9CDCFE]">
                experience
              </span>
              <span className="text-white">:</span>{" "}
              <span className="text-[#DCDCAA]">
                {"{"}
              </span>
            </div>

            <div className="ml-16">
              <span className="text-[#9CDCFE]">
                years
              </span>
              <span className="text-white">:</span>{" "}
              <span className="text-[#B5CEA8]">
                {selectedSkill.experience.years}
              </span>
              ,
            </div>

            <div className="ml-16">
              <span className="text-[#9CDCFE]">
                months
              </span>
              <span className="text-white">:</span>{" "}
              <span className="text-[#B5CEA8]">
                {selectedSkill.experience.months}
              </span>
            </div>

            <div className="ml-8 text-[#DCDCAA]">
              {"}"},
            </div>

            <div className="ml-8">
              <span className="text-[#9CDCFE]">
                proficiency
              </span>
              <span className="text-white">:</span>{" "}
              <span className="text-[#B5CEA8]">
                {selectedSkill.metrics.proficiency}
              </span>
              ,
            </div>

            <div className="ml-8">
              <span className="text-[#9CDCFE]">
                projects
              </span>
              <span className="text-white">:</span>{" "}
              <span className="text-[#B5CEA8]">
                {selectedSkill.projects.length}
              </span>
              ,
            </div>

            <div className="text-[#DCDCAA]">
              {"};"}
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          FOOTER
      ====================================================== */}

     <div
className="
flex
h-9
items-center
justify-between
overflow-hidden
border-t
border-[#2B2B2B]
bg-[#181818]
px-3
text-xs
text-[#9B9B9B]
md:px-4
"
>
        <div
className="
flex
items-center
gap-3
md:gap-5
"
>
          <div className="flex items-center gap-2">
            <GitBranch size={14} />
            main
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2 size={14} />
            No Problems
          </div>
        </div>

        <div
className="
hidden
items-center
gap-5
md:flex
"
>
          <span>{language}</span>

          <span>UTF-8</span>

          <span>LF</span>

          <span>{fileName}</span>
        </div>
      </div>
    </div>
  );
}