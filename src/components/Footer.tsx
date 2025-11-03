import { Linkedin, Mail, Instagram } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-secondary/30 backdrop-blur-sm border-t border-primary/20 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-gradient font-display font-bold text-xl text-center">ARJUN GUPTA</p>
            <p className="text-sm text-muted-foreground">Data Analytics and Programming Trainer</p>
          </div>
          
          <div className="flex flex-col mb-4 md:mb-0 items-center">
            <p className="text-sm text-muted-foreground mb-2">Connect with me</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://www.linkedin.com/in/arjunguptadataanalyst" target="_blank" rel="noopener" className="flex items-center gap-2 px-4 py-2 rounded-md bg-secondary/50 backdrop-blur-sm hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all border border-primary/20 hover:border-primary/40">
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
              
              <a href="https://www.instagram.com/arjun.analyst" target="_blank" rel="noopener" className="flex items-center gap-2 px-4 py-2 rounded-md bg-secondary/50 backdrop-blur-sm hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all border border-primary/20 hover:border-primary/40">
                <Instagram size={16} />
                <span>Instagram</span>
              </a>
              
              <a href="mailto:arjunguptain@outlook.com" className="flex items-center gap-2 px-4 py-2 rounded-md bg-secondary/50 backdrop-blur-sm hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all border border-primary/20 hover:border-primary/40">
                <Mail size={16} />
                <span>Email Me</span>
              </a>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Arjun Gupta. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;