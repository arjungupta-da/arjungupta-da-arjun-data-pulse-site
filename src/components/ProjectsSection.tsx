
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Finding Numbers in a Haystack",
      subtitle: "Using Python to Access Web Data",
      description: "Developed a Python script to extract and sum numerical values embedded within a text file. Utilized regular expressions to identify and isolate relevant numerical data points amidst unstructured text. Demonstrated proficiency in data manipulation and analysis, highlighting the power of Python for handling messy data sets.",
      date: "Mar 2024",
      organization: "University of Michigan & Coursera",
      link: "https://www.linkedin.com/posts/arjunguptain_python-dataparsing-regularexpressions-activity-7177912154774233088-Mb3m"
    },
    {
      title: "Exploring Hypertext Transfer Protocol",
      subtitle: "Using Python to Access Web Data",
      description: "Analyzed HTTP Response headers to extract valuable insights regarding the document's attributes and server interactions. Documented the retrieved information to ensure clarity and facilitate further analysis. Project reinforced the importance of understanding core concepts in web data handling and HTTP protocols.",
      date: "Mar 2024",
      organization: "University of Michigan & Coursera",
      link: "https://www.linkedin.com/posts/arjunguptain_python-http-webdata-activity-7178269131291463680-JFI1"
    },
    {
      title: "Extracting Data from XML",
      subtitle: "Using Python to Access Web Data",
      description: "Utilized 'urllib' for efficient data retrieval and 'xml.etree.ElementTree' for robust XML parsing. XPath expressions to ensure precise targeting and extraction of comment count data. Project experience strengthened skills in web data retrieval, XML processing, and data analysis with Python.",
      date: "Mar 2024",
      organization: "University of Michigan & Coursera",
      link: "https://www.linkedin.com/posts/arjunguptain_python-dataanalysis-webdata-activity-7179708909077630976-KWzc"
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 gradient-bg">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="glass-card rounded-lg overflow-hidden hover:border-primary/30 transition-colors group h-full flex flex-col"
            >
              <div className="h-2 bg-gradient-to-r from-data-cyan via-data-purple to-data-magenta"></div>
              <div className="p-6 flex flex-col h-full">
                <div className="mb-4">
                  <p className="text-muted-foreground text-sm mb-2">{project.date} | {project.organization}</p>
                  <h3 className="text-xl font-display font-bold text-data-cyan mb-1">{project.title}</h3>
                  <p className="text-sm text-primary">{project.subtitle}</p>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>
                
                <div className="flex justify-end mt-auto">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    <span>View Project</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-xl font-display font-bold mb-2">Data Visualization: Empowering Business with Effective Insights</h3>
          <p className="text-muted-foreground mb-4">Job Simulation by Tata Group | Apr 2024</p>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Completed a simulation involving creating data visualizations for Tata Consultancy Services.
            Prepared questions for a meeting with client senior leadership.
            Created visuals for data analysis to help executives with effective decision making.
          </p>
          
          <a
            href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Tata/MyXvBcppsW2FkNYCX_Tata%20Group_cGrwSBrZsvt4G2TsM_1712085625682_completion_certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <span>View Certificate</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
