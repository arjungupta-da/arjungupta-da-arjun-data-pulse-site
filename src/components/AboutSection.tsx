
import { Briefcase, GraduationCap, MapPin, Phone, Mail } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="gradient-bg">
      <div className="container mx-auto">
        <h2 className="section-heading">About Me</h2>
        
        <div className="equal-height-cards">
          <div className="col-span-2">
            <div className="glass-card p-8 rounded-lg h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-display font-bold mb-4 text-center md:text-left">Profile Summary</h3>
                <p className="text-muted-foreground mb-6">
                  Results-driven Data Analyst with a Bachelor's degree in Physical Sciences, specializing in Computer Science. Adept at identifying key patterns within complex datasets and translating insights into actionable strategies. Committed to continuous learning and passionate about empowering others while driving operational excellence and data-informed decision-making.
                </p>
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <Briefcase className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold">Current Position</h4>
                    <p className="text-muted-foreground text-sm">Data Analysis Trainer at Delhi School of Skill Development</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <GraduationCap className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold">Education</h4>
                    <p className="text-muted-foreground text-sm">B.Sc. Physical Sciences with Computer Science</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="glass-card p-8 rounded-lg h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-display font-bold mb-4 text-center md:text-left">Contact Details</h3>
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-muted-foreground text-sm">New Delhi, India</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-muted-foreground text-sm">+91 77039-76867</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a href="mailto:arjunguptain@outlook.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">arjunguptain@outlook.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
