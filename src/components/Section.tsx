import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  label: string;
  children: ReactNode;
}

/**
 * Editorial section wrapper — sticky label column on the left,
 * content column on the right.
 */
export default function Section({ id, label, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-[160px_1fr]">
        <div className="md:sticky md:top-28 md:self-start">
          <h2 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
            {label}
          </h2>
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
