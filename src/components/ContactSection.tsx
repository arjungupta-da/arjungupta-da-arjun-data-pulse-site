
import { useState } from "react";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();

  return (
    <section id="contact" className="py-16 md:py-24 gradient-bg">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center reveal-60fps">Get-In Touch</h2>
        
        <div className="max-w-3xl mx-auto mt-12">
          <div className="glass-card p-8 rounded-lg scale-60fps delay-200 gpu-accelerated">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4 contact-reveal delay-300">
                <div className="w-12 h-12 rounded-full bg-secondary/50 backdrop-blur-sm flex items-center justify-center border border-blue-500/30 gpu-accelerated">
                  <MapPin className="text-blue-400" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Location</h4>
                  <p className="text-muted-foreground mt-1">New Delhi, India</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 contact-reveal delay-400">
                <div className="w-12 h-12 rounded-full bg-secondary/50 backdrop-blur-sm flex items-center justify-center border border-blue-500/30 gpu-accelerated">
                  <Mail className="text-blue-400" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <a href="mailto:arjunguptain@outlook.com" className="text-muted-foreground hover:text-blue-400 transition-colors mt-1 block gpu-accelerated">
                    arjunguptain@outlook.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 contact-reveal delay-500">
                <div className="w-12 h-12 rounded-full bg-secondary/50 backdrop-blur-sm flex items-center justify-center border border-blue-500/30 gpu-accelerated">
                  <Phone className="text-blue-400" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <a href="tel:+917703976867" className="text-muted-foreground hover:text-blue-400 transition-colors mt-1 block gpu-accelerated">
                    +91 77039-76867
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 contact-reveal delay-600">
                <div className="w-12 h-12 rounded-full bg-secondary/50 backdrop-blur-sm flex items-center justify-center border border-blue-500/30 gpu-accelerated">
                  <Linkedin className="text-blue-400" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/arjunguptain/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-blue-400 transition-colors mt-1 block gpu-accelerated">
                    linkedin.com/in/arjunguptain
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center contact-reveal delay-700">
              <p className="text-muted-foreground mb-4">
                Interested in working together or have a question? Feel free to reach out!
              </p>
              <Button asChild className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 shadow-lg gpu-accelerated">
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
