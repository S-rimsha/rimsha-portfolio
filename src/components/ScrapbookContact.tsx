import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const ScrapbookContact = () => {
  return (
    <section className="relative px-4 py-20 max-w-6xl mx-auto" id="contact">
      <div className="flex justify-center">
        <div className="paper-texture p-10 md:p-14 scrapbook-shadow rotate-[0.5deg] relative max-w-lg w-full text-center">
          {/* Tapes */}
          <div className="absolute -top-2 left-8 w-20 h-5 tape rotate-[-3deg]" />
          <div className="absolute -top-2 right-8 w-20 h-5 tape rotate-[4deg]" />

          <h2 className="font-handwritten text-4xl text-paper-foreground mb-2">let's connect!</h2>
          <p className="font-body text-sm text-paper-foreground/60 mb-8">
            Got a project idea or just want to say hi? Reach out!
          </p>

          <div className="space-y-5 text-left">
            <a
              href="mailto:rimshashaikh06@gmail.com"
              className="flex items-center gap-3 group p-3 hover:bg-paper-foreground/5 rounded transition-colors"
            >
              <div className="bg-card w-10 h-10 rounded-full flex items-center justify-center shadow">
                <Mail size={18} className="text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-typewriter text-sm text-paper-foreground">rimshashaikh06@gmail.com</p>
                <p className="font-handwritten text-xs text-paper-foreground/50">email me</p>
              </div>
              <ArrowUpRight size={16} className="text-paper-foreground/30 group-hover:text-primary transition-colors" />
            </a>

            <a
              href="tel:+917710074028"
              className="flex items-center gap-3 group p-3 hover:bg-paper-foreground/5 rounded transition-colors"
            >
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

          {/* Footer note */}
          <div className="mt-8 pt-4 border-t border-dashed border-paper-foreground/15">
            <p className="font-handwritten text-sm text-paper-foreground/40">
              © 2025 Rimsha Shaikh • crafted with 💜
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrapbookContact;
