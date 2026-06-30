"use client";

import {
  ChevronDown,
  ChevronRight,
  Folder,
  FolderOpen,
  FilePlus2,
  FolderPlus,
  RefreshCw,
  ChevronUp,
} from "lucide-react";

import {
  VscFileCode,
  VscJson,
  VscFolderOpened,
} from "react-icons/vsc";

const workspaceFiles = [
  "run_chase.engine.ts",
  "cover_drive.animation.tsx",
  "king.mode.ts",
  "mcg82.patch.ts",
  "pak183.record.ts",
  "adelaide141.history.ts",
  "wc2023.masterclass.tsx",
  "t20wc2024.final.tsx",
  "century50.milestone.ts",
  "orangecap2024.data.ts",
  "virat.kohli.ts",
  "legacy.builder.ts",
];

export default function FileExplorer() {
  return (
    <aside className="flex h-full flex-col bg-[#252526]">
      {/* Header */}

      <div className="flex h-9 items-center justify-between border-b border-[#313131] px-3">
        <span className="text-[11px] font-semibold tracking-[2px] text-zinc-400">
          EXPLORER
        </span>

        <div className="flex items-center gap-2 text-zinc-500">
          <FilePlus2 size={13} />
          <FolderPlus size={13} />
          <RefreshCw size={13} />
          <ChevronUp size={13} />
        </div>
      </div>

      {/* Explorer */}

      <div className="flex-1 overflow-y-auto py-2 text-[13px]">
        {/* Workspace */}

        <div className="mb-2 flex items-center gap-2 px-3 font-semibold text-white">
          <ChevronDown size={13} />
          <VscFolderOpened className="text-blue-400" />
          <span>PORTFOLIO</span>
        </div>

        {/* src */}

        <div className="px-1">
          <div className="flex items-center gap-2 rounded px-2 py-[3px] text-zinc-300 hover:bg-[#2d2d30]">
            <ChevronDown size={13} />

            <FolderOpen
              size={14}
              className="text-yellow-400"
            />

            <span>Cricket</span>
          </div>

          <div className="ml-4 mt-1 space-y-0.5">
            {/* app */}

            <div className="flex items-center gap-2 rounded px-2 py-[3px] text-zinc-400 hover:bg-[#2d2d30] hover:text-white">
              <Folder
                size={14}
                className="text-blue-400"
              />
              GOAT
            </div>

            {/* components */}

            <div className="flex items-center gap-2 rounded px-2 py-[3px] text-zinc-400 hover:bg-[#2d2d30] hover:text-white">
              <ChevronDown size={12} />

              <FolderOpen
                size={14}
                className="text-yellow-400"
              />

              Virat Kohli
            </div>

            {/* workspace */}

            <div className="ml-4">
              <div className="flex items-center gap-2 rounded px-2 py-[3px] text-zinc-300">
                <ChevronDown size={12} />

                <FolderOpen
                  size={14}
                  className="text-yellow-400"
                />

                workspace
              </div>

              <div className="ml-4 mt-0.5 space-y-0.5">
                {workspaceFiles.map((file) => (
                  <div
                    key={file}
                    className={`flex items-center gap-2 rounded px-2 py-[3px] transition ${
                      file === "virat.kohli.ts"
                        ? "bg-[#37373d] text-white"
                        : "text-zinc-400 hover:bg-[#2d2d30] hover:text-white"
                    }`}
                  >
                    <VscFileCode
                      size={15}
                      className="shrink-0 text-sky-400"
                    />

                    <span className="truncate">
                      {file}
                    </span>

                    {file === "virat.kohli.ts" && (
                      <span className="ml-auto text-[11px] text-green-400">
                        ●
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* data */}

            <div className="mt-1 flex items-center gap-2 rounded px-2 py-[3px] text-zinc-400 hover:bg-[#2d2d30] hover:text-white">
              <ChevronRight size={12} />

              <Folder
                size={14}
                className="text-yellow-400"
              />

              data
            </div>

            {/* lib */}

            <div className="flex items-center gap-2 rounded px-2 py-[3px] text-zinc-400 hover:bg-[#2d2d30] hover:text-white">
              <ChevronRight size={12} />

              <Folder
                size={14}
                className="text-yellow-400"
              />

              lib
            </div>

            {/* hooks */}

            <div className="flex items-center gap-2 rounded px-2 py-[3px] text-zinc-400 hover:bg-[#2d2d30] hover:text-white">
              <ChevronRight size={12} />

              <Folder
                size={14}
                className="text-yellow-400"
              />

              hooks
            </div>
          </div>
        </div>

        {/* public */}

        <div className="mt-3 px-1">
          <div className="flex items-center gap-2 rounded px-2 py-[3px] text-zinc-300 hover:bg-[#2d2d30]">
            <ChevronRight size={13} />

            <Folder
              size={14}
              className="text-yellow-400"
            />

            public
          </div>
        </div>

        {/* Root Files */}

        <div className="mt-4 border-t border-[#313131] pt-3">
          <div className="mx-1 flex items-center gap-2 rounded px-2 py-[3px] text-zinc-400 hover:bg-[#2d2d30] hover:text-white">
            <VscJson className="text-cyan-400" />
            globals.css
          </div>

          <div className="mx-1 flex items-center gap-2 rounded px-2 py-[3px] text-zinc-400 hover:bg-[#2d2d30] hover:text-white">
            <VscJson className="text-yellow-400" />
            package.json
          </div>

          <div className="mx-1 flex items-center gap-2 rounded px-2 py-[3px] text-zinc-400 hover:bg-[#2d2d30] hover:text-white">
            <VscJson className="text-emerald-400" />
            next.config.ts
          </div>

          <div className="mx-1 flex items-center gap-2 rounded px-2 py-[3px] text-zinc-400 hover:bg-[#2d2d30] hover:text-white">
            <VscJson className="text-orange-400" />
            tailwind.config.ts
          </div>
        </div>
      </div>
    </aside>
  );
}