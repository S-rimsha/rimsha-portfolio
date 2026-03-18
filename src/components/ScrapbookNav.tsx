import { useState } from "react";
import { Menu, X, Github, Linkedin } from "lucide-react";

const links = [
  { label: "about", href: "#about" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "skills", href: "#skills" },
  { label: "contact", href: "#contact" },
];

const ScrapbookNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
        <a href="#" className="font-display font-bold text-lg text-foreground">
          {"{ RS }"}
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-typewriter text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
            >
              {l.label}
            </a>
          ))}
          <div className="flex gap-2 ml-2 border-l border-border/50 pl-4">
            <a href="https://github.com/S-rimsha" target="_blank" rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors">
              <Github size={16} />
            </a>
            <a href="https://www.linkedin.com/in/rimsha-shaikh237/" target="_blank" rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin size={16} />
            </a>
          </div>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-4 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 font-typewriter text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="flex gap-4 pt-3 border-t border-border/50 mt-2">
            <a href="https://github.com/S-rimsha" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/rimsha-shaikh237/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default ScrapbookNav;
