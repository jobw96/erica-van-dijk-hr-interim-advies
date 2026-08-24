import { Suspense, lazy } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageTransition } from "@/components/PageTransition";
import { experiences } from "@/data/experiences";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { buildHead } from "@/lib/head";
import { composeTitle } from "@/components/SEO";

const ExperienceDetail = lazy(() => import("@/components/ExperienceDetail").then(m => ({ default: m.ExperienceDetail })));

const RouteFallback = () => (
  <div className="min-h-[40vh] flex items-center justify-center" aria-hidden="true" />
);

function ExperienceDetailPage() {
  return (
    <PageTransition>
      <main id="main-content">
        <Suspense fallback={<RouteFallback />}>
          <ExperienceDetail />
        </Suspense>
      </main>
    </PageTransition>
  );
}

export const Route = createFileRoute("/experience/$id")({
  head: ({ params }) => {
    const experience = experiences.find((e) => e.id === params.id);
    if (!experience) {
      return buildHead({
        title: composeTitle("Ervaring niet gevonden"),
        description: "De opgevraagde HR-ervaring kon niet worden gevonden.",
        path: `/experience/${params.id}`,
        noIndex: true,
      });
    }

    return buildHead({
      title: composeTitle(experience.title),
      description: experience.metaDescription,
      path: `/experience/${experience.id}`,
      ogType: "article",
      schemas: [
        articleSchema({
          title: experience.title,
          description: experience.shortDescription,
          url: `/experience/${experience.id}`,
        }),
        breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Ervaring", url: "/experience" },
          { name: experience.title, url: `/experience/${experience.id}` },
        ]),
      ],
    });
  },
  component: ExperienceDetailPage,
});
