
import { useState } from "react";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();

  // Simple contact information section without the form
  return (
    <section id="contact" className="py-16 md:py-24 gradient-bg">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Get-In Touch</h2>
        
        <div className="max-w-3xl mx-auto mt-12">
          <div className="glass-card p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/50 backdrop-blur-sm flex items-center justify-center border border-blue-500/30">
                  <MapPin className="text-blue-400" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Location</h4>
                  <p className="text-muted-foreground mt-1">New Delhi, India</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/50 backdrop-blur-sm flex items-center justify-center border border-blue-500/30">
                  <Mail className="text-blue-400" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <a href="mailto:arjunguptain@outlook.com" className="text-muted-foreground hover:text-blue-400 transition-colors mt-1 block">
                    arjunguptain@outlook.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/50 backdrop-blur-sm flex items-center justify-center border border-blue-500/30">
                  <Phone className="text-blue-400" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <a href="tel:+917703976867" className="text-muted-foreground hover:text-blue-400 transition-colors mt-1 block">
                    +91 77039-76867
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/50 backdrop-blur-sm flex items-center justify-center border border-blue-500/30">
                  <Linkedin className="text-blue-400" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/arjunguptain/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-blue-400 transition-colors mt-1 block">
                    linkedin.com/in/arjunguptain
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                Interested in working together or have a question? Feel free to reach out!
              </p>
              <Button asChild className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 shadow-lg">
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
