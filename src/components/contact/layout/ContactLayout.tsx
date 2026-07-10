"use client";

import { ContactBackground } from "./ContactBackground";
import { ContactHeader } from "./ContactHeader";
import { DesktopLayout } from "./DesktopLayout";
import { MobileLayout } from "./MobileLayout";
import { TabletLayout } from "./TabletLayout";

interface ContactLayoutProps {
  onSuccess?: () => void;
}

export function ContactLayout({
  onSuccess,
}: ContactLayoutProps) {
  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-3xl
      "
    >
      {/* Background */}

      <ContactBackground />

      {/* Content */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl

          px-4
          py-16

          sm:px-6
          md:py-20

          lg:px-8
          lg:py-24

          xl:py-28
        "
      >
        {/* Header */}

        <ContactHeader className="mb-12 lg:mb-16" />

        {/* Responsive Layouts */}

        <DesktopLayout onSuccess={onSuccess} />

        <TabletLayout onSuccess={onSuccess} />

        <MobileLayout onSuccess={onSuccess} />
      </div>
    </section>
  );
}