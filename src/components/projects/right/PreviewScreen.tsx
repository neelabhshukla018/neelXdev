"use client";

import { motion } from "framer-motion";

import { ActionButtons } from "./ActionButtons";
import { Navigation } from "./Navigation";
import { ProjectPreview } from "./ProjectPreview";

export function PreviewScreen() {
  return (
    <div
      className="
        flex
        w-full
        max-w-2xl
        flex-col
        gap-6
      "
    >
      {/* Preview */}
      <motion.div
        layout
        className="
          overflow-hidden
          rounded-2xl
          border
          border-white/10
          bg-zinc-950
          shadow-2xl
        "
      >
        <ProjectPreview />
      </motion.div>

      {/* Buttons */}
      <ActionButtons />

      {/* Navigation */}
      <Navigation />
    </div>
  );
}

export default PreviewScreen;