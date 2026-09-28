import { motion } from "motion/react";
import { Code2, Cpu, Search } from "lucide-react";
import { Section } from "./Section";

const groups = [
  {
    icon: Code2,
    title: "Frontend Development",
    body: "Responsive, accessible interfaces with modern component-driven development.",
    chips: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Tailwind CSS"],
  },
  {
    icon: Cpu,
    title: "Core Software Engineering",
    body: "Strong programming fundamentals for building logical and maintainable systems.",
    chips: ["C++", "C", "Java", "Data Structures", "Problem Solving"],
  },
  {
    icon: Search,
    title: "Digital Marketing & SEO",
    body: "Search-focused strategy that improves discoverability, relevance and organic performance.",
    chips: ["Technical SEO", "Keyword Research", "Semrush", "On-Page Optimization"],
  },
];

export function Expertise() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Development depth meets search strategy"
      description="A practical toolkit for building polished products and helping them get discovered."
    >
      <motion.div
        className="grid gap-6 md:grid-cols-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
      >
        {groups.map(({ icon: Icon, title, body, chips }) => (
          <motion.article
            key={title}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            whileHover={{ y: -6 }}
            className="glass rounded-lg p-6 transition-shadow hover:glow-ring"
          >
            <span
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-primary-foreground"
              style={{ backgroundImage: "var(--gradient-glow)" }}
            >
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {chips.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-border bg-secondary/40 px-3 py-1 font-mono text-[11px] text-muted-foreground"
                >
                  {c}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
