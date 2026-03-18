import { Mail, Phone, MapPin, ArrowUpRight, Github, Linkedin, Instagram } from "lucide-react";
import qrCode from "@/assets/qr-linkedin.png";

const ScrapbookContact = () => {
  return (
    <section className="relative px-4 py-20 max-w-6xl mx-auto" id="contact">
      {/* Deco */}
      <div className="absolute top-8 right-12 text-2xl opacity-25">📎</div>
      <div className="absolute bottom-20 left-8 coffee-ring w-20 h-20 opacity-15" />
      <div className="red-thread w-28 h-28 absolute top-4 left-20 rotate-[45deg] hidden lg:block" />

      <div className="flex flex-col lg:flex-row gap-8 justify-center items-start">
        {/* Contact card */}
        <div className="paper-texture p-8 md:p-10 scrapbook-shadow rotate-[0.5deg] relative max-w-lg w-full">
          <div className="absolute -top-2 left-8 w-20 h-5 tape rotate-[-3deg]" />
          <div className="absolute -top-2 right-8 w-20 h-5 tape rotate-[4deg]" />

          <h2 className="font-handwritten text-4xl text-paper-foreground mb-2 text-center">let's connect!</h2>
          <p className="font-body text-sm text-paper-foreground/60 mb-8 text-center">
            Got a project idea or just want to say hi? Reach out!
          </p>

          <div className="space-y-4">
            <a href="mailto:rimshashaikh06@gmail.com"
              className="flex items-center gap-3 group p-3 hover:bg-paper-foreground/5 rounded transition-colors">
              <div className="bg-card w-10 h-10 rounded-full flex items-center justify-center shadow">
                <Mail size={18} className="text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-typewriter text-sm text-paper-foreground">rimshashaikh06@gmail.com</p>
                <p className="font-handwritten text-xs text-paper-foreground/50">email me</p>
              </div>
              <ArrowUpRight size={16} className="text-paper-foreground/30 group-hover:text-primary transition-colors" />
            </a>

            <a href="tel:+917710074028"
              className="flex items-center gap-3 group p-3 hover:bg-paper-foreground/5 rounded transition-colors">
              <div className="bg-card w-10 h-10 rounded-full flex items-center justify-center shadow">
                <Phone size={18} className="text-accent" />
              </div>
              <div className="flex-1">
                <p className="font-typewriter text-sm text-paper-foreground">+91 7710074028</p>
                <p className="font-handwritten text-xs text-paper-foreground/50">call me</p>
              </div>
              <ArrowUpRight size={16} className="text-paper-foreground/30 group-hover:text-accent transition-colors" />
            </a>

            <div className="flex items-center gap-3 p-3">
              <div className="bg-card w-10 h-10 rounded-full flex items-center justify-center shadow">
                <MapPin size={18} className="text-muted-foreground" />
              </div>
              <div>
                <p className="font-typewriter text-sm text-paper-foreground">Mahim, Mumbai - 400017</p>
                <p className="font-handwritten text-xs text-paper-foreground/50">location</p>
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="mt-6 pt-4 border-t border-dashed border-paper-foreground/15 flex gap-4 justify-center">
            <a href="https://github.com/S-rimsha" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 bg-paper-foreground/10 rounded-full flex items-center justify-center hover:bg-paper-foreground/20 transition-colors">
              <Github size={18} className="text-paper-foreground/70" />
            </a>
            <a href="https://www.linkedin.com/in/rimsha-shaikh237/" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 bg-primary/15 rounded-full flex items-center justify-center hover:bg-primary/25 transition-colors">
              <Linkedin size={18} className="text-primary" />
            </a>
            <a href="https://www.instagram.com/rimsha.77/" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 bg-destructive/15 rounded-full flex items-center justify-center hover:bg-destructive/25 transition-colors">
              <Instagram size={18} className="text-destructive" />
            </a>
            <a href="https://www.threads.com/@rimsha.77" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 bg-paper-foreground/10 rounded-full flex items-center justify-center hover:bg-paper-foreground/20 transition-colors font-bold text-sm text-paper-foreground/70">
              @
            </a>
          </div>

          {/* Footer */}
          <div className="mt-6 pt-4 border-t border-dashed border-paper-foreground/15">
            <p className="font-handwritten text-sm text-paper-foreground/40 text-center">
              © 2025 Rimsha Shaikh • crafted with 💜
            </p>
          </div>
        </div>

        {/* QR Code side */}
        <div className="paper-texture p-5 scrapbook-shadow rotate-[-2deg] relative">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-4 tape rotate-[3deg]" />
          <img src={qrCode} alt="Scan QR for LinkedIn" className="w-32 h-32" />
          <p className="font-handwritten text-xs text-paper-foreground/50 text-center mt-2">
            scan to view<br />LinkedIn
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScrapbookContact;
