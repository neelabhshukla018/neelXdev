"use client";

import FadeIn from "./animations/FadeIn";
import SlideAnimation from "./animations/SlideAnimation";

import { useTerminal } from "./hooks/useTerminal";

import CommandSidebar from "./sidebar/CommandSidebar";
import Terminal from "./terminal/Terminal";

// 👇 Import your background component
import GlobalBackground from "@/components/background/GlobalBackground";

const AboutSection = () => {
  const { activeCommand, currentData, selectCommand } = useTerminal();

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden pt-8 pb-24 lg:pt-12 lg:pb-32"
    >
      {/* Background */}
      <GlobalBackground />

      <div className="relative z-10 mx-auto max-w-[1700px] px-5 lg:px-10 xl:px-16">
        {/* Heading */}
        <FadeIn>
          <div className="mb-16 text-center">
            <p className="font-mono text-sm uppercase tracking-[0.35em] text-cyan-400">
              DEVELOPER WORKSPACE
            </p>

            <h2 className="mt-4 text-5xl font-bold text-white md:text-5xl">
              About Me
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#8B949E]">
              Navigate through my developer profile using terminal commands.
            </p>
          </div>
        </FadeIn>

        {/* Main Window */}
        <SlideAnimation>
          <div
            className="
              overflow-hidden
              rounded-[28px]
              border
              border-white/10
              bg-[#0D1117]/80
              backdrop-blur-xl
              shadow-[0_30px_100px_rgba(0,0,0,0.45)]
            "
          >
            <div className="flex flex-col lg:flex-row">
              <CommandSidebar
                activeCommand={activeCommand}
                onSelect={selectCommand}
              />

              <div className="flex-1 p-4 lg:p-6">
                <Terminal data={currentData} />
              </div>
            </div>
          </div>
        </SlideAnimation>
      </div>
    </section>
  );
};

export default AboutSection;