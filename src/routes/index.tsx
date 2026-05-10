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
      { title: "Sitemeyar - Digital Agency for Web, SEO, GBP & Paid Ads" },
      {
        name: "description",
        content:
          "Sitemeyar is a senior digital agency delivering conversion-ready websites, semantic SEO, Google Business Profile growth, and high-ROI paid campaigns. Build. Rank. Scale.",
      },
      { name: "keywords", content: "Website Development, SEO agency, Semantic SEO, AEO, Answer Engine Optimization, GEO, Generative Engine Optimization, AI Search Results, Google AI Overviews, ChatGPT Search SEO, Perplexity SEO, GBP Optimization, Google Business Profile, Local SEO, Paid Ads, Meta Ads, Facebook Ads, Instagram Ads, Google Ads, Performance Max, digital agency Bangladesh, digital agency Dubai, conversion rate optimization, Core Web Vitals, Sitemeyar" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { property: "og:title", content: "Sitemeyar - Build. Rank. Scale." },
      {
        property: "og:description",
        content:
          "Conversion-engineered websites, semantic SEO, GBP, and high-ROI ad campaigns. Senior team, transparent reporting, measurable wins.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://sitemeyar.com/" },
      { property: "og:site_name", content: "Sitemeyar" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sitemeyar - Build. Rank. Scale." },
      { name: "twitter:description", content: "Premium digital agency: websites, SEO, GBP, and paid ads that convert." },
      { rel: "canonical", href: "https://sitemeyar.com/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Sitemeyar",
          url: "https://sitemeyar.com/",
          logo: "https://sitemeyar.com/favicon.png",
          description: "Premium digital agency for websites, SEO, GBP, and paid ads.",
          areaServed: ["Bangladesh", "United Arab Emirates", "United States", "Worldwide"],
          email: "sitemeyar.work@gmail.com",
          telephone: "+8801532202824",
          sameAs: [
            "https://www.facebook.com/sitemeyar",
            "https://www.instagram.com/sitemeyar/",
            "https://www.linkedin.com/company/sitemeyar/",
          ],
          priceRange: "$$",
        }),
      },
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
