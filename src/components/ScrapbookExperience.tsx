const experiences = [
  { role: "Web Development Intern", company: "Linda Tours", period: "2024", type: "internship" },
  { role: "Cloud & DevOps Intern", company: "Industry", period: "2025", type: "internship" },
  { role: "Hackathon Winner", company: "College Event", period: "2023", type: "achievement", highlight: true },
];

const education = [
  { degree: "B.E. Computer Engineering", school: "Currently Pursuing", period: "2023 - Present" },
];

const ScrapbookExperience = () => {
  return (
    <section className="relative px-4 py-20 max-w-6xl mx-auto" id="experience">
      {/* Scattered deco */}
      <div className="absolute top-12 right-8 text-2xl opacity-30">📎</div>
      <div className="absolute bottom-16 left-16 coffee-ring w-24 h-24 opacity-20" />

      {/* Section title - matching reference "the experience shop" */}
      <div className="flex justify-start mb-16">
        <div className="relative">
          <div className="paper-crumpled px-8 py-4 scrapbook-shadow rotate-[1deg] relative">
            <div className="absolute -top-2 left-6 w-16 h-4 tape-dark rotate-[-3deg]" />
            <p className="font-handwritten text-lg text-paper-foreground/50 mb-1">the</p>
            <h2 className="font-display text-4xl font-bold text-paper-foreground leading-none">
              <span className="highlight-marker">experience</span>
            </h2>
            <p className="font-handwritten text-xl text-paper-foreground/60 mt-1">shop</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Experience receipt */}
        <div className="paper-crumpled p-8 scrapbook-shadow rotate-[-0.5deg] flex-1 relative" style={{
          clipPath: "polygon(0% 0%, 100% 0%, 100% calc(100% - 8px), 96% 100%, 92% calc(100% - 4px), 88% 100%, 84% calc(100% - 4px), 80% 100%, 76% calc(100% - 4px), 72% 100%, 68% calc(100% - 4px), 64% 100%, 60% calc(100% - 4px), 56% 100%, 52% calc(100% - 4px), 48% 100%, 44% calc(100% - 4px), 40% 100%, 36% calc(100% - 4px), 32% 100%, 28% calc(100% - 4px), 24% 100%, 20% calc(100% - 4px), 16% 100%, 12% calc(100% - 4px), 8% 100%, 4% calc(100% - 4px), 0% 100%)"
        }}>
          <div className="absolute -top-2 right-8 w-20 h-5 tape rotate-[3deg]" />
          <div className="border-b border-dashed border-paper-foreground/20 pb-3 mb-4">
            <p className="font-typewriter text-xs text-paper-foreground/50 text-center">— EXPERIENCE —</p>
            <p className="font-typewriter text-[10px] text-paper-foreground/35 text-center mt-1 flex justify-between px-4">
              <span>items</span>
              <span>.............. </span>
              <span>date</span>
            </p>
          </div>
          
          {experiences.map((exp, i) => (
            <div key={i} className="flex justify-between items-start py-3 border-b border-dotted border-paper-foreground/15 last:border-0 relative">
              <div>
                <p className="font-typewriter text-sm text-paper-foreground font-medium">{exp.role}</p>
                <p className="font-typewriter text-[10px] text-paper-foreground/40 italic">{exp.type}</p>
                <p className="font-handwritten text-sm text-primary/70">{exp.company}</p>
              </div>
              <p className="font-typewriter text-sm text-paper-foreground/60 whitespace-nowrap">{exp.period}</p>
              {exp.highlight && (
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 border-destructive/40 pointer-events-none" />
              )}
            </div>
          ))}
        </div>

        {/* Education card */}
        <div className="relative">
          <div className="paper-crumpled p-6 scrapbook-shadow rotate-[1.5deg] w-full lg:w-72">
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
          <div className="absolute -bottom-3 -right-3 w-16 h-5 washi-tape rotate-[10deg]" />
        </div>
      </div>
    </section>
  );
};

export default ScrapbookExperience;
