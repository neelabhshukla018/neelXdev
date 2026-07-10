"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy, ExternalLink } from "lucide-react";

import { CONTACT_INFO } from "../constants/contact";
import { cn } from "@/lib/utils";

export function ContactInfo() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = async (
    id: string,
    value: string
  ) => {
    try {
      await navigator.clipboard.writeText(value);

      setCopied(id);

      setTimeout(() => {
        setCopied(null);
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="space-y-4">
      {CONTACT_INFO.map((item) => {
        const Icon = item.icon;

        const content = (
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            className="
              group
              flex
              items-center
              gap-4
              rounded-xl
              border
              border-border/50
              bg-background/40
              p-4
              backdrop-blur-md
              transition-colors
              hover:border-primary/30
            "
          >
            {/* Icon */}

            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-lg
                bg-primary/10
                text-primary
              "
            >
              <Icon className="h-5 w-5" />
            </div>

            {/* Text */}

            <div className="min-w-0 flex-1">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                {item.label}
              </p>

              <p className="truncate font-medium">
                {item.value}
              </p>
            </div>

            {/* Copy Button */}

            {item.copyable && (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  copyToClipboard(item.id, item.value);
                }}
                className={cn(
                  "rounded-md p-2 transition-colors",
                  "hover:bg-primary/10"
                )}
              >
                <AnimatePresence mode="wait">
                  {copied === item.id ? (
                    <motion.div
                      key="check"
                      initial={{
                        scale: 0,
                      }}
                      animate={{
                        scale: 1,
                      }}
                      exit={{
                        scale: 0,
                      }}
                    >
                      <Check className="h-4 w-4 text-green-500" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="copy"
                      initial={{
                        scale: 0,
                      }}
                      animate={{
                        scale: 1,
                      }}
                      exit={{
                        scale: 0,
                      }}
                    >
                      <Copy className="h-4 w-4 text-muted-foreground" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            )}

            {/* External Link */}

            {item.href && (
              <ExternalLink className="h-4 w-4 text-muted-foreground transition group-hover:text-primary" />
            )}
          </motion.div>
        );

        if (item.href) {
          return (
            <Link
              key={item.id}
              href={item.href}
              target={
                item.href.startsWith("http")
                  ? "_blank"
                  : undefined
              }
            >
              {content}
            </Link>
          );
        }

        return (
          <div key={item.id}>
            {content}
          </div>
        );
      })}
    </div>
  );
}