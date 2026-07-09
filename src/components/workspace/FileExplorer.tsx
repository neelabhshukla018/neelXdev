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
  "hero.section.tsx",
  "about.me.tsx",
  "journey.timeline.tsx",
  "skills.stack.tsx",
  "projects.showcase.tsx",
  "experience.timeline.tsx",
  "achievements.tsx",
  "contact.form.tsx",
  "naxity.ai.tsx",
  "smile12.app.tsx",
  "despire.blog.tsx",
  "iitiancrafts.internship.ts",
  "portfolio.config.ts",
  "resume.pdf",
];

export default function FileExplorer() {
  return (
    <aside className="flex h-full flex-col bg-[#252526]">

      {/* Header */}

      <div className="sticky top-0 z-20 flex h-9 items-center justify-between border-b border-[#313131] bg-[#252526] px-3">
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

      <div className="flex-1 overflow-y-auto py-2 text-[13px]">

        {/* Workspace */}

        <div className="mb-2 flex items-center gap-2 px-3 font-semibold text-white">
          <ChevronDown size={13} />
          <VscFolderOpened className="text-blue-400" />
          <span>Neelabh's-Portfolio</span>
        </div>

        {/* src */}

        <div className="px-1">

          <div className="flex items-center gap-2 rounded px-2 py-[3px] text-zinc-300 transition hover:bg-[#2d2d30]">
            <ChevronDown size={13} />
            <FolderOpen
              size={14}
              className="text-yellow-400"
            />
            <span>src</span>
          </div>

          <div className="ml-4 mt-1 space-y-0.5">

            {/* app */}

            <div className="flex items-center gap-2 rounded px-2 py-[3px] text-zinc-400 transition hover:bg-[#2d2d30] hover:text-white">
              <Folder
                size={14}
                className="text-blue-400"
              />
              app
            </div>

            {/* components */}

            <div className="flex items-center gap-2 rounded px-2 py-[3px] text-zinc-400 transition hover:bg-[#2d2d30] hover:text-white">
              <ChevronDown size={12} />

              <FolderOpen
                size={14}
                className="text-yellow-400"
              />

              components
            </div>

            {/* sections */}

            <div className="ml-4">

              <div className="flex items-center gap-2 rounded px-2 py-[3px] text-zinc-300">
                <ChevronDown size={12} />

                <FolderOpen
                  size={14}
                  className="text-yellow-400"
                />

                sections
              </div>

              <div className="ml-4 mt-0.5 space-y-0.5">

                {workspaceFiles.map((file) => (

                  <div
                    key={file}
                    className={`relative flex items-center gap-2 rounded px-2 py-[3px] transition-all duration-200 ${
                      file === "hero.section.tsx"
                        ? "bg-[#37373d] text-white"
                        : "text-zinc-400 hover:bg-[#2d2d30] hover:text-cyan-300"
                    }`}
                  >

                    {file === "hero.section.tsx" && (
                      <div className="absolute left-0 top-0 h-full w-[3px] rounded-r bg-cyan-400" />
                    )}

                    <VscFileCode
                      size={15}
                      className="shrink-0 text-sky-400"
                    />

                    <span className="truncate">
                      {file}
                    </span>

                    {file === "hero.section.tsx" && (
                      <span className="ml-auto text-[11px] text-cyan-400">
                        ●
                      </span>
                    )}

                  </div>

                ))}

              </div>

            </div>

                        {/* data */}

            <div className="mt-1 flex items-center gap-2 rounded px-2 py-[3px] text-zinc-400 transition hover:bg-[#2d2d30] hover:text-white">
              <ChevronRight size={12} />

              <Folder
                size={14}
                className="text-yellow-400"
              />

              data
            </div>

            {/* lib */}

            <div className="flex items-center gap-2 rounded px-2 py-[3px] text-zinc-400 transition hover:bg-[#2d2d30] hover:text-white">
              <ChevronRight size={12} />

              <Folder
                size={14}
                className="text-yellow-400"
              />

              lib
            </div>

            {/* hooks */}

            <div className="flex items-center gap-2 rounded px-2 py-[3px] text-zinc-400 transition hover:bg-[#2d2d30] hover:text-white">
              <ChevronRight size={12} />

              <Folder
                size={14}
                className="text-yellow-400"
              />

              hooks
            </div>

            {/* utils */}

            <div className="flex items-center gap-2 rounded px-2 py-[3px] text-zinc-400 transition hover:bg-[#2d2d30] hover:text-white">
              <ChevronRight size={12} />

              <Folder
                size={14}
                className="text-yellow-400"
              />

              utils
            </div>

            {/* assets */}

            <div className="flex items-center gap-2 rounded px-2 py-[3px] text-zinc-400 transition hover:bg-[#2d2d30] hover:text-white">
              <ChevronRight size={12} />

              <Folder
                size={14}
                className="text-yellow-400"
              />

              assets
            </div>

          </div>
        </div>

        {/* public */}

        <div className="mt-3 px-1">

          <div className="flex items-center gap-2 rounded px-2 py-[3px] text-zinc-300 transition hover:bg-[#2d2d30]">

            <ChevronRight size={13} />

            <Folder
              size={14}
              className="text-yellow-400"
            />

            public

          </div>

        </div>        {/* ================= Root Files ================= */}

        <div className="mt-4 border-t border-[#313131] pt-3">

          <div className="mb-2 px-3 text-[11px] font-semibold tracking-[2px] text-zinc-500">
            ROOT
          </div>

          <div className="mx-1 flex items-center gap-2 rounded px-2 py-[3px] transition hover:bg-[#2d2d30] hover:text-white">
            <VscJson className="text-cyan-400" />
            globals.css
          </div>

          <div className="mx-1 flex items-center gap-2 rounded px-2 py-[3px] transition hover:bg-[#2d2d30] hover:text-white">
            <VscJson className="text-yellow-400" />
            package.json
          </div>

          <div className="mx-1 flex items-center gap-2 rounded px-2 py-[3px] transition hover:bg-[#2d2d30] hover:text-white">
            <VscJson className="text-emerald-400" />
            next.config.ts
          </div>

          <div className="mx-1 flex items-center gap-2 rounded px-2 py-[3px] transition hover:bg-[#2d2d30] hover:text-white">
            <VscJson className="text-orange-400" />
            tailwind.config.ts
          </div>

          <div className="mx-1 flex items-center gap-2 rounded px-2 py-[3px] transition hover:bg-[#2d2d30] hover:text-white">
            <VscJson className="text-violet-400" />
            tsconfig.json
          </div>

          <div className="mx-1 flex items-center gap-2 rounded px-2 py-[3px] transition hover:bg-[#2d2d30] hover:text-white">
            <VscJson className="text-green-400" />
            .env.local
          </div>

          <div className="mx-1 flex items-center gap-2 rounded px-2 py-[3px] transition hover:bg-[#2d2d30] hover:text-white">
            <VscJson className="text-red-400" />
            README.md
          </div>

          <div className="mx-1 flex items-center gap-2 rounded px-2 py-[3px] transition hover:bg-[#2d2d30] hover:text-white">
            <VscJson className="text-sky-400" />
            vercel.json
          </div>

        </div>

      </div>

    </aside>
  );
}