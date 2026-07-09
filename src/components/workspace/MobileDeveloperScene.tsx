import MacWindow from "./MacWindow";
import Dock from "./Dock";

export default function MobileDeveloperScene() {
  return (
    <div
      className="
        relative
        flex
        w-full
        flex-col
        items-center
        overflow-hidden

        pt-4
        pb-2
        px-3
      "
    >
      {/* Ambient Glow */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/15 blur-[120px]" />
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-violet-500/15 blur-[120px]" />
      </div>

      {/* ================= Mac ================= */}

      <div
        className="
          flex
          w-full
          justify-center

          origin-top

          scale-[0.74]
          sm:scale-[0.82]
          md:scale-[0.92]
        "
      >
        <MacWindow />
      </div>

      {/* ================= Dock ================= */}

      <div
        className="
          -mt-[70px]
          sm:-mt-[55px]
          md:-mt-[40px]

          scale-[0.65]
          sm:scale-[0.78]
          md:scale-[0.90]
        "
      >
        <Dock />
      </div>
    </div>
  );
}