import { motion, type Variants } from "framer-motion";
import { ExternalLink, FolderGit2, Github } from "lucide-react";
import Section from "./Section";
import { projects, type Project } from "../data/projects";

const grid: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

function ProjectCard({ project }: { project: Project }) {
  const { title, description, tags, repo, live, featured } = project;
  return (
    <motion.article
      variants={card}
      className={`group relative flex flex-col rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div className="flex items-start justify-between">
        <span className="rounded-lg bg-accent-soft p-2 text-accent">
          <FolderGit2 size={18} />
        </span>
        <div className="flex gap-3">
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} repository`}
              className="text-muted transition-colors hover:text-accent"
            >
              <Github size={18} />
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} live demo`}
              className="text-muted transition-colors hover:text-accent"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      <h3 className="mt-5 font-display text-xl font-semibold tracking-tight transition-colors group-hover:text-accent">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-muted"
          >
            {tag}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <Section id="projects" label="Projects">
      <motion.div
        variants={grid}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>
    </Section>
  );
}
