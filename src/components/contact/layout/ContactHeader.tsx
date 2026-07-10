"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

import { CONTACT_CONTENT } from "../constants/contact";

interface ContactHeaderProps {
  className?: string;
}

export function ContactHeader({
  className,
}: ContactHeaderProps) {
  return (
    <div className={className}>
      <motion.div
        initial={{
          opacity: 0,
          y: 24,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.5,
        }}
        className="mx-auto max-w-3xl text-center"
      >
        {/* Badge */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.1,
            duration: 0.4,
          }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2"
        >
          <Mail className="h-4 w-4 text-primary" />

          <span className="text-sm font-medium text-primary">
            {CONTACT_CONTENT.badge}
          </span>
        </motion.div>

        {/* Heading */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.15,
            duration: 0.5,
          }}
          className="
            mt-6
            text-3xl
            font-bold
            tracking-tight

            sm:text-4xl

            lg:text-5xl

            xl:text-6xl
          "
        >
          {CONTACT_CONTENT.heading}
        </motion.h2>

        {/* Description */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.25,
            duration: 0.5,
          }}
          className="
            mx-auto
            mt-6
            max-w-2xl
            text-sm
            leading-7
            text-muted-foreground

            sm:text-base

            lg:text-lg
          "
        >
          {CONTACT_CONTENT.description}
        </motion.p>
      </motion.div>
    </div>
  );
}