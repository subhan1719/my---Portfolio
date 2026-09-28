export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-backdrop opacity-35" />
      <div className="absolute inset-x-0 top-0 h-px bg-primary/30" />
    </div>
  );
}
