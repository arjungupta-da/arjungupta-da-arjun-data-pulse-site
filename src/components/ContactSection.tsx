
import { useState } from "react";
import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 gradient-bg">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="glass-card p-8 rounded-lg h-full">
              <h3 className="text-2xl font-display font-bold mb-6 text-data-cyan">Contact Info</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-muted-foreground">New Delhi, India</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a 
                      href="mailto:arjunguptain@outlook.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      arjunguptain@outlook.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <a 
                      href="tel:+917703976867"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 77039-76867
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <Linkedin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/arjunguptain/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      linkedin.com/in/arjunguptain
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="glass-card p-8 rounded-lg">
              <h3 className="text-2xl font-display font-bold mb-6 text-data-cyan">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-secondary border-secondary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Your Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-secondary border-secondary"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="How can I help you?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-secondary border-secondary"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Your Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-32 bg-secondary border-secondary"
                  />
                </div>
                
                <Button type="submit" className="w-full sm:w-auto bg-primary hover:bg-primary/80">
                  <Send className="mr-2" size={16} />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
