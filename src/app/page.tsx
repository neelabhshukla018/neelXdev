import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* About */}
      {/* <AboutCard /> */}

      {/* Journey */}
      {/* <JourneyCard /> */}

      {/* Skills */}
      {/* <SkillsCard /> */}

      {/* Projects */}
      {/* <ProjectsCard /> */}

      {/* Contact */}
      {/* <ContactCard /> */}
    </main>
  );
}