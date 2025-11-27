import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClientLogos } from './components/ClientLogos';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Experience as ExperienceSection } from './components/Experience';
import { About } from './components/About';
import { Reviews } from './components/Reviews';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { ExperienceDetail } from './components/ExperienceDetail';
import { Footer } from './components/Footer';
import { Breadcrumbs } from './components/Breadcrumbs';
import { ContactPage } from './components/ContactPage';
import { BackToTopButton } from './components/BackToTopButton';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence } from 'framer-motion';
import { PageTransition } from './components/PageTransition';

const queryClient = new QueryClient();

// Component to handle scrolling to anchor tags
const HashScrollHandler = () => {
  const {
    hash
  } = useLocation();
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
      <Hero />
      <About />
      <ClientLogos className="py-[40px] pb-[41px] pt-[11px] bg-primary-foreground" />
      <Services />
      <Portfolio />
      <ExperienceSection />
      <Reviews />
      <FAQ className="bg-primary-foreground" />
      <Contact />
    </PageTransition>
  );
};

// For the standalone experience page
const ExperiencePage: React.FC = () => {
  return (
    <PageTransition>
      <div className="pt-20">
        <ExperienceSection />
        <Contact />
      </div>
    </PageTransition>
  );
};

const ExperienceDetailPage: React.FC = () => {
  return (
    <PageTransition>
      <ExperienceDetail />
    </PageTransition>
  );
};

const ContactPageWrapper: React.FC = () => {
  return (
    <PageTransition>
      <ContactPage />
    </PageTransition>
  );
};

const AppRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" onExitComplete={() => {
      // Scroll to top DURING the fade-out (when opacity is 0)
      // This is invisible to the user
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
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
  return <>
    <HashScrollHandler />
    <Navbar />
    <Breadcrumbs />
    <AppRoutes />
    <Footer />
    <BackToTopButton />
  </>;
};

const App: React.FC = () => {
  return <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>;
};

export default App;