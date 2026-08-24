import { Suspense, lazy } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageTransition } from "@/components/PageTransition";
import { experiences } from "@/data/experiences";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { composeTitle, SITE_URL } from "@/components/SEO";

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
      const title = composeTitle("Ervaring niet gevonden");
      return {
        meta: [
          { title },
          { name: "title", content: title },
          {
            name: "description",
            content: "De opgevraagde HR-ervaring kon niet worden gevonden.",
          },
        ],
      };
    }

    const title = composeTitle(experience.title);
    const description = `${experience.role} - ${experience.shortDescription}`;
    const url = `${SITE_URL}/experience/${experience.id}`;

    return {
      meta: [
        { title },
        { name: "title", content: title },
        { name: "description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { name: "twitter:url", content: url },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
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
      ].map((schema) => ({
        type: "application/ld+json",
        children: JSON.stringify(schema),
      })),
    };
  },
  component: ExperienceDetailPage,
});
