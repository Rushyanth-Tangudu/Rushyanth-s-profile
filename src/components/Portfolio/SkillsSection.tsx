import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Wrench, TrendingUp } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "Java", "C++", "C", "Haskell", "Scala", "JavaScript"]
  },
  {
    title: "Frameworks & Frontend",
    icon: Wrench,
    skills: ["HTML", "CSS", "JavaScript", "ReactJS", "OpenCV", "NumPy", "Pandas"]
  },
  {
    title: "Developer Tools",
    icon: Database,
    skills: ["VS Code", "Wireshark", "MySQL", "Jupyter Notebook", "Firebase", "Arduino IDE"]
  },
  {
    title: "Hardware & Systems",
    icon: Cloud,
    skills: ["Keil4", "Keil5", "Verilog", "Arduino", "Ubuntu", "Linux", "Haiku"]
  }
];

const certifications = [
  { name: "Business Analysis and Process Management", date: "2024", issuer: "Coursera" },
  { name: "Avishkar 2024 - Smart Blind Stick", date: "2024", issuer: "Tech Competition" },
  { name: "NSS Unit-3 Volunteer", date: "2023", issuer: "National Service Scheme" },
  { name: "Anokha 2024 Core Team", date: "2024", issuer: "Amrita Vishwa Vidyapeetham" }
];

const SkillsSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary-gradient">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My technical expertise spans across multiple domains of software engineering
          </p>
        </div>
        
        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="shadow-soft hover:shadow-elegant transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-12 h-12 bg-primary-gradient rounded-lg flex items-center justify-center mb-3">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Academic Achievements */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Achievements</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Academic journey and recognition for excellence in computer science
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center shadow-soft hover:shadow-elegant transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mx-auto w-12 h-12 bg-primary-gradient rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">B.Tech CSE</h3>
                <p className="text-sm text-muted-foreground mb-1">Amrita School of Engineering</p>
                <p className="text-sm text-primary font-medium">CGPA: 7.35 (2022-2026)</p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-soft hover:shadow-elegant transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mx-auto w-12 h-12 bg-primary-gradient rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">HSC</h3>
                <p className="text-sm text-muted-foreground mb-1">Narayana Junior College</p>
                <p className="text-sm text-primary font-medium">96.5% (2020-2022)</p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-soft hover:shadow-elegant transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mx-auto w-12 h-12 bg-primary-gradient rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">SSC</h3>
                <p className="text-sm text-muted-foreground mb-1">Narayana Group of Schools</p>
                <p className="text-sm text-primary font-medium">98% (2020)</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;