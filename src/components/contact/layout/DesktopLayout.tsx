"use client";

import { ContactForm } from "../form/ContactForm";
import { DeveloperCard } from "../profile/DeveloperCard";

interface DesktopLayoutProps {
  onSuccess?: () => void;
}

export function DesktopLayout({
  onSuccess,
}: DesktopLayoutProps) {
  return (
    <div
      className="
        hidden
        xl:grid
        xl:grid-cols-[1.4fr_0.9fr]
        2xl:grid-cols-[1.5fr_0.85fr]
        gap-8
        items-start
      "
    >
      {/* Contact Form */}

      <div className="min-w-0">
        <ContactForm onSuccess={onSuccess} />
      </div>

      {/* Developer Card */}

      <div className="sticky top-24">
        <DeveloperCard />
      </div>
    </div>
  );
}