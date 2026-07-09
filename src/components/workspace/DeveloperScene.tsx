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
        w-full
        overflow-visible

        px-3
        sm:px-5
        md:px-6
        lg:px-0

        mt-6
        sm:mt-8
        md:mt-10
        lg:mt-0

        h-[340px]
        sm:h-[430px]
        md:h-[520px]

        lg:h-[620px]
        xl:h-[700px]
        2xl:h-[760px]

        items-start
        lg:items-center

        justify-center
      "
    >
      {/* Ambient Glow */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-20 top-12 h-96 w-96 rounded-full bg-cyan-500/15 blur-[170px]" />
        <div className="absolute right-20 bottom-12 h-96 w-96 rounded-full bg-violet-500/15 blur-[170px]" />
      </div>

      {/* ================= Monitor ================= */}

      <div
        className="
          relative
          z-20

          origin-top

          scale-[0.34]
          sm:scale-[0.45]
          md:scale-[0.58]

          lg:scale-100
        "
      >
        <MacWindow />

        {/* Astronaut */}

        <div
          className="
            hidden
            lg:block

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
          left-1/2
          -translate-x-1/2

          top-[215px]
          sm:top-[285px]
          md:top-[360px]

          lg:top-auto
          lg:bottom-5
          xl:bottom-6

          z-50

          scale-[0.72]
          sm:scale-[0.82]
          md:scale-[0.9]

          lg:scale-100
        "
      >
        <Dock />
      </div>
    </div>
  );
}