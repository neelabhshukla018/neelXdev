"use client";

import { motion } from "framer-motion";

interface BlinkingCursorProps {
  className?: string;
}

const BlinkingCursor = ({
  className = "",
}: BlinkingCursorProps) => {
  return (
    <motion.span
      animate={{
        opacity: [1, 0, 1],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`inline-block h-5 w-[9px] rounded-sm bg-[#3FB950] align-middle ${className}`}
    />
  );
};

export default BlinkingCursor;