
import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";

const Skills = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground animate-fade-in">
      <NavBar />
      <div className="pt-20">
        <SkillsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Skills;
