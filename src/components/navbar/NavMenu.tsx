"use client";

import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";

import { navItems } from "@/data/nav";

export default function NavMenu() {
  const [active, setActive] = useState("#home");

  return (
    <nav className="hidden lg:flex items-center">
      <ul
        className="
          flex
          items-center
          gap-2
          rounded-2xl
          border
          border-white/10
          bg-white/5
          p-2
          backdrop-blur-xl
        "
      >
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={() => setActive(item.href)}
              className={clsx(
                `
                  relative
                  rounded-xl
                  px-5
                  py-2.5
                  text-sm
                  font-semibold
                  transition-all
                  duration-300
                `,
                active === item.href
                  ? `
                      bg-slate-400
                      text-black
                      shadow-lg
                      
                    `
                  : `
                      text-zinc-300
                      hover:-translate-y-0.5
                      hover:bg-white/5
                      hover:text-white
                      hover:shadow-md
                      hover:shadow-white/5
                    `
              )}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}