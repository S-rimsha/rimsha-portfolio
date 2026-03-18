const techSkills = [
  { name: "React", level: "Advanced" },
  { name: "Node.js", level: "Advanced" },
  { name: "Java", level: "Advanced" },
  { name: "JavaScript", level: "Advanced" },
  { name: "TypeScript", level: "Intermediate" },
  { name: "Python", level: "Basic" },
  { name: "MongoDB", level: "Intermediate" },
  { name: "SQL", level: "Intermediate" },
  { name: "AWS", level: "Basic" },
  { name: "Docker", level: "Basic" },
  { name: "Git", level: "Advanced" },
  { name: "HTML/CSS", level: "Advanced" },
];

const ScrapbookSkills = () => {
  return (
    <section className="relative px-4 py-20 max-w-6xl mx-auto" id="skills">
      {/* Section title */}
      <div className="flex justify-end mb-16">
        <div className="relative">
          <div className="paper-texture px-8 py-3 scrapbook-shadow rotate-[-1.5deg]">
            <div className="absolute -top-2 left-6 w-20 h-5 tape rotate-[4deg]" />
            <h2 className="font-handwritten text-4xl text-paper-foreground">
              <span className="highlight-blue">software skills</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Skills grid - tag/sticker style */}
      <div className="flex flex-wrap gap-4 justify-center max-w-3xl mx-auto">
        {techSkills.map((skill, i) => {
          const rotations = ["-2deg", "1deg", "-1deg", "2deg", "0deg", "-1.5deg"];
          const colors = [
            "bg-card border-primary/30",
            "bg-secondary border-accent/30",
            "bg-card border-muted-foreground/20",
          ];
          return (
            <div
              key={i}
              className={`${colors[i % 3]} border px-5 py-3 scrapbook-shadow transition-transform hover:scale-105`}
              style={{ transform: `rotate(${rotations[i % rotations.length]})` }}
            >
              <p className="font-typewriter text-sm text-foreground">{skill.name}</p>
              <p className="font-handwritten text-xs text-muted-foreground">{skill.level}</p>
            </div>
          );
        })}
      </div>

      {/* Decorative elements */}
      <div className="flex justify-center mt-10">
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
