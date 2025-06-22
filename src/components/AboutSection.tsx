
import { Briefcase, GraduationCap, MapPin, Phone, Mail } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>({ delay: 300 });
  const { elementRef: profileRef, isVisible: profileVisible } = useScrollAnimation<HTMLDivElement>({ delay: 500 });
  const { elementRef: contactRef, isVisible: contactVisible } = useScrollAnimation<HTMLDivElement>({ delay: 700 });

  return (
    <section id="about" className="py-16 md:py-24 gradient-bg">
      <div className="container mx-auto px-4">
        <h2 
          ref={titleRef} 
          className={`section-heading transition-all duration-1000 ease-out ${titleVisible ? 'reveal-on-scroll visible' : 'reveal-on-scroll'}`}
        >
          About Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div 
              ref={profileRef}
              className={`glass-card p-8 rounded-lg h-full flex flex-col justify-between transition-all duration-1200 ease-out ${profileVisible ? 'reveal-left-scroll visible' : 'reveal-left-scroll'}`}
            >
              <div>
                <h3 className="text-2xl font-display font-bold mb-4 text-center md:text-left">Profile Summary</h3>
                <p className="text-muted-foreground mb-6">
                  Dedicated to mentoring aspiring analysts and developers through practical, hands-on training in Artificial Intelligence, C, C++, Data Structures and Algorithms, Google Looker Studio, Microsoft Excel, Microsoft Power BI, Python, Microsoft SQL Server, Statistics and Tableau. I specialize in breaking down complex data concepts into easy-to-understand modules, enabling learners to transform raw data into strategic insights. 

                  In my role, I design and deliver comprehensive training sessions, guiding students to build interactive dashboards and insightful reports that support data-driven decision-making. My focus is on nurturing both technical skills and analytical thinking. 

                  I hold a Bachelor of Science in Physical Sciences with Computer Science from Keshav Mahavidyalaya, completed in June 2024. This academic background strengthens my teaching by blending computer science fundamentals with a deep understanding of analytical frameworks and real-world applications.
                </p>
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3 group">
                  <Briefcase className="text-primary mt-1 flex-shrink-0 transition-transform duration-500 ease-out group-hover:scale-110" size={20} />
                  <div>
                    <h4 className="font-semibold">Current Position</h4>
                    <p className="text-muted-foreground text-sm">Data Analytics and Programming Trainer at Delhi School of Skill Development</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 group">
                  <GraduationCap className="text-primary mt-1 flex-shrink-0 transition-transform duration-500 ease-out group-hover:scale-110" size={20} />
                  <div>
                    <h4 className="font-semibold">Education</h4>
                    <p className="text-muted-foreground text-sm">B.Sc. Physical Sciences with Computer Science</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <div 
              ref={contactRef}
              className={`glass-card p-8 rounded-lg h-full flex flex-col justify-between transition-all duration-1200 ease-out ${contactVisible ? 'reveal-right-scroll visible' : 'reveal-right-scroll'}`}
            >
              <div>
                <h3 className="text-2xl font-display font-bold mb-4 text-center md:text-left">Contact Details</h3>
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3 group">
                  <MapPin className="text-primary mt-1 flex-shrink-0 transition-transform duration-500 ease-out group-hover:scale-110" size={20} />
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-muted-foreground text-sm">New Delhi, India</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 group">
                  <Phone className="text-primary mt-1 flex-shrink-0 transition-transform duration-500 ease-out group-hover:scale-110" size={20} />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-muted-foreground text-sm">+91 77039-76867</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 group">
                  <Mail className="text-primary mt-1 flex-shrink-0 transition-transform duration-500 ease-out group-hover:scale-110" size={20} />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a href="mailto:arjunguptain@outlook.com" className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300">
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
