"use client";

import { useEffect, useState } from "react";

type Star = {
  left: number;
  top: number;
  opacity: number;
  size: number;
};

export default function Wallpaper() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 70 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 55,
      opacity: 0.2 + Math.random() * 0.8,
      size: Math.random() > 0.8 ? 3 : 2,
    }));

    setStars(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0f0b1d]">
      {/* ... keep your glow, mountains, horizon exactly the same ... */}

      {/* Stars */}
      <div className="absolute inset-0">
        {stars.map((star, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: star.size,
              height: star.size,
              opacity: star.opacity,
            }}
          />
        ))}
      </div>

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-soft-light"
        style={{
          backgroundImage:
            "radial-gradient(circle,#fff 1px,transparent 1px)",
          backgroundSize: "4px 4px",
        }}
      />
    </div>
  );
}