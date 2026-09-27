import { motion } from "motion/react";
import { Code2, Cpu, Wrench } from "lucide-react";
import { Section } from "./Section";

const groups = [
  {
    icon: Code2,
    title: "Frontend Engineering",
    body: "React.js, Next.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS and responsive state management.",
    chips: ["React.js", "Next.js", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    icon: Cpu,
    title: "Software Engineering Foundations",
    body: "C++, Java, data structures, algorithms and clean code architecture.",
    chips: ["C++", "Java", "Data Structures", "Algorithms", "Clean Architecture"],
  },
  {
    icon: Wrench,
    title: "Tooling & Ecosystem",
    body: "Git, GitHub, VS Code, performance optimization and modern web standards.",
    chips: ["Git", "GitHub", "VS Code", "Performance", "Web Standards"],
  },
];

export function Expertise() {
  return (
    <Section
      id="expertise"
      eyebrow="Core expertise"
      title="Technical stack"
      description="The toolkit behind fast, accessible and maintainable products."
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
            className="glass rounded-2xl p-6 transition-shadow hover:glow-ring"
          >
            <span
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-primary-foreground"
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
