import { createFileRoute } from "@tanstack/react-router";
import { Background } from "@/components/portfolio/Background";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Expertise } from "@/components/portfolio/Expertise";
import { Projects } from "@/components/portfolio/Projects";
import { AiLab } from "@/components/portfolio/AiLab";
import { Contact } from "@/components/portfolio/Contact";

const title = "Subhan Ahmad — Frontend Engineer & AI Workflow Builder";
const description =
  "Portfolio of Subhan Ahmad: high-performance web applications, fluid interfaces and AI-driven automation built with React, Next.js and Tailwind CSS.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Background />
      <Nav />
      <main>
        <Hero />
        <Expertise />
        <Projects />
        <AiLab />
        <Contact />
      </main>
      <footer className="border-t border-border/60 py-8 text-center font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} Subhan Ahmad — built with React &amp; Tailwind CSS
      </footer>
    </div>
  );
}
