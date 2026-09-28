import { createFileRoute } from "@tanstack/react-router";
import { Background } from "@/components/portfolio/Background";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Expertise } from "@/components/portfolio/Expertise";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";

const title = "Subhan Ahmad — Frontend Web Developer & SEO Specialist";
const description =
  "Portfolio of Subhan Ahmad, a frontend web developer and SEO specialist building clean, high-performance websites and organic growth strategies.";

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
        <About />
        <Expertise />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-border/60 py-8 text-center font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} Subhan Ahmad — Frontend Web Developer &amp; SEO Specialist
      </footer>
    </div>
  );
}
