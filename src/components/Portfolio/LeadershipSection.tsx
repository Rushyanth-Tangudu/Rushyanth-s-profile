import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, BookOpen, Heart } from "lucide-react";

const leadership = [
  {
    title: "Core Team Member - Anokha 2024",
    organization: "Amrita Vishwa Vidyapeetham",
    duration: "2024",
    icon: Users,
    description: "Served as a core team member in organizing the national-level tech fest (Anokha) under the CSE department.",
    achievements: [
      "Organized national-level technical festival with 1000+ participants",
      "Coordinated events and managed logistics for multiple competitions",
      "Worked closely with CSE department for seamless event execution"
    ]
  },
  {
    title: "NSS Unit-3 Volunteer",
    organization: "National Service Scheme",
    duration: "2023",
    icon: Award,
    description: "Volunteered in multiple NSS activities, contributing to community service and social welfare initiatives.",
    achievements: [
      "Participated in community service programs",
      "Contributed to social welfare and development activities",
      "Engaged in various volunteering opportunities for societal benefit"
    ]
  }
];

const extracurriculars = [
  {
    activity: "Avishkar 2024 Participant",
    organization: "Technical Competition",
    description: "Participated with the Smart Blind Stick project to assist visually impaired individuals through IoT and sensors",
    impact: "Showcased innovative IoT solution for accessibility",
    icon: BookOpen
  },
  {
    activity: "Business Analysis Certification",
    organization: "Coursera",
    description: "Completed Business Analysis and Process Management course to enhance analytical and project management skills",
    impact: "Enhanced analytical thinking and process optimization skills",
    icon: Heart
  }
];

const skills = [
  "Team Leadership",
  "Project Management", 
  "Technical Communication",
  "Event Organization",
  "Community Service",
  "Problem Solving",
  "IoT Development",
  "Image Processing"
];

const LeadershipSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary-gradient">
      <div className="container mx-auto max-w-6xl">
        {/* Leadership Experience */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership & Extracurriculars</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My involvement in leadership roles and community activities that developed my soft skills
            </p>
          </div>
          
          <div className="space-y-8 mb-16">
            {leadership.map((role, index) => {
              const IconComponent = role.icon;
              return (
                <Card key={index} className="shadow-soft hover:shadow-elegant transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{role.title}</CardTitle>
                        <CardDescription className="text-lg">
                          {role.organization} • {role.duration}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      {role.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {role.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {/* Community Involvement */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {extracurriculars.map((activity, index) => {
              const IconComponent = activity.icon;
              return (
                <Card key={index} className="shadow-soft hover:shadow-elegant transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-1">{activity.activity}</CardTitle>
                        <CardDescription>{activity.organization}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-3">
                    <p className="text-muted-foreground text-sm">
                      {activity.description}
                    </p>
                    <div className="pt-2">
                      <Badge variant="secondary">{activity.impact}</Badge>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
        
        {/* Soft Skills */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Soft Skills Developed</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <Badge key={index} variant="outline" className="text-sm py-2 px-4">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;