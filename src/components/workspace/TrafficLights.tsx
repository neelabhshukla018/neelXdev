"use client";

import { Minus, Square, X } from "lucide-react";

export default function TrafficLights() {
  return (
    <div
      className="
        flex
        items-center

        gap-1.5
        sm:gap-2

        lg:gap-[7px]
      "
    >
      {/* ================= Close ================= */}

      <button
        aria-label="Close"
        className="
          group
          relative

          flex
          items-center
          justify-center

          h-2.5
          w-2.5

          sm:h-3
          sm:w-3

          rounded-full
          bg-[#ff5f57]

          shadow-[inset_0_1px_1px_rgba(255,255,255,.25)]

          transition-all
          duration-300
          ease-out

          hover:scale-110
          hover:brightness-110
        "
      >
        <X
          size={7}
          strokeWidth={3}
          className="
            absolute
            text-[#5b1d1d]

            opacity-0
            scale-75

            transition-all
            duration-200

            group-hover:opacity-100
            group-hover:scale-100
          "
        />
      </button>

      {/* ================= Minimize ================= */}

      <button
        aria-label="Minimize"
        className="
          group
          relative

          flex
          items-center
          justify-center

          h-2.5
          w-2.5

          sm:h-3
          sm:w-3

          rounded-full
          bg-[#febc2e]

          shadow-[inset_0_1px_1px_rgba(255,255,255,.25)]

          transition-all
          duration-300
          ease-out

          hover:scale-110
          hover:brightness-110
        "
      >
        <Minus
          size={7}
          strokeWidth={3}
          className="
            absolute
            text-[#6b4a00]

            opacity-0
            scale-75

            transition-all
            duration-200

            group-hover:opacity-100
            group-hover:scale-100
          "
        />
      </button>

      {/* ================= Maximize ================= */}

      <button
        aria-label="Maximize"
        className="
          group
          relative

          flex
          items-center
          justify-center

          h-2.5
          w-2.5

          sm:h-3
          sm:w-3

          rounded-full
          bg-[#28c840]

          shadow-[inset_0_1px_1px_rgba(255,255,255,.25)]

          transition-all
          duration-300
          ease-out

          hover:scale-110
          hover:brightness-110
        "
      >
        <Square
          size={5.5}
          strokeWidth={3}
          className="
            absolute
            text-[#164f23]

            opacity-0
            scale-75

            transition-all
            duration-200

            group-hover:opacity-100
            group-hover:scale-100
          "
        />
      </button>
    </div>
  );
}