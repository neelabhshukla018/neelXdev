"use client";

import { motion } from "framer-motion";

export default function DeskLamp() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{
        opacity: 1,
        y: [0, -3, 0],
      }}
      transition={{
        opacity: { duration: 0.8 },
        y: {
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
        },
      }}
      className="relative h-[240px] w-[170px]"
    >
      {/* Light Glow */}
      <div
        className="
          absolute
          right-2
          top-[72px]
          h-40
          w-40
          rounded-full
          bg-yellow-300/25
          blur-[70px]
        "
      />

      {/* Lamp Base */}
      <div
        className="
          absolute
          bottom-0
          left-1/2
          h-4
          w-28
          -translate-x-1/2
          rounded-full
          bg-gradient-to-b
          from-zinc-500
          to-zinc-800
          shadow-lg
        "
      />

      {/* Pole */}
      <div
        className="
          absolute
          bottom-4
          left-1/2
          h-28
          w-[6px]
          -translate-x-1/2
          rounded-full
          bg-gradient-to-b
          from-zinc-300
          to-zinc-700
        "
      />

      {/* Arm */}
      <div
        className="
          absolute
          left-[86px]
          top-[95px]
          h-[6px]
          w-16
          origin-left
          -rotate-35
          rounded-full
          bg-gradient-to-r
          from-zinc-300
          to-zinc-700
        "
      />

      {/* Lamp Head */}
      <div
        className="
          absolute
          right-0
          top-[40px]
          h-20
          w-14
          rotate-12
          rounded-t-full
          rounded-b-xl
          bg-gradient-to-b
          from-zinc-300
          via-zinc-500
          to-zinc-800
          shadow-xl
        "
      />

      {/* Bulb */}
      <div
        className="
          absolute
          right-[14px]
          top-[94px]
          h-5
          w-5
          rounded-full
          bg-yellow-200
          shadow-[0_0_30px_rgba(253,224,71,0.8)]
        "
      />

      {/* Light Beam */}
      <div
        className="
          absolute
          right-[-10px]
          top-[110px]
          h-40
          w-44
          origin-top-right
          rotate-[18deg]
          bg-gradient-to-b
          from-yellow-200/35
          via-yellow-100/10
          to-transparent
          [clip-path:polygon(0_0,100%_0,70%_100%,30%_100%)]
        "
      />
    </motion.div>
  );
}