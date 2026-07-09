import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

import Dock from "@/components/workspace/Dock";
import MiniMac from "@/components/mobile/MiniMac";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
      "
    >
      {/* ================= Mobile ================= */}

      <div
        className="
          relative
          z-10
          flex
          flex-col
          lg:hidden
          px-5
          pt-24
          pb-10
        "
      >
        {/* Hero Left */}
        <HeroLeft />

        {/* Dock */}
        <Dock />

        {/* Mini Mac */}
        <div
          className="
            mt-10
            flex
            justify-center
          "
        >
          <MiniMac />
        </div>
      </div>

      {/* ================= Desktop ================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          hidden
          min-h-screen
          max-w-[1800px]
          lg:flex
          lg:flex-row
          lg:items-center
          lg:justify-between
          lg:gap-12
          lg:px-8
          lg:pt-24
          lg:pb-0
          xl:px-20
          2xl:px-28
        "
      >
        {/* Left */}
        <div
          className="
            flex
            w-full
            justify-start
            lg:w-[40%]
          "
        >
          <HeroLeft />
        </div>

        {/* Right */}
        <div
          className="
            flex
            w-full
            justify-center
            lg:w-[60%]
          "
        >
          <HeroRight />
        </div>
      </div>
    </section>
  );
}