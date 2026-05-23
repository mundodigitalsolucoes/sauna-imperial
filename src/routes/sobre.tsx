import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { whatsappUrl } from "@/lib/site";

import hidroImg from "@/assets/real/hidro.jpeg";
import ambienteImg from "@/assets/real/ambiente.jpeg";
import piscinaImg from "@/assets/real/piscina.jpeg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      {
        title:
          "Sobre — Sauna Imperial · Ambiente premium em São José do Rio Preto",
      },
      {
        name: "description",
        content:
          "Conheça a Sauna Imperial: ambiente reservado, estrutura premium e experiência de relaxamento em São José do Rio Preto.",
      },
      {
        property: "og:title",
        content: "Sobre a Sauna Imperial",
      },
      {
        property: "og:description",
        content:
          "Estrutura premium, discrição e conforto em Rio Preto.",
      },
      {
        property: "og:image",
        content: hidroImg,
      },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <>
      <Section
        eyebrow="Sobre"
        title="Um ambiente criado para relaxar com discrição e conforto"
        subtitle="A Sauna Imperial nasceu com a proposta de oferecer um espaço moderno, reservado e acolhedor para homens que valorizam bem-estar, tranquilidade e privacidade."
      >
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="space-y-6 text-foreground/90 leading-relaxed">
            <p>
              Cada ambiente foi planejado para proporcionar uma experiência
              confortável e sofisticada — da iluminação aconchegante aos
              espaços de convivência e relaxamento.
            </p>

            <p>
              Aqui você encontra sauna seca, hidromassagem, piscina, duchas,
              lounge, american bar e ambientes preparados para momentos de
              pausa e desconexão da rotina.
            </p>

            <p>
              Nosso compromisso é oferecer atendimento discreto, ambiente
              organizado e uma estrutura completa para quem busca relaxar em
              São José do Rio Preto.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center px-7 py-3 bg-gradient-gold text-primary-foreground rounded-full shadow-gold hover:opacity-90 hover:-translate-y-0.5 transition"
              >
                Conversar no WhatsApp
              </a>

              <a
                href="/estrutura"
                className="inline-flex items-center px-7 py-3 border border-gold/40 rounded-full text-gold hover:bg-gold/10 transition"
              >
                Ver estrutura
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="premium-image-card gold-glow shadow-premium col-span-2 aspect-[16/10]">
              <img
                src={ambienteImg}
                alt="Ambiente Sauna Imperial"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="premium-shine" />
            </div>

            <div className="premium-image-card gold-glow shadow-premium aspect-square">
              <img
                src={hidroImg}
                alt="Hidromassagem"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="premium-shine" />
            </div>

            <div className="premium-image-card gold-glow shadow-premium aspect-square">
              <img
                src={piscinaImg}
                alt="Piscina Sauna Imperial"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="premium-shine" />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}