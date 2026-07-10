"use client";

import { motion } from "framer-motion";
import { Bot } from "lucide-react";
import {
  SiCloudinary,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMaplibre,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

import { TechStackItem } from "../types/project";

interface TechBadgeProps {
  tech: TechStackItem;
}

const techMap = {
  React: {
    icon: SiReact,
    color: "#61DAFB",
  },

  "Next.js": {
    icon: SiNextdotjs,
    color: "#FFFFFF",
  },

  TypeScript: {
    icon: SiTypescript,
    color: "#3178C6",
  },

  JavaScript: {
    icon: SiJavascript,
    color: "#F7DF1E",
  },

  "Tailwind CSS": {
    icon: SiTailwindcss,
    color: "#06B6D4",
  },

  "Node.js": {
    icon: SiNodedotjs,
    color: "#5FA04E",
  },

  "Express.js": {
    icon: SiExpress,
    color: "#FFFFFF",
  },

  Prisma: {
    icon: SiPrisma,
    color: "#5A67D8",
  },

  PostgreSQL: {
    icon: SiPostgresql,
    color: "#336791",
  },

  MongoDB: {
    icon: SiMongodb,
    color: "#47A248",
  },

  Firebase: {
    icon: SiFirebase,
    color: "#FFCA28",
  },

  Vite: {
    icon: SiVite,
    color: "#646CFF",
  },

  Cloudinary: {
    icon: SiCloudinary,
    color: "#3448C5",
  },

  "Socket.IO": {
    icon: SiSocketdotio,
    color: "#FFFFFF",
  },

  MapLibre: {
    icon: SiMaplibre,
    color: "#00BFA5",
  },

  Clerk: {
    icon: Bot,
    color: "#7C3AED",
  },

  "Groq AI": {
    icon: Bot,
    color: "#00E676",
  },
} as const;

export function TechBadge({ tech }: TechBadgeProps) {
  const item =
    techMap[tech.name as keyof typeof techMap] ?? {
      icon: Bot,
      color: "#A1A1AA",
    };

  const Icon = item.icon;

  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.96,
      }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 22,
      }}
      className="
        group
        relative
        flex
        items-center
        gap-3
        overflow-hidden
        rounded-xl
        border
        border-white/10
        bg-white/[0.03]
        px-4
        py-3
        backdrop-blur-md
        transition-all
        duration-300
        hover:border-white/20
      "
    >
      {/* Glow */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, transparent, ${item.color}22, transparent)`,
        }}
      />

      {/* Icon */}
      <Icon
        size={22}
        style={{
          color: item.color,
        }}
        className="
          relative
          z-10
          transition-transform
          duration-300
          group-hover:rotate-6
          group-hover:scale-125
        "
      />

      {/* Name */}
      <span
        className="
          relative
          z-10
          whitespace-nowrap
          text-sm
          font-medium
          text-zinc-200
          transition-colors
          duration-300
          group-hover:text-white
        "
      >
        {tech.name}
      </span>
    </motion.div>
  );
}

export default TechBadge;