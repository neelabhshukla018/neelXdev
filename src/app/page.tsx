import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/AboutSection";

import GlobalBackground from "@/components/background/GlobalBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* One shared background */}
      <GlobalBackground />

      {/* Everything else above it */}
      <div className="relative z-10">
        <Navbar />

        <Hero />

        <About />
      </div>
    </main>
  );
}