
import { CheckCircle, Award, ExternalLink } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    "Python",
    "SQL",
    "Microsoft Excel", 
    "Microsoft Power BI",
    "Tableau",
    "Data Cleaning",
    "Data Visualization",
    "Statistical Analysis",
    "C/C++",
    "DSA",
    "Canva"
  ];

  const certifications = [
    {
      name: "Python for Everybody - Specialization",
      issuer: "University of Michigan & Coursera",
      date: "Dec 2023",
      link: "https://www.coursera.org/account/accomplishments/specialization/L2C8WHHHFT7E"
    },
    {
      name: "Data Analysis with Python",
      issuer: "IBM Developer Skills Network & Coursera",
      date: "Nov 2023",
      link: "https://www.credly.com/badges/4ba5a3e7-2e99-4910-a913-281bd41c91a1/public_url"
    },
    {
      name: "Capstone: Retrieving, Processing, and Visualizing Data with Python",
      issuer: "Coursera",
      date: "Mar 2024",
      link: "https://coursera.org/share/9c081e108ba55532d79b70b2e57b1930"
    },
    {
      name: "SQL Advanced",
      issuer: "HackerRank",
      date: "Feb 2024",
      link: "https://www.hackerrank.com/certificates/f37838992364"
    },
    {
      name: "SQL Basic",
      issuer: "HackerRank",
      date: "Jan 2024",
      link: "https://www.hackerrank.com/certificates/257d8d878d81"
    },
    {
      name: "Python Basic",
      issuer: "HackerRank",
      date: "Jan 2024",
      link: "https://www.hackerrank.com/certificates/8b38ec7876c7"
    },
    {
      name: "Python Data Structures",
      issuer: "Coursera",
      date: "Oct 2023",
      link: "https://www.coursera.org/account/accomplishments/records/54QB6WL83DV7"
    },
    {
      name: "Using Databases with Python",
      issuer: "Coursera", 
      date: "Nov 2023",
      link: "https://www.coursera.org/account/accomplishments/verify/HLP4VUVJ3TF8"
    },
    {
      name: "Using Python to Access Web Data",
      issuer: "Coursera",
      date: "Dec 2023",
      link: "https://www.coursera.org/account/accomplishments/verify/5RHYTFU8566C"
    },
    {
      name: "Master Data Management",
      issuer: "TCS iON",
      date: "Jan 2024",
      link: "https://www.tcsion.com/LX/vcgrade_categories/download_certificate_hub?course_id=71279&c_id=master-data-management-batch-01"
    },
    {
      name: "Data Analytics Essentials",
      issuer: "Cisco",
      date: "Feb 2024",
      link: "#"
    },
    {
      name: "Foundations: Data, Data, Everywhere",
      issuer: "Coursera",
      date: "Oct 2023",
      link: "#"
    }
  ];

  const projectCertificates = [
    {
      name: "Python for Everybody Project",
      issuer: "University of Michigan & Coursera",
      date: "Dec 2023",
      link: "https://www.coursera.org/account/accomplishments/specialization/L2C8WHHHFT7E",
      description: "Comprehensive Python programming specialization covering data structures, databases, and web data access"
    },
    {
      name: "IBM Data Analysis Project",
      issuer: "IBM Developer Skills Network",
      date: "Nov 2023",
      link: "https://www.credly.com/badges/4ba5a3e7-2e99-4910-a913-281bd41c91a1/public_url",
      description: "Applied data analysis using Python libraries (NumPy, Pandas, Scikit-learn) for real-world datasets"
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 gradient-bg">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Skills & Certifications</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="glass-card p-8 rounded-lg h-full">
              <h3 className="text-2xl font-display font-bold mb-6 text-data-cyan">Technical Skills</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2 group">
                    <CheckCircle size={18} className="text-primary group-hover:text-data-cyan transition-colors" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="glass-card p-8 rounded-lg h-full">
              <h3 className="text-2xl font-display font-bold mb-6 text-data-cyan">Featured Projects & Certificates</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projectCertificates.map((cert, index) => (
                  <a 
                    key={index}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="block p-4 bg-secondary/50 rounded-md hover:bg-secondary/80 transition-colors"
                  >
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Award size={16} className="text-primary" /> {cert.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    <p className="text-xs text-primary mt-1">{cert.date}</p>
                    <p className="text-sm mt-2 text-muted-foreground">{cert.description}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* All Certificates Section */}
        <div className="glass-card p-8 rounded-lg">
          <h3 className="text-2xl font-display font-bold mb-6 text-data-cyan">All Certifications</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <a 
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-start p-3 bg-secondary/30 rounded-md hover:bg-secondary/50 transition-colors group"
              >
                <Award size={18} className="text-primary mt-0.5 mr-2 flex-shrink-0 group-hover:text-data-cyan transition-colors" />
                <div>
                  <h4 className="font-medium text-sm group-hover:text-foreground transition-colors">{cert.name}</h4>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  {cert.date && <p className="text-xs text-primary/80 mt-1">{cert.date}</p>}
                </div>
                <ExternalLink size={14} className="ml-auto text-muted-foreground flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <a 
              href="https://www.linkedin.com/in/arjunguptain/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <span>View my complete profile on LinkedIn</span>
              <ExternalLink size={14} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
