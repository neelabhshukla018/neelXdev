"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import Logo from "./Logo";
import NavMenu from "./NavMenu";
import SocialLinks from "./SocialLinks";
import ThemeToggle from "./ThemeToggle";

import { navItems } from "@/data/nav";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header
        className="
          fixed
          inset-x-0
          top-0
          z-[999]
          h-20
          border-b
          border-white/10
          bg-[#09090b]/80
          backdrop-blur-2xl
        "
      >
        <div
          className="
            mx-auto
            flex
            h-full
            max-w-[1600px]
            items-center
            justify-between
            px-4
            sm:px-6
            md:px-8
            xl:px-16
          "
        >
          <Logo />

          <NavMenu />

          <div className="hidden items-center gap-3 lg:flex">
            <SocialLinks />
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-white/10
                bg-white/5
                transition-all
                hover:bg-white/10
              "
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* ================= Mobile Overlay ================= */}

      <div
        className={`
          fixed
          left-0
          right-0
          top-20
          z-[998]

          origin-top
          transition-all
          duration-300

          ${
            mobileOpen
              ? "translate-y-0 opacity-100 pointer-events-auto"
              : "-translate-y-4 opacity-0 pointer-events-none"
          }

          lg:hidden
        `}
      >
        <div
          className="
            mx-4
            rounded-2xl
            border
            border-white/10

            bg-[#09090b]/95
            backdrop-blur-3xl

            shadow-2xl
            shadow-black/50

            overflow-hidden
          "
        >
          <nav className="flex flex-col p-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="
                  rounded-xl
                  px-4
                  py-3
                  text-base
                  font-medium
                  text-white
                  transition-all

                  hover:bg-white/10
                "
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="border-t border-white/10 p-4">
            <SocialLinks />
          </div>
        </div>
      </div>
    </>
  );
}