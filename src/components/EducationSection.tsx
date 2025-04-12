
import { Calendar } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-16 md:py-24 gradient-bg">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Education</h2>
        
        <div className="space-y-8">
          <div className="glass-card p-8 rounded-lg">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div>
                <h3 className="text-2xl font-display font-bold text-data-cyan">Bachelors of Science in Physical Sciences with Computer Science</h3>
                <p className="text-lg text-muted-foreground">Keshav Mahavidyalaya, University of Delhi</p>
              </div>
              
              <div className="flex items-center gap-2 mt-2 md:mt-0 md:ml-4 flex-shrink-0">
                <Calendar size={16} className="text-primary" />
                <span className="text-muted-foreground">Completed Jun 2024</span>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-4">Major in Computer Science, Mathematics and Physics</p>
            
            <div>
              <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
              <p className="text-muted-foreground">Data Analysis; Software Engineering; Operating Systems; Algorithms; Artificial Intelligence</p>
            </div>
          </div>
          
          <div className="glass-card p-8 rounded-lg">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div>
                <h3 className="text-2xl font-display font-bold text-data-cyan">Non-Medical Science with Computer Science</h3>
                <p className="text-lg text-muted-foreground">PM SHRI Kendriya Vidyalaya</p>
              </div>
              
              <div className="flex items-center gap-2 mt-2 md:mt-0 md:ml-4 flex-shrink-0">
                <Calendar size={16} className="text-primary" />
                <span className="text-muted-foreground">Completed Mar 2021</span>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-4">Percentage Obtained: 92.75%</p>
            
            <div>
              <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
              <p className="text-muted-foreground">Python and MySQL</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
