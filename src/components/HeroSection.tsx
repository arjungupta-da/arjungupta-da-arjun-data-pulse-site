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
  return <section id="home" className="min-h-screen flex items-center justify-center gradient-bg reveal">
      <div className="section-container flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 order-2 md:order-1 max-w-xl mx-auto text-center reveal-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold title-spacing reveal-delay-1">
            <span className="text-gradient">Arjun Gupta</span>
          </h1>
          
          <div className="flex w-full justify-center reveal-delay-2">
            <h2 className="text-xl md:text-2xl font-bold subtitle-spacing text-emerald-400">
              Data Analytics & Programming Trainer
            </h2>
          </div>
          
          <p className="text-muted-foreground text-base md:text-lg paragraph-spacing max-w-xl mx-auto reveal-delay-3">Data Analytics and Programming Trainer at Delhi School of Skill Development | NAB India and Edubridge's Certified Trainer | AI Enthusiast | 5-Star HackerRank (Python and T-SQL)</p>
          
          <div className="flex flex-wrap gap-4 button-spacing justify-center">
            <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white">
              <a href="#contact">Get-In Touch</a>
            </Button>
            
            <Button asChild variant="outline" className="border-emerald-600 text-emerald-400 hover:bg-emerald-900/20">
              <a href="#projects">View Projects</a>
            </Button>
            
            <Button asChild variant="secondary" className="bg-emerald-700/80 hover:bg-emerald-700 text-white">
              <a href="https://drive.google.com/file/d/12JjGkllEiRqHpWPInmoN_LWVjJ4Mem61/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Download size={18} className="mr-1" /> Resume
              </a>
            </Button>
          </div>
          
          <div className="flex gap-4 mt-8 justify-center">
            <a href="https://in.linkedin.com/in/arjunguptain" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full flex items-center justify-center bg-secondary hover:bg-emerald-900/30 text-muted-foreground hover:text-emerald-400 transition-colors" aria-label="LinkedIn">
              <Linkedin size={22} />
            </a>
            
            <a href="mailto:arjunguptain@outlook.com" className="w-12 h-12 rounded-full flex items-center justify-center bg-secondary hover:bg-emerald-900/30 text-muted-foreground hover:text-emerald-400 transition-colors" aria-label="Email">
              <Mail size={22} />
            </a>
          </div>
        </div>
        
        <div className="flex-1 order-1 md:order-2 flex justify-center reveal-right">
          <div className="relative">
            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-emerald-600/30 shadow-xl shadow-emerald-900/20 float-animation">
              <img src="/lovable-uploads/83314a88-630b-4b42-8254-33b2dbfdd227.png" alt="Arjun Gupta" className="w-full h-full object-cover object-center" style={{
              aspectRatio: '1/1'
            }} />
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-secondary p-3 rounded-full float-animation shadow-lg">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-600 flex items-center justify-center">
                <span className="font-display font-bold text-xs sm:text-sm">DA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;