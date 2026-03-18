import { ExternalLink, Globe, Cpu, Wrench } from "lucide-react";

const projects = [
  {
    name: "Wanderlust Adventures",
    description: "A travel platform dedicated to exploring the cultural heritage, landscapes, and adventures across India.",
    url: "https://wanderlustadventures23.vercel.app/",
    icon: Globe,
    color: "hsl(30,70%,85%)",
    rotate: "-2deg",
  },
  {
    name: "MediSoul",
    description: "An AI-powered personal medical companion that provides instant health insights, symptom checking, and track records.",
    url: "https://medisoul23.vercel.app/",
    icon: Cpu,
    color: "hsl(200,60%,88%)",
    rotate: "1.5deg",
  },
  {
    name: "Appliance Care (SIEMENS)",
    description: "A professional washing machine repair and service platform with booking, warranty tracking, and multi-brand support.",
    url: "https://appliance-care.vercel.app/",
    icon: Wrench,
    color: "hsl(120,35%,88%)",
    rotate: "-1deg",
  },
];

const ScrapbookProjects = () => {
  return (
    <section className="relative px-4 py-20 max-w-6xl mx-auto" id="projects">
      {/* Section title */}
      <div className="flex justify-center mb-16">
        <div className="relative">
          <div className="bg-card px-8 py-3 scrapbook-shadow rotate-[1deg] border border-border">
            <h2 className="font-display text-3xl font-bold text-foreground">
              my <span className="text-primary">projects</span>
            </h2>
          </div>
          <div className="absolute -top-2 left-8 w-16 h-4 tape rotate-[-4deg]" />
          <div className="absolute -top-2 right-8 w-16 h-4 tape rotate-[3deg]" />
        </div>
      </div>

      {/* Project cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <a
            key={i}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block"
          >
            <div
              className="paper-texture p-6 scrapbook-shadow transition-all duration-200 hover:-translate-y-2 hover:shadow-2xl relative"
              style={{ transform: `rotate(${project.rotate})` }}
            >
              {/* Tape */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-5 tape rotate-[2deg]" />

              {/* Icon area */}
              <div
                className="w-full h-32 rounded-sm flex items-center justify-center mb-4"
                style={{ backgroundColor: project.color }}
              >
                <project.icon size={40} className="text-paper-foreground/40" />
              </div>

              {/* Project name */}
              <h3 className="font-display text-lg font-bold text-paper-foreground mb-2">{project.name}</h3>
              <p className="font-body text-xs text-paper-foreground/60 leading-relaxed mb-4">{project.description}</p>

              {/* Live badge */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="font-typewriter text-xs text-accent">LIVE</span>
                </div>
                <span className="font-handwritten text-sm text-primary group-hover:underline flex items-center gap-1">
                  view project <ExternalLink size={12} />
                </span>
              </div>
            </div>

            {/* Coffee stain on one card */}
            {i === 1 && (
              <div className="absolute -bottom-4 -right-4 coffee-ring w-16 h-16 opacity-30" />
            )}
          </a>
        ))}
      </div>
    </section>
  );
};

export default ScrapbookProjects;
