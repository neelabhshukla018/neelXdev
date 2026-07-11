// src/app/robots.ts

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://neelxdev.netlify.app/sitemap.xml",
    host: "https://neelxdev.netlify.app",
  };
}