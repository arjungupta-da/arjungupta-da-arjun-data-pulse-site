import { CheckCircle, Award, ExternalLink } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const SkillsSection = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>({ delay: 200 });
  const { elementRef: skillsCardRef, isVisible: skillsCardVisible } = useScrollAnimation<HTMLDivElement>({ delay: 400 });
  const { elementRef: featuredCardRef, isVisible: featuredCardVisible } = useScrollAnimation<HTMLDivElement>({ delay: 600 });
  const { elementRef: allCertsRef, isVisible: allCertsVisible } = useScrollAnimation<HTMLDivElement>({ delay: 800 });

  const skills = [
    "Artificial Intelligence",
    "C/C++",
    "Canva",
    "Data Cleaning",
    "Data Visualization",
    "DSA",
    "Google Looker Studio",
    "Microsoft Excel", 
    "Microsoft Power BI",
    "MySQL/T-SQL",
    "Python",
    "Statistical Analysis",
    "Statistics",
    "Tableau"
  ];

  const featuredCertifications = [
    {
      name: "NAB India's Certification Program in Data Analytics - Post Trainer Assessment",
      issuer: "EduBridge Learning",
      date: "May 2025",
      link: "#",
      description: "Professional certification in data analytics training and assessment, demonstrating expertise in data analysis methodologies and training capabilities"
    },
    {
      name: "Python for Everybody - Specialization",
      issuer: "University of Michigan & Coursera",
      date: "Dec 2023",
      link: "https://www.coursera.org/account/accomplishments/specialization/L2C8WHHHFT7E",
      description: "Comprehensive Python programming specialization covering data structures, databases, and web data access"
    },
    {
      name: "Data Analysis with Python",
      issuer: "IBM Developer Skills Network & Coursera",
      date: "Nov 2023",
      link: "https://www.credly.com/badges/4ba5a3e7-2e99-4910-a913-281bd41c91a1/public_url",
      description: "Applied data analysis using Python libraries (NumPy, Pandas, Scikit-learn) for real-world datasets"
    }
  ];

  const certifications = [
    {
      name: "Capstone: Retrieving, Processing, and Visualizing Data with Python",
      issuer: "Coursera",
      date: "Mar 2024",
      link: "https://www.coursera.org/account/accomplishments/verify/HLP4VUVJ3TF8"
    },
    {
      name: "Completed Gold Level (5-stars) in both Python and SQL",
      issuer: "HackerRank",
      date: "2024",
      link: "https://www.hackerrank.com/profile/arjunguptain"
    },
    {
      name: "Data Analysis with Python",
      issuer: "IBM Developer Skills Network & Coursera",
      date: "Nov 2023",
      link: "https://www.credly.com/badges/4ba5a3e7-2e99-4910-a913-281bd41c91a1/public_url"
    },
    {
      name: "Data Analytics Essentials",
      issuer: "Cisco",
      date: "Feb 2024",
      link: "#"
    },
    {
      name: "EduBridge 4 Employment - Train the Trainer Program",
      issuer: "EduBridge",
      date: "2024",
      link: "#"
    },
    {
      name: "EduBridge 4 Employment - Certification Program in Data Entry Operator - Train the Trainer Program",
      issuer: "EduBridge",
      date: "2024",
      link: "#"
    },
    {
      name: "Excel Data MasterMind with GenAI",
      issuer: "WsCube Tech",
      date: "2024",
      link: "#"
    },
    {
      name: "Foundations: Data, Data, Everywhere",
      issuer: "Coursera",
      date: "Oct 2023",
      link: "https://www.coursera.org/account/accomplishments/verify/54QB6WL83DV7"
    },
    {
      name: "Get Started with Microsoft Fabric",
      issuer: "Microsoft Learn",
      date: "Mar 2024",
      link: "https://learn.microsoft.com/api/achievements/share/en-us/arjunguptain/NZRZRVZF"
    },
    {
      name: "Getting Started with Python",
      issuer: "Coursera",
      date: "Sept 2023",
      link: "https://www.coursera.org/account/accomplishments/verify/Q72KS2U7UX43"
    },
    {
      name: "Implement a Lakehouse with Microsoft Fabric",
      issuer: "Microsoft Learn",
      date: "Mar 2024",
      link: "https://learn.microsoft.com/api/achievements/share/en-us/arjunguptain/8AXACKHW"
    },
    {
      name: "Ingest data with Microsoft Fabric",
      issuer: "Microsoft Learn",
      date: "Mar 2024",
      link: "https://learn.microsoft.com/api/achievements/share/en-us/arjunguptain/45J5YPMK"
    },
    {
      name: "Introduction to Generative AI",
      issuer: "Google",
      date: "Apr 2024",
      link: "https://www.cloudskillsboost.google/public_profiles/8932209c-8a91-49ca-b7d4-46fd5e52f2c2/badges/8161414"
    },
    {
      name: "Master Data Management",
      issuer: "TCS iON",
      date: "Jan 2024",
      link: "https://www.tcsion.com/LX/vcgrade_categories/download_certificate_hub?course_id=71279&c_id=master-data-management-batch-01"
    },
    {
      name: "NAB India's Certification Program in Data Analytics - Post Trainer Assessment",
      issuer: "EduBridge Learning",
      date: "May 2025",
      link: "#"
    },
    {
      name: "Preparing Data for Analysis with Microsoft Excel",
      issuer: "Coursera",
      date: "Jan 2024",
      link: "https://www.coursera.org/account/accomplishments/verify/E1G7ZTMALRWE"
    },
    {
      name: "Python & Artificial Intelligence Bootcamp",
      issuer: "DevTown",
      date: "Dec 2023",
      link: "https://cert.devtown.in/verify/1699td"
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
      name: "Using Databases with Python",
      issuer: "Coursera", 
      date: "Nov 2023",
      link: "https://coursera.org/share/9c081e108ba55532d79b70b2e57b1930"
    },
    {
      name: "Using Python to Access Web Data",
      issuer: "Coursera",
      date: "Dec 2023",
      link: "https://www.coursera.org/account/accomplishments/verify/5RHYTFU8566C"
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 gradient-bg">
      <div className="container mx-auto px-4">
        <h2 
          ref={titleRef}
          className={`section-heading transition-all duration-1000 ${titleVisible ? 'reveal-on-scroll visible' : 'reveal-on-scroll'}`}
        >
          Skills & Certifications
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div 
              ref={skillsCardRef}
              className={`glass-card p-8 rounded-lg h-full transition-all duration-1000 ${skillsCardVisible ? 'reveal-left-scroll visible' : 'reveal-left-scroll'}`}
            >
              <h3 className="text-2xl font-display font-bold mb-6 text-primary">Technical Skills</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2 group">
                    <CheckCircle size={18} className="text-primary group-hover:text-accent transition-colors" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div 
              ref={featuredCardRef}
              className={`glass-card p-8 rounded-lg h-full transition-all duration-1000 ${featuredCardVisible ? 'reveal-right-scroll visible' : 'reveal-right-scroll'}`}
            >
              <h3 className="text-2xl font-display font-bold mb-6 text-primary">Featured Project Certificates</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                {featuredCertifications.map((cert, index) => (
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
              
              <div className="mt-6 text-center">
                <a 
                  href="https://www.linkedin.com/in/arjunguptain/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  <span>View my LinkedIn Profile</span>
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* All Certificates Section */}
        <div 
          ref={allCertsRef}
          className={`glass-card p-8 rounded-lg transition-all duration-1000 ${allCertsVisible ? 'reveal-on-scroll visible' : 'reveal-on-scroll'}`}
        >
          <h3 className="text-2xl font-display font-bold mb-6 text-primary">All Certifications</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => {
              const isEven = index % 2 === 0;
              const delay = Math.min(index * 150, 2000);
              return (
                <div
                  key={index}
                  className={`transition-all duration-1000 ease-out ${
                    allCertsVisible 
                      ? `opacity-100 translate-x-0 ${isEven ? 'cert-reveal-left' : 'cert-reveal-right'}` 
                      : `opacity-0 ${isEven ? '-translate-x-12' : 'translate-x-12'}`
                  }`}
                  style={{ 
                    transitionDelay: `${delay}ms`,
                    transform: allCertsVisible ? 'translateX(0)' : (isEven ? 'translateX(-48px)' : 'translateX(48px)')
                  }}
                >
                  <a 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-start p-3 bg-secondary/30 rounded-md hover:bg-secondary/50 transition-all duration-300 ease-out group h-full apple-card transform hover:scale-[1.02] hover:-translate-y-1"
                  >
                    <Award size={18} className="text-primary mt-0.5 mr-2 flex-shrink-0 group-hover:text-accent transition-colors duration-300" />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm group-hover:text-foreground transition-colors duration-300">{cert.name}</h4>
                      <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                      {cert.date && <p className="text-xs text-primary/80 mt-1">{cert.date}</p>}
                    </div>
                    <ExternalLink size={14} className="ml-2 text-muted-foreground flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
