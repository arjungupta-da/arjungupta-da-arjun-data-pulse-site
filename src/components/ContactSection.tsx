
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>({ 
    delay: 100
  });
  const { elementRef: cardRef, isVisible: cardVisible } = useScrollAnimation<HTMLDivElement>({ 
    delay: 200
  });

  return (
    <section id="contact" className="py-16 md:py-24 gradient-bg">
      <div className="container mx-auto px-4">
        <h2 
          ref={titleRef}
          className={`section-heading transition-all duration-700 ease-out ${
            titleVisible ? 'reveal-on-scroll visible' : 'reveal-on-scroll'
          }`}
        >
          Get-In Touch
        </h2>
        
        <div className="max-w-3xl mx-auto mt-12">
          <div 
            ref={cardRef}
            className={`glass-card p-8 rounded-lg transition-all duration-700 ease-out ${
              cardVisible ? 'reveal-on-scroll visible' : 'reveal-on-scroll'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-secondary/50 backdrop-blur-sm flex items-center justify-center border border-primary/30 transition-all duration-300 ease-out group-hover:scale-105 group-hover:border-primary/50 apple-button">
                  <MapPin className="text-primary transition-all duration-200" size={20} aria-hidden="true" focusable="false" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Location</h4>
                  <p className="text-muted-foreground mt-1">New Delhi, India</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-secondary/50 backdrop-blur-sm flex items-center justify-center border border-primary/30 transition-all duration-300 ease-out group-hover:scale-105 group-hover:border-primary/50 apple-button">
                  <Mail className="text-primary transition-all duration-200" size={20} aria-hidden="true" focusable="false" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <a href="mailto:arjunguptain@outlook.com" className="text-muted-foreground hover:text-primary transition-colors duration-200 mt-1 block apple-button">
                    arjunguptain@outlook.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-secondary/50 backdrop-blur-sm flex items-center justify-center border border-primary/30 transition-all duration-300 ease-out group-hover:scale-105 group-hover:border-primary/50 apple-button">
                  <Phone className="text-primary transition-all duration-200" size={20} aria-hidden="true" focusable="false" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <a href="tel:+917703976867" className="text-muted-foreground hover:text-primary transition-colors duration-200 mt-1 block apple-button">
                    +91 77039-76867
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-secondary/50 backdrop-blur-sm flex items-center justify-center border border-primary/30 transition-all duration-300 ease-out group-hover:scale-105 group-hover:border-primary/50 apple-button">
                  <Linkedin className="text-primary transition-all duration-200" size={20} aria-hidden="true" focusable="false" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/arjunguptain/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-200 mt-1 block apple-button">
                    linkedin.com/in/arjunguptain
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Interested in working together or have a question? Feel free to reach out!
              </p>
              <Button asChild className="bg-gradient-to-r from-primary-blue to-accent-gold hover:from-primary-blue/80 hover:to-accent-gold/80 text-white border-0 shadow-lg apple-button px-8 py-3">
                <a href="mailto:arjunguptain@outlook.com">
                  Send Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
