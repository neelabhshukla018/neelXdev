"use client";

import {
  FaChrome,
  FaSpotify,
  FaInstagram,
  FaFacebook,
  FaFilm,
  FaGlobe,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { RiBrushAiFill } from "react-icons/ri";

const desktopApps = [
  {
    name: "Instagram",
    icon: FaInstagram,
    color: "text-pink-500",
    href: "https://www.instagram.com/satyam_shukla_1845/",
  },
  {
    name: "Chrome",
    icon: FaChrome,
    color: "text-red-400",
    href: "https://www.google.com",
  },
  {
    name: "Blogs",
    icon: FaGlobe,
    color: "text-cyan-400",
    href: "https://despire-blogsmt.netlify.app/",
  },
  {
    name: "Canva",
    icon: RiBrushAiFill,
    color: "text-[#00C4CC]",
    href: "https://www.canva.com/",
  },
  {
    name: "Spotify",
    icon: FaSpotify,
    color: "text-green-500",
    href: "https://open.spotify.com/",
  },
  {
    name: "Movies",
    icon: FaFilm,
    color: "text-red-500",
    href: "https://new2.hdhub4u.cl/?utm=mn1",
  },
  {
    name: "LeetCode",
    icon: SiLeetcode,
    color: "text-[#FFA116]",
    href: "https://leetcode.com/u/sirneelabhshuklaji/",
  },
  {
    name: "Twitter",
    icon: FaXTwitter,
    color: "text-white",
    href: "https://x.com/Neelabh01845",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    color: "text-blue-500",
    href: "https://www.facebook.com/profile.php?id=61575832483919",
  },
];

const mobileApps = [
  {
    name: "Instagram",
    icon: FaInstagram,
    color: "text-pink-500",
    href: "https://www.instagram.com/satyam_shukla_1845/",
  },
  {
    name: "Chrome",
    icon: FaChrome,
    color: "text-red-400",
    href: "https://www.google.com",
  },
  {
    name: "Blogs",
    icon: FaGlobe,
    color: "text-cyan-400",
    href: "https://despire-blogsmt.netlify.app/",
  },
  {
    name: "Spotify",
    icon: FaSpotify,
    color: "text-green-500",
    href: "https://open.spotify.com/",
  },
  {
    name: "Movies",
    icon: FaFilm,
    color: "text-red-500",
    href: "https://new2.hdhub4u.cl/?utm=mn1",
  },
  {
    name: "LeetCode",
    icon: SiLeetcode,
    color: "text-[#FFA116]",
    href: "https://leetcode.com/u/sirneelabhshuklaji/",
  },
  {
    name: "Twitter",
    icon: FaXTwitter,
    color: "text-white",
    href: "https://x.com/Neelabh01845",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    color: "text-blue-500",
    href: "https://www.facebook.com/profile.php?id=61575832483919",
  },
];

export default function Dock() {
  return (
    <>
      {/* ================= Desktop Dock ================= */}

      <div
        className="
          hidden
          lg:flex

          items-end
          gap-3

          rounded-[28px]
          border
          border-white/10
          bg-white/10

          px-5
          py-3

          backdrop-blur-3xl
          shadow-[0_20px_60px_rgba(0,0,0,.45)]
        "
      >
        {desktopApps.map((app) => {
          const Icon = app.icon;

          return (
            <div
              key={app.name}
              className="group relative flex flex-col items-center"
            >
              {/* Tooltip */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -top-11

                  whitespace-nowrap
                  rounded-lg

                  bg-black/90

                  px-3
                  py-1

                  text-xs
                  font-medium
                  text-white

                  opacity-0
                  transition-all
                  duration-200

                  group-hover:-translate-y-1
                  group-hover:opacity-100
                "
              >
                {app.name}
              </div>

              {/* Icon */}

              <a
                href={app.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  h-14
                  w-14

                  items-center
                  justify-center

                  rounded-2xl

                  bg-gradient-to-br
                  from-white/10
                  to-white/5

                  backdrop-blur-xl

                  transition-all
                  duration-300

                  group-hover:-translate-y-3
                  group-hover:scale-125

                  active:scale-95
                "
              >
                <Icon
                  size={28}
                  className={app.color}
                />
              </a>

              {/* Running Indicator */}

              <div
                className="
                  mt-2
                  h-1.5
                  w-1.5

                  rounded-full
                  bg-white/80

                  transition-all

                  group-hover:w-3
                "
              />
            </div>
          );
        })}
      </div>      {/* ================= Mobile Launchpad ================= */}

      <div
        className="
          grid
          grid-cols-4
          gap-3

          lg:hidden

          rounded-[30px]
          border
          border-white/10

          bg-black/20
          backdrop-blur-3xl

          p-4

          shadow-[0_20px_60px_rgba(0,0,0,.45)]
        "
      >
        {mobileApps.map((app) => {
          const Icon = app.icon;

          return (
            <a
              key={app.name}
              href={app.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group

                flex
                flex-col
                items-center
                gap-1.5

                rounded-xl

                p-2

                transition-all
                duration-300

                hover:bg-white/10
                active:scale-95
              "
            >
              {/* Icon */}

              <div
                className="
                  flex
                  h-12
                  w-12

                  items-center
                  justify-center

                  rounded-xl

                  border
                  border-white/10

                  bg-gradient-to-br
                  from-white/10
                  to-white/5

                  transition-all
                  duration-300

                  group-hover:scale-110
                  group-hover:shadow-lg
                "
              >
                <Icon
                  size={22}
                  className={app.color}
                />
              </div>

              {/* Label */}

              <span
                className="
                  text-center
                  text-[10px]
                  font-medium
                  text-zinc-300
                "
              >
                {app.name}
              </span>
            </a>
          );
        })}
      </div>
    </>
  );
}