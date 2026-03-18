import { Code, Cloud, Trophy, Users } from "lucide-react";

const ScrapbookAbout = () => {
  return (
    <section className="relative px-4 py-20 max-w-6xl mx-auto" id="about">
      {/* Scattered deco */}
      <div className="absolute top-8 right-12 text-3xl opacity-40">📎</div>
      <div className="absolute bottom-10 left-10 coffee-ring w-20 h-20 opacity-20" />

      {/* Section title - torn paper style */}
      <div className="flex justify-center mb-14">
        <div className="paper-texture px-8 py-3 scrapbook-shadow rotate-[-2deg] relative">
          <div className="absolute -top-2 right-4 w-16 h-4 tape rotate-[5deg]" />
          <h2 className="font-display text-3xl font-bold text-paper-foreground">
            <span className="highlight-blue">about me</span>
          </h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* About text - notebook style */}
        <div className="paper-texture notebook-lines p-8 scrapbook-shadow rotate-[0.5deg] relative">
          <div className="absolute -top-2 left-8 w-20 h-5 tape rotate-[-2deg]" />
          <div className="absolute left-8 top-0 bottom-0 w-px bg-destructive/30" />
          <div className="pl-6 space-y-4 font-body text-sm text-paper-foreground/80 leading-relaxed">
            <p>
              I'm a <span className="font-bold text-paper-foreground">Full Stack Developer</span> from Mumbai, currently pursuing 
              my B.E. in Computer Engineering. I love turning ideas into real, working web applications.
            </p>
            <p>
              My journey includes winning hackathons, completing internships in 
              <span className="highlight-marker">Web Development</span> and{" "}
              <span className="highlight-marker">Cloud & DevOps</span>, and building products 
              that solve real-world problems.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, leading teams, 
              and volunteering as a coordinator at college events.
            </p>
          </div>
        </div>

        {/* Skills cards - scattered sticky notes */}
        <div className="relative min-h-[350px]">
          <div className="absolute top-0 left-0 bg-[hsl(50,80%,85%)] p-4 shadow-md rotate-[-3deg] w-44">
            <p className="font-handwritten text-lg font-bold text-paper-foreground/80 flex items-center gap-2">
              <Code size={16} /> languages
            </p>
            <p className="font-typewriter text-xs text-paper-foreground/60 mt-2">
              Java • JavaScript • Python • C++ • SQL • TypeScript
            </p>
          </div>

          <div className="absolute top-4 right-0 bg-[hsl(200,60%,90%)] p-4 shadow-md rotate-[2deg] w-44">
            <p className="font-handwritten text-lg font-bold text-paper-foreground/80 flex items-center gap-2">
              <Cloud size={16} /> tech stack
            </p>
            <p className="font-typewriter text-xs text-paper-foreground/60 mt-2">
              React • Node.js • Express • MongoDB • AWS • Docker
            </p>
          </div>

          <div className="absolute top-40 left-4 bg-[hsl(340,60%,90%)] p-4 shadow-md rotate-[1deg] w-44">
            <p className="font-handwritten text-lg font-bold text-paper-foreground/80 flex items-center gap-2">
              <Trophy size={16} /> achievements
            </p>
            <p className="font-typewriter text-xs text-paper-foreground/60 mt-2">
              Hackathon Winner 2023 • Multiple Internships
            </p>
          </div>

          <div className="absolute top-44 right-4 bg-[hsl(120,40%,88%)] p-4 shadow-md rotate-[-2deg] w-44">
            <p className="font-handwritten text-lg font-bold text-paper-foreground/80 flex items-center gap-2">
              <Users size={16} /> soft skills
            </p>
            <p className="font-typewriter text-xs text-paper-foreground/60 mt-2">
              Leadership • Team Work • Communication • Problem Solving
            </p>
          </div>

          {/* Popsicle stick decoration */}
          <div className="absolute top-32 left-1/2 -translate-x-1/2 w-32 h-4 popsicle-stick rotate-[8deg] opacity-60" />
          <div className="absolute top-28 left-1/2 text-2xl text-muted-foreground/30">📎</div>
        </div>
      </div>
    </section>
  );
};

export default ScrapbookAbout;
