"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Astronaut() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: [0, -10, 0],
        rotate: [-2, 2, -2],
      }}
      transition={{
        opacity: {
          duration: 0.8,
        },
        y: {
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
        },
        rotate: {
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        },
      }}
      className="relative h-44 w-44 select-none"
    >
      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          rounded-full
          bg-blue-500/20
          blur-3xl
        "
      />

      {/* Astronaut */}
      <Image
        src="/images/astronaut.png"
        alt="Astronaut"
        fill
        priority
        className="object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,.45)]"
      />
    </motion.div>
  );
}