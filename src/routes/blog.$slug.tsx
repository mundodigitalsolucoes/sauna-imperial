import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { POSTS } from "@/lib/blog";
import { whatsappUrl } from "@/lib/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.post.title} — Sauna Imperial` },
          { name: "description", content: loaderData.post.excerpt },
          { property: "og:title", content: loaderData.post.title },
          { property: "og:description", content: loaderData.post.excerpt },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <Section title="Artigo não encontrado">
      <Link to="/blog" className="text-gold">Voltar para o blog</Link>
    </Section>
  ),
  component: Post,
});

function Post() {
  const { post } = Route.useLoaderData();

  return (
    <article className="container-x py-20 md:py-28 max-w-3xl">
      <Link to="/blog" className="text-xs uppercase tracking-[0.3em] text-gold">
        ← Blog
      </Link>

      <h1 className="text-4xl md:text-6xl text-foreground mt-6 mb-4 leading-tight">
        {post.title}
      </h1>

      <p className="text-sm text-muted-foreground mb-10">
        {new Date(post.date).toLocaleDateString("pt-BR")} · {post.readTime}
      </p>

      <div className="hairline mb-10" />

      <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
        {post.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-12 p-8 border border-gold/30 rounded-3xl bg-graphite/40 shadow-premium">
        <p className="text-foreground mb-5">
          Quer conhecer o espaço pessoalmente?
        </p>

        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener"
          className="inline-flex px-6 py-3 bg-gradient-gold text-primary-foreground rounded-full shadow-gold"
        >
          Falar no WhatsApp
        </a>
      </div>
    </article>
  );
}