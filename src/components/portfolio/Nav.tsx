const links = [
  { href: "#expertise", label: "Expertise" },
  { href: "#projects", label: "Projects" },
  { href: "#ai", label: "AI Lab" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/60 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-sm font-bold tracking-widest">
          SUBHAN<span className="glow-text">.DEV</span>
        </a>
        <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="rounded-full border border-primary/40 px-4 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/10"
        >
          Hire me
        </a>
      </nav>
    </header>
  );
}
