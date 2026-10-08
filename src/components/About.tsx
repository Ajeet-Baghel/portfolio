import { motion, type Variants } from "framer-motion";
import Section from "./Section";

const stats = [
  { value: "3+", label: "Years building software" },
  { value: "15+", label: "Projects shipped" },
  { value: "10+", label: "Technologies in rotation" },
];

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function About() {
  return (
    <Section id="about" label="About">
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
          Engineer who cares about the details.
        </h3>

        <div className="mt-6 max-w-2xl space-y-4 leading-relaxed text-muted">
          <p>
            I'm Ajeet — a software engineer who enjoys the space where clean
            engineering meets expressive interfaces. Most of my work lives in
            the React + TypeScript ecosystem, with a soft spot for animation
            and WebGL.
          </p>
          <p>
            I care about the stuff users feel but never see: fast loads,
            smooth transitions, accessible markup, and code that the next
            developer doesn't have to untangle.
          </p>
          <p>
            Off the keyboard: exploring motion design, tinkering with 3D, and
            lifting heavier than my last PR.
          </p>
        </div>

        <dl className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/40"
            >
              <dt className="order-2 mt-1 text-sm text-muted">{label}</dt>
              <dd className="font-display text-3xl font-bold text-accent">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </motion.div>
    </Section>
  );
}
