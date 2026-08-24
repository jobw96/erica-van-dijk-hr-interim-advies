import { useEffect, useLayoutEffect } from "react";
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { QueryClientProvider, type QueryClient } from "@tanstack/react-query";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BackToTopButton } from "@/components/BackToTopButton";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { useLocation } from "@/lib/router-compat";
import { reportLovableError } from "@/lib/lovable-error-reporting";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_IMAGE,
  SITE_NAME,
} from "@/components/SEO";

// Scroll to top on route change and smooth-scroll hash anchors
// (ported from App.tsx ScrollHandler)
function ScrollHandler() {
  const { pathname, hash } = useLocation();

  // useLayoutEffect scrolls BEFORE the browser paints
  useLayoutEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
  return null;
}

function RootErrorComponent({ error }: { error: unknown }) {
  useEffect(() => {
    reportLovableError(error, { boundary: "__root" });
  }, [error]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-md">
        <h1 className="text-3xl font-satoshi-black text-gray-800 mb-4 tracking-tight">
          Er ging iets mis
        </h1>
        <p className="text-gray-600 mb-6">
          Deze pagina kon niet worden geladen. Ververs de pagina of probeer het
          later opnieuw.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 bg-[#8E170B] text-white px-6 py-3 rounded-lg font-satoshi-bold tracking-wide"
        >
          Terug naar home
        </a>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { title: SITE_NAME },
      { name: "description", content: DEFAULT_DESCRIPTION },
      { name: "author", content: "Erica van Dijk" },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "nl_NL" },
      { property: "og:image", content: DEFAULT_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: DEFAULT_IMAGE },
    ],
    links: [
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon.png" },
      { rel: "shortcut icon", href: "/favicon.ico" },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      {
        rel: "preload",
        href: "/fonts/satoshi-400.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
      {
        rel: "preload",
        href: "/fonts/satoshi-500.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
      {
        rel: "preload",
        href: "/fonts/satoshi-700.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
      {
        rel: "preload",
        href: "/fonts/satoshi-900.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFound,
  errorComponent: RootErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  // ported from main.tsx — disable the browser's automatic scroll restoration
  // so pages always load at the top naturally
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <html lang="nl" className="scroll-smooth">
      <head>
        <HeadContent />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <ScrollHandler />
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:rounded"
            >
              Skip naar hoofdinhoud
            </a>
            <Navbar />
            <ScrollProgress />
            <Breadcrumbs />
            <Outlet />
            <Footer />
            <BackToTopButton />
          </TooltipProvider>
        </QueryClientProvider>
        <Scripts />
      </body>
    </html>
  );
}
