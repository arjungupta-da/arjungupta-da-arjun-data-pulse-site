
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/50 border-t border-secondary py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-gradient font-display font-bold text-xl">ARJUN GUPTA</p>
            <p className="text-sm text-muted-foreground">Data Analyst</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              <a 
                href="https://www.linkedin.com/in/arjunguptain/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              
              <a 
                href="mailto:arjunguptain@outlook.com" 
                className="w-8 h-8 rounded-full flex items-center justify-center bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
              
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
            </div>
            
            <p className="text-sm text-muted-foreground">
              © {currentYear} Arjun Gupta. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
