import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { SITE } from "@/lib/site";
import { MapPin, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/localizacao")({
  head: () => ({
    meta: [
      { title: "Sauna em São José do Rio Preto · Localização — Sauna Imperial" },
      { name: "description", content: "Sauna em São José do Rio Preto com fácil acesso. Ideal para quem mora na cidade ou está de passagem. Veja como chegar." },
      { property: "og:title", content: "Sauna em São José do Rio Preto — Localização" },
      { property: "og:description", content: "Fácil acesso, discrição e estrutura premium em Rio Preto." },
    ],
  }),
  component: Localizacao,
});

function Localizacao() {
  return (
    <Section eyebrow="Localização" title="Sauna em São José do Rio Preto" subtitle="Acesso fácil e discreto, ideal para quem mora na cidade ou está de passagem em viagem.">
      <div className="grid md:grid-cols-5 gap-6">
        <div className="md:col-span-2 space-y-6">
          <p className="flex items-start gap-3 text-foreground"><MapPin className="h-5 w-5 text-gold mt-1" />{SITE.address}</p>
          <ul className="space-y-3 text-muted-foreground">
            <li>• Próximo a vias de acesso principais</li>
            <li>• Estacionamento na região</li>
            <li>• Entrada reservada e discreta</li>
          </ul>
          <a href={SITE.mapsLink} target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-gold text-primary-foreground rounded-sm shadow-gold">
            Como chegar <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="md:col-span-3 aspect-video overflow-hidden rounded-sm border border-border">
          <iframe title="Mapa Sauna Imperial" src={SITE.mapsEmbed} className="w-full h-full border-0" loading="lazy" />
        </div>
      </div>
    </Section>
  );
}