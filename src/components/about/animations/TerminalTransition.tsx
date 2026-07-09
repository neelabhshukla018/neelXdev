"use client";

import { AnimatePresence, motion } from "framer-motion";

interface TerminalTransitionProps {
  children: React.ReactNode;
  transitionKey: string;
}

const TerminalTransition = ({
  children,
  transitionKey,
}: TerminalTransitionProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={transitionKey}
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: -10,
        }}
        transition={{
          duration: 0.25,
        }}
        className="h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default TerminalTransition;