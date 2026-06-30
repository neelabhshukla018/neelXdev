import Link from "next/link";
import { CodeXml } from "lucide-react";

export default function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-4"
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
            h-14
            w-14
            items-center
            justify-center
            overflow-hidden
            rounded-2xl
            border
            border-white/30
            bg-red
           
            backdrop-blur-xl
            transition-all
            duration-300
            group-hover:scale-105
            group-hover:-rotate-3
          "
        >
          {/* Animated Border */}

          <div
            className="
              absolute
              inset-0
              rounded-2xl
              
              
              via-transparent
              
            "
          />

          <CodeXml
            size={26}
            strokeWidth={2.5}
            className="relative text-blue-400"
          />

        </div>

      </div>

      {/* Text */}

      <div className="hidden sm:block">

        <h1
          className="
            text-xl
            font-black
            tracking-tight
          "
        >
          <span className="text-white">
            neel
          </span>{" "}

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
          </span>{" "}
        </h1>

    

      </div>
    </Link>
  );
}