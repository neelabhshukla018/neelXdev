// src/components/skills/layout/ActivityBar.tsx

"use client";

/**
 * ==========================================================
 * ACTIVITY BAR
 * ==========================================================
 * VS Code Left Sidebar
 */

import { motion } from "framer-motion";
import {
  Files,
  Search,
  GitBranch,
  Play,
  Package,
  Bot,
  Settings,
} from "lucide-react";

import { cn } from "@/lib/utils";

interface ActivityItem {
  id: string;
  icon: React.ElementType;
  label: string;
  active?: boolean;
  badge?: number;
}

const ITEMS: ActivityItem[] = [
  {
    id: "explorer",
    icon: Files,
    label: "Explorer",
    active: true,
  },
  {
    id: "search",
    icon: Search,
    label: "Search",
  },
  {
    id: "git",
    icon: GitBranch,
    label: "Source Control",
    badge: 3,
  },
  {
    id: "run",
    icon: Play,
    label: "Run & Debug",
  },
  {
    id: "extensions",
    icon: Package,
    label: "Extensions",
  },
  {
    id: "ai",
    icon: Bot,
    label: "AI Assistant",
    badge: 1,
  },
];

export default function ActivityBar() {
  return (
<aside
  className="
    flex
    w-12
    flex-col
    items-center
    justify-between
    border-r
    border-[#2B2B2B]
    bg-[#181818]
  "
>      {/* =====================================================
          TOP ICONS
      ====================================================== */}

      <div className="flex w-full flex-col items-center pt-2">
        {ITEMS.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              title={item.label}
              className={cn(
                "group relative flex h-12 w-full items-center justify-center transition-colors",

                item.active
                  ? "text-white"
                  : "text-[#858585] hover:bg-[#2A2D2E] hover:text-white"
              )}
            >
              {/* Active Indicator */}

              {item.active && (
                <motion.div
                  layoutId="activity-indicator"
                  className="absolute left-0 h-7 w-[2px] rounded-r bg-[#007ACC]"
                />
              )}

              {/* Icon */}

             <Icon
  size={20}
/>

              {/* Badge */}

              {item.badge && (
<div
className="
absolute
right-1
top-1
flex
h-4
min-w-[16px]
items-center
justify-center
rounded-full
bg-[#007ACC]
px-1
text-[10px]
font-semibold
text-white
"
>                  {item.badge}
                </div>
              )}

              {/* Tooltip */}

             <div
className="
pointer-events-none
absolute
left-14
z-50
hidden
whitespace-nowrap
rounded
bg-[#252526]
px-2
py-1
text-xs
text-white
opacity-0
shadow-lg
transition-opacity
group-hover:opacity-100
xl:block
"
>
                {item.label}
              </div>
            </button>
          );
        })}
      </div>

      {/* =====================================================
          BOTTOM
      ====================================================== */}

      <div className="mb-2 flex w-full flex-col items-center">
        <button
          title="Settings"
          className="group relative flex h-12 w-full items-center justify-center text-[#858585] transition hover:bg-[#2A2D2E] hover:text-white"
        >
          <Settings size={21} />

          <div className="pointer-events-none absolute left-14 whitespace-nowrap rounded bg-[#252526] px-2 py-1 text-xs text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
            Settings
          </div>
        </button>
      </div>
    </aside>
  );
}