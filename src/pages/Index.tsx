import ScrapbookNav from "@/components/ScrapbookNav";
import ScrapbookHero from "@/components/ScrapbookHero";
import ScrapbookAbout from "@/components/ScrapbookAbout";
import ScrapbookExperience from "@/components/ScrapbookExperience";
import ScrapbookProjects from "@/components/ScrapbookProjects";
import ScrapbookSkills from "@/components/ScrapbookSkills";
import ScrapbookContact from "@/components/ScrapbookContact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ScrapbookNav />
      <ScrapbookHero />
      <ScrapbookAbout />
      <ScrapbookExperience />
      <ScrapbookProjects />
      <ScrapbookSkills />
      <ScrapbookContact />
    </div>
  );
};

export default Index;
