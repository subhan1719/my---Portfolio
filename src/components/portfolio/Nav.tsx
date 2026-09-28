const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/60 backdrop-blur-xl">
      <nav className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-6 md:flex md:justify-between">
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
          className="shrink-0 rounded-full border border-primary/40 px-4 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/10"
        >
          Hire me
        </a>
      </nav>
    </header>
  );
}
