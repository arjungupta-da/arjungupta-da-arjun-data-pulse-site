
import { ExternalLink, Github } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const ProjectsSection = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>({ delay: 200 });
  const { elementRef: gridRef, isVisible: gridVisible } = useScrollAnimation<HTMLDivElement>({ delay: 400 });
  const { elementRef: certRef, isVisible: certVisible } = useScrollAnimation<HTMLDivElement>({ delay: 600 });

  const projects = [
    {
      title: "Python Data Extraction: Finding Numbers in Haystack",
      subtitle: "Advanced Python Programming for Data Analysis",
      description: "Developed a comprehensive Python script to extract and aggregate numerical values from unstructured text files. Implemented advanced regular expressions, string parsing algorithms, and data validation techniques. This project demonstrates expertise in Python programming, data cleaning, and handling messy datasets - essential skills for any data analyst working with real-world data sources.",
      date: "Mar 2024",
      organization: "University of Michigan & Coursera",
      link: "https://www.linkedin.com/posts/arjunguptain_python-dataparsing-regularexpressions-activity-7177912154774233088-Mb3m"
    },
    {
      title: "HTTP Protocol Analysis for Data Collection",
      subtitle: "Web Data Access and API Integration",
      description: "Conducted comprehensive analysis of HTTP response headers and web server interactions using Python. Built automated data collection pipelines, implemented error handling, and created documentation for web scraping protocols. This project showcases skills in API integration, web data extraction, and network protocol understanding crucial for modern data analyst roles.",
      date: "Mar 2024",
      organization: "University of Michigan & Coursera",
      link: "https://www.linkedin.com/posts/arjunguptain_python-http-webdata-activity-7178269131291463680-JFI1"
    },
    {
      title: "XML Data Processing and Analytics",
      subtitle: "Structured Data Extraction with Python",
      description: "Implemented advanced XML parsing and data extraction system using Python's urllib and xml.etree.ElementTree libraries. Developed XPath expressions for precise data targeting, created automated data validation workflows, and built scalable data processing pipelines. Demonstrates expertise in handling structured data formats and building robust data analysis solutions for enterprise applications.",
      date: "Mar 2024",
      organization: "University of Michigan & Coursera",
      link: "https://www.linkedin.com/posts/arjunguptain_python-dataanalysis-webdata-activity-7179708909077630976-KWzc"
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 gradient-bg">
      <div className="container mx-auto px-4">
        <h2 
          ref={titleRef}
          className={`section-heading transition-all duration-1000 ${titleVisible ? 'reveal-on-scroll visible' : 'reveal-on-scroll'}`}
        >
          Projects
        </h2>
        
        <div 
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${gridVisible ? 'reveal-on-scroll visible' : 'reveal-on-scroll'}`}
        >
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="glass-card rounded-lg overflow-hidden hover:border-primary/30 transition-colors group h-full flex flex-col"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="h-2 bg-gradient-to-r from-data-cyan via-data-purple to-data-magenta"></div>
              <div className="p-6 flex flex-col h-full">
                <div className="mb-4">
                  <p className="text-muted-foreground text-sm mb-2">{project.date} | {project.organization}</p>
                  <h3 className="text-xl font-display font-bold text-primary mb-1">{project.title}</h3>
                  <p className="text-sm text-primary">{project.subtitle}</p>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>
                
                <div className="flex justify-end mt-auto">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary text-sm transition-colors apple-button"
                  >
                    <span>View Project</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div 
          ref={certRef}
          className={`mt-12 text-center transition-all duration-1000 ${certVisible ? 'reveal-on-scroll visible' : 'reveal-on-scroll'}`}
        >
          <h3 className="text-xl font-display font-bold mb-2">Data Visualization: Empowering Business with Effective Insights</h3>
          <p className="text-muted-foreground mb-4">Tata Consultancy Services Simulation | Apr 2024</p>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Completed comprehensive data visualization simulation for Tata Consultancy Services, demonstrating advanced skills in business intelligence and executive reporting. Prepared strategic questions for C-level stakeholder meetings, created compelling data visualizations using industry-standard tools, and delivered actionable insights that support data-driven decision making. This certification validates expertise in translating complex datasets into clear, impactful visual narratives for business leadership.
          </p>
          
          <a
            href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Tata/MyXvBcppsW2FkNYCX_Tata%20Group_cGrwSBrZsvt4G2TsM_1712085625682_completion_certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors apple-button"
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
