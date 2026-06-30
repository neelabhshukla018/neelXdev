"use client";

import TrafficLights from "./TrafficLights";

import {
  Apple,
  BatteryFull,
  Search,
  Wifi,
  Command,
  ChevronDown,
} from "lucide-react";

export default function MenuBar() {
  return (
    <div
      className="
        absolute
        left-0
        right-0
        top-0
        z-50
        flex
        h-8
        items-center
        justify-between
        border-b
        border-white/5
        bg-black/25
        px-4
        text-[12px]
        text-white
        backdrop-blur-2xl
      "
    >
      {/* ================= Left ================= */}

      <div className="flex items-center gap-3">

        <TrafficLights />

        <Apple
          size={14}
          className="opacity-90"
        />

        <div className="flex items-center gap-4">

          <span className="font-semibold">
            Finder
          </span>

          <span>File</span>

          <span>Edit</span>

          <span>View</span>

          <span>Go</span>

          <span>Window</span>

          <span>Help</span>

        </div>

      </div>

      {/* ================= Right ================= */}

      <div className="flex items-center gap-4">

        <Command
          size={14}
          className="opacity-80"
        />

        <Wifi
          size={15}
          className="opacity-80"
        />

        <BatteryFull
          size={16}
          className="opacity-80"
        />

        <Search
          size={15}
          className="opacity-80"
        />

        <ChevronDown
          size={14}
          className="opacity-80"
        />

        <span className="font-medium">
          Wed 30 Jun
        </span>

        <span className="font-semibold">
          8:30 PM
        </span>

      </div>
    </div>
  );
}