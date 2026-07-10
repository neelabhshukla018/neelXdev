"use client";

import { InputHTMLAttributes } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface InputFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label: string;
  icon: LucideIcon;
  registration: UseFormRegisterReturn;
  error?: FieldError;
}

export function InputField({
  label,
  icon: Icon,
  registration,
  error,
  className,
  ...props
}: InputFieldProps) {
  return (
    <div className="w-full">
      <label className="mb-2 flex items-center gap-2 text-sm font-medium text-muted-foreground">
        <Icon className="h-4 w-4" />
        {label}
      </label>

      <div className="relative">
        <Icon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground transition-colors duration-200" />

        <input
          {...registration}
          {...props}
          className={cn(
            "h-12 w-full rounded-xl border",
            "border-border/60",
            "bg-background/50",
            "pl-12 pr-4",
            "text-sm",
            "backdrop-blur-md",
            "transition-all duration-300",

            "placeholder:text-muted-foreground/50",

            "focus:border-primary",
            "focus:ring-2",
            "focus:ring-primary/20",
            "focus:outline-none",

            "disabled:cursor-not-allowed",
            "disabled:opacity-60",

            error &&
              "border-destructive focus:border-destructive focus:ring-destructive/20",

            className
          )}
        />
      </div>

      <div className="mt-1 min-h-[20px]">
        {error && (
          <p className="text-sm text-destructive">{error.message}</p>
        )}
      </div>
    </div>
  );
}