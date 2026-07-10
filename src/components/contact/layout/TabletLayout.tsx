"use client";

import { ContactForm } from "../form/ContactForm";
import { DeveloperCard } from "../profile/DeveloperCard";

interface TabletLayoutProps {
  onSuccess?: () => void;
}

export function TabletLayout({
  onSuccess,
}: TabletLayoutProps) {
  return (
    <div
      className="
        hidden
        md:flex
        xl:hidden
        flex-col
        gap-8
      "
    >
      {/* Developer Card */}

      <DeveloperCard />

      {/* Contact Form */}

      <ContactForm onSuccess={onSuccess} />
    </div>
  );
}