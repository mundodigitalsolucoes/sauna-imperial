import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { whatsappUrl } from "@/lib/site";
import hydro from "@/assets/hydro.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Sauna Imperial · Spa urbano em São José do Rio Preto" },
      { name: "description", content: "Conheça a proposta da Sauna Imperial: discrição, bem-estar e estrutura premium em São José do Rio Preto." },
      { property: "og:title", content: "Sobre a Sauna Imperial" },
      { property: "og:description", content: "Discrição, bem-estar e estrutura premium em São José do Rio Preto." },
      { property: "og:image", content: hydro },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <>
      <Section eyebrow="Sobre" title="Um espaço pensado para a pausa" subtitle="A Sauna Imperial nasceu para oferecer aos homens da região de São José do Rio Preto um ambiente reservado e silencioso, onde descansar é levado a sério.">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-5 text-foreground/90 leading-relaxed">
            <p>Cada detalhe — da iluminação indireta à acústica dos ambientes — foi cuidadosamente planejado para criar uma sensação consistente de calma e conforto.</p>
            <p>A discrição é parte do nosso padrão: atendimento institucional, postura cordial e privacidade respeitada do início ao fim da visita.</p>
            <p>Aqui você encontra estrutura completa de bem-estar masculino: sauna, hidromassagem, piscina, duchas e lounge para descomprimir.</p>
            <a href={whatsappUrl()} target="_blank" rel="noopener" className="inline-flex mt-4 px-6 py-3 bg-gradient-gold text-primary-foreground rounded-sm shadow-gold">Conversar no WhatsApp</a>
          </div>
          <div className="aspect-[4/5] overflow-hidden rounded-sm">
            <img src={hydro} alt="Hidromassagem" loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
      </Section>
    </>
  );
}