"use client";

import Link from "next/link";
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/neelabhshukla018",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/neelabh18shukla/",
    icon: FaLinkedinIn,
  },
  {
    name: "Email",
    href: "mailto:neelabhshukla79@email.com",
    icon: HiOutlineMail,
  },
  {
    name: "Resume",
    href: "/resume/Neelabh's_Resume.pdf",
    icon: FiDownload,
  },
];

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      {socialLinks.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.name}
            href={item.href}
            target={item.name !== "Resume" ? "_blank" : "_self"}
            aria-label={item.name}
            className="
              group
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-2xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-blue-500/50
              hover:bg-blue-500/10
              hover:shadow-lg
              hover:shadow-blue-500/20
            "
          >
            <Icon
              size={18}
              className="
                text-muted-foreground
                transition-colors
                duration-300
                group-hover:text-white
              "
            />
          </Link>
        );
      })}
    </div>
  );
}