import { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "despire",

    title: "Despire",

    subtitle: "AI Blogging Platform",

    description:
      "A full-stack AI blogging platform featuring AI content generation, AI image generation, authentication, blog management, comments, likes, bookmarks, subscriptions, and PWA support.",

    techStack: [
      { id: "react", name: "React" },
      { id: "vite", name: "Vite" },
      { id: "tailwind", name: "Tailwind CSS" },
      { id: "node", name: "Node.js" },
      { id: "express", name: "Express.js" },
      { id: "mongodb", name: "MongoDB" },
      { id: "clerk", name: "Clerk" },
      { id: "cloudinary", name: "Cloudinary" },
      { id: "groq", name: "Groq AI" },
    ],

    preview: {
      images: [
        "/projects/images/despire/home.webp",
        "/projects/images/despire/Dashboard.png",
        "/projects/images/despire/contact.png",
        "/projects/images/despire/About.png",
      ],
    },

    links: {
      github: "https://github.com/neelabhshukla018/Despiree-_Blogs",
      demo: "https://despire-blogsmt.netlify.app/",
    },

    featured: true,
  },

//   {
//     id: "naxity",

//     title: "naXity",

//     subtitle: "AI Powered Urban Mobility Platform",

//     description:
//       "A next-generation smart city platform that combines AI navigation, ride booking, food discovery, weather intelligence, emergency services, and real-time city insights into a unified ecosystem.",

//     techStack: [
//       { id: "next", name: "Next.js" },
//       { id: "react", name: "React" },
//       { id: "typescript", name: "TypeScript" },
//       { id: "tailwind", name: "Tailwind CSS" },
//       { id: "node", name: "Node.js" },
//       { id: "express", name: "Express.js" },
//       { id: "prisma", name: "Prisma" },
//       { id: "postgres", name: "PostgreSQL" },
//       { id: "maplibre", name: "MapLibre" },
//       { id: "socketio", name: "Socket.IO" },
//     ],

//     preview: {
//       images: [
//         "/projects/images/naxity/home.webp",
//         "/projects/images/naxity/map.webp",
//         "/projects/images/naxity/rides.webp",
//         "/projects/images/naxity/weather.webp",
//         "/projects/images/naxity/emergency.webp",
//       ],
//     },

//     links: {
//       github: "https://github.com/yourusername/naxity",
//       demo: "https://naxity.vercel.app",
//     },
//   },

//   {
//     id: "traventure",

//     title: "Traventure",

//     subtitle: "Travel Booking Platform",

//     description:
//       "A responsive travel platform for discovering destinations, exploring tour packages, and booking trips through a clean and modern user experience.",

//     techStack: [
//       { id: "react", name: "React" },
//       { id: "tailwind", name: "Tailwind CSS" },
//       { id: "javascript", name: "JavaScript" },
//       { id: "node", name: "Node.js" },
//       { id: "express", name: "Express.js" },
//       { id: "mongodb", name: "MongoDB" },
//     ],

//     preview: {
//       images: [
//         "/projects/images/traventure/home.webp",
//         "/projects/images/traventure/packages.webp",
//         "/projects/images/traventure/details.webp",
//       ],
//     },

//     links: {
//       github: "https://github.com/yourusername/traventure",
//       demo: "https://traventure.vercel.app",
//     },
//   },

//   {
//     id: "earthwear",

//     title: "EarthWear",

//     subtitle: "Sustainable Fashion Store",

//     description:
//       "An eco-friendly fashion marketplace focused on sustainable clothing with a premium shopping experience.",

//     techStack: [
//       { id: "react", name: "React" },
//       { id: "tailwind", name: "Tailwind CSS" },
//       { id: "javascript", name: "JavaScript" },
//       { id: "firebase", name: "Firebase" },
//     ],

//     preview: {
//       images: [
//         "/projects/images/earthwear/home.webp",
//         "/projects/images/earthwear/products.webp",
//         "/projects/images/earthwear/cart.webp",
//       ],
//     },

//     links: {
//       github: "https://github.com/yourusername/earthwear",
//       demo: "https://earthwear.vercel.app",
//     },
//   },

//   {
//     id: "yumcart",

//     title: "YumCart",

//     subtitle: "Food Ordering Platform",

//     description:
//       "A food ordering web application featuring menu browsing, cart management, bill generation, and responsive ordering.",

//     techStack: [
//       { id: "react", name: "React" },
//       { id: "tailwind", name: "Tailwind CSS" },
//       { id: "javascript", name: "JavaScript" },
//       { id: "node", name: "Node.js" },
//       { id: "mongodb", name: "MongoDB" },
//     ],

//     preview: {
//       images: [
//         "/projects/images/yumcart/home.webp",
//         "/projects/images/yumcart/menu.webp",
//         "/projects/images/yumcart/cart.webp",
//       ],
//     },

//     links: {
//       github: "https://github.com/yourusername/yumcart",
//       demo: "https://yumcart.vercel.app",
//     },
//   },

//   {
//     id: "soulscribbles",

//     title: "Soul$cribbles",

//     subtitle: "Modern Blogging Platform",

//     description:
//       "A blogging platform focused on writing, publishing, and reading articles with a clean interface.",

//     techStack: [
//       { id: "react", name: "React" },
//       { id: "tailwind", name: "Tailwind CSS" },
//       { id: "node", name: "Node.js" },
//       { id: "express", name: "Express.js" },
//       { id: "mongodb", name: "MongoDB" },
//     ],

//     preview: {
//       images: [
//         "/projects/images/soulscribbles/home.webp",
//         "/projects/images/soulscribbles/editor.webp",
//         "/projects/images/soulscribbles/blog.webp",
//       ],
//     },

//     links: {
//       github: "https://github.com/yourusername/soulscribbles",
//       demo: "https://soulscribbles.vercel.app",
//     },
//   },
];

export default projects;