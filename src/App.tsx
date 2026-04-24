import React, { Suspense, lazy, useEffect, useLayoutEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Breadcrumbs } from './components/Breadcrumbs';
import { BackToTopButton } from './components/BackToTopButton';
import { ScrollProgress } from './components/ui/scroll-progress';
import { SEO } from './components/SEO';
import { faqs } from './components/FAQ';
import {
  websiteSchema,
  localBusinessSchema,
  faqSchema,
  personSchema,
  breadcrumbSchema,
} from './lib/schema';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence } from 'framer-motion';
import { PageTransition } from './components/PageTransition';

// Lazy-loaded components (code splitting)
const ClientLogos = lazy(() => import('./components/ClientLogos').then(m => ({ default: m.ClientLogos })));
const Services = lazy(() => import('./components/Services').then(m => ({ default: m.Services })));
const Portfolio = lazy(() => import('./components/Portfolio').then(m => ({ default: m.Portfolio })));
const ExperienceSection = lazy(() => import('./components/Experience').then(m => ({ default: m.Experience })));
const Reviews = lazy(() => import('./components/Reviews').then(m => ({ default: m.Reviews })));
const FAQ = lazy(() => import('./components/FAQ').then(m => ({ default: m.FAQ })));
const Contact = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })));
const ExperienceDetail = lazy(() => import('./components/ExperienceDetail').then(m => ({ default: m.ExperienceDetail })));
const ContactPage = lazy(() => import('./components/ContactPage').then(m => ({ default: m.ContactPage })));

const RouteFallback: React.FC = () => (
  <div className="min-h-[40vh] flex items-center justify-center" aria-hidden="true" />
);

const queryClient = new QueryClient();

// Component to handle scrolling to top on route change and anchor tags
const ScrollHandler = () => {
  const { pathname, hash } = useLocation();

  // Use useLayoutEffect to scroll BEFORE the browser paints
  useLayoutEffect(() => {
    if (!hash) {
      // Scroll to top immediately on route change (no hash)
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  // Handle hash scrolling with useEffect (can be smooth)
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  }, [hash]);
  return null;
};

const HomePage: React.FC = () => {
  return (
    <PageTransition>
      <SEO
        jsonLd={[
          websiteSchema,
          localBusinessSchema,
          personSchema,
          faqSchema(faqs),
        ]}
      />
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
};

// For the standalone experience page
const ExperiencePage: React.FC = () => {
  return (
    <PageTransition>
      <SEO 
        title="Ervaring & Projecten"
        description="Bekijk mijn gerealiseerde HR-projecten en interim opdrachten bij toonaangevende organisaties als Heineken, KLM en Bunge."
        jsonLd={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Ervaring', url: '/experience' },
        ])}
      />
      <main id="main-content" className="pt-20">
        <Suspense fallback={<RouteFallback />}>
          <ExperienceSection />
          <Contact />
        </Suspense>
      </main>
    </PageTransition>
  );
};

const ExperienceDetailPage: React.FC = () => {
  return (
    <PageTransition>
      <main id="main-content">
        <Suspense fallback={<RouteFallback />}>
          <ExperienceDetail />
        </Suspense>
      </main>
    </PageTransition>
  );
};

const ContactPageWrapper: React.FC = () => {
  return (
    <PageTransition>
      <SEO 
        title="Contact"
        description="Neem contact op met Erica van Dijk voor vrijblijvend advies over HR interim management en organisatieontwikkeling."
        jsonLd={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Contact', url: '/contact' },
        ])}
      />
      <main id="main-content">
        <Suspense fallback={<RouteFallback />}>
          <ContactPage />
        </Suspense>
      </main>
    </PageTransition>
  );
};

const AppRoutes: React.FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" onExitComplete={() => {
      // Scroll to top DURING the fade-out (when opacity is 0)
      // This is invisible to the user
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/experience/:id" element={<ExperienceDetailPage />} />
        <Route path="/contact" element={<ContactPageWrapper />} />
      </Routes>
    </AnimatePresence>
  );
};

const AppContent: React.FC = () => {
  return (
    <>
      <ScrollHandler />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:rounded">
        Skip naar hoofdinhoud
      </a>
      <Navbar />
      <ScrollProgress />
      <Breadcrumbs />
      <AppRoutes />
      <Footer />
      <BackToTopButton />
    </>
  );
};

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
