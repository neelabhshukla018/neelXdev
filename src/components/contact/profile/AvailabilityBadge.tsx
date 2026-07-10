"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type AvailabilityStatus = "available" | "busy" | "offline";

interface AvailabilityBadgeProps {
  status: AvailabilityStatus;
  label: string;
  description?: string;
}

const statusStyles: Record<
  AvailabilityStatus,
  {
    dot: string;
    badge: string;
    text: string;
  }
> = {
  available: {
    dot: "bg-emerald-500",
    badge: "border-emerald-500/20 bg-emerald-500/10",
    text: "text-emerald-500",
  },

  busy: {
    dot: "bg-yellow-500",
    badge: "border-yellow-500/20 bg-yellow-500/10",
    text: "text-yellow-500",
  },

  offline: {
    dot: "bg-slate-500",
    badge: "border-slate-500/20 bg-slate-500/10",
    text: "text-slate-500",
  },
};

export function AvailabilityBadge({
  status,
  label,
  description,
}: AvailabilityBadgeProps) {
  const style = statusStyles[status];

  return (
    <div className="flex flex-col gap-2">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
        }}
        className={cn(
          "inline-flex w-fit items-center gap-3 rounded-full border px-4 py-2",
          style.badge
        )}
      >
        {/* Animated Dot */}

        <span className="relative flex h-3 w-3">
          <motion.span
            animate={{
              scale: [1, 2.2, 1],
              opacity: [0.7, 0, 0.7],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className={cn(
              "absolute inset-0 rounded-full",
              style.dot
            )}
          />

          <span
            className={cn(
              "relative h-3 w-3 rounded-full",
              style.dot
            )}
          />
        </span>

        <span
          className={cn(
            "text-sm font-semibold",
            style.text
          )}
        >
          {label}
        </span>
      </motion.div>

      {description && (
        <p className="text-sm leading-6 text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}