const abilities = [
  "Full Stack Development",
  "REST API Design",
  "Database Management",
  "Cloud Infrastructure",
  "UI/UX Design",
  "Version Control",
];

const softSkills = [
  "adaptability",
  "communication",
  "collaboration",
  "problem-solving",
];

const techSkills = [
  { name: "React", color: "bg-primary/20 border-primary/30" },
  { name: "Node.js", color: "bg-accent/20 border-accent/30" },
  { name: "MongoDB", color: "bg-accent/15 border-accent/25" },
  { name: "Java", color: "bg-destructive/15 border-destructive/25" },
  { name: "JavaScript", color: "bg-[hsl(50,80%,50%)]/20 border-[hsl(50,80%,50%)]/30" },
  { name: "TypeScript", color: "bg-primary/15 border-primary/25" },
  { name: "Python", color: "bg-accent/20 border-accent/30" },
  { name: "SQL", color: "bg-muted border-muted-foreground/20" },
  { name: "AWS", color: "bg-[hsl(30,80%,50%)]/20 border-[hsl(30,80%,50%)]/30" },
  { name: "Docker", color: "bg-primary/20 border-primary/30" },
  { name: "Git", color: "bg-destructive/15 border-destructive/25" },
  { name: "HTML/CSS", color: "bg-[hsl(15,80%,50%)]/20 border-[hsl(15,80%,50%)]/30" },
  { name: "Express", color: "bg-muted border-muted-foreground/20" },
  { name: "Tailwind", color: "bg-primary/15 border-primary/25" },
];

const ScrapbookSkills = () => {
  const rotations = ["-2deg", "1deg", "-1deg", "2deg", "0deg", "-1.5deg", "1.5deg", "-0.5deg"];

  return (
    <section className="relative px-4 py-20 max-w-6xl mx-auto" id="skills">
      {/* Deco */}
      <div className="absolute top-10 left-6 text-2xl opacity-30">📎</div>
      <div className="absolute bottom-16 right-12 coffee-ring w-16 h-16 opacity-20" />

      <div className="grid lg:grid-cols-[1fr_auto] gap-10">
        {/* Left - Abilities & Soft Skills */}
        <div className="space-y-8">
          {/* Abilities - crumpled paper */}
          <div className="paper-crumpled p-6 scrapbook-shadow rotate-[-0.5deg] relative">
            <div className="absolute -top-2 left-8 w-20 h-5 tape rotate-[-3deg]" />
            <h3 className="font-handwritten text-2xl text-paper-foreground/80 mb-4">
              <span className="highlight-green">abilities</span>
            </h3>
            <div className="space-y-1 pl-2">
              {abilities.map((a, i) => (
                <p key={i} className="font-handwritten text-base text-paper-foreground/70 italic">
                  {a}
                </p>
              ))}
            </div>
          </div>

          {/* Soft Skills - torn sticky note style */}
          <div className="paper-texture p-5 scrapbook-shadow rotate-[1deg] relative max-w-xs">
            <div className="absolute -top-2 right-6 w-16 h-4 tape rotate-[4deg]" />
            <h3 className="font-handwritten text-xl text-paper-foreground/80 mb-3">
              <span className="highlight-marker">skills</span>
            </h3>
            {softSkills.map((s, i) => (
              <p key={i} className="font-handwritten text-lg text-paper-foreground/70 ml-4">
                {s}
              </p>
            ))}
            {/* Handwritten "teamwork" doodle */}
            <p className="font-handwritten text-sm text-paper-foreground/40 mt-3 ml-6 rotate-[-3deg]">
              teamwork ✦
            </p>
          </div>
        </div>

        {/* Right - Software Skills badges */}
        <div className="relative">
          {/* Popsicle stick divider */}
          <div className="w-40 h-5 popsicle-stick rotate-[5deg] mx-auto mb-6 opacity-50" />

          <div className="paper-texture p-6 scrapbook-shadow rotate-[1deg] relative">
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-5 tape rotate-[-2deg]" />
            <h3 className="font-handwritten text-2xl text-paper-foreground/80 mb-5 text-center">
              <span className="highlight-blue">software skills</span>
            </h3>

            <div className="flex flex-wrap gap-3 justify-center max-w-sm">
              {techSkills.map((skill, i) => (
                <div
                  key={i}
                  className={`${skill.color} border px-4 py-2 rounded-sm shadow-sm transition-transform hover:scale-105`}
                  style={{ transform: `rotate(${rotations[i % rotations.length]})` }}
                >
                  <p className="font-typewriter text-xs text-foreground">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SD card deco */}
          <div className="mt-4 flex justify-center">
            <div className="bg-card border border-border rounded-sm px-3 py-2 rotate-[3deg] shadow-md">
              <p className="font-typewriter text-[10px] text-muted-foreground">💾 portfolio.dat</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quote */}
      <div className="flex justify-center mt-12">
        <div className="bg-[hsl(50,80%,85%)] px-6 py-3 shadow-md rotate-[1deg]">
          <p className="font-handwritten text-paper-foreground/70 text-lg">
            "always learning, always building" ✨
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScrapbookSkills;
