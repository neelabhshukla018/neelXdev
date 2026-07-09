"use client";

import { FolderGit2 } from "lucide-react";

const SidebarHeader = () => {
  return (
    <div className="border-b border-[#30363d] px-6 py-5">
      <div className="flex items-center gap-3">
        {/* Folder Icon */}
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#161b22] border border-[#30363d]">
          <FolderGit2
            size={20}
            className="text-[#3FB950]"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="font-mono text-lg font-semibold text-white">
            ~/about
          </h2>

          <p className="font-mono text-xs text-gray-500">
            Interactive Developer Profile
          </p>
        </div>
      </div>
    </div>
  );
};

export default SidebarHeader;