"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function HeroButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.9,
        duration: 0.6,
      }}
      className="mt-10 flex flex-wrap items-center gap-5"
    >
      {/* Projects Button */}
      <Link href="#projects">
        <motion.button
          whileHover={{
            scale: 1.05,
            y: -2,
          }}
          whileTap={{
            scale: 0.96,
          }}
          className="
            group
            flex
            items-center
            gap-3
            rounded-2xl
            bg-gradient-to-r
            from-blue-600
            via-indigo-600
            to-violet-600
            px-7
            py-4
            font-semibold
            text-white
            shadow-lg
            shadow-blue-500/30
            transition-all
            duration-300
            hover:shadow-blue-500/50
          "
        >
          View Projects

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </motion.button>
      </Link>

      {/* Resume Button */}
      <Link
        href="/resume/Neelabh's_Resume.pdf"
        target="_blank"
      >
        <motion.button
          whileHover={{
            scale: 1.05,
            y: -2,
          }}
          whileTap={{
            scale: 0.96,
          }}
          className="
            group
            flex
            items-center
            gap-3
            rounded-2xl
            border
            border-white/10
            bg-white/5
            px-7
            py-4
            font-semibold
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-blue-500/40
            hover:bg-blue-500/10
            hover:shadow-lg
            hover:shadow-blue-500/20
          "
        >
          Download Resume

          <Download
            size={18}
            className="transition-transform duration-300 group-hover:-translate-y-1"
          />
        </motion.button>
      </Link>
    </motion.div>
  );
}