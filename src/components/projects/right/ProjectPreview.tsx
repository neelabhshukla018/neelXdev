"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { useProjects } from "../hooks/useProjects";
import { PreviewImage } from "./PreviewImage";

const AUTO_PLAY_DELAY = 4000;

export function ProjectPreview() {
  const { activeProject } = useProjects();

  const images = activeProject.preview.images;

  const [current, setCurrent] = useState(0);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const startAutoPlay = () => {
    if (images.length <= 1) return;

    stopAutoPlay();

    intervalRef.current = setInterval(() => {
      nextImage();
    }, AUTO_PLAY_DELAY);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    setCurrent(0);
    startAutoPlay();

    return stopAutoPlay;
  }, [activeProject.id]);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (images.length <= 1) return;

    stopAutoPlay();

    if (e.deltaY > 0) nextImage();
    else previousImage();

    startAutoPlay();
  };

  const handleManual = (index: number) => {
    stopAutoPlay();
    setCurrent(index);
    startAutoPlay();
  };

  return (
    <motion.div
      onWheel={handleWheel}
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
      className="
        group
        relative
        aspect-video
        w-full
        overflow-hidden
        rounded-2xl
        bg-zinc-950
      "
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{
            opacity: 0,
            x: 80,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: -80,
          }}
          transition={{
            duration: 0.45,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
        >
          <PreviewImage
            src={images[current]}
            alt={`${activeProject.title} ${current + 1}`}
          />
        </motion.div>
      </AnimatePresence>

      {/* Previous */}
      {images.length > 1 && (
        <button
          onClick={() =>
            handleManual(
              (current - 1 + images.length) % images.length
            )
          }
          className="
            absolute
            left-4
            top-1/2
            z-30
            -translate-y-1/2
            rounded-full
            bg-black/60
            p-2
            text-white
            opacity-0
            backdrop-blur-md
            transition-all
            duration-300
            group-hover:opacity-100
            hover:bg-black/80
          "
        >
          <ChevronLeft size={22} />
        </button>
      )}

      {/* Next */}
      {images.length > 1 && (
        <button
          onClick={() =>
            handleManual((current + 1) % images.length)
          }
          className="
            absolute
            right-4
            top-1/2
            z-30
            -translate-y-1/2
            rounded-full
            bg-black/60
            p-2
            text-white
            opacity-0
            backdrop-blur-md
            transition-all
            duration-300
            group-hover:opacity-100
            hover:bg-black/80
          "
        >
          <ChevronRight size={22} />
        </button>
      )}

      {/* Progress Dots */}
      {images.length > 1 && (
        <div
          className="
            absolute
            bottom-5
            left-1/2
            z-30
            flex
            -translate-x-1/2
            gap-3
          "
        >
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleManual(index)}
              className="
                relative
                h-2
                w-10
                overflow-hidden
                rounded-full
                bg-white/20
              "
            >
              {current === index && (
                <motion.div
                  key={current}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: AUTO_PLAY_DELAY / 1000,
                    ease: "linear",
                  }}
                  className="h-full rounded-full bg-white"
                />
              )}
            </button>
          ))}
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
    </motion.div>
  );
}

export default ProjectPreview;