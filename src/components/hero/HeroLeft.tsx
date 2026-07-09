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
        w-full
        max-w-[620px]
        flex-col
        justify-center

        px-5
        sm:px-6
        md:px-8

        pt-2
        pb-10

        lg:max-w-none
        lg:px-0
        lg:py-0
      "
    >
      {/* ================= Availability Badge ================= */}

      <div
        className="
          mb-6
          lg:mb-8

          inline-flex
          w-fit
          items-center
          gap-3

          rounded-full
          border
          border-blue-500/20
          bg-blue-500/10

          px-4
          py-2

          backdrop-blur-xl

          sm:px-5
        "
      >
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-400" />

        <span className="text-xs font-medium text-blue-400 sm:text-sm">
          Open to Internships • Freelance • Full-Time
        </span>
      </div>

      {/* ================= Name ================= */}

      <TypingName />

      {/* ================= Roles ================= */}

      <TypingRoles />

      {/* ================= Info ================= */}

      <div
        className="
          mt-6
          lg:mt-8

          flex
          flex-col
          gap-4

          sm:flex-row
          sm:flex-wrap
          sm:gap-6
        "
      >
        {/* Location */}

        <div className="flex items-center gap-2 text-sm text-zinc-400 sm:text-base">
          <MapPin size={18} />
          <span>Lucknow, India</span>
        </div>

        {/* Education */}

        <div className="flex items-center gap-2 text-sm text-zinc-400 sm:text-base">
          <GraduationCap size={18} />
          <span>B.Tech CSE • SRMU</span>
        </div>

        {/* Internship */}

        <div className="flex items-center gap-2 text-sm text-zinc-400 sm:text-base">
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

        <div className="flex items-center gap-2 text-sm text-green-400 sm:text-base">
          <Sparkles size={18} />

          <span>
            Building{" "}
            <span className="font-semibold">
              naXity
            </span>{" "}
            &{" "}
            <span className="font-semibold">
              Smile12
            </span>
          </span>
        </div>
      </div>

      {/* ================= Buttons ================= */}

      <div className="mt-5 lg:mt-3">
        <HeroButtons />
      </div>
    </div>
  );
}