import { motion, type Variants } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import BullCharacter from "./BullCharacter";
import { profile } from "../data/profile";

const linkedin = profile.socials.find((s) => s.label === "LinkedIn")!.url;

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-6 lg:grid-cols-[1.15fr_1fr]">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.p
          variants={item}
          className="font-mono text-sm tracking-wide text-accent"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-4 font-display text-5xl font-bold tracking-tight md:text-7xl"
        >
          Ajeet Baghel
        </motion.h1>

        <motion.h2
          variants={item}
          className="mt-3 font-display text-3xl font-semibold tracking-tight text-muted md:text-5xl"
        >
          I build interactive web experiences.
        </motion.h2>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
        >
          Software Engineer focused on performant frontends — React,
          TypeScript, animation and 3D graphics. Currently crafting polished,
          accessible interfaces that feel alive.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
          >
            View my work
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/50 hover:text-accent"
          >
            Connect on LinkedIn
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hidden h-[380px] lg:block"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <BullCharacter />
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-accent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <motion.span
          className="block"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} />
        </motion.span>
      </motion.a>
    </section>
  );
}
