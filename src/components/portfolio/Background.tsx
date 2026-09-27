export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-backdrop opacity-40" />
      <div
        className="orb h-[420px] w-[420px] -left-24 top-10"
        style={{ background: "color-mix(in oklab, var(--cyan) 35%, transparent)" }}
      />
      <div
        className="orb h-[520px] w-[520px] right-[-10%] top-[35%]"
        style={{
          background: "color-mix(in oklab, var(--blue) 40%, transparent)",
          animationDelay: "3s",
        }}
      />
      <div
        className="orb h-[380px] w-[380px] left-[30%] bottom-[-10%]"
        style={{
          background: "color-mix(in oklab, var(--cyan) 22%, transparent)",
          animationDelay: "6s",
        }}
      />
    </div>
  );
}
