import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import headshot from "@/assets/professional-headshot.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-hero-gradient px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-primary-gradient bg-clip-text text-transparent">
              Rushyanth Tangudu
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
              B.Tech Computer Science Engineering Student
            </h2>
            <p className="text-lg text-foreground mb-8 max-w-2xl">
              Enthusiastic Computer Science student, passionate about Software Development, 
              Machine Learning, Digital Image Processing, IoT, Embedded Systems, and emerging technologies.
              Currently pursuing B.Tech at Amrita School of Engineering with CGPA: 7.35.
            </p>
            
            {/* Contact button */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <a href="mailto:rushyanthtangudu289@gmail.com">
                <Button variant="default" className="shadow-soft">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </Button>
              </a>
            </div>
            
            {/* Social links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/Rushyanth-Tangudu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="icon" variant="ghost" className="hover:shadow-soft transition-shadow">
                  <Github className="w-5 h-5" />
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/rushyanth-tangudu-2a25a62b1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="icon" variant="ghost" className="hover:shadow-soft transition-shadow">
                  <Linkedin className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>
          
          {/* Right side - Profile image */}
          <div className="flex justify-center lg:justify-end">
            <Card className="p-8 shadow-elegant">
              <div className="relative">
                <img
                  src="/Rushyanth.jpeg"
                  alt="Rushyanth Tangudu"
                  className="w-80 h-80 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 rounded-2xl bg-primary-gradient opacity-10"></div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
