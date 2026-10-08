import { motion, type Variants } from "framer-motion";
import { Code2, Layers, Wrench, type LucideIcon } from "lucide-react";
import Section from "./Section";

interface Category {
  icon: LucideIcon;
  title: string;
  items: string[];
}

const categories: Category[] = [
  {
    icon: Code2,
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Java", "SQL", "HTML/CSS"],
  },
  {
    icon: Layers,
    title: "Frameworks & Libraries",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "Three.js",
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    items: [
      "Git",
      "Docker",
      "Vite",
      "Figma",
      "PostgreSQL",
      "MongoDB",
      "Vercel",
      "AWS",
    ],
  },
];

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function TechStack() {
  return (
    <Section id="stack" label="Tech Stack">
      <motion.div
        variants={list}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-5 md:grid-cols-3"
      >
        {categories.map(({ icon: Icon, title, items }) => (
          <motion.div
            key={title}
            variants={card}
            className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/40"
          >
            <div className="flex items-center gap-3">
              <span className="rounded-lg bg-accent-soft p-2 text-accent">
                <Icon size={18} />
              </span>
              <h3 className="font-display text-base font-semibold">{title}</h3>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted transition-colors hover:border-accent/50 hover:text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
