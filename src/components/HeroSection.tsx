
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen pt-16 flex items-center gradient-bg">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 order-2 md:order-1">
          <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-4">
            <span className="text-gradient">ARJUN GUPTA</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-data-purple">
            Data Analyst
          </h2>
          
          <p className="text-muted-foreground text-lg mb-8 max-w-xl">
            Results-driven Data Analyst specializing in transforming complex datasets into actionable insights that drive operational excellence and data-informed decision-making.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <Button asChild className="bg-primary hover:bg-primary/80">
              <a href="#contact">Get In Touch</a>
            </Button>
            
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <a href="#projects">View Projects</a>
            </Button>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://www.linkedin.com/in/arjunguptain/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            
            <a 
              href="mailto:arjunguptain@outlook.com" 
              className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
        
        <div className="flex-1 order-1 md:order-2 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-xl shadow-primary/20">
              <img 
                src="/public/lovable-uploads/1d98d078-0373-4caf-a3e2-132bdbe05f0d.png" 
                alt="Arjun Gupta" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-secondary p-3 rounded-full animate-float shadow-lg">
              <div className="w-16 h-16 rounded-full bg-data-purple flex items-center justify-center">
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
