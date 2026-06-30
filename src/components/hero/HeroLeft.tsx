import Link from "next/link";

import HeroButtons from "./HeroButtons";
import TypingName from "./TypingName";
import TypingRoles from "./TypingRoles";

import {
  MapPin,
  Sparkles,
  Briefcase,
  GraduationCap,
} from "lucide-react";

export default function HeroLeft() {
  return (
    <div
      className="
        flex
        flex-col
        justify-center
        py-10
        lg:py-0
      "
    >
      {/* Availability Badge */}

      <div
        className="
          mb-8
          inline-flex
          w-fit
          items-center
          gap-3
          rounded-full
          border
          border-blue-500/20
          bg-blue-500/10
          px-5
          py-2
          backdrop-blur-xl
        "
      >
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-400" />

        <span className="text-sm font-medium text-blue-400">
          Open to Internships • Freelance • Full-Time
        </span>
      </div>

      {/* Name */}

      <TypingName />

      {/* Roles */}

      <TypingRoles />

 

      {/* Info */}

      <div className="mt-8 flex flex-wrap gap-6">

        {/* Location */}

        <div className="flex items-center gap-2 text-zinc-400">
          <MapPin size={18} />
          <span>Lucknow, India</span>
        </div>

        {/* Education */}

        <div className="flex items-center gap-2 text-zinc-400">
          <GraduationCap size={18} />
          <span>B.Tech CSE • SRMU</span>
        </div>

        {/* Internship */}

        <div className="flex items-center gap-2 text-zinc-400">
          <Briefcase size={18} />

          <span>
            Frontend Intern @{" "}
            <Link
              href="https://iitiancraft.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                font-medium
                text-blue-400
                transition-all
                duration-300
                hover:text-cyan-400
                hover:underline
              "
            >
              IITianCraft
            </Link>
          </span>
        </div>

        {/* Current Work */}

        <div className="flex items-center gap-2 text-green-400">
          <Sparkles size={18} />

          <span>
            Building{" "}
            <span className="font-semibold">
              naXity
            </span>{" "}
            &{" "}
            <span className="font-semibold">
              Smile12
            </span>{" "}
            
          </span>
        </div>

      </div>

      {/* Buttons */}

      <HeroButtons />
    </div>
  );
}