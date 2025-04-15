
import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";

const Experience = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground animate-fade-in">
      <NavBar />
      <div className="pt-20">
        <ExperienceSection />
      </div>
      <Footer />
    </div>
  );
};

export default Experience;
