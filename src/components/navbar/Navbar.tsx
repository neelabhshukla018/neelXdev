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
      {/* Don't use section-container here */}
      <div className="mx-auto flex h-full max-w-[1600px] items-center justify-between px-8 xl:px-16">

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
            "
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile */}

      <div
        className={`overflow-hidden transition-all duration-300 ${
          mobileOpen
            ? "max-h-[500px] border-t border-white/10"
            : "max-h-0"
        }`}
      >
        <div className="mx-auto max-w-[1600px] px-8 py-6">

          <nav className="flex flex-col gap-3">

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 hover:bg-white/5"
              >
                {item.label}
              </Link>
            ))}

          </nav>

          <div className="mt-6 border-t border-white/10 pt-6">
            <SocialLinks />
          </div>

        </div>
      </div>
    </header>
  );
}