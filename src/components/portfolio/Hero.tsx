import { motion } from "motion/react";
import { ArrowRight, Github, MapPin, Sparkles } from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import { Typing } from "./Typing";

export const GITHUB_URL = "https://github.com/subhan1719?tab=repositories";
const TITLES = ["Software Engineering Student", "Frontend Developer", "SEO Specialist"];

export function Hero() {
  return (
    <section id="top" className="mx-auto w-full max-w-6xl px-5 pb-20 pt-16 sm:px-6 sm:pt-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
        <div className="min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass inline-flex max-w-full items-center gap-2 rounded-full px-4 py-1.5 text-xs text-primary"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Available for select frontend &amp; SEO projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-5xl font-bold leading-[1.05] sm:text-6xl"
          >
            Subhan Ahmad
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-5 min-h-[2rem] text-xl font-semibold sm:text-2xl"
          >
            <Typing words={TITLES} />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg"
          >
            Software Engineering undergraduate at Superior University, Frontend Developer
            and SEO Specialist — building clean, high-performance web experiences that
            rank well and convert.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="mt-5 flex items-center gap-2 text-sm text-muted-foreground"
          >
            <MapPin className="h-4 w-4 text-primary" aria-hidden />
            Faisalabad, Pakistan
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="glow-ring group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-105"
              style={{ backgroundImage: "var(--gradient-glow)" }}
            >
              View projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:text-primary hover:glow-ring"
            >
              <Github className="h-4 w-4" />
              GitHub Profile
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
            >
              Contact me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="relative mx-auto w-full max-w-[23rem]"
        >
          <div
            className="absolute -inset-3 rounded-[2rem] opacity-50 blur-2xl"
            style={{ backgroundImage: "var(--gradient-glow)" }}
          />
          <div className="glass relative overflow-hidden rounded-2xl p-3 shadow-2xl">
            <div className="relative isolate aspect-[4/5] w-full overflow-hidden rounded-xl">
              <img
                src={portrait}
                alt="Portrait of Subhan Ahmad"
                width={912}
                height={912}
                className="duotone-img h-full w-full object-cover object-center"
              />
              <div aria-hidden className="duotone-shadow absolute inset-0" />
              <div aria-hidden className="duotone-highlight absolute inset-0" />
            </div>
            <div className="flex items-center justify-between px-3 py-3 font-mono text-[11px] text-muted-foreground">
              <span>Frontend • SEO</span>
              <span className="text-primary">Open to work</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
