import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import pool from "@/assets/pool.jpg";
import hydro from "@/assets/hydro.jpg";
import shower from "@/assets/shower.jpg";
import lockers from "@/assets/lockers.jpg";
import lounge from "@/assets/lounge.jpg";
import hero from "@/assets/hero-sauna.jpg";

export const Route = createFileRoute("/estrutura")({
  head: () => ({
    meta: [
      { title: "Estrutura — Sauna Imperial · Sauna, piscina e hidromassagem" },
      { name: "description", content: "Sauna, piscina, hidromassagem, duchas, armários e bar. Estrutura completa de bem-estar masculino em Rio Preto." },
      { property: "og:title", content: "Estrutura — Sauna Imperial" },
      { property: "og:description", content: "Estrutura completa de bem-estar masculino em São José do Rio Preto." },
      { property: "og:image", content: pool },
    ],
  }),
  component: Estrutura,
});

const items = [
  { img: hero, title: "Sauna", desc: "Calor seco em ambiente silencioso, com madeira premium e iluminação suave." },
  { img: pool, title: "Piscina", desc: "Espelho d'água com iluminação indireta, ideal para refrescar e relaxar." },
  { img: hydro, title: "Hidromassagem", desc: "Jatos quentes para alívio muscular em ambiente reservado." },
  { img: shower, title: "Duchas", desc: "Cabines individuais com chuveirão e amenities premium." },
  { img: lockers, title: "Armários", desc: "Armários individuais com cadeado para total privacidade." },
  { img: lounge, title: "Bar / Lounge", desc: "Espaço para uma pausa confortável entre os ambientes." },
];

function Estrutura() {
  return (
    <Section eyebrow="Estrutura" title="Tudo o que você precisa em um só lugar">
      <div className="grid md:grid-cols-2 gap-6 md:gap-10">
        {items.map(({ img, title, desc }, i) => (
          <article key={title} className={`${i % 3 === 0 ? "md:col-span-2" : ""} group`}>
            <div className={`overflow-hidden rounded-sm ${i % 3 === 0 ? "aspect-[2.4/1]" : "aspect-[4/3]"}`}>
              <img src={img} alt={title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="pt-5">
              <h3 className="text-2xl text-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-xl">{desc}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}