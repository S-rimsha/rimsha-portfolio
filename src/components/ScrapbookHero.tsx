import profileImg from "@/assets/rimsha-profile.png";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const ScrapbookHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Scattered decorative elements */}
      <div className="absolute top-10 left-10 w-8 h-8 rounded-full bg-primary/20 animate-float" />
      <div className="absolute top-32 right-20 w-5 h-5 rounded-full border-2 border-accent/30" />
      <div className="absolute bottom-20 left-1/4 coffee-ring w-24 h-24 opacity-20" />
      <div className="absolute top-1/4 right-10 font-handwritten text-muted-foreground/30 text-2xl rotate-12">✦</div>

      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left - Name card on paper */}
        <div className="relative">
          {/* Main paper card */}
          <div className="paper-texture paper-torn p-8 md:p-10 scrapbook-shadow relative rotate-[-1deg]">
            {/* Tape on top */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 tape rotate-[2deg] z-10" />
            
            <div className="space-y-4">
              <p className="font-handwritten text-xl text-primary/80">hello, I'm</p>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-paper-foreground leading-tight">
                Rimsha <span className="highlight-marker">Shaikh</span>
              </h1>
              <div className="inline-block bg-card px-4 py-2 rounded-sm">
                <p className="font-typewriter text-sm text-foreground tracking-wider">
                  {"< Full Stack Developer />"}
                </p>
              </div>
              <p className="font-body text-sm text-paper-foreground/70 leading-relaxed mt-4 max-w-md">
                Passionate developer pursuing B.E. in Computer Engineering. Building impactful web applications 
                with modern technologies. Hackathon winner & cloud enthusiast.
              </p>
            </div>

            {/* Contact sticky note */}
            <div className="mt-6 bg-[hsl(50,80%,85%)] p-4 rotate-[1deg] shadow-md inline-block">
              <p className="font-handwritten text-lg text-paper-foreground/80 mb-2 font-bold">reach me →</p>
              <div className="space-y-1.5 text-sm text-paper-foreground/70">
                <a href="mailto:rimshashaikh06@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail size={14} /> rimshashaikh06@gmail.com
                </a>
                <a href="tel:+917710074028" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone size={14} /> +91 7710074028
                </a>
                <p className="flex items-center gap-2">
                  <MapPin size={14} /> Mahim, Mumbai
                </p>
              </div>
            </div>
          </div>

          {/* Paperclip decoration */}
          <div className="absolute -top-2 right-8 text-3xl text-muted-foreground/40 rotate-[15deg]">📎</div>
        </div>

        {/* Right - Photo */}
        <div className="relative flex justify-center">
          <div className="relative rotate-[2deg]">
            {/* Photo border like polaroid */}
            <div className="bg-foreground/95 p-3 pb-14 scrapbook-shadow">
              <img
                src={profileImg}
                alt="Rimsha Shaikh"
                className="w-64 h-72 md:w-72 md:h-80 object-cover object-top"
              />
            </div>
            {/* Tape on polaroid */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-5 tape rotate-[-3deg]" />
            {/* Handwritten label */}
            <p className="absolute bottom-3 left-1/2 -translate-x-1/2 font-handwritten text-lg text-background/80 whitespace-nowrap">
              Rimsha ✨
            </p>
          </div>
          
          {/* Floating sticker */}
          <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground rounded-full w-14 h-14 flex items-center justify-center font-handwritten text-xs font-bold rotate-[-10deg] shadow-lg">
            dev 💻
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrapbookHero;
