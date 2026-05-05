import { Github, Linkedin, Mail } from "lucide-react";
import { SiDiscord } from "react-icons/si";
import logo from "/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-border/50 bg-background relative z-10">
      <div className="container px-4 mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 object-contain drop-shadow-[0_0_6px_rgba(212,160,23,0.45)]"
          />
          <div className="flex flex-col">
            <span className="font-mono font-bold text-sm text-foreground">Jeremy D. McKinney</span>
            <p className="text-xs text-muted-foreground font-mono">&copy; {currentYear}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {[
            { href: "https://github.com", icon: Github, label: "GitHub" },
            { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
            { href: "https://discord.com/users/1368761687930568724", icon: SiDiscord, label: "Discord" },
            { href: "mailto:mdsahab3124@gmail.com", icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel={label !== "Email" ? "noreferrer" : undefined}
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center rounded-xl border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/8 transition-all"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <p className="text-xs text-muted-foreground font-mono text-center md:text-right">
          Built with <span className="text-primary">React</span> + <span className="text-primary">Framer Motion</span>
        </p>
      </div>
    </footer>
  );
}
