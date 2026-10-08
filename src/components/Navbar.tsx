import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tight"
          onClick={() => setOpen(false)}
        >
          Ajeet<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded-full border border-accent/40 px-4 py-1.5 text-sm text-accent transition-colors hover:bg-accent-soft"
            >
              Hire me
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <ul className="border-t border-border bg-background/95 px-6 py-4 backdrop-blur-md md:hidden">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="block py-3 text-sm text-muted transition-colors hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
