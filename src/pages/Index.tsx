import HeroSection from "@/components/Portfolio/HeroSection";
import ProjectsSection from "@/components/Portfolio/ProjectsSection";
import SkillsSection from "@/components/Portfolio/SkillsSection";
import LeadershipSection from "@/components/Portfolio/LeadershipSection";
import ContactSection from "@/components/Portfolio/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <LeadershipSection />
      <ContactSection />
    </div>
  );
};

export default Index;
