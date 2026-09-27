import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, Github, Linkedin, Mail } from "lucide-react";
import { Section, Reveal } from "./Section";

const EMAIL = "mrsubhan1719@gmail.com";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\nReply to: ${form.email}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const field =
    "w-full rounded-xl border border-border bg-secondary/30 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60 focus:bg-secondary/50";

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something fast and beautiful"
      description="Tell me about the product, and I'll reply with a plan."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="glass rounded-2xl p-6 sm:p-8">
          <form onSubmit={onSubmit} className="space-y-4">
            <input
              required
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={field}
            />
            <input
              required
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={field}
            />
            <textarea
              required
              rows={5}
              placeholder="What are you building?"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`${field} resize-none`}
            />
            <button
              type="submit"
              className="glow-ring w-full rounded-xl py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.01]"
              style={{ backgroundImage: "var(--gradient-glow)" }}
            >
              Send message
            </button>
          </form>
          <AnimatePresence>
            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-primary"
              >
                <CheckCircle2 className="h-4 w-4" />
                Message ready — your mail app is opening.
              </motion.div>
            ) : null}
          </AnimatePresence>
        </Reveal>

        <Reveal delay={0.15} className="glass flex flex-col justify-between rounded-2xl p-6 sm:p-8">
          <div>
            <h3 className="text-lg font-semibold">Direct channels</h3>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-5 flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4 text-primary" />
              {EMAIL}
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="h-4 w-4 text-primary" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Linkedin className="h-4 w-4 text-primary" />
              LinkedIn
            </a>
          </div>
          <p className="mt-8 font-mono text-xs text-muted-foreground">
            Usually replies within 24 hours.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
