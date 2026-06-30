"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock3 } from "lucide-react";

export default function DigitalClock() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );

      setDate(
        now.toLocaleDateString("en-IN", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      );
    };

    updateClock();

    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -20,
      }}
      animate={{
        opacity: 1,
        y: [0, -6, 0],
      }}
      transition={{
        opacity: {
          duration: 0.7,
        },
        y: {
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
        },
      }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-5
        backdrop-blur-2xl
        shadow-[0_20px_60px_rgba(0,0,0,.35)]
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          -left-8
          -top-8
          h-24
          w-24
          rounded-full
          bg-cyan-500/20
          blur-3xl
        "
      />

      {/* Header */}

      <div className="mb-5 flex items-center gap-2">
        <Clock3
          size={18}
          className="text-cyan-400"
        />

        <span className="text-sm font-semibold text-zinc-300">
          Local Time
        </span>
      </div>

      {/* Time */}

      <h2
        className="
          font-mono
          text-3xl
          font-bold
          tracking-widest
          text-white
        "
      >
        {time}
      </h2>

      {/* Date */}

      <div className="mt-4 flex items-center gap-2">

        <CalendarDays
          size={16}
          className="text-zinc-400"
        />

        <span className="text-sm text-zinc-400">
          {date}
        </span>

      </div>

      {/* Bottom Divider */}

      <div className="mt-5 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
    </motion.div>
  );
}