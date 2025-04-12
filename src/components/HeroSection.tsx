
import { Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen pt-16 flex items-center justify-center gradient-bg">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 order-2 md:order-1 max-w-xl">
          <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-6">
            <span className="text-gradient">ARJUN GUPTA</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-amber-400">
            Data Analyst
          </h2>
          
          <p className="text-muted-foreground text-lg mb-8 max-w-xl">
            Results-driven Data Analyst specializing in transforming complex datasets into actionable insights that drive operational excellence and data-informed decision-making.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
              <a href="#contact">Get In Touch</a>
            </Button>
            
            <Button asChild variant="outline" className="border-amber-600 text-amber-400 hover:bg-amber-900/20">
              <a href="#projects">View Projects</a>
            </Button>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://www.linkedin.com/in/arjunguptain/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center bg-secondary hover:bg-amber-900/30 text-muted-foreground hover:text-amber-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            
            <a 
              href="mailto:arjunguptain@outlook.com" 
              className="w-12 h-12 rounded-full flex items-center justify-center bg-secondary hover:bg-amber-900/30 text-muted-foreground hover:text-amber-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>
        
        <div className="flex-1 order-1 md:order-2 flex justify-center">
          <div className="relative">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-amber-600/30 shadow-xl shadow-amber-900/20">
              <img 
                src="/lovable-uploads/d5c4481e-e7b4-4b99-95ca-423cd2472d22.png" 
                alt="Arjun Gupta" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-secondary p-3 rounded-full animate-float shadow-lg">
              <div className="w-16 h-16 rounded-full bg-amber-600 flex items-center justify-center">
                <span className="font-display font-bold text-sm">DATA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
