
import { Linkedin, Mail, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-bg">
      <div className="section-container flex flex-col md:flex-row gap-12 items-center text-center md:text-left">
        <div className="flex-1 order-2 md:order-1 max-w-xl">
          <h1 className="text-4xl md:text-6xl font-display font-extrabold title-spacing text-center md:text-left">
            <span className="text-gradient">ARJUN GUPTA</span>
          </h1>
          
          <div className="flex justify-center md:justify-start w-full">
            <h2 className="text-xl md:text-2xl font-bold subtitle-spacing text-amber-400 text-center md:text-left">
              Data Analyst
            </h2>
          </div>
          
          <p className="text-muted-foreground text-lg paragraph-spacing max-w-xl mx-auto md:mx-0">
            Results-driven Data Analyst specializing in transforming complex datasets into actionable insights that drive operational excellence and data-informed decision-making.
          </p>
          
          <div className="flex flex-wrap gap-4 button-spacing justify-center md:justify-start">
            <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
              <a href="#contact">Get In Touch</a>
            </Button>
            
            <Button asChild variant="outline" className="border-amber-600 text-amber-400 hover:bg-amber-900/20">
              <a href="#projects">View Projects</a>
            </Button>
            
            <Button asChild variant="secondary" className="bg-secondary hover:bg-secondary/80 text-primary">
              <a 
                href="https://drive.google.com/file/d/1BW5hSQWoow3J6k1R06XihoSIx83L5bUg/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={18} className="mr-1" /> Resume
              </a>
            </Button>

            <Button asChild variant="secondary" className="bg-amber-700/80 hover:bg-amber-700 text-white">
              <a 
                href="https://drive.google.com/file/d/1BW5hSQWoow3J6k1R06XihoSIx83L5bUg/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText size={18} className="mr-1" /> View CV
              </a>
            </Button>
          </div>
          
          <div className="flex gap-4 mt-8 justify-center md:justify-start">
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
