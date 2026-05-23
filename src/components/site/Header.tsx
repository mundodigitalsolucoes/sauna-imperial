import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-sauna-imperial.png";
import { whatsappUrl } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/sobre", label: "Sobre" },
  { to: "/estrutura", label: "Estrutura" },
  { to: "/localizacao", label: "Localização" },
  { to: "/blog", label: "Blog" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/85 border-b border-border/60">
      <div className="container-x flex items-center justify-between min-h-24 md:min-h-28 py-3">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Sauna Imperial"
            className="h-20 md:h-24 w-auto object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm tracking-wide text-muted-foreground hover:text-gold transition-colors"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}

          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium bg-gradient-gold text-primary-foreground rounded-full hover:opacity-90 hover:-translate-y-0.5 transition shadow-gold"
          >
            WhatsApp
          </a>
        </nav>

        <button
          aria-label="Menu"
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <div className="container-x py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-foreground"
              >
                {n.label}
              </Link>
            ))}

            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener"
              className="mt-2 inline-flex justify-center px-5 py-3 text-sm font-medium bg-gradient-gold text-primary-foreground rounded-full shadow-gold"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}