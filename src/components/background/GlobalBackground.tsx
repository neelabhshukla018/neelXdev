"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const GlobalBackground = () => {
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Base Background */}
      <div
        className={`absolute inset-0 transition-colors duration-500 ${
          isDark ? "bg-[#05070d]" : "bg-[#f8fafc]"
        }`}
      />

      {/* Grid */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isDark ? "opacity-50" : "opacity-20"
        } bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(circle_at_center,black,transparent_90%)]`}
      />

      {/* Left Glow */}
      <div
        className={`absolute -left-48 top-10 h-[650px] w-[650px] rounded-full blur-[180px] transition-all duration-500 ${
          isDark ? "bg-cyan-500/10" : "bg-cyan-400/20"
        }`}
      />

      {/* Right Glow */}
      <div
        className={`absolute -right-48 bottom-0 h-[650px] w-[650px] rounded-full blur-[180px] transition-all duration-500 ${
          isDark ? "bg-violet-500/10" : "bg-violet-400/20"
        }`}
      />

      {/* Center Glow */}
      <div
        className={`absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[180px] transition-all duration-500 ${
          isDark ? "bg-blue-500/5" : "bg-sky-400/15"
        }`}
      />
    </div>
  );
};

export default GlobalBackground;