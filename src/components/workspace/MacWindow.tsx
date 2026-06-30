import Image from "next/image";

import Wallpaper from "./Wallpaper";
import MenuBar from "./MenuBar";
import TrafficLights from "./TrafficLights";
import VSCodeEditor from "./VSCodeEditor";
import MonitorStand from "./MonitorStand";

export default function MacWindow() {
  return (
    <div className="relative flex flex-col items-center">

      {/* Ambient Glow */}
      <div
        className="
          absolute
          -z-10
          h-[650px]
          w-[950px]
          rounded-full
          bg-violet-500/15
          blur-[180px]
        "
      />

      {/* ================= Monitor ================= */}

      <div
        className="
          relative
          w-[900px]
          h-[610px]
        "
      >
        {/* Outer Frame */}

        <div
          className="
            absolute
            inset-0
            rounded-[30px]
            bg-gradient-to-b
            from-[#555]
            via-[#313131]
            to-[#1b1b1b]
            p-[10px]
            shadow-[0_60px_140px_rgba(0,0,0,.55)]
          "
        >
          {/* Camera */}

          <div
            className="
              absolute
              left-1/2
              top-[6px]
              z-50
              -translate-x-1/2
            "
          >
            <div className="relative h-[10px] w-[10px] rounded-full bg-black">
              <div className="absolute left-1/2 top-1/2 h-[3px] w-[3px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-700" />
            </div>
          </div>

          {/* ================= Display ================= */}

          <div
            className="
              relative
              h-[545px]
              overflow-hidden
              rounded-[22px]
              border
              border-black/40
              bg-black
            "
          >
            {/* Wallpaper */}

            <Wallpaper />

            {/* Reflection */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-br
                from-white/10
                via-transparent
                to-transparent
              "
            />

            {/* macOS Controls */}

            <div className="absolute left-5 top-3 z-50">
              <TrafficLights />
            </div>

            {/* Menu */}

            <MenuBar />

            {/* VS Code */}

            <VSCodeEditor />
          </div>

          {/* ================= Chin ================= */}

          <div
            className="
              absolute
              bottom-0
              left-0
              flex
              h-[45px]
              w-full
              items-center
              justify-center
              rounded-b-[30px]
              bg-gradient-to-b
              from-[#dddddd]
              via-[#bbbbbb]
              to-[#939393]
            "
          >
            <Image
              src="/apple.svg"
              alt="Apple"
              width={20}
              height={20}
              className="opacity-60"
            />
          </div>
        </div>
      </div>

      {/* ================= Stand ================= */}

      <div className="-mt-1">
        <MonitorStand />
      </div>

    </div>
  );
}