"use client";

import { motion } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
}

const FadeIn = ({
  children,
}: FadeInProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;