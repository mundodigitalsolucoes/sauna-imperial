import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { POSTS } from "@/lib/blog";

import piscinaImg from "@/assets/real/piscina.jpeg";
import hidroImg from "@/assets/real/hidro.jpeg";
import fachadaImg from "@/assets/real/fachada.jpeg";

const coverImages = [piscinaImg, hidroImg, fachadaImg];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Sauna Imperial · Bem-estar e relaxamento em Rio Preto" },
      {
        name: "description",
        content:
          "Conteúdos sobre sauna, relaxamento, bem-estar, descanso e experiências reservadas em São José do Rio Preto.",
      },
      { property: "og:title", content: "Blog — Sauna Imperial" },
      {
        property: "og:description",
        content: "Bem-estar, relaxamento e pausa de qualidade em Rio Preto.",
      },
    ],
  }),
  component: Blog,
});

function Blog() {
  return (
    <Section
      eyebrow="Blog"
      title="Conteúdos sobre pausa, bem-estar e relaxamento"
      subtitle="Guias rápidos para quem busca desacelerar, conhecer melhor os benefícios da sauna e aproveitar São José do Rio Preto com mais tranquilidade."
    >
      <div className="grid md:grid-cols-3 gap-6">
        {POSTS.map((p, i) => (
          <Link
            key={p.slug}
            to="/blog/$slug"
            params={{ slug: p.slug }}
            className="premium-image-card gold-glow shadow-premium group block bg-card border border-border/60 rounded-3xl overflow-hidden hover:border-gold/60 transition"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={coverImages[i % coverImages.length]}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-7">
              <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">
                {p.readTime}
              </p>

              <h3 className="text-2xl text-foreground mb-3 leading-snug group-hover:text-gold transition">
                {p.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {p.excerpt}
              </p>

              <span className="inline-block mt-5 text-sm text-gold">
                Ler artigo →
              </span>
            </div>

            <span className="premium-shine" />
          </Link>
        ))}
      </div>
    </Section>
  );
}