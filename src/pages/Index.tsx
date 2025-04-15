
import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Set favicon dynamically
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link) {
      link.href = "/lovable-uploads/d5c4481e-e7b4-4b99-95ca-423cd2472d22.png";
    }
    
    // Update document title
    document.title = "Arjun Gupta | Data Analyst Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground animate-fade-in">
      <NavBar />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default Index;
