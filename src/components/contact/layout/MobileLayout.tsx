"use client";

import { ContactForm } from "../form/ContactForm";
import { DeveloperCard } from "../profile/DeveloperCard";

interface MobileLayoutProps {
  onSuccess?: () => void;
}

export function MobileLayout({
  onSuccess,
}: MobileLayoutProps) {
  return (
    <div
      className="
        flex
        flex-col
        gap-6

        md:hidden
      "
    >
      {/* Developer Card */}

      <DeveloperCard />

      {/* Contact Form */}

      <ContactForm onSuccess={onSuccess} />
    </div>
  );
}