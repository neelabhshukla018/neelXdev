"use client";

import { motion } from "framer-motion";

interface SlideAnimationProps {
  children: React.ReactNode;
}

const SlideAnimation = ({
  children,
}: SlideAnimationProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
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

export default SlideAnimation;