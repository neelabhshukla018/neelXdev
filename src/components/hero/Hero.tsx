import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-background
      "
    >
      {/* ================= Grid ================= */}

      <div
        className="
          absolute
          inset-0
          opacity-50
          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
          bg-[size:56px_56px]
          [mask-image:radial-gradient(circle_at_center,black,transparent_90%)]
        "
      />

      {/* ================= Ambient Glow ================= */}

      <div className="absolute -left-48 top-10 h-[650px] w-[650px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="absolute -right-48 bottom-0 h-[650px] w-[650px] rounded-full bg-violet-500/10 blur-[180px]" />

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[180px]" />

      {/* ================= Content ================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-[1800px]

          flex-col-reverse
          items-center
          justify-center

          gap-10

          px-5
          pt-24
          pb-10

          sm:px-6
          md:px-8

          lg:h-screen
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
        {/* ================= Left ================= */}

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

        {/* ================= Right ================= */}

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