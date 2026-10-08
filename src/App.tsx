import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Section from "./components/Section";

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />

        <About />
        <TechStack />

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
