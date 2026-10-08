/**
 * Featured projects — replace with real work.
 * `featured` cards span wider in the bento grid.
 */

export interface Project {
  title: string;
  description: string;
  tags: string[];
  repo?: string;
  live?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Bullfolio",
    description:
      "This portfolio — React 19 + Vite + Tailwind v4 with a cursor-tracking 3D bull mascot, GSAP/Framer Motion animations, and a custom cursor. Built section-by-section with atomic commits.",
    tags: ["React", "TypeScript", "Three.js", "Tailwind"],
    repo: "https://github.com/Ajeet-Baghel/portfolio",
    featured: true,
  },
  {
    title: "Realtime Chat App",
    description:
      "WebSocket-based chat with rooms, typing indicators and message persistence.",
    tags: ["React", "Node.js", "Socket.IO", "MongoDB"],
  },
  {
    title: "Task Tracker API",
    description:
      "REST API with JWT auth, role-based access and rate limiting. Fully tested with Jest.",
    tags: ["Node.js", "Express", "PostgreSQL", "JWT"],
  },
  {
    title: "Weather Dashboard",
    description:
      "Location-aware dashboard visualizing forecasts with interactive charts.",
    tags: ["React", "Recharts", "OpenWeather API"],
  },
  {
    title: "E-commerce UI Kit",
    description:
      "Composable storefront components — cart, checkout flow, product gallery — with motion baked in.",
    tags: ["React", "Tailwind", "Framer Motion"],
    featured: true,
  },
];
