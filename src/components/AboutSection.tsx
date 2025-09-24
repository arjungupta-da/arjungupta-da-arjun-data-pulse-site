import { Briefcase, GraduationCap, MapPin, Phone, Mail } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";
const AboutSection = () => {
  const {
    elementRef: titleRef,
    isVisible: titleVisible
  } = useScrollAnimation<HTMLHeadingElement>({
    delay: 100
  });
  const {
    elementRef: profileRef,
    isVisible: profileVisible
  } = useScrollAnimation<HTMLDivElement>({
    delay: 200
  });
  const {
    elementRef: contactRef,
    isVisible: contactVisible
  } = useScrollAnimation<HTMLDivElement>({
    delay: 300
  });
  return <section id="about" className="py-16 md:py-24 gradient-bg">
      <div className="container mx-auto px-4">
        <h2 ref={titleRef} className={`section-heading transition-all duration-700 ease-out ${titleVisible ? 'reveal-on-scroll visible' : 'reveal-on-scroll'}`}>
          About Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div ref={profileRef} className={`glass-card p-8 rounded-lg h-full flex flex-col justify-between transition-all duration-700 ease-out ${profileVisible ? 'reveal-left-scroll visible' : 'reveal-left-scroll'}`}>
              <div>
                <h3 className="text-2xl font-display font-bold mb-4 text-center md:text-left">Profile Summary</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">Experienced Data Analytics and Programming Trainer specializing in transforming complex datasets into actionable business insights. With expertise in Python, SQL, Excel, Power BI, and data visualization tools, I help organizations make data-driven decisions that drive growth and efficiency. As a certified trainer at Delhi School of Skill Development, I mentor aspiring data analysts and developers through comprehensive hands-on training programs. My curriculum covers Python programming, SQL database management, Microsoft Excel advanced analytics, Power BI dashboard creation, Google Sheets automation, Tableau visualization, and statistical analysis. I focus on practical, real-world applications that prepare students for immediate industry impact. My approach combines technical expertise with effective teaching methodologies, breaking down complex data science concepts into digestible modules. I guide students through building interactive dashboards, creating automated reports, and developing analytical frameworks that support strategic decision-making. I hold a Bachelor of Science in Physical Sciences with Computer Science from Keshav Mahavidyalaya (2024), which provides a strong foundation in both analytical thinking and technical implementation. This background enables me to bridge the gap between theoretical data science concepts and practical business applications.</p>
              </div>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-secondary/50 backdrop-blur-sm flex items-center justify-center border border-primary/30 transition-all duration-300 ease-out group-hover:scale-105 group-hover:border-primary/50 apple-button">
                      <Briefcase className="text-primary transition-all duration-200" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Current Position</h4>
                    <p className="text-muted-foreground">Data Analytics and Programming Trainer at Delhi School of Skill Development</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-secondary/50 backdrop-blur-sm flex items-center justify-center border border-primary/30 transition-all duration-300 ease-out group-hover:scale-105 group-hover:border-primary/50 apple-button">
                      <GraduationCap className="text-primary transition-all duration-200" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Education</h4>
                    <p className="text-muted-foreground">B.Sc. Physical Sciences with Computer Science</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <div ref={contactRef} className={`glass-card p-8 rounded-lg h-full flex flex-col justify-between transition-all duration-700 ease-out ${contactVisible ? 'reveal-right-scroll visible' : 'reveal-right-scroll'}`}>
              <div>
                <h3 className="text-2xl font-display font-bold mb-6 text-center">Contact Details</h3>
              </div>
              
              <div className="flex flex-col gap-6 md:items-center">
                <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-secondary/50 backdrop-blur-sm flex items-center justify-center border border-primary/30 transition-all duration-300 ease-out group-hover:scale-105 group-hover:border-primary/50 apple-button">
                      <MapPin className="text-primary transition-all duration-200" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Location</h4>
                    <p className="text-muted-foreground">New Delhi, India</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-secondary/50 backdrop-blur-sm flex items-center justify-center border border-primary/30 transition-all duration-300 ease-out group-hover:scale-105 group-hover:border-primary/50 apple-button">
                      <Phone className="text-primary transition-all duration-200" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Phone</h4>
                    <p className="text-muted-foreground">+91 77039-76867</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-secondary/50 backdrop-blur-sm flex items-center justify-center border border-primary/30 transition-all duration-300 ease-out group-hover:scale-105 group-hover:border-primary/50 apple-button">
                      <Mail className="text-primary transition-all duration-200" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <a href="mailto:arjunguptain@outlook.com" className="text-muted-foreground hover:text-primary transition-colors duration-200 apple-button">
                      arjunguptain@outlook.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;