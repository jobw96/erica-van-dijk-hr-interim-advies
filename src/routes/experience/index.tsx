import { Suspense, lazy } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageTransition } from "@/components/PageTransition";
import { breadcrumbSchema } from "@/lib/schema";
import { buildHead } from "@/lib/head";

const ExperienceSection = lazy(() => import("@/components/Experience").then(m => ({ default: m.Experience })));
const Contact = lazy(() => import("@/components/Contact").then(m => ({ default: m.Contact })));

const RouteFallback = () => (
  <div className="min-h-[40vh] flex items-center justify-center" aria-hidden="true" />
);

const DESCRIPTION =
  "Bekijk mijn gerealiseerde HR-projecten en interim opdrachten bij toonaangevende organisaties als Heineken, KLM en Bunge.";
const TITLE = "Ervaring & Projecten | Erica van Dijk";

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
  head: () =>
    buildHead({
      title: TITLE,
      description: DESCRIPTION,
      path: "/experience",
      schemas: [
        breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Ervaring", url: "/experience" },
        ]),
      ],
    }),
  component: ExperiencePage,
});
