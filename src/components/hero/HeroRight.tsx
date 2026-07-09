import DeveloperScene from "@/components/workspace/DeveloperScene";

export default function HeroRight() {
  return (
    <div
      className="
        relative
        flex
        h-full
        w-full
        items-center
        justify-center
      "
    >
      {/* Ambient Glow */}

      <div className="absolute right-0 top-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[160px]" />

      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[160px]" />

      {/* Desktop Only */}

      <div
        className="
          hidden
          lg:flex

          h-full
          w-full

          items-center
          justify-center

          origin-center

          scale-[0.82]
          xl:scale-[0.88]
          2xl:scale-100
        "
      >
        <DeveloperScene />
      </div>
    </div>
  );
}