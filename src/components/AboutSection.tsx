
import { Briefcase, GraduationCap, MapPin, Phone, Mail } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>({ 
    delay: 100
  });
  const { elementRef: profileRef, isVisible: profileVisible } = useScrollAnimation<HTMLDivElement>({ 
    delay: 200
  });
  const { elementRef: contactRef, isVisible: contactVisible } = useScrollAnimation<HTMLDivElement>({ 
    delay: 300
  });

  return (
    <section id="about" className="py-16 md:py-24 gradient-bg">
      <div className="container mx-auto px-4">
        <h2 
          ref={titleRef} 
          className={`section-heading transition-all duration-700 ease-out ${
            titleVisible ? 'reveal-on-scroll visible' : 'reveal-on-scroll'
          }`}
        >
          About Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div 
              ref={profileRef}
              className={`glass-card p-8 rounded-lg h-full flex flex-col justify-between transition-all duration-700 ease-out ${
                profileVisible ? 'reveal-left-scroll visible' : 'reveal-left-scroll'
              }`}
            >
              <div>
                <h3 className="text-2xl font-display font-bold mb-4 text-center md:text-left">Profile Summary</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Dedicated to mentoring aspiring analysts and developers through practical, hands-on training in Artificial Intelligence, C, C++, Data Structures and Algorithms, Google Looker Studio, Microsoft Excel, Microsoft Power BI, Python, Microsoft SQL Server, Statistics and Tableau. I specialize in breaking down complex data concepts into easy-to-understand modules, enabling learners to transform raw data into strategic insights. 

                  In my role, I design and deliver comprehensive training sessions, guiding students to build interactive dashboards and insightful reports that support data-driven decision-making. My focus is on nurturing both technical skills and analytical thinking. 

                  I hold a Bachelor of Science in Physical Sciences with Computer Science from Keshav Mahavidyalaya, completed in June 2024. This academic background strengthens my teaching by blending computer science fundamentals with a deep understanding of analytical frameworks and real-world applications.
                </p>
              </div>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-secondary/50 backdrop-blur-sm flex items-center justify-center border border-blue-500/30 transition-all duration-300 ease-out group-hover:scale-105 group-hover:border-blue-400/50 apple-button">
                    <Briefcase className="text-blue-400 transition-all duration-200" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Current Position</h4>
                    <p className="text-muted-foreground">Data Analytics and Programming Trainer at Delhi School of Skill Development</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-secondary/50 backdrop-blur-sm flex items-center justify-center border border-blue-500/30 transition-all duration-300 ease-out group-hover:scale-105 group-hover:border-blue-400/50 apple-button">
                    <GraduationCap className="text-blue-400 transition-all duration-200" size={20} />
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
            <div 
              ref={contactRef}
              className={`glass-card p-8 rounded-lg h-full flex flex-col justify-between transition-all duration-700 ease-out ${
                contactVisible ? 'reveal-right-scroll visible' : 'reveal-right-scroll'
              }`}
            >
              <div>
                <h3 className="text-2xl font-display font-bold mb-6 text-center md:text-left">Contact Details</h3>
              </div>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-secondary/50 backdrop-blur-sm flex items-center justify-center border border-blue-500/30 transition-all duration-300 ease-out group-hover:scale-105 group-hover:border-blue-400/50 apple-button">
                    <MapPin className="text-blue-400 transition-all duration-200" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Location</h4>
                    <p className="text-muted-foreground">New Delhi, India</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-secondary/50 backdrop-blur-sm flex items-center justify-center border border-blue-500/30 transition-all duration-300 ease-out group-hover:scale-105 group-hover:border-blue-400/50 apple-button">
                    <Phone className="text-blue-400 transition-all duration-200" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Phone</h4>
                    <p className="text-muted-foreground">+91 77039-76867</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-secondary/50 backdrop-blur-sm flex items-center justify-center border border-blue-500/30 transition-all duration-300 ease-out group-hover:scale-105 group-hover:border-blue-400/50 apple-button">
                    <Mail className="text-blue-400 transition-all duration-200" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <a href="mailto:arjunguptain@outlook.com" className="text-muted-foreground hover:text-blue-400 transition-colors duration-200 apple-button">
                      arjunguptain@outlook.com
                    </a>
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
