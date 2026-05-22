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
      { title: "Sauna Imperial — Sauna em São José do Rio Preto" },
      { name: "description", content: "Sauna em São José do Rio Preto com piscina, hidromassagem, sauna seca, sauna a vapor e ambiente reservado. Atendimento discreto e estrutura premium." },
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
  { icon: Waves, title: "Piscina", desc: "Água e iluminação suave para uma pausa de bem-estar." },
  { icon: ShieldCheck, title: "Ambiente reservado", desc: "Privacidade, praticidade e conforto em cada detalhe." },
  { icon: Sparkles, title: "Atendimento discreto", desc: "Postura cordial, objetiva e sempre respeitosa." },
];

const galleryItems = [
  { src: pool, title: "Piscina", desc: "Área reservada para relaxar com tranquilidade.", featured: true },
  { src: hydro, title: "Hidromassagem", desc: "Pausa, conforto e alívio da rotina." },
  { src: lounge, title: "Ambiente", desc: "Espaços amplos e acolhedores." },
  { src: shower, title: "Duchas", desc: "Estrutura limpa e bem cuidada." },
  { src: lockers, title: "Armários", desc: "Mais praticidade durante a visita." },
  { src: hero, title: "Entrada", desc: "Localização fácil em Rio Preto." },
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
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        <img src={hero} alt="Fachada e entrada da Sauna Imperial em São José do Rio Preto" className="premium-hero-image absolute inset-0 h-full w-full object-cover opacity-75" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-background/75 to-background" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
        <div className="container-x relative z-10 py-24">
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-6">Sauna Imperial · {SITE.city}</p>
          <h1 className="text-4xl md:text-7xl leading-[1.02] text-foreground max-w-5xl font-light">
            Sauna em Rio Preto com
            <span className="block text-gold italic font-normal">conforto, discrição e bem-estar</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Piscina, hidromassagem, sauna seca, sauna a vapor e ambiente reservado para quem busca relaxar com tranquilidade em São José do Rio Preto.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={whatsappUrl()} target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-7 py-4 bg-gradient-gold text-primary-foreground rounded-full font-medium shadow-gold hover:opacity-90 hover:-translate-y-0.5 transition">
              Falar com atendimento <ArrowRight className="h-4 w-4" />
            </a>
            <Link to="/estrutura" className="inline-flex items-center gap-2 px-7 py-4 border border-border text-foreground rounded-full hover:border-gold hover:bg-white/5 transition">
              Conhecer a estrutura
            </Link>
          </div>
          <div className="mt-14 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1 text-gold">
              {[1,2,3,4].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
              <Star className="h-4 w-4 fill-current opacity-50" />
            </div>
            <span>Clientes de Rio Preto e região</span>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <Section eyebrow="Ambiente" title="Um espaço real, reservado e bem cuidado" subtitle="Fotos reais da estrutura para transmitir confiança antes da primeira visita.">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {galleryItems.map((item, i) => (
            <figure key={item.title} className={`premium-image-card group ${item.featured ? "col-span-2 row-span-2 aspect-square md:aspect-[4/5]" : "aspect-square"}`} style={{ animationDelay: `${i * 90}ms` }}>
              <img src={item.src} alt={`${item.title} da Sauna Imperial em São José do Rio Preto`} loading={i === 0 ? "eager" : "lazy"} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-xl md:text-2xl text-foreground mb-1">{item.title}</h3>
                <p className="text-xs md:text-sm text-foreground/75 leading-relaxed">{item.desc}</p>
              </figcaption>
              <span className="premium-shine" />
            </figure>
          ))}
        </div>
      </Section>

      {/* EXPERIÊNCIA */}
      <Section eyebrow="Experiência" title="Conforto, silêncio e estrutura completa" subtitle="Transforme sua rotina em um momento de pausa, conforto e bem-estar.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {experiences.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group p-8 bg-card border border-border/60 rounded-3xl hover:border-gold/60 hover:shadow-gold transition duration-300">
              <Icon className="h-7 w-7 text-gold mb-5 transition-transform duration-300 group-hover:scale-110" />
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
            <figure key={t.name} className="p-8 bg-graphite/60 border border-border/60 rounded-3xl hover:border-gold/50 transition">
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
          <div className="premium-image-card aspect-[4/5]">
            <img src={lounge} alt="Lounge reservado da Sauna Imperial" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
            <span className="premium-shine" />
          </div>
        </div>
      </Section>

      {/* LOCALIZAÇÃO */}
      <Section eyebrow="Localização" title={`No coração de ${SITE.city}`}>
        <div className="grid md:grid-cols-5 gap-6">
          <div className="md:col-span-2 flex flex-col justify-center">
            <p className="flex items-start gap-3 text-foreground mb-6"><MapPin className="h-5 w-5 text-gold mt-1" /> {SITE.address}</p>
            <p className="text-muted-foreground mb-8">Acesso fácil, com discrição e estacionamento na região. Ideal para quem está de passagem ou mora na cidade.</p>
            <a href={SITE.mapsLink} target="_blank" rel="noopener" className="inline-flex w-fit items-center gap-2 px-6 py-3 bg-gradient-gold text-primary-foreground rounded-full shadow-gold hover:opacity-90 hover:-translate-y-0.5 transition">
              Como chegar <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="md:col-span-3 aspect-video overflow-hidden rounded-3xl border border-border shadow-premium">
            <iframe title="Mapa" src={SITE.mapsEmbed} className="w-full h-full border-0" loading="lazy" />
          </div>
        </div>
      </Section>

      {/* CTA FINAL */}
      <section className="py-24">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-dark p-10 md:p-16 text-center shadow-gold">
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_0%,var(--gold),transparent_35%)]" />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.4em] text-gold mb-6">Atendimento direto</p>
              <h2 className="text-3xl md:text-5xl text-foreground mb-6 max-w-2xl mx-auto">Fale agora e tire suas dúvidas com discrição</h2>
              <a href={whatsappUrl()} target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold text-primary-foreground rounded-full font-medium shadow-gold hover:opacity-90 hover:-translate-y-0.5 transition">
                Falar com atendimento <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
