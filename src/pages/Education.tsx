
import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import EducationSection from "@/components/EducationSection";
import Footer from "@/components/Footer";

const Education = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground animate-fade-in">
      <NavBar />
      <div className="pt-20">
        <EducationSection />
      </div>
      <Footer />
    </div>
  );
};

export default Education;
