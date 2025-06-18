
import { Calendar } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="gradient-bg reveal">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Work Experience</h2>
        
        <div className="glass-card p-6 md:p-8 rounded-lg reveal-left">
          <div className="flex flex-col md:flex-row justify-between mb-4">
            <div>
              <h3 className="text-2xl font-display font-bold text-orange-400">Data Analytics & Programming Trainer</h3>
              <p className="text-lg text-muted-foreground">
                <a href="https://www.dssd.in/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">
                  Delhi School of Skill Development
                </a>
                , Delhi, India
              </p>
            </div>
            
            <div className="flex items-center gap-2 mt-2 md:mt-0">
              <Calendar size={16} className="text-orange-400" />
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
