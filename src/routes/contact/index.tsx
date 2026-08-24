import { Suspense, lazy } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageTransition } from "@/components/PageTransition";
import { breadcrumbSchema } from "@/lib/schema";
import { buildHead } from "@/lib/head";
import { composeTitle } from "@/components/SEO";

const ContactPage = lazy(() => import("@/components/ContactPage").then(m => ({ default: m.ContactPage })));

const RouteFallback = () => (
  <div className="min-h-[40vh] flex items-center justify-center" aria-hidden="true" />
);

const DESCRIPTION =
  "Neem contact op met Erica van Dijk voor vrijblijvend advies over HR interim management en organisatieontwikkeling.";
const TITLE = composeTitle("Contact");

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
  head: () =>
    buildHead({
      title: TITLE,
      description: DESCRIPTION,
      path: "/contact",
      schemas: [
        breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ]),
      ],
    }),
  component: ContactRoutePage,
});
