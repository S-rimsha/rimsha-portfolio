const experiences = [
  { role: "Web Development Intern", company: "Linda Tours", period: "2024", type: "internship" },
  { role: "Cloud & DevOps Intern", company: "Industry", period: "2025", type: "internship" },
  { role: "Hackathon Winner", company: "College Event", period: "2023", type: "achievement" },
];

const education = [
  { degree: "B.E. Computer Engineering", school: "Currently Pursuing", period: "2023 - Present" },
];

const ScrapbookExperience = () => {
  return (
    <section className="relative px-4 py-20 max-w-6xl mx-auto" id="experience">
      {/* Section title */}
      <div className="flex justify-start mb-16">
        <div className="relative">
          <div className="paper-texture px-8 py-3 scrapbook-shadow rotate-[1deg] relative">
            <div className="absolute -top-2 left-6 w-16 h-4 tape-dark rotate-[-3deg]" />
            <h2 className="font-display text-3xl font-bold text-paper-foreground">
              the <span className="highlight-marker">experience</span> shop
            </h2>
          </div>
        </div>
      </div>

      {/* Receipt-style experience list */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Experience receipt */}
        <div className="paper-texture p-8 scrapbook-shadow rotate-[-0.5deg] flex-1 relative" style={{
          clipPath: "polygon(0% 0%, 100% 0%, 100% calc(100% - 8px), 96% 100%, 92% calc(100% - 4px), 88% 100%, 84% calc(100% - 4px), 80% 100%, 76% calc(100% - 4px), 72% 100%, 68% calc(100% - 4px), 64% 100%, 60% calc(100% - 4px), 56% 100%, 52% calc(100% - 4px), 48% 100%, 44% calc(100% - 4px), 40% 100%, 36% calc(100% - 4px), 32% 100%, 28% calc(100% - 4px), 24% 100%, 20% calc(100% - 4px), 16% 100%, 12% calc(100% - 4px), 8% 100%, 4% calc(100% - 4px), 0% 100%)"
        }}>
          <div className="absolute -top-2 right-8 w-20 h-5 tape rotate-[3deg]" />
          <div className="border-b border-dashed border-paper-foreground/20 pb-3 mb-4">
            <p className="font-typewriter text-xs text-paper-foreground/50 text-center">— EXPERIENCE —</p>
            <p className="font-typewriter text-xs text-paper-foreground/40 text-center mt-1">items .............. date</p>
          </div>
          
          {experiences.map((exp, i) => (
            <div key={i} className="flex justify-between items-start py-3 border-b border-dotted border-paper-foreground/15 last:border-0">
              <div>
                <p className="font-typewriter text-sm text-paper-foreground font-medium">{exp.role}</p>
                <p className="font-typewriter text-xs text-paper-foreground/50">{exp.type}</p>
                <p className="font-handwritten text-sm text-primary/70">{exp.company}</p>
              </div>
              <p className="font-typewriter text-sm text-paper-foreground/60 whitespace-nowrap">{exp.period}</p>
            </div>
          ))}
        </div>

        {/* Education card */}
        <div className="relative">
          <div className="paper-texture p-6 scrapbook-shadow rotate-[1.5deg] w-full lg:w-72">
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-5 tape rotate-[-2deg]" />
            <h3 className="font-handwritten text-2xl text-paper-foreground/80 mb-4">education</h3>
            {education.map((edu, i) => (
              <div key={i} className="mb-3">
                <p className="font-typewriter text-sm text-paper-foreground">{edu.degree}</p>
                <div className="flex justify-between mt-1">
                  <p className="font-typewriter text-xs text-paper-foreground/50">{edu.school}</p>
                  <p className="font-typewriter text-xs text-paper-foreground/50">{edu.period}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Washi tape decoration */}
          <div className="absolute -bottom-3 -right-3 w-16 h-5 washi-tape rotate-[10deg]" />
        </div>
      </div>
    </section>
  );
};

export default ScrapbookExperience;
