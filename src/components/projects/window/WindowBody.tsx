"use client";

import { motion } from "framer-motion";

import { ProjectInfo } from "../left/ProjectInfo";
import { PreviewScreen } from "../right/PreviewScreen";
import { WindowDivider } from "./WindowDivider";

export function WindowBody() {
  return (
    <div className="relative w-full p-5 sm:p-6 lg:p-8">
      {/* Vertical Divider (Desktop Only) */}
      <WindowDivider />

      <div
        className="
          grid
          items-stretch
          gap-8
          lg:grid-cols-2
          lg:gap-10
          xl:gap-12
        "
      >
        {/* Left Panel */}
        <motion.div
          key="project-info"
          initial={{
            opacity: 0,
            x: -30,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.45,
          }}
          className="
            flex
            min-h-full
            flex-col
            justify-center
          "
        >
          <ProjectInfo />
        </motion.div>

        {/* Right Panel */}
        <motion.div
          key="preview-screen"
          initial={{
            opacity: 0,
            x: 30,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.45,
            delay: 0.05,
          }}
          className="
            flex
            min-h-full
            items-center
            justify-center
          "
        >
          <PreviewScreen />
        </motion.div>
      </div>
    </div>
  );
}

export default WindowBody;