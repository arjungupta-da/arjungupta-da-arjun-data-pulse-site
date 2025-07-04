
import { Calendar } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const ExperienceSection = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>({ delay: 100 });
  const { elementRef: cardRef, isVisible: cardVisible } = useScrollAnimation<HTMLDivElement>({ delay: 200 });

  return (
    <section id="experience" className="gradient-bg">
      <div className="container mx-auto px-4">
        <h2 
          ref={titleRef}
          className={`section-heading transition-all duration-700 ${titleVisible ? 'reveal-on-scroll visible' : 'reveal-on-scroll'}`}
        >
          Work Experience
        </h2>
        
        <div 
          ref={cardRef}
          className={`glass-card p-6 md:p-8 rounded-lg transition-all duration-700 ${cardVisible ? 'reveal-left-scroll visible' : 'reveal-left-scroll'}`}
        >
          <div className="flex flex-col md:flex-row justify-between mb-4">
            <div>
              <h3 className="text-2xl font-display font-bold text-blue-400">Data Analytics & Programming Trainer</h3>
              <p className="text-lg text-muted-foreground">
                <a href="https://www.dssd.in/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors apple-button">
                  Delhi School of Skill Development
                </a>
                , Delhi, India
              </p>
            </div>
            
            <div className="flex items-center gap-2 mt-2 md:mt-0">
              <Calendar size={16} className="text-blue-400" />
              <span className="text-muted-foreground">Aug 2023 - Present</span>
            </div>
          </div>
          
          <ul className="list-disc pl-5 space-y-3 text-muted-foreground">
            <li>Deliver hands-on training in AI, C, C++, DSA, Google Looker Studio, Microsoft Excel, Microsoft Power BI, Microsoft SQL Server, Python, Statistics and Tableau, equipping learners with practical skills to analyze data, make strategic decisions, and optimize data workflows.</li>
            <li>
              Guide trainees through real-world data analysis projects, teaching them how to uncover trends and patterns that support data-driven decision-making.
            </li>
            <li>
              Develop and explain complex data models and algorithms, enhancing learners' understanding of efficient data processing and analytical best practices.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
