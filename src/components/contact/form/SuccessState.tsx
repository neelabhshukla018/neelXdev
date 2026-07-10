"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";

interface SuccessStateProps {
  visible: boolean;
}

export function SuccessState({
  visible,
}: SuccessStateProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 0.96,
          }}
          transition={{
            duration: 0.3,
          }}
          className="
            absolute
            inset-0
            z-50
            flex
            items-center
            justify-center
            rounded-2xl
            border
            border-green-500/20
            bg-background/80
            backdrop-blur-xl
          "
        >
          <div className="flex w-full max-w-sm flex-col items-center px-8 text-center">
            {/* Animated Icon */}

            <motion.div
              initial={{
                scale: 0,
                rotate: -90,
              }}
              animate={{
                scale: 1,
                rotate: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 18,
              }}
              className="
                mb-6
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-full
                bg-green-500/10
              "
            >
              <CheckCircle2 className="h-12 w-12 text-green-500" />
            </motion.div>

            {/* Heading */}

            <h2 className="text-2xl font-bold">
              Message Delivered
            </h2>

            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Thank you for reaching out.
              <br />
              I'll get back to you as soon as possible.
            </p>

            {/* Decorative Badge */}

            <motion.div
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
              }}
              className="
                mt-8
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-green-500/20
                bg-green-500/10
                px-4
                py-2
                text-sm
                font-medium
                text-green-500
              "
            >
              <Sparkles className="h-4 w-4" />

              Deployment Successful
            </motion.div>

            {/* Bottom Line */}

            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: "100%",
              }}
              transition={{
                delay: 0.35,
                duration: 0.5,
              }}
              className="mt-8 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}