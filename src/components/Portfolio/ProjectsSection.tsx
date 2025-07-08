import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Play } from "lucide-react";

const projects = [
{
  title: "Smart Blind Stick (Full-Stack IoT System)",
  description: "Built a smart stick using ESP32 with ultrasonic, IR, and touch sensors for obstacle detection and emergency alerts. Integrated GPS module for real-time location tracking and email alerts.",
  technologies: ["C++", "HTML", "CSS", "JavaScript", "Firebase", "Arduino IDE"],
  role: "Full-Stack IoT Developer",
  impact: "Designed responsive web dashboard and cloud-based data storage using Firebase Realtime Database",
  demoLink: "https://drive.google.com/file/d/1okg3_iZ8cd0xIV9EncXSQ80vx5em69JQ/view?usp=sharing", // make sure this opens
  codeLink: "https://github.com/Rushyanth-Tangudu/Smart_Blind_Stick", // ensure this is public
  date: "April 2025"
},

  {
    title: "Leaf Disease Detection (Digital Image Processing)",
    description: "Developed a system for leaf disease detection using image segmentation and morphological operations. Applied advanced preprocessing techniques for noise reduction and accurate disease identification.",
    technologies: ["Python", "OpenCV", "NumPy", "Pandas", "scikit-learn", "Jupyter Notebook"],
    role: "Machine Learning Engineer",
    impact: "Tested on dataset of 1041 images with high accuracy using morphological techniques",
    demoLink: "https://github.com/Rushyanth-Tangudu/Morphological-and-Segmentation-of-Algorithms",
    codeLink: "https://github.com/Rushyanth-Tangudu/Morphological-and-Segmentation-of-Algorithms",
    date: "Nov 2024"
  },
  {
    title: "Event Management System (Frontend)",
    description: "Built a responsive Event Management System with dynamic form handling and user-friendly UI following modern web design practices.",
    technologies: ["HTML", "CSS", "JavaScript"],
    role: "Frontend Developer",
    impact: "Enabled event creation, registration, attendee management with simulated secure payment gateway",
    demoLink: "https://event-management-liart.vercel.app/",
    codeLink: "https://github.com/Rushyanth-Tangudu/Event-Management",
    date: "Aug 2023"
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4"> Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my key projects that demonstrate my technical skills and problem-solving abilities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-soft hover:shadow-elegant transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-1">Date:</h4>
                  <p className="text-muted-foreground">{project.date}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-1">My Role:</h4>
                  <p className="text-muted-foreground">{project.role}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-1">Impact/Results:</h4>
                  <p className="text-muted-foreground">{project.impact}</p>
                </div>
                
                <div className="flex gap-2 pt-2">
  <a
    href={project.demoLink}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button size="sm" variant="default" className="shadow-soft">
      <Play className="w-4 h-4 mr-1" />
      Demo
    </Button>
  </a>
  <a
    href={project.codeLink}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button size="sm" variant="outline" className="shadow-soft">
      <Github className="w-4 h-4 mr-1" />
      Code
    </Button>
  </a>
</div>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;