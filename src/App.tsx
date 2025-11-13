
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";

// Lazy load below-the-fold sections
const AboutSection = lazy(() => import("./components/AboutSection"));
const ExperienceSection = lazy(() => import("./components/ExperienceSection"));
const EducationSection = lazy(() => import("./components/EducationSection"));
const ProjectsSection = lazy(() => import("./components/ProjectsSection"));
const SkillsSection = lazy(() => import("./components/SkillsSection"));
const ContactSection = lazy(() => import("./components/ContactSection"));
const Footer = lazy(() => import("./components/Footer"));

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="min-h-screen bg-background text-foreground">
          <NavBar />
          <main>
            <HeroSection />
            <Suspense fallback={<div className="min-h-screen" />}>
              <AboutSection />
              <ExperienceSection />
              <EducationSection />
              <ProjectsSection />
              <SkillsSection />
              <ContactSection />
            </Suspense>
          </main>
          <Suspense fallback={<div />}>
            <Footer />
          </Suspense>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
