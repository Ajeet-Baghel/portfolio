import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />

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
