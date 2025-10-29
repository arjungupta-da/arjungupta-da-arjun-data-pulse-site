import { Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import profileImg from "@/assets/arjun-portrait-new.jpg";
const HeroSection = () => {
  useEffect(() => {
    // Defer loading LinkedIn script until user intent (hover/focus on any LinkedIn link)
    let loaded = false;
    const src = 'https://platform.linkedin.com/badges/js/profile.js';
    const loadScript = () => {
      if (loaded || document.querySelector(`script[src="${src}"]`)) return;
      loaded = true;
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.defer = true;
      script.type = 'text/javascript';
      document.head.appendChild(script);
    };
    const handler = (e: Event) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.('a[href*="linkedin.com"]');
      if (anchor) {
        // Load as soon as the user interacts with any LinkedIn link
        loadScript();
        removeListeners();
      }
    };
    const removeListeners = () => {
      document.removeEventListener('mouseover', handler, true);
      document.removeEventListener('focusin', handler, true);
      document.removeEventListener('touchstart', handler, true);
    };
    document.addEventListener('mouseover', handler, true);
    document.addEventListener('focusin', handler, true);
    document.addEventListener('touchstart', handler, true);
    return () => {
      removeListeners();
    };
  }, []);
  return <section id="home" className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden">
      <div className="section-container flex flex-col md:flex-row gap-12 items-center relative z-10">
        <div className="flex-1 order-2 md:order-1 max-w-xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold title-spacing reveal reveal-delay-1">
            <span className="text-gradient">Arjun Gupta</span>
          </h1>
          
          <div className="flex w-full justify-center reveal reveal-delay-2">
            <h2 className="text-xl subtitle-spacing text-primary text-center font-bold md:text-xl">IBM-Certified Data Analytics and Programming Trainer</h2>
          </div>
          
          <p className="text-muted-foreground text-base md:text-lg paragraph-spacing max-w-xl mx-auto reveal reveal-delay-3">
            I help learners and professionals master tools like <strong className="text-foreground font-semibold">Excel, Power BI, SQL Server, Python, and Tableau</strong> through hands-on analytics projects and real-world training. My focus is on turning complex data concepts into simple, career-ready skills that empower people to make data-driven decisions confidently.
          </p>
          
          <div className="flex flex-wrap gap-4 button-spacing justify-center reveal reveal-delay-4">
            <Button asChild variant="premium" size="lg">
              <a href="#contact">Get In Touch</a>
            </Button>
            
            <Button asChild variant="elegant-outline" size="lg">
              <a href="#projects">View Projects</a>
            </Button>
            
            <Button asChild variant="elegant" size="lg">
              <a href="https://drive.google.com/file/d/12JjGkllEiRqHpWPInmoN_LWVjJ4Mem61/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Download size={18} /> Resume
              </a>
            </Button>
          </div>
          
          <div className="flex gap-4 mt-8 justify-center reveal reveal-delay-4">
            <a href="https://www.linkedin.com/in/arjunguptadataanalyst" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full flex items-center justify-center bg-secondary/50 backdrop-blur-sm hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-500 border border-primary/20 hover:border-primary/40 gentle-hover" aria-label="LinkedIn">
              <Linkedin size={22} />
            </a>
            
            <a href="mailto:arjunguptain@outlook.com" className="w-12 h-12 rounded-full flex items-center justify-center bg-secondary/50 backdrop-blur-sm hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-500 border border-primary/20 hover:border-primary/40 gentle-hover" aria-label="Email">
              <Mail size={22} />
            </a>
          </div>
        </div>
        
        <div className="flex-1 order-1 md:order-2 flex justify-center reveal-right reveal-delay-2">
          <div className="relative">
            <div className="w-36 h-36 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden shadow-2xl shadow-primary/30 float-animation relative group apple-card" style={{
            background: "var(--gradient-avatar)",
            padding: "4px"
          }}>
              <div className="w-full h-full rounded-full overflow-hidden bg-background">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 pointer-events-none transition-opacity duration-500 group-hover:opacity-75 rounded-full"></div>
                <picture>
                  <source srcSet="/arjun-portrait-384.webp 384w, /arjun-portrait-1024.webp 1024w" sizes="(max-width: 768px) 384px, (max-width: 1280px) 384px, 384px" type="image/webp" />
                  <img src="/arjun-portrait-384.webp" alt="Arjun Gupta — Data Analytics & Programming Trainer profile photo" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110 rounded-full" style={{
                  aspectRatio: "1 / 1"
                }} loading="eager" fetchPriority="high" width="384" height="384" />
                </picture>
              </div>
            </div>
            
            <div className="absolute -bottom-2 -right-2 bg-secondary/90 backdrop-blur-sm p-2 rounded-full float-animation shadow-xl border border-primary/30">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center shadow-lg">
                <span className="font-display font-bold text-xs sm:text-sm md:text-base text-white">DA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-accent/30 rounded-full animate-pulse animation-delay-1000"></div>
      <div className="absolute bottom-20 left-20 w-1 h-1 bg-primary/40 rounded-full animate-pulse animation-delay-2000"></div>
    </section>;
};
export default HeroSection;