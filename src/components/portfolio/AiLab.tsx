import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Bot, CornerDownLeft, User } from "lucide-react";
import { Section, Reveal } from "./Section";

type Msg = { role: "user" | "bot"; text: string };

const prompts = [
  "Summarize this product page into 3 bullets",
  "Generate a React component from this spec",
  "Route this lead to the right workflow",
];

const replies: Record<string, string> = {
  "Summarize this product page into 3 bullets":
    "1. Premium fit, sustainable fabric.\n2. Free returns within 30 days.\n3. Ships in 2 business days.",
  "Generate a React component from this spec":
    "Scaffolded <PricingCard /> with typed props, Tailwind styling and a motion hover state.",
  "Route this lead to the right workflow":
    "Lead scored 82/100 → assigned to sales queue, follow-up email drafted and scheduled.",
};

export function AiLab() {
  const [messages, setMessages] = useState<Msg[]>([
    { role: "bot", text: "Automation assistant online. Pick a prompt to run a simulation." },
  ]);
  const [pending, setPending] = useState(false);

  const run = (prompt: string) => {
    if (pending) return;
    setMessages((m) => [...m, { role: "user", text: prompt }]);
    setPending(true);
    setTimeout(() => {
      setMessages((m) => [...m, { role: "bot", text: replies[prompt] ?? "Done." }]);
      setPending(false);
    }, 900);
  };

  return (
    <Section
      id="ai"
      eyebrow="Automation"
      title="AI Integration & Workflow Automation"
      description="Wiring smart assistants, API logic and automated pipelines into real product surfaces."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="glass rounded-2xl p-6">
          <h3 className="text-lg font-semibold">Prompt console</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Run a simulated request to see how an assistant plugs into an interface.
          </p>
          <div className="mt-6 space-y-3">
            {prompts.map((p) => (
              <button
                key={p}
                onClick={() => run(p)}
                className="flex w-full items-center justify-between gap-3 rounded-xl border border-border bg-secondary/30 px-4 py-3 text-left text-sm transition-colors hover:border-primary/50 hover:text-primary"
              >
                {p}
                <CornerDownLeft className="h-4 w-4 shrink-0 opacity-60" />
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="glass glow-ring flex flex-col rounded-2xl p-6">
          <div className="flex items-center gap-2 border-b border-border pb-4">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            <span className="font-mono text-xs text-muted-foreground">assistant.session</span>
          </div>
          <div className="mt-4 flex min-h-[280px] flex-col gap-3">
            <AnimatePresence initial={false}>
              {messages.map((m, i) => (
                <motion.div
                  key={`${i}-${m.text}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex max-w-[85%] gap-3 rounded-xl px-4 py-3 text-sm ${
                    m.role === "user"
                      ? "ml-auto border border-primary/30 bg-primary/10"
                      : "border border-border bg-secondary/40"
                  }`}
                >
                  {m.role === "user" ? (
                    <User className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  ) : (
                    <Bot className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  )}
                  <span className="whitespace-pre-line text-muted-foreground">{m.text}</span>
                </motion.div>
              ))}
            </AnimatePresence>
            {pending ? (
              <div className="flex gap-1.5 px-2 text-primary">
                {[0, 1, 2].map((d) => (
                  <motion.span
                    key={d}
                    className="h-2 w-2 rounded-full bg-primary"
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{ duration: 1, repeat: Infinity, delay: d * 0.15 }}
                  />
                ))}
              </div>
            ) : null}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
