
import { Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-bg reveal">
      <div className="section-container flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 order-2 md:order-1 max-w-xl mx-auto text-center reveal-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold title-spacing reveal-delay-1">
            <span className="text-gradient">Arjun Gupta</span>
          </h1>
          
          <div className="flex w-full justify-center reveal-delay-2">
            <h2 className="text-xl md:text-2xl font-bold subtitle-spacing text-amber-400">
              Data Analysis & Programming Trainer
            </h2>
          </div>
          
          <p className="text-muted-foreground text-base md:text-lg paragraph-spacing max-w-xl mx-auto reveal-delay-3">
            Results-driven Data Analysis & Programming Trainer specializing in transforming complex concepts into practical skills that drive operational excellence and data-informed decision-making.
          </p>
          
          <div className="flex flex-wrap gap-4 button-spacing justify-center">
            <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
              <a href="#contact">Get In Touch</a>
            </Button>
            
            <Button asChild variant="outline" className="border-amber-600 text-amber-400 hover:bg-amber-900/20">
              <a href="#projects">View Projects</a>
            </Button>
            
            <Button asChild variant="secondary" className="bg-amber-700/80 hover:bg-amber-700 text-white">
              <a 
                href="https://drive.google.com/file/d/12JjGkllEiRqHpWPInmoN_LWVjJ4Mem61/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={18} className="mr-1" /> Resume
              </a>
            </Button>
          </div>
          
          <div className="flex gap-4 mt-8 justify-center">
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
        
        <div className="flex-1 order-1 md:order-2 flex justify-center reveal-right">
          <div className="relative">
            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-amber-600/30 shadow-xl shadow-amber-900/20 float-animation">
              <img 
                src="/lovable-uploads/d5c4481e-e7b4-4b99-95ca-423cd2472d22.png" 
                alt="Arjun Gupta" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-secondary p-3 rounded-full float-animation shadow-lg">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-amber-600 flex items-center justify-center">
                <span className="font-display font-bold text-xs sm:text-sm">DATA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
