import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";

import fachadaImg from "@/assets/real/fachada.jpeg";
import ambienteImg from "@/assets/real/ambiente.jpeg";
import sinucaImg from "@/assets/real/sinuca.jpeg";
import piscinaImg from "@/assets/real/piscina.jpeg";
import hidroImg from "@/assets/real/hidro.jpeg";
import duchasImg from "@/assets/real/duchas.jpeg";
import barImg from "@/assets/real/bar.jpeg";
import saunaImg from "@/assets/real/sauna.jpeg";

export const Route = createFileRoute("/estrutura")({
  head: () => ({
    meta: [
      { title: "Estrutura — Sauna Imperial · Sauna, piscina e hidromassagem" },
      {
        name: "description",
        content:
          "Conheça a estrutura da Sauna Imperial em São José do Rio Preto: sauna, piscina, hidromassagem, duchas, american bar e ambiente reservado.",
      },
      { property: "og:title", content: "Estrutura — Sauna Imperial" },
      {
        property: "og:description",
        content:
          "Estrutura completa de bem-estar em São José do Rio Preto.",
      },
      { property: "og:image", content: piscinaImg },
    ],
  }),
  component: Estrutura,
});

const items = [
  {
    img: fachadaImg,
    title: "Entrada discreta",
    desc: "Localização fácil e ambiente reservado desde o primeiro contato.",
    featured: true,
  },
  {
    img: saunaImg,
    title: "Sauna",
    desc: "Ambiente preparado para relaxar com conforto e tranquilidade.",
  },
  {
    img: hidroImg,
    title: "Hidromassagem",
    desc: "Momento de pausa, descanso e bem-estar.",
  },
  {
    img: piscinaImg,
    title: "Piscina",
    desc: "Espaço reservado para relaxar com tranquilidade.",
  },
  {
    img: duchasImg,
    title: "Duchas",
    desc: "Estrutura limpa, prática e bem cuidada.",
  },
  {
    img: sinucaImg,
    title: "Área social",
    desc: "Ambiente de convivência para uma pausa completa.",
  },
  {
    img: barImg,
    title: "American Bar",
    desc: "Espaço acolhedor para completar a experiência.",
  },
  {
    img: ambienteImg,
    title: "Ambiente interno",
    desc: "Espaços amplos, discretos e organizados.",
  },
];

function Estrutura() {
  return (
    <Section
      eyebrow="Estrutura"
      title="Conheça os ambientes da Sauna Imperial"
      subtitle="Uma estrutura completa para quem busca conforto, privacidade e bem-estar em São José do Rio Preto."
    >
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {items.map(({ img, title, desc, featured }, i) => (
          <article
            key={title}
            className={`group ${featured ? "md:col-span-2" : ""}`}
            style={{ animationDelay: `${i * 90}ms` }}
          >
            <div
              className={`premium-image-card gold-glow shadow-premium ${
                featured ? "aspect-[16/8]" : "aspect-[4/3]"
              }`}
            >
              <img
                src={img}
                alt={`${title} da Sauna Imperial`}
                loading={i === 0 ? "eager" : "lazy"}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-85" />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-2xl md:text-3xl text-foreground mb-2">
                  {title}
                </h3>
                <p className="text-sm md:text-base text-foreground/75 leading-relaxed max-w-xl">
                  {desc}
                </p>
              </div>

              <span className="premium-shine" />
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}