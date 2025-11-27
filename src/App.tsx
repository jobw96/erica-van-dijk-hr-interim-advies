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
const queryClient = new QueryClient();

// Component to handle scrolling to top on route change
const ScrollToTop = () => {
  const {
    pathname,
    hash
  } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
};

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
  return <>
      <Hero />
      <About />
      <ClientLogos className="py-[40px] pb-[41px] pt-[11px] bg-primary-foreground" />
      <Services />
      <Portfolio />
      <ExperienceSection />
      <Reviews />
      <FAQ className="bg-primary-foreground" />
      <Contact />
    </>;
};

// For the standalone experience page
const ExperiencePage: React.FC = () => {
  return <div className="pt-20">
            <ExperienceSection />
            <Contact />
        </div>;
};
const AppContent: React.FC = () => {
  return <>
      <ScrollToTop />
      <HashScrollHandler />
      <Navbar />
      <Breadcrumbs />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/experience/:id" element={<ExperienceDetail />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
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