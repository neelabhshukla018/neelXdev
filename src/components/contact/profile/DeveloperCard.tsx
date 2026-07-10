"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { AVAILABILITY } from "../constants/contact";
import { AvailabilityBadge } from "./AvailabilityBadge";
import { ContactInfo } from "./ContactInfo";
import { ResumeButton } from "./ResumeButton";


interface DeveloperCardProps {
  className?: string;
}

export function DeveloperCard({
  className,
}: DeveloperCardProps) {
  return (
    <motion.aside
      initial={{
        opacity: 0,
        x: 20,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
      }}
      className={[
        "rounded-3xl",
        "border border-border/50",
        "bg-background/60",
        "backdrop-blur-xl",
        "p-5 sm:p-6 lg:p-7",
        "shadow-xl",
        "space-y-8",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Profile */}

      <div className="flex flex-col items-center text-center">
        <div className="relative">
          {/* Glow */}

          <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl" />

          {/* Avatar */}

          <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-primary/20 sm:h-36 sm:w-36">
            <Image
              src="/images/profile/profile.jpeg"
              alt="Neelabh Shukla"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        <h2 className="mt-6 text-2xl font-bold">
          Neelabh Shukla
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Full Stack Developer
        </p>

        <p className="mt-1 text-sm text-muted-foreground">
          React • Next.js • Node.js • TypeScript
        </p>
      </div>

      {/* Availability */}

      <AvailabilityBadge
        status={AVAILABILITY.status}
        label={AVAILABILITY.label}
        description={AVAILABILITY.description}
      />

      {/* Contact Info */}

      <ContactInfo />

    

      {/* Resume */}

      <ResumeButton />
    </motion.aside>
  );
}