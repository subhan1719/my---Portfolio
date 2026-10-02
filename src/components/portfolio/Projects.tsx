import { useRef, type PointerEvent } from "react";
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { Section } from "./Section";

const GITHUB = "https://github.com/subhan1719?tab=repositories";

const projects = [
  {
    name: "AURA Studio",
    tag: "E-commerce web app",
    body: "An e-commerce clothing store built with Next.js, focused on a smooth shopping flow and a responsive product experience.",
    stack: ["Next.js", "Tailwind CSS", "JavaScript"],
  },
  {
    name: "Pharmacy Management System",
    tag: "OOP / C++",
    body: "A management system built in C++ using object-oriented design for organised pharmacy records and inventory workflows.",
    stack: ["C++", "OOP"],
  },
  {
    name: "Frontend Web Applications",
    tag: "Frontend",
    body: "Responsive, performance-focused interfaces and portfolio sites combining clean frontend execution with on-page SEO.",
    stack: ["JavaScript", "Tailwind CSS", "Next.js"],
  },
];

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-y * 8}deg) rotateY(${x * 10}deg) translateY(-6px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "";
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="glass group flex h-full flex-col rounded-lg p-6 transition-[transform,box-shadow] duration-300 ease-out hover:glow-ring [&>*:last-child]:mt-auto"
    >
      {children}
    </div>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured work"
      title="Selected projects"
      description="Selected web, software and search projects shaped around practical outcomes."
    >
      <motion.div
        className="grid gap-6 md:grid-cols-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ show: { transition: { staggerChildren: 0.14 } } }}
      >
        {projects.map((p) => (
          <motion.div
            key={p.name}
            variants={{
              hidden: { opacity: 0, y: 34, scale: 0.97 },
              show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
            }}
          >
            <TiltCard>
              <div className="flex items-start justify-between gap-3">
                <span className="font-mono text-[11px] uppercase tracking-widest text-primary">
                  {p.tag}
                </span>
                <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{p.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{p.body}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-secondary/40 px-3 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3 border-t border-border pt-5">
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform duration-300 hover:scale-105"
                  style={{ backgroundImage: "var(--gradient-glow)" }}
                >
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                  Live Demo
                </a>
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-semibold transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:text-primary"
                >
                  <Github className="h-3.5 w-3.5" aria-hidden />
                  GitHub Repository
                </a>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
