import { BookOpen, GraduationCap, MapPin } from "lucide-react";
import { Section, Reveal } from "./Section";

const education = [
  {
    current: true,
    icon: GraduationCap,
    period: "Current",
    qualification: "BS Software Engineering",
    institution: "Superior University, Faisalabad Campus",
    detail: "Roll No: SU74-BSSEM-004",
  },
  {
    current: false,
    icon: BookOpen,
    period: "Previous",
    qualification: "Intermediate",
    institution: "Superior College Faisalabad",
    detail: "Completed in Faisalabad",
  },
  {
    current: false,
    icon: MapPin,
    period: "Foundation",
    qualification: "Secondary Education",
    institution: "Faisalabad City",
    detail: "Academic foundation",
  },
];

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Building a strong engineering foundation"
      description="Academic experience supporting practical work across software, web development and problem solving."
    >
      <div className="relative grid gap-4 lg:grid-cols-3">
        {education.map(({ current, icon: Icon, period, qualification, institution, detail }, index) => (
          <Reveal key={`${qualification}-${institution}`} delay={index * 0.1} className="h-full">
            <article className="glass h-full rounded-lg p-6">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                <div className="min-w-0">
                  <p className="font-mono text-xs text-primary">{period}</p>
                  <h3 className="mt-3 text-xl font-semibold">{qualification}</h3>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
              </div>
              <p className="mt-5 text-sm font-medium">{institution}</p>
              <p className="mt-2 text-sm text-muted-foreground">{detail}</p>
              {current ? (
                <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  In progress
                </span>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}