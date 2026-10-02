import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  AlertCircle,
  CheckCircle2,
  Copy,
  Check,
  Github,
  Linkedin,
  Mail,
  Send,
} from "lucide-react";
import { Section, Reveal } from "./Section";

const EMAIL = "mrsubhan1719@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/mr-subhan-6435ab3a7/";

type Fields = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const validate = (f: Fields): Errors => {
  const errors: Errors = {};
  if (!f.name.trim()) errors.name = "Please enter your name.";
  else if (f.name.trim().length > 100) errors.name = "Please keep your name under 100 characters.";
  if (!f.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) {
    errors.email = "That email address doesn't look right.";
  } else if (f.email.trim().length > 255) {
    errors.email = "Please keep your email under 255 characters.";
  }
  if (!f.message.trim()) {
    errors.message = "Please write a short message.";
  } else if (f.message.trim().length < 10) {
    errors.message = "Message is too short — a few words more, please.";
  } else if (f.message.trim().length > 1000) {
    errors.message = "Please keep your message under 1,000 characters.";
  }
  return errors;
};

export function Contact() {
  const [form, setForm] = useState<Fields>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "opening" | "sent" | "error">("idle");
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);

  const setField = (key: keyof Fields, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
    if (status === "error") setStatus("idle");
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      return;
    }

    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name.trim()}`);
    const body = encodeURIComponent(
      `${form.message.trim()}\n\nReply to: ${form.email.trim()}`,
    );
    setStatus("opening");
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    // Assume the mail client launched; the visitor can fall back if it didn't.
    window.setTimeout(() => setStatus("sent"), 1200);
  };

  const openMailApp = () => {
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name.trim()}`);
    const body = encodeURIComponent(
      `${form.message.trim()}\n\nReply to: ${form.email.trim()}`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const copyMessage = async () => {
    const text = `To: ${EMAIL}\nSubject: Portfolio enquiry from ${form.name.trim()}\n\n${form.message.trim()}\n\nReply to: ${form.email.trim()}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard API blocked — fall back to a hidden selection + copy command.
      const scratch = document.createElement("textarea");
      scratch.value = text;
      scratch.style.position = "fixed";
      scratch.style.opacity = "0";
      document.body.appendChild(scratch);
      scratch.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(scratch);
      setCopyFailed(!ok);
    }
  };

  const fieldClass = (key: keyof Fields) =>
    `w-full rounded-xl border bg-secondary/30 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:bg-secondary/50 ${
      errors[key]
        ? "border-destructive/70 focus:border-destructive"
        : "border-border focus:border-primary/60"
    }`;

  return (
    <Section
      id="contact"
      eyebrow="Contact & professional links"
      title="Have a project in mind? Let’s talk."
      description="Share what you’re building or connect with me through a professional channel."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="glass rounded-lg p-6 sm:p-8">
          <form onSubmit={onSubmit} noValidate className="space-y-4">
            <div>
              <input
                required
                aria-label="Your name"
                aria-invalid={!!errors.name}
                placeholder="Your name"
                 maxLength={100}
                value={form.name}
                onChange={(e) => setField("name", e.target.value)}
                className={fieldClass("name")}
              />
              <AnimatePresence>
                {errors.name ? (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-1.5 flex items-center gap-1.5 text-xs text-destructive"
                    role="alert"
                  >
                    <AlertCircle className="h-3.5 w-3.5" />
                    {errors.name}
                  </motion.p>
                ) : null}
              </AnimatePresence>
            </div>

            <div>
              <input
                required
                type="email"
                aria-label="Email address"
                aria-invalid={!!errors.email}
                placeholder="Email address"
                 maxLength={255}
                value={form.email}
                onChange={(e) => setField("email", e.target.value)}
                className={fieldClass("email")}
              />
              <AnimatePresence>
                {errors.email ? (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-1.5 flex items-center gap-1.5 text-xs text-destructive"
                    role="alert"
                  >
                    <AlertCircle className="h-3.5 w-3.5" />
                    {errors.email}
                  </motion.p>
                ) : null}
              </AnimatePresence>
            </div>

            <div>
              <textarea
                required
                rows={5}
                aria-label="Message"
                aria-invalid={!!errors.message}
                placeholder="What are you building?"
                 maxLength={1000}
                value={form.message}
                onChange={(e) => setField("message", e.target.value)}
                className={`${fieldClass("message")} resize-none`}
              />
              <AnimatePresence>
                {errors.message ? (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-1.5 flex items-center gap-1.5 text-xs text-destructive"
                    role="alert"
                  >
                    <AlertCircle className="h-3.5 w-3.5" />
                    {errors.message}
                  </motion.p>
                ) : null}
              </AnimatePresence>
            </div>

            <button
              type="submit"
              disabled={status === "opening"}
              className="glow-ring flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
              style={{ backgroundImage: "var(--gradient-glow)" }}
            >
              {status === "opening" ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
                  Opening your email app…
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send message
                </>
              )}
            </button>

            {status === "error" && Object.keys(errors).length > 0 ? (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive"
                role="alert"
              >
                <AlertCircle className="h-4 w-4 shrink-0" />
                Please fix the highlighted fields, then send again.
              </motion.p>
            ) : null}
          </form>

          <AnimatePresence>
            {status === "sent" ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 rounded-xl border border-primary/30 bg-primary/10 p-4"
                role="status"
              >
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <div className="text-sm">
                    <p className="font-medium text-primary">Message ready!</p>
                    <p className="mt-0.5 text-muted-foreground">
                      Your email app should have opened with everything filled in —
                      just hit send there. Didn't open?
                    </p>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-2 pl-6.5">
                  <button
                    type="button"
                    onClick={openMailApp}
                    className="rounded-lg border border-primary/40 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/10"
                  >
                    Try again
                  </button>
                  <button
                    type="button"
                    onClick={copyMessage}
                    className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-primary" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        Copy message
                      </>
                    )}
                  </button>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    Or email me directly
                  </a>
                </div>
                {copyFailed ? (
                  <p className="mt-2 flex items-center gap-1.5 pl-6.5 text-xs text-destructive" role="alert">
                    <AlertCircle className="h-3.5 w-3.5" />
                    Copying isn't available in this browser — try again or email me directly.
                  </p>
                ) : null}
              </motion.div>
            ) : null}
          </AnimatePresence>
        </Reveal>

        <Reveal delay={0.15} className="glass flex flex-col justify-between rounded-lg p-6 sm:p-8">
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
              href="https://github.com/subhan1719?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="h-4 w-4 text-primary" />
              GitHub — subhan1719
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Linkedin className="h-4 w-4 text-primary" />
              LinkedIn
            </a>
          </div>
          <div className="mt-8 border-t border-border pt-5">
            <p className="font-mono text-xs text-primary">Frontend-only contact form</p>
            <p className="mt-2 text-xs leading-5 text-muted-foreground">
              Sending opens your email app with the message prepared. You remain in control of final delivery.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
