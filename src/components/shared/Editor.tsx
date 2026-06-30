import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface EditorProps {
  children: ReactNode;
  className?: string;
}

export default function Editor({
  children,
  className,
}: EditorProps) {
  return (
    <div
      className={cn(
        `
        font-mono

        text-sm

        leading-7

        text-muted-foreground

        overflow-x-auto

        whitespace-pre-wrap
        `,
        className
      )}
    >
      {children}
    </div>
  );
}