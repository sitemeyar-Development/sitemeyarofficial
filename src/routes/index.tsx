import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Portfolio } from "@/components/site/Portfolio";
import { CaseStudy } from "@/components/site/CaseStudy";
import { Process } from "@/components/site/Process";
import { Packages } from "@/components/site/Packages";
import { Testimonials } from "@/components/site/Testimonials";
import { BlogPreview } from "@/components/site/BlogPreview";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sitemeyar - Build. Rank. Scale. Premium Digital Agency" },
      {
        name: "description",
        content:
          "Sitemeyar is a senior digital agency for website development, semantic SEO, Google Business Profile, paid ads, and visual content. Build. Rank. Scale.",
      },
      { property: "og:title", content: "Sitemeyar - Build. Rank. Scale." },
      {
        property: "og:description",
        content:
          "Conversion-engineered websites, semantic SEO, GBP, and high-ROI ad campaigns. Senior team, transparent reporting, measurable wins.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <WhyChoose />
      <Portfolio />
      <CaseStudy />
      <Process />
      <Packages />
      <Testimonials />
      <BlogPreview />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
