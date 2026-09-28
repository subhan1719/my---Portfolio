import { Code2, Search, Sparkles } from "lucide-react";
import { Section, Reveal } from "./Section";

const values = [
  {
    icon: Code2,
    label: "Clean engineering",
    detail: "Readable code, thoughtful structure and reliable interfaces.",
  },
  {
    icon: Search,
    label: "Search-led growth",
    detail: "Technical SEO and content decisions built into the experience.",
  },
  {
    icon: Sparkles,
    label: "Polished delivery",
    detail: "Responsive, accessible work that feels considered on every screen.",
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About me"
      title="Code that performs. Strategy that compounds."
      description="I bring frontend engineering and organic growth thinking together to build useful digital experiences."
    >
      <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
            I&apos;m a Software Engineering undergraduate with a strong passion for web
            development, clean code and digital marketing. I enjoy turning ideas into
            fast, intuitive websites while using SEO fundamentals to help the right
            audience discover them.
          </p>
          <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">
            My work sits at the intersection of thoughtful interface design, dependable
            development and measurable organic visibility.
          </p>
        </Reveal>

        <div className="space-y-3">
          {values.map(({ icon: Icon, label, detail }, index) => (
            <Reveal key={label} delay={index * 0.08}>
              <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4 border-b border-border py-4 first:pt-0">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="min-w-0">
                  <h3 className="font-semibold">{label}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}