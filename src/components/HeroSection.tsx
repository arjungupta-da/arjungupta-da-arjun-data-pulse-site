
import { Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    // Load LinkedIn badge script
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;
    script.type = 'text/javascript';
    document.head.appendChild(script);
    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://platform.linkedin.com/badges/js/profile.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden">
      <div className="section-container flex flex-col md:flex-row gap-12 items-center relative z-10">
        <div className="flex-1 order-2 md:order-1 max-w-xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold title-spacing reveal reveal-delay-1">
            <span className="text-gradient">Arjun Gupta</span>
          </h1>
          
          <div className="flex w-full justify-center reveal reveal-delay-2">
            <h2 className="text-xl md:text-2xl font-bold subtitle-spacing text-blue-400">
              Data Analytics & Programming Trainer
            </h2>
          </div>
          
          <p className="text-muted-foreground text-base md:text-lg paragraph-spacing max-w-xl mx-auto reveal reveal-delay-3">
            NAB India and Edubridge's Certified Trainer | AI Enthusiast | 5-Star HackerRank (Python and T-SQL)
          </p>
          
          <div className="flex flex-wrap gap-4 button-spacing justify-center reveal reveal-delay-4">
            <Button asChild className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 shadow-lg hover:shadow-xl apple-button">
              <a href="#contact">Get-In Touch</a>
            </Button>
            
            <Button asChild variant="outline" className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 backdrop-blur-sm bg-blue-500/5 apple-button">
              <a href="#projects">View Projects</a>
            </Button>
            
            <Button asChild variant="secondary" className="bg-gradient-to-r from-cyan-600/80 to-blue-600/80 hover:from-cyan-700 hover:to-blue-700 text-white shadow-lg apple-button">
              <a href="https://drive.google.com/file/d/12JjGkllEiRqHpWPInmoN_LWVjJ4Mem61/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Download size={18} className="mr-1" /> Resume
              </a>
            </Button>
          </div>
          
          <div className="flex gap-4 mt-8 justify-center reveal reveal-delay-4">
            <a 
              href="https://in.linkedin.com/in/arjunguptain" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-12 h-12 rounded-full flex items-center justify-center bg-secondary/50 backdrop-blur-sm hover:bg-blue-500/20 text-muted-foreground hover:text-blue-400 transition-all duration-500 border border-blue-500/20 hover:border-blue-500/40 gentle-hover" 
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            
            <a 
              href="mailto:arjunguptain@outlook.com" 
              className="w-12 h-12 rounded-full flex items-center justify-center bg-secondary/50 backdrop-blur-sm hover:bg-blue-500/20 text-muted-foreground hover:text-blue-400 transition-all duration-500 border border-blue-500/20 hover:border-blue-500/40 gentle-hover" 
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>
        
        <div className="flex-1 order-1 md:order-2 flex justify-center reveal-right reveal-delay-2">
          <div className="relative">
            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl shadow-blue-900/30 float-animation relative group apple-card">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-transparent to-cyan-400/20 pointer-events-none transition-opacity duration-500 group-hover:opacity-75"></div>
              <img 
                src="/lovable-uploads/74c0fc21-6d90-49fb-af6d-acea2edfbfa1.png" 
                alt="Arjun Gupta" 
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" 
                style={{ aspectRatio: '1/1' }} 
              />
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-secondary/80 backdrop-blur-sm p-3 rounded-full float-animation shadow-xl border border-blue-500/30 rotate-slow">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                <span className="font-display font-bold text-xs sm:text-sm text-white">DA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-cyan-400/30 rounded-full animate-pulse animation-delay-1000"></div>
      <div className="absolute bottom-20 left-20 w-1 h-1 bg-teal-400/30 rounded-full animate-pulse animation-delay-2000"></div>
    </section>
  );
};

export default HeroSection;
