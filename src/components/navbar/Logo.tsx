import Link from "next/link";
import { CodeXml } from "lucide-react";

export default function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3 sm:gap-4"
    >
      {/* Logo */}

      <div className="relative">
        {/* Glow */}

        <div
          className="
            absolute
            -inset-1
            rounded-2xl
            opacity-30
            blur-xl
            transition-all
            duration-500
            group-hover:opacity-60
            group-hover:blur-2xl
          "
        />

        {/* Glass */}

        <div
          className="
            relative
            flex
            h-12
            w-12
            sm:h-14
            sm:w-14
            items-center
            justify-center
            overflow-hidden
            rounded-2xl
            border
            border-white/30
            backdrop-blur-xl
            transition-all
            duration-300
            group-hover:scale-105
            group-hover:-rotate-3
          "
        >
          <div
            className="
              absolute
              inset-0
              rounded-2xl
            "
          />

          <CodeXml
            size={22}
            strokeWidth={2.5}
            className="text-blue-400 sm:h-[26px] sm:w-[26px]"
          />
        </div>
      </div>

      {/* Text */}

      <div className="block">
        <h1
          className="
            text-xl
            sm:text-2xl
            font-black
            tracking-tight
            leading-none
          "
        >
          <span className="text-white">
            neel
          </span>

          <span
            className="
              bg-gradient-to-r
              from-blue-400
              via-cyan-400
              to-violet-500
              bg-clip-text
              text-transparent
            "
          >
            𝕏
          </span>

          <span className="text-white">
            dev
          </span>
        </h1>
      </div>
    </Link>
  );
}