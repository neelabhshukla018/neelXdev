"use client";

import { motion } from "framer-motion";
import { Loader2, Terminal } from "lucide-react";

interface SendingStateProps {
  visible: boolean;
}

export function SendingState({
  visible,
}: SendingStateProps) {
  if (!visible) return null;

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.25,
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
        border-border/50
        bg-background/80
        backdrop-blur-xl
      "
    >
      <div className="flex w-full max-w-sm flex-col items-center gap-6 px-8 text-center">
        {/* Animated Icon */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
          className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            border
            border-primary/20
            bg-primary/10
          "
        >
          <Loader2 className="h-8 w-8 text-primary" />
        </motion.div>

        {/* Heading */}

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">
            Deploying Message
          </h3>

          <p className="text-sm text-muted-foreground">
            Please wait while your message is securely
            delivered using EmailJS.
          </p>
        </div>

        {/* Progress */}

        <div className="w-full space-y-2">
          <div className="h-2 overflow-hidden rounded-full bg-muted">
            <motion.div
              initial={{
                x: "-100%",
              }}
              animate={{
                x: "100%",
              }}
              transition={{
                repeat: Infinity,
                duration: 1.4,
                ease: "easeInOut",
              }}
              className="
                h-full
                w-1/3
                rounded-full
                bg-primary
              "
            />
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Terminal className="h-4 w-4" />

            <span>
              Executing deployment sequence...
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}