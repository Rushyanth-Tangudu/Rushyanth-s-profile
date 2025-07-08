import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm passionate about Software Development, Machine Learning, IoT, and emerging technologies. 
              Let's discuss potential collaborations and opportunities!
            </p>
          </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8">
                Whether you're interested in collaboration on IoT projects, machine learning initiatives, 
                or discussing emerging technologies in computer science, I'd love to connect and explore opportunities together.
              </p>
            </div>
            
            <div className="space-y-4">
              <Card className="shadow-soft hover:shadow-elegant transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-gradient rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-muted-foreground">rushyanthtangudu289@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-soft hover:shadow-elegant transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-gradient rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-muted-foreground">+91-8309933892</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-soft hover:shadow-elegant transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-gradient rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Location</h4>
                      <p className="text-muted-foreground">Coimbatore, Tamil Nadu</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex gap-4">
              <a href="https://github.com/Rushyanth-Tangudu" target="_blank" rel="noopener noreferrer">
  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-soft">
    <Github className="w-5 h-5 mr-2" />
    GitHub
  </Button>
</a>

<a href="https://www.linkedin.com/in/rushyanth-tangudu-2a25a62b1/" target="_blank" rel="noopener noreferrer">
  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-soft">
    <Linkedin className="w-5 h-5 mr-2" />
    LinkedIn
  </Button>
</a>

            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name</label>
                    <Input placeholder="Your name" className="shadow-soft" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="your.email@example.com" className="shadow-soft" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input placeholder="What's this about?" className="shadow-soft" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project or opportunity..."
                    rows={6}
                    className="shadow-soft"
                  />
                </div>
                
                <Button type="submit" className="w-full shadow-soft" size="lg">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        
      </div>
    </section>
  );
};

export default ContactSection;