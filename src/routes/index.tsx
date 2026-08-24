import { Suspense, lazy } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { PageTransition } from "@/components/PageTransition";
import { faqs } from "@/components/FAQ";
import {
  websiteSchema,
  localBusinessSchema,
  faqSchema,
  personSchema,
} from "@/lib/schema";
import { buildHead } from "@/lib/head";
import { composeTitle } from "@/components/SEO";

// Lazy-loaded components (code splitting)
const ClientLogos = lazy(() => import("@/components/ClientLogos").then(m => ({ default: m.ClientLogos })));
const Services = lazy(() => import("@/components/Services").then(m => ({ default: m.Services })));
const Portfolio = lazy(() => import("@/components/Portfolio").then(m => ({ default: m.Portfolio })));
const ExperienceSection = lazy(() => import("@/components/Experience").then(m => ({ default: m.Experience })));
const Reviews = lazy(() => import("@/components/Reviews").then(m => ({ default: m.Reviews })));
const FAQ = lazy(() => import("@/components/FAQ").then(m => ({ default: m.FAQ })));
const Contact = lazy(() => import("@/components/Contact").then(m => ({ default: m.Contact })));

const RouteFallback = () => (
  <div className="min-h-[40vh] flex items-center justify-center" aria-hidden="true" />
);

function HomePage() {
  return (
    <PageTransition>
      <main id="main-content">
        <Hero />
        <About />
        <Suspense fallback={<RouteFallback />}>
          <ClientLogos className="py-[40px] pb-[41px] pt-[11px] bg-white" />
          <Services />
          <Portfolio />
          <ExperienceSection />
          <Reviews />
          <FAQ />
          <Contact />
        </Suspense>
      </main>
    </PageTransition>
  );
}

export const Route = createFileRoute("/")({
  head: () =>
    buildHead({
      title: composeTitle(),
      path: "/",
      schemas: [websiteSchema, localBusinessSchema, personSchema, faqSchema(faqs)],
    }),
  component: HomePage,
});
