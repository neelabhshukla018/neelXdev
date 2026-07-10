"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PreviewImageProps {
  src: string;
  alt: string;
}

export function PreviewImage({
  src,
  alt,
}: PreviewImageProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 1.03,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
      className="
        group
        relative
        h-full
        w-full
        overflow-hidden
      "
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="(max-width:768px) 100vw, 50vw"
        className="
          object-cover
          object-top
          transition-transform
          duration-700
          ease-out
          group-hover:scale-105
        "
      />

      {/* Glass Reflection */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-br
          from-white/10
          via-transparent
          to-transparent
        "
      />

      {/* Bottom Fade */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-32
          bg-gradient-to-t
          from-black/35
          to-transparent
        "
      />

      {/* Animated Shine */}
      <motion.div
        initial={{
          x: "-120%",
        }}
        whileHover={{
          x: "120%",
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          inset-y-0
          w-24
          -skew-x-12
          bg-white/10
          blur-xl
        "
      />
    </motion.div>
  );
}

export default PreviewImage;