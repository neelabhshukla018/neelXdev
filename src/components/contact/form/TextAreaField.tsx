"use client";

import {
  TextareaHTMLAttributes,
  useEffect,
  useRef,
} from "react";

import {
  FieldError,
  UseFormRegisterReturn,
} from "react-hook-form";

import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface TextAreaFieldProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> {
  label: string;
  icon: LucideIcon;
  registration: UseFormRegisterReturn;
  error?: FieldError;

  characterCount: number;
  remainingCharacters: number;
  progress: number;
  maxLength: number;
}

export function TextAreaField({
  label,
  icon: Icon,
  registration,
  error,
  className,

  characterCount,
  remainingCharacters,
  progress,
  maxLength,

  ...props
}: TextAreaFieldProps) {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const textarea = textareaRef.current;

    if (!textarea) return;

    textarea.style.height = "0px";
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [characterCount]);

  return (
    <div className="w-full">
      {/* Label */}

      <div className="mb-2 flex items-center gap-2">
        <Icon className="h-4 w-4 text-muted-foreground" />

        <label className="text-sm font-medium text-muted-foreground">
          {label}
        </label>
      </div>

      {/* Textarea */}

      <div className="relative">
        <textarea
          {...registration}
          {...props}
          ref={(element) => {
            registration.ref(element);
            textareaRef.current = element;
          }}
          maxLength={maxLength}
          rows={5}
          className={cn(
            "min-h-[160px]",
            "w-full",
            "resize-none",
            "overflow-hidden",

            "rounded-xl",
            "border",
            "border-border/60",

            "bg-background/50",
            "backdrop-blur-md",

            "p-4",

            "text-sm",

            "transition-all",
            "duration-300",

            "placeholder:text-muted-foreground/50",

            "focus:border-primary",
            "focus:ring-2",
            "focus:ring-primary/20",
            "focus:outline-none",

            error &&
              "border-destructive focus:border-destructive focus:ring-destructive/20",

            className
          )}
        />
      </div>

      {/* Footer */}

      <div className="mt-3 space-y-2">
        {/* Progress */}

        <div className="h-1.5 overflow-hidden rounded-full bg-muted">
          <div
            className={cn(
              "h-full rounded-full transition-all duration-300",
              progress >= 100
                ? "bg-destructive"
                : "bg-primary"
            )}
            style={{
              width: `${Math.min(progress, 100)}%`,
            }}
          />
        </div>

        {/* Counter */}

        <div className="flex items-center justify-between">
          <div className="min-h-[20px]">
            {error && (
              <p className="text-sm text-destructive">
                {error.message}
              </p>
            )}
          </div>

          <span
            className={cn(
              "text-xs font-medium",

              remainingCharacters < 100
                ? "text-yellow-500"
                : "text-muted-foreground"
            )}
          >
            {characterCount}/{maxLength}
          </span>
        </div>
      </div>
    </div>
  );
}