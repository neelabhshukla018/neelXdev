"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="
          h-11
          w-11
          rounded-2xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
        "
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle Theme"
      className="
        group
        relative
        flex
        h-11
        w-11
        items-center
        justify-center
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-500/50
        hover:bg-blue-500/10
        hover:shadow-lg
        hover:shadow-blue-500/20
      "
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={isDark ? "moon" : "sun"}
          initial={{
            opacity: 0,
            rotate: -90,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            rotate: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            rotate: 90,
            scale: 0.5,
          }}
          transition={{
            duration: 0.25,
          }}
        >
          {isDark ? (
            <Moon
              size={18}
              className="text-yellow-300"
            />
          ) : (
            <Sun
              size={18}
              className="text-orange-400"
            />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}