import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import ThemeProvider from "@/components/providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"), // Change after deployment

  title: {
    default: "Neelabh's Portfolio",
    template: "%s | Neelabh Shukla",
  },

  description:
    "Neelabh Shukla | Full Stack Developer | AI Engineer | Product Builder",

  keywords: [
    "Neelabh Shukla",
    "Portfolio",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "AI Engineer",
    "Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "Prisma",
    "PostgreSQL",
    "Java",
    "JavaScript",
    "C++",
  ],

  authors: [
    {
      name: "Neelabh Shukla",
      url: "https://your-domain.com",
    },
  ],

  creator: "Neelabh Shukla",
  publisher: "Neelabh Shukla",

  applicationName: "Neelabh Portfolio",

  category: "technology",

  icons: {
    icon: "/favicon/favicon.png",
    shortcut: "/favicon/favicon.png",
    apple: "/favicon/favicon.png",
  },

  openGraph: {
    title: "Neelabh Shukla",
    description:
      "Full Stack Developer | AI Engineer | Product Builder",

    url: "https://your-domain.com",

    siteName: "Neelabh Portfolio",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Neelabh Portfolio",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Neelabh Shukla",
    description:
      "Full Stack Developer | AI Engineer | Product Builder",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}