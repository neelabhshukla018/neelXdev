import FileExplorer from "./FileExplorer";
import CodeEditor from "./CodeEditor";
import StatusBar from "./StatusBar";

import {
  Files,
  Search,
  GitBranch,
  Bug,
  Blocks,
  Play,
  Settings,
  MoreHorizontal,
} from "lucide-react";

export default function VSCodeEditor() {
  return (
    <div
      className="
        absolute
        left-2
        right-2
        top-8
        bottom-2
        z-20
        flex
        overflow-hidden
        rounded-xl
        border
        border-[#2d2d2d]
        bg-[#1e1e1e]
        shadow-[0_25px_80px_rgba(0,0,0,.45)]
      "
    >
      {/* ================= Activity Bar ================= */}

      <aside
        className="
          flex
          w-12
          shrink-0
          flex-col
          justify-between
          border-r
          border-[#2d2d2d]
          bg-[#181818]
          py-4
        "
      >
        <div className="flex flex-col items-center gap-6">
          <Files size={21} className="text-blue-400" />

          <Search
            size={18}
            className="cursor-pointer text-zinc-500 hover:text-white"
          />

          <GitBranch
            size={18}
            className="cursor-pointer text-zinc-500 hover:text-white"
          />

          <Play
            size={18}
            className="cursor-pointer text-zinc-500 hover:text-white"
          />

          <Bug
            size={18}
            className="cursor-pointer text-zinc-500 hover:text-white"
          />

          <Blocks
            size={18}
            className="cursor-pointer text-zinc-500 hover:text-white"
          />
        </div>

        <div className="flex justify-center pb-2">
          <Settings
            size={18}
            className="cursor-pointer text-zinc-500 hover:text-white"
          />
        </div>
      </aside>

      {/* ================= Explorer ================= */}

      <div
        className="
          hidden
          md:block

          w-[220px]
          shrink-0
          border-r
          border-[#2d2d2d]
          bg-[#252526]
        "
      >
        <FileExplorer />
      </div>

      {/* ================= Editor ================= */}

      <div className="flex min-w-0 flex-1 flex-col">
        {/* Tabs */}

        <div
          className="
            flex
            h-9
            items-center
            justify-between
            border-b
            border-[#2d2d2d]
            bg-[#252526]
            pl-2
            pr-2
          "
        >
          <div className="flex h-full overflow-hidden">
            <div
              className="
                flex
                h-full
                items-center
                border-t-2
                border-blue-500
                bg-[#1e1e1e]
                px-5
                text-xs
                text-white
                whitespace-nowrap
              "
            >
              portfolio.tsx
            </div>

            <div className="hidden sm:flex h-full items-center px-5 text-xs text-zinc-500 whitespace-nowrap">
              globals.css
            </div>

            <div className="hidden lg:flex h-full items-center px-5 text-xs text-zinc-500 whitespace-nowrap">
              package.json
            </div>
          </div>

          <MoreHorizontal
            size={16}
            className="shrink-0 text-zinc-500"
          />
        </div>

        {/* Breadcrumb */}

        <div
          className="
            hidden
            sm:flex

            h-7
            items-center
            gap-2
            border-b
            border-[#2d2d2d]
            bg-[#1f1f1f]
            px-4
            text-[11px]
            text-zinc-500
          "
        >
          <span>src</span>

          <span>/</span>

          <span>components</span>

          <span>/</span>

          <span>workspace</span>

          <span>/</span>

          <span className="text-white">
            portfolio.tsx
          </span>
        </div>

        {/* Editor */}

        <div className="flex-1 overflow-hidden">
          <CodeEditor />
        </div>

        {/* Status */}

        <StatusBar />
      </div>
    </div>
  );
}