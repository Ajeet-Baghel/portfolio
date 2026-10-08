import Navbar from "./components/Navbar";
import Section from "./components/Section";

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="mx-auto flex min-h-screen max-w-6xl items-center px-6">
          <div>
            <p className="font-mono text-sm text-accent">Hi, my name is</p>
            <h1 className="mt-4 font-display text-5xl font-bold tracking-tight md:text-7xl">
              Ajeet Baghel
            </h1>
            <p className="mt-4 max-w-xl text-lg text-muted">
              Software Engineer — building interactive web experiences with
              React, TypeScript and 3D graphics.
            </p>
          </div>
        </section>

        <Section id="about" label="About">
          <p className="text-muted">Bio and stats coming up next.</p>
        </Section>

        <Section id="stack" label="Tech Stack">
          <p className="text-muted">Categorized skills grid.</p>
        </Section>

        <Section id="projects" label="Projects">
          <p className="text-muted">Featured project cards.</p>
        </Section>

        <Section id="experience" label="Experience">
          <p className="text-muted">Vertical timeline.</p>
        </Section>

        <Section id="contact" label="Contact">
          <p className="text-muted">EmailJS form + socials.</p>
        </Section>
      </main>
    </div>
  );
}
