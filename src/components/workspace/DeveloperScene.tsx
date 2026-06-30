import MacWindow from "./MacWindow";
import Dock from "./Dock";

import Astronaut from "@/components/decorations/Astronaut";
// import DeskLamp from "@/components/decorations/DeskLamp";

export default function DeveloperScene() {
  return (
    <div
      className="
        relative
        flex
        h-[760px]
        w-[1100px]
        items-center
        justify-center
      "
    >
      {/* Ambient Glow */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-20 top-12 h-96 w-96 rounded-full bg-cyan-500/15 blur-[170px]" />

        <div className="absolute right-20 bottom-12 h-96 w-96 rounded-full bg-violet-500/15 blur-[170px]" />
      </div>

      {/* ================= Monitor ================= */}

      <div className="relative z-20">
        <MacWindow />

        {/* Astronaut */}

        <div
          className="
            absolute
            -left-40
            top-5
            z-40
            scale-75
          "
        >
          <Astronaut />
        </div>

        {/* Lamp */}

        {/*
        <div
          className="
            absolute
            right-0
            top-8
            z-30
            scale-90
          "
        >
          <DeskLamp />
        </div>
        */}
      </div>

      {/* ================= Dock ================= */}

      <div
        className="
          absolute
          bottom-6
          left-1/2
          z-50
          -translate-x-1/2
        "
      >
        <Dock />
      </div>
    </div>
  );
}