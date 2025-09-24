import { Calendar } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";
const ExperienceSection = () => {
  const {
    elementRef: titleRef,
    isVisible: titleVisible
  } = useScrollAnimation<HTMLHeadingElement>({
    delay: 100
  });
  const {
    elementRef: cardRef,
    isVisible: cardVisible
  } = useScrollAnimation<HTMLDivElement>({
    delay: 200
  });
  return <section id="experience" className="gradient-bg">
      <div className="container mx-auto px-4">
        <h2 ref={titleRef} className={`section-heading transition-all duration-700 ${titleVisible ? 'reveal-on-scroll visible' : 'reveal-on-scroll'}`}>
          Work Experience
        </h2>
        
        <div ref={cardRef} className={`glass-card p-6 md:p-8 rounded-lg transition-all duration-700 ${cardVisible ? 'reveal-left-scroll visible' : 'reveal-left-scroll'}`}>
          <div className="flex flex-col md:flex-row justify-between mb-4">
            <div>
              <h3 className="text-2xl font-display font-bold text-primary">Data Analytics and Programming Trainer</h3>
              <p className="text-lg text-muted-foreground">
                <a href="https://www.dssd.in/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors apple-button">
                  Delhi School of Skill Development
                </a>
                , Delhi, India
              </p>
            </div>
            
            <div className="flex items-center gap-2 mt-2 md:mt-0">
              <Calendar size={16} className="text-primary" />
              <span className="text-muted-foreground">Aug 2023 - Present</span>
            </div>
          </div>
          
          <ul className="list-disc pl-5 space-y-3 text-muted-foreground">
            <li><strong>Data Analytics Training:</strong> Deliver comprehensive training in Python programming, SQL database management, Microsoft Excel advanced analytics, Power BI dashboard development, Google Sheets automation, Tableau visualization, and statistical analysis. Train 50+ students monthly in practical data analysis techniques that directly apply to industry scenarios.</li>
            <li><strong>Real-World Project Implementation:</strong> Guide trainees through hands-on data analysis projects including sales forecasting, customer segmentation, financial modeling, and business intelligence reporting. Students create interactive dashboards, automated reports, and data visualization solutions that demonstrate measurable business impact.</li>
            <li><strong>Advanced Programming Instruction:</strong> Teach Python for data science, SQL for database querying, and advanced Excel functions for business analytics. Develop curriculum covering data structures, algorithms, artificial intelligence applications, and machine learning fundamentals. Focus on practical coding skills that prepare students for immediate employment in data analyst roles.</li>
            <li><strong>Industry-Standard Tools Training:</strong> Provide expertise in Microsoft Power BI for business intelligence, Google Looker Studio for data visualization, Tableau for advanced analytics, and Microsoft SQL Server for database management. Students learn to create professional-grade dashboards and reports used by leading companies in Delhi and across India.</li>
          </ul>
        </div>
      </div>
    </section>;
};
export default ExperienceSection;