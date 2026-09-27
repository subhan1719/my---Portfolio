import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import portraitAsset from "@/assets/portrait.png.asset.json";

export function Hero() {
  return (
    <section id="top" className="mx-auto w-full max-w-6xl px-6 pb-16 pt-20 sm:pt-28">
      <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass glow-ring inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-primary"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Software Engineering Undergraduate &amp; Frontend Specialist
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-5xl font-bold leading-[1.05] sm:text-6xl"
          >
            Hi, I&apos;m <span className="glow-text">Subhan Ahmad</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground"
          >
            Architecting high-performance web applications, fluid user interfaces, and
            intelligent AI-driven workflows.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="glow-ring group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.04]"
              style={{ backgroundImage: "var(--gradient-glow)" }}
            >
              Explore Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors hover:border-primary/50 hover:text-primary"
            >
              Initiate Contact
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div
            className="absolute -inset-3 rounded-[2rem] opacity-50 blur-2xl"
            style={{ backgroundImage: "var(--gradient-glow)" }}
          />
          <div className="glass relative overflow-hidden rounded-[1.75rem] p-3">
            <img
              src={portraitAsset.url}
              alt="Portrait of Subhan Ahmad"
              width={912}
              height={912}
              className="aspect-square w-full rounded-[1.4rem] object-cover"
            />
            <div className="flex items-center justify-between px-3 py-3 font-mono text-[11px] text-muted-foreground">
              <span>status: available</span>
              <span className="text-primary">/* frontend */</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
