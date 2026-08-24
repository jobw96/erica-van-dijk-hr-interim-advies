import { Suspense, lazy } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageTransition } from "@/components/PageTransition";
import { breadcrumbSchema } from "@/lib/schema";
import { composeTitle, SITE_URL } from "@/components/SEO";

const ExperienceSection = lazy(() => import("@/components/Experience").then(m => ({ default: m.Experience })));
const Contact = lazy(() => import("@/components/Contact").then(m => ({ default: m.Contact })));

const RouteFallback = () => (
  <div className="min-h-[40vh] flex items-center justify-center" aria-hidden="true" />
);

const DESCRIPTION =
  "Bekijk mijn gerealiseerde HR-projecten en interim opdrachten bij toonaangevende organisaties als Heineken, KLM en Bunge.";
const TITLE = "Ervaring & Projecten | Erica van Dijk";
const URL = `${SITE_URL}/experience`;

function ExperiencePage() {
  return (
    <PageTransition>
      <main id="main-content" className="pt-20">
        <Suspense fallback={<RouteFallback />}>
          <ExperienceSection />
          <Contact />
        </Suspense>
      </main>
    </PageTransition>
  );
}

export const Route = createFileRoute("/experience/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "title", content: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:url", content: URL },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { name: "twitter:url", content: URL },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Ervaring", url: "/experience" },
          ]),
        ),
      },
    ],
  }),
  component: ExperiencePage,
});
