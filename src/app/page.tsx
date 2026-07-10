import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/AboutSection";
import SkillSection from "@/components/skills/SkillSection";

import GlobalBackground from "@/components/background/GlobalBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      
      {/* Shared Background */}
      <GlobalBackground />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />

        <Hero />

        <About />

        <SkillSection />
      </div>

    </main>
  );
}