import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        `
        relative
        overflow-hidden

        rounded-2xl

        border
        border-border/60

        bg-card/60

        backdrop-blur-xl

        shadow-xl

        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-blue-500/40
        hover:shadow-blue-500/20
        `,
        className
      )}
    >
      {children}
    </div>
  );
}