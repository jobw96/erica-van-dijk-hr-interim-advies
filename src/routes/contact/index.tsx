import { Suspense, lazy } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageTransition } from "@/components/PageTransition";
import { breadcrumbSchema } from "@/lib/schema";
import { composeTitle, SITE_URL } from "@/components/SEO";

const ContactPage = lazy(() => import("@/components/ContactPage").then(m => ({ default: m.ContactPage })));

const RouteFallback = () => (
  <div className="min-h-[40vh] flex items-center justify-center" aria-hidden="true" />
);

const DESCRIPTION =
  "Neem contact op met Erica van Dijk voor vrijblijvend advies over HR interim management en organisatieontwikkeling.";
const TITLE = composeTitle("Contact");
const URL = `${SITE_URL}/contact`;

function ContactRoutePage() {
  return (
    <PageTransition>
      <main id="main-content">
        <Suspense fallback={<RouteFallback />}>
          <ContactPage />
        </Suspense>
      </main>
    </PageTransition>
  );
}

export const Route = createFileRoute("/contact/")({
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
            { name: "Contact", url: "/contact" },
          ]),
        ),
      },
    ],
  }),
  component: ContactRoutePage,
});
