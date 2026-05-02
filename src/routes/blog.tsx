import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { POSTS } from "@/lib/blog";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Sauna Imperial · Bem-estar masculino em Rio Preto" },
      { name: "description", content: "Artigos sobre relaxamento, bem-estar e dicas para São José do Rio Preto." },
      { property: "og:title", content: "Blog — Sauna Imperial" },
      { property: "og:description", content: "Bem-estar e relaxamento em Rio Preto." },
    ],
  }),
  component: Blog,
});

function Blog() {
  return (
    <Section eyebrow="Blog" title="Pausas, dicas e bem-estar">
      <div className="grid md:grid-cols-3 gap-6">
        {POSTS.map((p) => (
          <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group block bg-card border border-border/60 rounded-sm p-7 hover:border-gold/60 transition">
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">{p.readTime}</p>
            <h3 className="text-2xl text-foreground mb-3 leading-snug group-hover:text-gold transition">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
            <span className="inline-block mt-5 text-sm text-gold">Ler artigo →</span>
          </Link>
        ))}
      </div>
    </Section>
  );
}