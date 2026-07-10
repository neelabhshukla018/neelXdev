"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

import type { EmailStatus } from "../types/contact";

interface SubmitButtonProps {
  status: EmailStatus;
  disabled?: boolean;
}

export function SubmitButton({
  status,
  disabled,
}: SubmitButtonProps) {
  const isSending = status === "sending";
  const isSuccess = status === "success";

  return (
    <motion.button
      type="submit"
      disabled={disabled || isSending}
      whileHover={!disabled && !isSending ? { y: -2 } : undefined}
      whileTap={!disabled && !isSending ? { scale: 0.98 } : undefined}
      transition={{ duration: 0.2 }}
      className={cn(
        `
        group
        relative
        flex
        h-14
        w-full
        items-center
        justify-center
        overflow-hidden

        rounded-xl

        bg-indigo-500
        text-white

        transition-all
        duration-200

        hover:bg-indigo-600
        hover:shadow-lg
        hover:shadow-indigo-500/25

        disabled:pointer-events-none
        disabled:opacity-60
        `
      )}
    >
      {/* Hover Overlay */}

      <span
        className="
          absolute
          inset-0
          bg-white/10
          opacity-0
          transition-opacity
          duration-200
          group-hover:opacity-100
        "
      />

      <AnimatePresence mode="wait">
        {isSending ? (
          <motion.div
            key="sending"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="relative z-10 flex items-center gap-2"
          >
            <Loader2 className="h-5 w-5 animate-spin" />
            <span className="font-medium">Sending...</span>
          </motion.div>
        ) : isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-10 flex items-center gap-2"
          >
            <Check className="h-5 w-5" />
            <span className="font-medium">Message Sent</span>
          </motion.div>
        ) : (
          <motion.div
            key="idle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-10 flex items-center gap-2"
          >
            <span className="font-medium">
              Send Message
            </span>

            <ArrowRight
              className="
                h-5
                w-5
                transition-transform
                duration-200
                group-hover:translate-x-1
              "
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}