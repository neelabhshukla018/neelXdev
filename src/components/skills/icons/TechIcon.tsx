// src/components/skills/icons/TechIcon.tsx

"use client";

/**
 * ==========================================================
 * TECH ICON
 * ==========================================================
 * Real technology brand icons.
 */

import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiFigma,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiDocker,
  SiVercel,
  SiFirebase,
  SiExpress,
  
  SiMysql,
  SiRedis,
  SiAngular,
  SiVuedotjs,
  SiGraphql,
  
} from "react-icons/si";


interface TechIconProps {
  name: string;
  color?: string;
  size?: number;
}


export default function TechIcon({
  name,
  color,
  size = 20,
}: TechIconProps) {

  const tech = name.toLowerCase();


  /* ======================================================
     FRONTEND
  ====================================================== */

  if (tech.includes("react")) {
    return (
      <FaReact
        size={size}
        color={color || "#61DAFB"}
      />
    );
  }


  if (tech.includes("next")) {
    return (
      <SiNextdotjs
        size={size}
        color={color || "#FFFFFF"}
      />
    );
  }


  if (tech.includes("typescript")) {
    return (
      <SiTypescript
        size={size}
        color={color || "#3178C6"}
      />
    );
  }


  if (tech.includes("javascript")) {
    return (
      <SiJavascript
        size={size}
        color={color || "#F7DF1E"}
      />
    );
  }


  if (tech.includes("angular")) {
    return (
      <SiAngular
        size={size}
        color={color || "#DD0031"}
      />
    );
  }


  if (tech.includes("vue")) {
    return (
      <SiVuedotjs
        size={size}
        color={color || "#4FC08D"}
      />
    );
  }



  /* ======================================================
     UI / DESIGN
  ====================================================== */

  if (tech.includes("tailwind")) {
    return (
      <SiTailwindcss
        size={size}
        color={color || "#06B6D4"}
      />
    );
  }


  if (tech.includes("figma")) {
    return (
      <SiFigma
        size={size}
        color={color || "#F24E1E"}
      />
    );
  }



  /* ======================================================
     BACKEND
  ====================================================== */

  if (tech.includes("node")) {
    return (
      <FaNodeJs
        size={size}
        color={color || "#339933"}
      />
    );
  }


  if (tech.includes("express")) {
    return (
      <SiExpress
        size={size}
        color={color || "#FFFFFF"}
      />
    );
  }



  /* ======================================================
     DATABASE
  ====================================================== */

  if (tech.includes("mongodb")) {
    return (
      <SiMongodb
        size={size}
        color={color || "#47A248"}
      />
    );
  }


  if (tech.includes("postgres")) {
    return (
      <SiPostgresql
        size={size}
        color={color || "#4169E1"}
      />
    );
  }


  if (tech.includes("mysql")) {
    return (
      <SiMysql
        size={size}
        color={color || "#4479A1"}
      />
    );
  }


  if (tech.includes("prisma")) {
    return (
      <SiPrisma
        size={size}
        color={color || "#FFFFFF"}
      />
    );
  }


  if (tech.includes("redis")) {
    return (
      <SiRedis
        size={size}
        color={color || "#DC382D"}
      />
    );
  }



  /* ======================================================
     DEPLOYMENT
  ====================================================== */

  if (tech.includes("docker")) {
    return (
      <SiDocker
        size={size}
        color={color || "#2496ED"}
      />
    );
  }





  if (tech.includes("vercel")) {
    return (
      <SiVercel
        size={size}
        color={color || "#FFFFFF"}
      />
    );
  }


  if (tech.includes("firebase")) {
    return (
      <SiFirebase
        size={size}
        color={color || "#FFCA28"}
      />
    );
  }



  /* ======================================================
     API / AI
  ====================================================== */

  if (tech.includes("graphql")) {
    return (
      <SiGraphql
        size={size}
        color={color || "#E10098"}
      />
    );
  }






  /* ======================================================
     VERSION CONTROL
  ====================================================== */

  if (tech.includes("github")) {
    return (
      <FaGithub
        size={size}
        color={color || "#FFFFFF"}
      />
    );
  }


  if (tech.includes("git")) {
    return (
      <FaGitAlt
        size={size}
        color={color || "#F05032"}
      />
    );
  }



  /* ======================================================
     DEFAULT
  ====================================================== */

  return (
    <span
      className="
        flex
        h-5
        w-5
        items-center
        justify-center
        rounded
        bg-[#333]
        text-[10px]
        text-white
      "
    >
      ?
    </span>
  );
}