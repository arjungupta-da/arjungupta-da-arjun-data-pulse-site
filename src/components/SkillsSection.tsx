
import { CheckCircle } from "lucide-react";

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
      date: "",
      link: "https://coursera.org/share/9c081e108ba55532d79b70b2e57b1930"
    },
    {
      name: "SQL Advanced",
      issuer: "HackerRank",
      date: "",
      link: "https://www.hackerrank.com/certificates/f37838992364"
    },
    {
      name: "SQL Basic",
      issuer: "HackerRank",
      date: "",
      link: "https://www.hackerrank.com/certificates/257d8d878d81"
    },
    {
      name: "Python Basic",
      issuer: "HackerRank",
      date: "",
      link: "https://www.hackerrank.com/certificates/8b38ec7876c7"
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 gradient-bg">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Skills & Certifications</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
              <h3 className="text-2xl font-display font-bold mb-6 text-data-cyan">Certifications</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <a 
                    key={index}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="block p-4 bg-secondary/50 rounded-md hover:bg-secondary/80 transition-colors"
                  >
                    <h4 className="font-semibold mb-2">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    {cert.date && <p className="text-xs text-primary mt-2">{cert.date}</p>}
                  </a>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-muted-foreground">
                  View all certificates on my{" "}
                  <a 
                    href="https://www.linkedin.com/in/arjunguptain/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    LinkedIn profile
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
