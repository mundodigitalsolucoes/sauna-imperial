import { SITE, whatsappUrl } from "@/lib/site";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-graphite/40">
      <div className="container-x py-14 grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="text-2xl text-gold mb-3">Sauna Imperial</h3>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            Spa urbano masculino. Ambiente reservado, estrutura completa e bem-estar em {SITE.city}.
          </p>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-gold/80 mb-4">Navegação</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/sobre" className="hover:text-gold">Sobre</Link></li>
            <li><Link to="/estrutura" className="hover:text-gold">Estrutura</Link></li>
            <li><Link to="/localizacao" className="hover:text-gold">Localização</Link></li>
            <li><Link to="/blog" className="hover:text-gold">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-gold/80 mb-4">Contato</h4>
          <p className="text-sm text-muted-foreground mb-2">{SITE.address}</p>
          <a href={whatsappUrl()} target="_blank" rel="noopener" className="text-sm text-gold hover:underline">
            Falar no WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-border/40">
        <div className="container-x py-6 text-xs text-muted-foreground/70 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} Sauna Imperial. Todos os direitos reservados.</span>
          <span>{SITE.city} — {SITE.state}</span>
        </div>
      </div>
    </footer>
  );
}