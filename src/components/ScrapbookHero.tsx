import profileImg from "@/assets/rimsha-profile.png";
import qrCode from "@/assets/qr-linkedin.png";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";

const ScrapbookHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-24 overflow-hidden">
      {/* Scattered decorative elements */}
      <div className="absolute top-16 left-8 text-4xl animate-float">😊</div>
      <div className="absolute top-40 right-16 w-6 h-6 rounded-full bg-primary/20 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-32 left-[15%] coffee-ring w-28 h-28 opacity-25" />
      
      {/* Red thread decoration */}
      <div className="red-thread w-40 h-40 absolute top-20 left-4 rotate-[30deg] hidden lg:block" />
      <div className="red-thread w-20 h-20 absolute bottom-40 right-20 rotate-[-20deg] hidden lg:block" />

      {/* Paperclip decorations */}
      <div className="absolute top-48 left-[45%] text-3xl text-muted-foreground/30 rotate-[25deg] hidden md:block">📎</div>
      <div className="absolute bottom-20 right-[30%] text-2xl text-muted-foreground/25 rotate-[-15deg]">📎</div>

      <div className="max-w-6xl w-full grid lg:grid-cols-[1fr_auto] gap-8 items-start">
        {/* Left column */}
        <div className="space-y-6">
          {/* Main name card */}
          <div className="paper-texture p-6 md:p-8 scrapbook-shadow rotate-[-1deg] relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 tape rotate-[2deg] z-10" />
            
            {/* Profile row */}
            <div className="flex items-start gap-5">
              <img
                src={profileImg}
                alt="Rimsha Shaikh"
                className="w-20 h-24 md:w-24 md:h-28 object-cover object-top rounded-sm shadow-md"
              />
              <div className="space-y-1.5">
                <p className="font-display text-xl md:text-2xl font-bold text-paper-foreground">
                  Rimsha S.
                </p>
                <p className="font-handwritten text-lg text-primary/80">Full Stack Developer</p>
                <div className="flex flex-wrap gap-1.5 text-xs font-typewriter text-paper-foreground/60">
                  <span>Web Developer</span>
                  <span>•</span>
                  <span>Cloud Enthusiast</span>
                  <span>•</span>
                  <span>Hackathon Winner</span>
                </div>
              </div>
            </div>

            {/* Contact details */}
            <div className="mt-4 pt-3 border-t border-dashed border-paper-foreground/15 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2 text-paper-foreground/60">
                <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                  <Phone size={10} className="text-accent" />
                </div>
                <span className="font-typewriter">+91 7710074028</span>
              </div>
              <div className="flex items-center gap-2 text-paper-foreground/60">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <Mail size={10} className="text-primary" />
                </div>
                <span className="font-typewriter text-[10px] sm:text-xs">rimshashaikh06@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-paper-foreground/60">
                <div className="w-5 h-5 rounded-full bg-destructive/20 flex items-center justify-center">
                  <MapPin size={10} className="text-destructive" />
                </div>
                <span className="font-typewriter">Mahim, Mumbai</span>
              </div>
            </div>

            {/* Social links row */}
            <div className="mt-3 flex gap-3">
              <a href="https://github.com/S-rimsha" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-paper-foreground/10 flex items-center justify-center hover:bg-paper-foreground/20 transition-colors">
                <Github size={14} className="text-paper-foreground/70" />
              </a>
              <a href="https://www.linkedin.com/in/rimsha-shaikh237/" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center hover:bg-primary/25 transition-colors">
                <Linkedin size={14} className="text-primary" />
              </a>
              <a href="https://www.instagram.com/rimsha.77/" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-destructive/15 flex items-center justify-center hover:bg-destructive/25 transition-colors">
                <Instagram size={14} className="text-destructive" />
              </a>
              <a href="https://www.threads.com/@rimsha.77" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-paper-foreground/10 flex items-center justify-center hover:bg-paper-foreground/20 transition-colors font-bold text-xs text-paper-foreground/70">
                @
              </a>
            </div>
          </div>

          {/* About me - smartwatch style card */}
          <div className="bg-card/90 backdrop-blur rounded-2xl p-5 scrapbook-shadow rotate-[0.5deg] relative max-w-sm border border-border">
            <div className="flex items-center justify-between mb-3">
              <p className="font-handwritten text-xl text-foreground">about me</p>
              <span className="text-xs text-muted-foreground font-typewriter">🔋 12:15</span>
            </div>
            <p className="font-body text-xs text-muted-foreground leading-relaxed">
              I am a <span className="font-semibold text-foreground">Full Stack Developer</span> pursuing B.E. in Computer Engineering. 
              I've interned in <span className="highlight-marker">Web Development</span> and{" "}
              <span className="highlight-marker">Cloud & DevOps</span>, won hackathons, and build products 
              that solve real problems. Passionate about <span className="font-semibold text-foreground">React, Node.js, MongoDB</span>, and modern cloud infrastructure.
            </p>
          </div>
        </div>

        {/* Right column - QR code & portfolio label */}
        <div className="space-y-5 flex flex-col items-center lg:items-end">
          {/* My Portfolio label with tape */}
          <div className="paper-texture px-6 py-3 scrapbook-shadow rotate-[2deg] relative">
            <div className="absolute -top-2 right-4 w-12 h-4 tape rotate-[-3deg]" />
            <p className="font-handwritten text-2xl text-paper-foreground">my portfolio</p>
          </div>

          {/* QR Code */}
          <div className="paper-texture p-4 scrapbook-shadow rotate-[-1.5deg] relative">
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-4 tape rotate-[2deg]" />
            <img src={qrCode} alt="Scan to view LinkedIn" className="w-32 h-32 md:w-40 md:h-40" />
            <p className="font-handwritten text-xs text-paper-foreground/50 text-center mt-2">
              scan to view LinkedIn
            </p>
          </div>

          {/* Polaroid photo */}
          <div className="relative rotate-[3deg]">
            <div className="bg-foreground/90 p-2 pb-10 scrapbook-shadow">
              <img
                src={profileImg}
                alt="Rimsha Shaikh"
                className="w-36 h-44 md:w-44 md:h-52 object-cover object-top"
              />
            </div>
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-4 tape rotate-[-2deg]" />
            <p className="absolute bottom-2 left-1/2 -translate-x-1/2 font-handwritten text-sm text-background/70 whitespace-nowrap">
              Rimsha ✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrapbookHero;
