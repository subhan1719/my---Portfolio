import { useRef, type PointerEvent } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Section } from "./Section";

const projects = [
  {
    name: "AURA Studio",
    tag: "E-commerce",
    body: "Advanced e-commerce clothing store web application built with Next.js, featuring dynamic layout and a refined cart experience.",
    stack: ["Next.js", "React", "Tailwind CSS", "Cart UX"],
  },
  {
    name: "Pharmacy Management System",
    tag: "Systems",
    body: "Robust console/system application engineered in C++ for inventory control and reliable record handling.",
    stack: ["C++", "OOP", "File I/O", "Data Structures"],
  },
  {
    name: "Vertex Web Solutions",
    tag: "Brand concept",
    body: "Agency concept covering web design, development and SEO optimization with a conversion-focused identity.",
    stack: ["Web Design", "Development", "SEO"],
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
      className="glass group h-full rounded-2xl p-6 transition-[transform,box-shadow] duration-300 ease-out hover:glow-ring"
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
      description="Interfaces and systems built end to end."
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
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
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
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary"
              >
                Request walkthrough
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
