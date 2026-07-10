"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { RESUME } from "../constants/contact";

export function ResumeButton() {
  const Icon = RESUME.icon;

  return (
    <Link
      href={RESUME.url}
      target="_blank"
      rel="noopener noreferrer"
      download
      className="block"
    >
      <motion.div
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        className="
          group
          flex
          items-center
          justify-between

          rounded-2xl
          border
          border-border

          bg-card

          px-6
          py-5

          transition-transform
          duration-200
        "
      >
        {/* Left */}

        <div className="flex items-center gap-4">
          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center

              rounded-xl

              bg-muted
            "
          >
            <Icon className="h-5 w-5" />
          </div>

          <div>
            <h3 className="text-base font-semibold">
              {RESUME.title}
            </h3>

            <p className="text-sm text-muted-foreground">
              {RESUME.description}
            </p>
          </div>
        </div>

        {/* Right */}

        <ArrowUpRight
          className="
            h-5
            w-5

            transition-transform
            duration-200

            group-hover:translate-x-1
            group-hover:-translate-y-1
          "
        />
      </motion.div>
    </Link>
  );
}