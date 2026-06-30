import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface WindowProps {
  title: string;
  children: ReactNode;
  className?: string;

  showTrafficLights?: boolean;
  rightSlot?: ReactNode;
}

export default function Window({
  title,
  children,
  className,
  showTrafficLights = true,
  rightSlot,
}: WindowProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-card/70 backdrop-blur-xl shadow-xl transition-all duration-300",
        "hover:shadow-blue-500/10 hover:border-blue-500/30",
        className
      )}
    >
      {/* Header */}

      <div className="flex items-center justify-between border-b border-border px-5 py-3">

        <div className="flex items-center gap-4">

          {showTrafficLights && (
            <div className="flex items-center gap-2">

              <span className="h-3 w-3 rounded-full bg-red-500" />

              <span className="h-3 w-3 rounded-full bg-yellow-500" />

              <span className="h-3 w-3 rounded-full bg-green-500" />

            </div>
          )}

          <p className="font-mono text-sm text-muted-foreground">
            {title}
          </p>
        </div>

        {rightSlot}
      </div>

      {/* Body */}

      <div className="p-6 md:p-8">
        {children}
      </div>
    </div>
  );
}