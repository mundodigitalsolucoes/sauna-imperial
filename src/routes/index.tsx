import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { SITE, whatsappUrl } from "@/lib/site";
import hero from "@/assets/hero-sauna.jpg";
import pool from "@/assets/pool.jpg";
import hydro from "@/assets/hydro.jpg";
import lounge from "@/assets/lounge.jpg";
import shower from "@/assets/shower.jpg";
import lockers from "@/assets/lockers.jpg";
import { Star, MapPin, ArrowRight, Waves, Flame, Droplets, ShieldCheck, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sauna Imperial — Spa urbano masculino em São José do Rio Preto" },
      { name: "description", content: "Refúgio urbano masculino para relaxar com discrição em São José do Rio Preto. Sauna, hidromassagem, piscina e atendimento reservado." },
      { property: "og:title", content: "Sauna Imperial — Spa urbano masculino" },
      { property: "og:description", content: "Ambiente reservado, estrutura completa e bem-estar em São José do Rio Preto." },
      { property: "og:image", content: hero },
    ],
  }),
  component: Home,
});

const experiences = [
  { icon: Flame, title: "Sauna", desc: "Calor seco em ambiente silencioso e bem ventilado." },
  { icon: Droplets, title: "Hidromassagem", desc: "Jatos quentes que aliviam tensão muscular." },
  { icon: Waves, title: "Piscina", desc: "Espelho d'água em iluminação suave para relaxar." },
  { icon: ShieldCheck, title: "Ambiente reservado", desc: "Privacidade pensada em cada detalhe do espaço." },
  { icon: Sparkles, title: "Atendimento discreto", desc: "Postura institucional, sem ruído, sempre cordial." },
];

const testimonials = [
  { name: "R. M.", text: "Ambiente impecável, silencioso e muito bem cuidado. Ideal para uma pausa real." },
  { name: "L. C.", text: "Estrutura completa e atendimento extremamente discreto. Voltarei sempre." },
  { name: "A. S.", text: "Lugar premium em Rio Preto. Excelente para descomprimir após o trabalho." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <img src={hero} alt="Interior premium de sauna" className="absolute inset-0 h-full w-full object-cover opacity-60" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="container-x relative z-10 py-24">
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-6">Sauna Imperial · {SITE.city}</p>
          <h1 className="text-4xl md:text-7xl leading-[1.05] text-foreground max-w-4xl">
            Refúgio urbano masculino para <span className="text-gold italic">relaxar</span> com conforto e discrição
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Ambiente reservado, estrutura completa e experiência de bem-estar em {SITE.city}.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={whatsappUrl()} target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-7 py-4 bg-gradient-gold text-primary-foreground rounded-sm font-medium shadow-gold hover:opacity-90 transition">
              Falar no WhatsApp <ArrowRight className="h-4 w-4" />
            </a>
            <Link to="/estrutura" className="inline-flex items-center gap-2 px-7 py-4 border border-border text-foreground rounded-sm hover:border-gold transition">
              Conhecer a estrutura
            </Link>
          </div>
          <div className="mt-14 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1 text-gold">
              {[1,2,3,4].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
              <Star className="h-4 w-4 fill-current opacity-50" />
            </div>
            <span>4.5 · avaliações reais</span>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <Section eyebrow="Ambiente" title="Um espaço pensado em cada detalhe">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {[pool, hydro, lounge, shower, lockers, hero].map((src, i) => (
            <div key={i} className={`overflow-hidden rounded-sm ${i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-[4/5]" : "aspect-square"}`}>
              <img src={src} alt="Ambiente Sauna Imperial" loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </Section>

      {/* EXPERIÊNCIA */}
      <Section eyebrow="Experiência" title="Conforto, silêncio e estrutura completa" subtitle="Transforme sua rotina em um momento de pausa, conforto e bem-estar.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {experiences.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group p-8 bg-card border border-border/60 rounded-sm hover:border-gold/60 transition">
              <Icon className="h-7 w-7 text-gold mb-5" />
              <h3 className="text-xl text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PROVA SOCIAL */}
      <Section eyebrow="Avaliações" title="Confiança construída no detalhe">
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <figure key={t.name} className="p-8 bg-graphite/60 border border-border/60 rounded-sm">
              <div className="flex text-gold mb-4">{[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
              <blockquote className="text-foreground/90 leading-relaxed mb-4">"{t.text}"</blockquote>
              <figcaption className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.name}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#" className="text-sm text-gold hover:underline">Ver avaliações →</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-gold">Avaliar no Google →</a>
        </div>
      </Section>

      {/* PARA QUEM É */}
      <Section eyebrow="Para quem é" title="Pensado para quem busca pausa de qualidade" className="bg-graphite/30">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <ul className="space-y-5">
            {["Relaxar após o dia de trabalho", "Um ambiente reservado e silencioso", "Conforto e praticidade", "Uma pausa com qualidade premium"].map((t) => (
              <li key={t} className="flex gap-4 items-start">
                <span className="mt-2 h-px w-8 bg-gold flex-shrink-0" />
                <span className="text-foreground/90 text-lg">{t}</span>
              </li>
            ))}
          </ul>
          <div className="aspect-[4/5] overflow-hidden rounded-sm">
            <img src={lounge} alt="Lounge reservado" loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
      </Section>

      {/* LOCALIZAÇÃO */}
      <Section eyebrow="Localização" title={`No coração de ${SITE.city}`}>
        <div className="grid md:grid-cols-5 gap-6">
          <div className="md:col-span-2 flex flex-col justify-center">
            <p className="flex items-start gap-3 text-foreground mb-6"><MapPin className="h-5 w-5 text-gold mt-1" /> {SITE.address}</p>
            <p className="text-muted-foreground mb-8">Acesso fácil, com discrição e estacionamento na região. Ideal para quem está de passagem ou mora na cidade.</p>
            <a href={SITE.mapsLink} target="_blank" rel="noopener" className="inline-flex w-fit items-center gap-2 px-6 py-3 bg-gradient-gold text-primary-foreground rounded-sm shadow-gold hover:opacity-90">
              Como chegar <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="md:col-span-3 aspect-video overflow-hidden rounded-sm border border-border">
            <iframe title="Mapa" src={SITE.mapsEmbed} className="w-full h-full border-0" loading="lazy" />
          </div>
        </div>
      </Section>

      {/* CTA FINAL */}
      <section className="py-24">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-sm border border-gold/30 bg-gradient-dark p-10 md:p-16 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-gold mb-6">Atendimento direto</p>
            <h2 className="text-3xl md:text-5xl text-foreground mb-6 max-w-2xl mx-auto">Fale agora e tire suas dúvidas com discrição</h2>
            <a href={whatsappUrl()} target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold text-primary-foreground rounded-sm font-medium shadow-gold hover:opacity-90">
              Falar no WhatsApp <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}