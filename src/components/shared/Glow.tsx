import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlowProps {
  children: ReactNode;
  className?: string;
}

export default function Glow({
  children,
  className,
}: GlowProps) {
  return (
    <div
      className={cn(
        "group relative",
        className
      )}
    >
      <div
        className="
        absolute
        -inset-1

        rounded-[inherit]

        bg-gradient-to-r
        from-blue-500/0
        via-blue-500/25
        to-purple-500/0

        opacity-0

        blur-2xl

        transition-opacity
        duration-500

        group-hover:opacity-100
      "
      />

      <div className="relative">
        {children}
      </div>
    </div>
  );
}