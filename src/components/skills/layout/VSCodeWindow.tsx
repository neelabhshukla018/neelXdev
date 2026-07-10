// src/components/skills/layout/VSCodeWindow.tsx

"use client";

/**
 * ==========================================================
 * VS CODE WINDOW
 * ==========================================================
 * Root layout for the complete Skills IDE.
 * Desktop preserved.
 * Responsive behavior added.
 */

import { ReactNode } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

import TitleBar from "./TitleBar";
import ActivityBar from "./ActivityBar";
import Explorer from "./Explorer";
import Editor from "./Editor";
import RightSidebar from "./RightSidebar";
import BottomPanel from "./BottomPanel";
import StatusBar from "./StatusBar";
import MobileCategoryBar from "../mobile/MobileCategoryBar";
interface VSCodeWindowProps {
  children?: ReactNode;

  className?: string;
}

export default function VSCodeWindow({
  children,
  className,
}: VSCodeWindowProps) {

  return (

    <motion.section
      initial={{
        opacity:0,
        y:40,
        scale:0.98,
      }}

      whileInView={{
        opacity:1,
        y:0,
        scale:1,
      }}

      viewport={{
        once:true,
      }}

      transition={{
        duration:0.6,
      }}

      className={cn(
        "relative",

        "w-full",

        // responsive height
        "h-[650px]",
        "sm:h-[750px]",
        "md:h-[820px]",
        "lg:h-[900px]",

        "overflow-hidden",

        "rounded-2xl",

        "border",

        "border-white/10",

        "bg-[#1e1e1e]",

        "shadow-[0_40px_100px_rgba(0,0,0,.45)]",

        className
      )}
    >


      {/* TITLE BAR */}

      <TitleBar />
<div className="block md:hidden">
  <MobileCategoryBar />
</div>

      {/* MAIN */}

      <div
        className="
        flex
        h-[calc(100%-64px)]
        w-full
        overflow-hidden
        "
      >


        {/* =========================================
            ACTIVITY BAR

            Desktop:
            visible

            Mobile:
            hidden
        ========================================== */}

        <div
          className="
          hidden
          xl:block
          "
        >
          <ActivityBar />
        </div>



        {/* =========================================
            EXPLORER

            Desktop:
            visible

            Tablet:
            visible

            Mobile:
            hidden
        ========================================== */}

        <div
          className="
          hidden
          md:block
          "
        >
          <Explorer />
        </div>



        {/* =========================================
            CENTER AREA
        ========================================== */}

        <div
          className="
          flex
          flex-1
          flex-col
          overflow-hidden
          "
        >


          {/* EDITOR + SIDEBAR */}

          <div
            className="
            flex
            flex-1
            overflow-hidden
            "
          >


            {/* EDITOR */}

            <div
              className="
              flex-1
              overflow-hidden
              "
            >

              <Editor />

              {children}

            </div>



            {/* =====================================
                RIGHT SIDEBAR

                Desktop:
                visible

                Mobile:
                hidden
            ====================================== */}

            <div
              className="
              hidden
              xl:block
              "
            >
              <RightSidebar />
            </div>


          </div>



          {/* TERMINAL */}

<div className="hidden md:block">
  <BottomPanel />
</div>

       


        </div>


      </div>



   {/* STATUS BAR */}

<div className="hidden md:block">
  <StatusBar />
</div>


    </motion.section>

  );
}